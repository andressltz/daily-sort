let values = new URLSearchParams(window.location.search)
let nameParam = values.get('names')
let names = nameParam.split(',')
let randomParam = values.get('random')

const nameList1 = document.getElementById('name1')
const nameList2 = document.getElementById('name2')
const nameList3 = document.getElementById('name3')
const nameItem1 = document.createElement('li')
const nameItem2 = document.createElement('li')
const nameItem3 = document.createElement('li')

function choice(option) {
  let randomValue
  if (randomParam == 1) {
    randomValue = Math.random()
    return names[Math.floor(randomValue * names.length)]
  } else {
    const day = new Date().getDate()
    const month = new Date().getMonth()
    const hours = new Date().getHours()
    if (option == 1) {
      randomValue = (day + month)
    }
    if (option == 2) {
      randomValue = (hours + day)
    }
    if (option == 3) {
      randomValue = (hours + day + month)
    }
  }
  let res = randomValue % names.length
  if (res == 0) {
    res = randomValue / names.length
  }
  return names[res]
}

if (names) {
  nameItem1.innerText = choice(1)
  nameItem2.innerText = choice(2)
  nameItem3.innerText = choice(3)
  nameList1.appendChild(nameItem1)
  nameList2.appendChild(nameItem2)
  nameList3.appendChild(nameItem3)
}
