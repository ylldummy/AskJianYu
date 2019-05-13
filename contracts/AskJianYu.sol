pragma solidity >= 0.5.0 < 0.6.0;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract AskJianYu is Ownable {
  event NewQuote(string quote);
  event Diss(string msg);

  struct Quote {
    uint256 weight;
    string message;
  }

  address payable public boss;
  uint256 public saisenThreshold;
  uint256 public totalWeight;
  Quote[] public quote;

  using SafeMath for uint256;

  constructor(uint256 th, address payable b) public {
    saisenThreshold = th;
    boss = b;
  }

  function() external payable {}

  function withdrawSaisen() public onlyOwner {
    msg.sender.transfer(address(this).balance);
  }

  function modifySaisen(uint256 s) public onlyOwner {
    saisenThreshold = s;
  }

  function modifyBossAddr(address payable addr) public onlyOwner {
    boss = addr;
  }

  function addQuote(string memory m) public onlyOwner {
    uint256 initWeight = 1 ether;
    quote.push(Quote(initWeight, m));
    totalWeight = totalWeight.add(initWeight);
    emit NewQuote(m);
  }

  function contribute(uint256 idx) payable public {
    if (msg.value < saisenThreshold) {
      _diss();
    } else {
      _voteQuote(idx, msg.value);
    }
  }

  function _diss() internal {
    require(quote.length > 0, 'not yet any quote');
    uint256 idx = 0;
    uint256 w = rand % totalWeight;
    // This can be hacked by gaslimit, but we don't care as long as boss can
    // whisper the word of wisdom.
    for (idx = 0; idx < quote.length; idx++) {
      if (w > quote[idx].weight) {
        w = w - quote[idx].weight;
      } else {
        break;
      }
    }
    if (idx == quote.length) {
      revert('internal error');
    }
    emit Diss(quote[idx].message);
  }

  function _voteQuote(uint256 idx, uint256 value) internal {
    require(idx < quote.length);
    quote[idx].weight.add(value);
    totalWeight = totalWeight.add(value);
    // Pay royalty to boss.
    boss.transfer(value/10);
  }
}
