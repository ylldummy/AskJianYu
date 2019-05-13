pragma solidity >= 0.5.0 < 0.6.0;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract AskJianYu is Ownable {
	event Quote(string quote);
	event Diss(string msg);

	uint256 public saisenThreshold;
	string[] public quote;

	constructor() public {}

	function() external payable {}

	function withdrawSaisen() public onlyOwner {
		msg.sender.transfer(address(this).balance);
	}

	function tribute(string memory m) payable public {
		if (msg.value < saisenThreshold) {
			_diss();
		} else {
			_addQuote(m);
		}
	}

	function _diss() internal {
		require(quote.length > 0);
		uint256 idx = rand % quote.length;
		emit Diss(quote[idx]);
	}

	function _addQuote(string memory m) internal {
		quote.push(m);
		emit Quote(m);
	}
}
