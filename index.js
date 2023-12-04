let values = new URLSearchParams(window.location.search)
let nameParam = values.get('names')
let names = nameParam.split(',')
let randomParam = values.get('random')
let qtd = values.get('qtd')
let positions = []

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
    const years = date.getFullYear()
    const dayWeek = date.getDay()

    switch (option) {
      case 1:
        randomValue = (day)
        break
      case 2:
        randomValue = (day + month)
        break
      case 3:
        randomValue = (day + month + years)
        break
      case 4:
        randomValue = (day + month + years + dayWeek)
        break
      default:
        randomValue = Math.floor(Math.random() * namesLength)
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

function getOrdinal(n) {
  let ord = 'th'
  if (n % 10 == 1 && n % 100 != 11) {
    ord = 'st';
  } else if (n % 10 == 2 && n % 100 != 12) {
    ord = 'nd';
  } else if (n % 10 == 3 && n % 100 != 13) {
    ord = 'rd';
  }

  return n + ord;
}

if (names) {
  if (!qtd) {
    qtd = 4
  }

  for (let i = 1; i <= qtd; i++) {
    const list = document.getElementById('list')
    const nameH = document.createElement('h2')
    const nameUl = document.createElement('ul')
    const nameItemLi = document.createElement('li')
    nameH.innerText = getOrdinal(i) + " Option"
    nameItemLi.innerText = choice(i)
    nameUl.appendChild(nameItemLi)
    list.appendChild(nameH)
    list.appendChild(nameUl)
  }

}
