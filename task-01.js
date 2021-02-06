// Задание 1
// Получить массив имен всех пользователей (поле name).

import users from './users.js'

const getUserNames = users => {
  let arr = []
  users.filter(user => arr.push(user.name))
  return arr
}
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

