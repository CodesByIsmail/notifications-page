'use strict'

const markAll = document.querySelector('.mark__all');
const unreadMessages = document.querySelectorAll('.unread')
const notificationNum = document.querySelector('.not__num')


markAll.addEventListener('click', ()=>{
  unreadMessages.forEach((mes) => mes.classList.remove('unread'))
  notificationNum.textContent = 0;
})