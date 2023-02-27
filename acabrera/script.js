const toggleButton = document.getElementsByClassName('toggle-button')[0]
const items = document.getElementsByClassName('items')[0]
const items2 = document.getElementsByClassName('items')[1]
const items3 = document.getElementsByClassName('items')[2]
const items4 = document.getElementsByClassName('items')[3]
const items5 = document.getElementsByClassName('items')[4]
const items6 = document.getElementsByClassName('items')[5]
const items7 = document.getElementsByClassName('items')[6]


toggleButton.addEventListener('click', () => {
    items.classList.toggle('active')
    items2.classList.toggle('active')
    items3.classList.toggle('active')
    items4.classList.toggle('active')
    items5.classList.toggle('active')
    items6.classList.toggle('active')
    items7.classList.toggle('active')

})
