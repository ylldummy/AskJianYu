import './index.css'

import Backend from './backend'

let backend
let quoteIdx = 0

let renderInputArea = (container) => {
  container.innerHTML = [
    `<label for="index-input">Index:</label>`,
    `<input type="number" id="index-input" />`,
    `<label for="value-input">Value:</label>`,
    `<input type="number" id="value-input" />`,
    `<button class="submit-btn">submit</button>`
  ].join('')

  let indexInput = container.querySelector('#index-input')
  let valueInput = container.querySelector('#value-input')
  let submitBtn = container.querySelector('.submit-btn')

  submitBtn.addEventListener('click', async () => {
    await backend.contribute(indexInput.value, valueInput.value)
    alert('submit success')
  })
}

let renderListArea = (container, indexInput, events) => {
  events.forEach((event) => {
    let text = document.createTextNode(event.returnValues.quote)
    let div = document.createElement('div')
    div.appendChild(text)
    div.classList.add('list-item')
    div.dataset.idx = quoteIdx
    div.addEventListener('click', () => {
      indexInput.value = div.dataset.idx
    })
    ++quoteIdx
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
  let indexInput = inputArea.querySelector('#index-input')

  backend.getQuoteEventAndListen(
    renderListArea.bind(this, listArea, indexInput))
  backend.listenDissEvent(showDissEvents)
})
