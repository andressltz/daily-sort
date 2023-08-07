let values = new URLSearchParams(window.location.search)
let nameParam = values.get('names')
let names = nameParam.split(',')
let randomParam = values.get('random')
let positions = []

const nameList1 = document.getElementById('name1')
const nameList2 = document.getElementById('name2')
const nameList3 = document.getElementById('name3')
const nameList4 = document.getElementById('name4')
const nameItem1 = document.createElement('li')
const nameItem2 = document.createElement('li')
const nameItem3 = document.createElement('li')
const nameItem4 = document.createElement('li')

function choice(option) {
  let namesLength = names.length
  let randomValue
  if (randomParam == 1) {
    randomValue = Math.random()
    return names[Math.floor(randomValue * namesLength)]
  } else {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const hours = date.getHours()
    const years = date.getFullYear()

    switch (option) {
      case 1:
        randomValue = (day + month)
        break
      case 2:
        randomValue = (hours + day + month)
        break
      case 3:
        randomValue = (hours + day + month + years)
        break
      case 4:
        randomValue = (hours)
        break
      default:
        randomValue = Math.random()
    }

  }

  let res = split(randomValue, namesLength)
  res = removeDuplicate(res, namesLength)
  positions.push(res)
  return names[res-1]
}

function removeDuplicate(value, lenght) {
  if (positions.includes(value)) {
    value = value + 1
    if (value > lenght) {
      value = 1
    }
    return removeDuplicate(value)
  }
  return value
}

function split(value, lenght) {
  if (value > lenght) {
    let res = value % lenght
    if (res === 0) {
      return lenght
    }
    return res
  } else {
    return value
  }
}

if (names) {
  nameItem1.innerText = choice(1)
  nameItem2.innerText = choice(2)
  nameItem3.innerText = choice(3)
  nameItem4.innerText = choice(4)
  nameList1.appendChild(nameItem1)
  nameList2.appendChild(nameItem2)
  nameList3.appendChild(nameItem3)
  nameList4.appendChild(nameItem4)
}
