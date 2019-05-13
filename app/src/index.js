import './index.css'

import Backend from './backend'

let backend

let renderInputArea = (container) => {
  container.innerHTML = [
    `<label for="msg-input">Msg:</label>`,
    `<input type="text" id="msg-input" />`,
    `<label for="value-input">Value:</label>`,
    `<input type="number" id="value-input" />`,
    `<button class="submit-btn">submit</button>`
  ].join('')

  let msgInput = container.querySelector('#msg-input')
  let valueInput = container.querySelector('#value-input')
  let submitBtn = container.querySelector('.submit-btn')

  submitBtn.addEventListener('click', async () => {
    await backend.sendMsg(msgInput.value, valueInput.value)
  })
}

let renderListArea = (container, events) => {
  events.forEach((event) => {
    let text = document.createTextNode(event.returnValues.quote)
    let div = document.createElement('div')
    div.classList.add('list-item')
    div.appendChild(text)
    container.appendChild(div)
  })
}

let showDissEvents = (events) => {
  events.forEach((event) => {
    alert(event.returnValues.msg)
  })
}

document.addEventListener('DOMContentLoaded', async () => {
  backend = await Backend()
  if (!backend) {
    console.error('no backend')
  }
  let div = document.createElement('div')
  document.body.appendChild(div)
  div.innerHTML = [
    `<div class="list-area"></div>`,
    `<div class="input-area"></div>`
  ].join('')

  let listArea = div.querySelector('.list-area')
  let inputArea = div.querySelector('.input-area')

  renderInputArea(inputArea)

  backend.getQuoteEventAndListen(renderListArea.bind(this, listArea))
  backend.listenDissEvent(showDissEvents)
})
