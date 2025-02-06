// Вы живете в городе Картезия, где все дороги выложены идеальной сеткой. Вы пришли на встречу на десять минут раньше назначенного срока, поэтому решили воспользоваться возможностью прогуляться. Город предоставляет своим горожанам приложение Walk Generating на их телефонах — каждый раз, когда вы нажимаете кнопку, оно отправляет вам массив строк из одной буквы, представляющих направления ходьбы (например, ['n', 's', 'w', «е»]). Вы всегда проходите только один квартал для каждой буквы (направления), и вы знаете, что вам потребуется одна минута, чтобы пройти один городской квартал, поэтому создайте функцию, которая будет возвращать true, если прогулка, которую предлагает вам приложение, займет у вас ровно десять минут (вы не хочу ни рано, ни поздно!) и, конечно же, вернет вас в исходную точку. В противном случае верните false .

// Примечание . Вы всегда будете получать допустимый массив, содержащий случайный набор букв направления (только «n», «s», «e» или «w»). Он никогда не даст вам пустой массив (это не прогулка, это стояние на месте!).

// const chai = require('chai')
// const assert = chai.assert
// chai.config.truncateThreshold = 0

// function isValidWalk(walk) {
//   if (walk.length !== 10) return false

//   let x = 0
//   let y = 0

//   for (let value of walk) {
//     if (value === 'w') x++
//     else if (value === 'e') x--
//     else if (value === 'n') y++
//     else if (value === 's') y--
//   }

//   return x === 0 && y === 0
// }

// describe('Tests', () => {
//   it('test', () => {
//     console.log('test')
//     //some test cases for you...
//     assert.isTrue(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true')
//     assert.isFalse(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false')
//     assert.isFalse(isValidWalk(['w']), 'should return false')
//     assert.isFalse(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false')
//   })
// })

// ===================================================== //
// Проверка на расстановку кораблей в морском бое

// const field = [
//   [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//   [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ]

// function validateBattlefield(field) {
//   const matrix = 10
//   const sheeps = {4: 1, 3: 2, 2: 3, 1: 4}
//   const postedSheeps = {}
//   for (const sheep in sheeps) postedSheeps[sheep] = 0
//   const checkeds = [...Array(matrix)].map(() => Array(matrix).fill(false))

//   for (let y = 0; y < field.length; y++)
//     for (let x = 0; x < field[y].length; x++)
//       if (field[y][x] && !checkeds[y][x]) {
//         let sheepX = 0
//         let sheepY = 0

//         while (field[y + sheepY][x + sheepX]) {
//           checkeds[y + sheepY][x + sheepX] = true
//           // We look only at the left and right bottom
//           if (field[y + sheepY + 1][x + sheepX - 1]) return false
//           if (field[y + sheepY + 1][x + sheepX + 1]) return false
//           checkeds[y + sheepY + 1][x + sheepX - 1] = true
//           checkeds[y + sheepY + 1][x + sheepX + 1] = true

//           if (field[y][x + sheepX + 1]) sheepX++
//           else if (field[y + sheepY + 1][x]) sheepY++
//           else break
//         }

//         const sheep = (sheepX ? sheepX : sheepY) + 1
//         postedSheeps[sheep]++

//         // This ship does not exist or the number of ships is over the limit
//         if (!sheeps[sheep] || postedSheeps[sheep] > sheeps[sheep]) return false
//       }

//   for (const sheep of Object.keys(sheeps)) if (postedSheeps[sheep] !== sheeps[sheep]) return false

//   return true
// }

// console.log(validateBattlefield(field))

// ===================================================== //
/*
Реализовать строковый шаблонизатор вида:
expand('Hello, {user.name}!', {user: {name: 'Paul'}});
который сделает подстановку переменных и вернет "Hello, Paul!".

get(
  {
    user: {name: 'Paul'},
    time: '14:30',
  },
  'user.name'
) // 'Paul'

get(
  {
    user: {name: 'Paul'},
    time: '14:30',
  },
  'date.name'
) // undefined
*/

// Solution 1
// function get(obj, path) {
//   const p = path.split('.')
//   let result = obj

//   for (const key of p) {
//     if (!result?.[key]) return

//     result = result[key]
//   }

//   return result
// }

// function expand(template, params) {
//   let indexEnd = 0

//   while (true) {
//     let indexStart = template.indexOf('{', indexEnd) // 7

//     if (indexStart === -1) break

//     indexEnd = template.indexOf('}') // 17
//     const path = template.slice(indexStart + 1, indexEnd) // user.name
//     const str = get(params, path) // 'Paul'
//     if (str !== undefined) template = template.replace(`{${path}}`, str)
//   }

//   return template
// }

// // Solution 2
// const getValueOfPath = (path, obj) => path.split('.').reduce((acc, value) => (acc ? acc[value] : undefined), obj)

// function expand(str, obj) {
//   let result = str
//   const regex = /\{(.*?)\}/g
//   const matches = str.matchAll(regex)

//   for (const match of matches) {
//     const path = match[1]
//     const value = getValueOfPath(path, obj)
//     result = result.replace(`{${path}}`, value)
//   }

//   return result
// }

// // Solution 3
// const getValueOfPath = (path, obj) => path.split('.').reduce((acc, value) => (acc ? acc[value] : undefined), obj)

// const getPaths = template => {
//   const paths = []
//   let end = 0

//   while (true) {
//     const start = template.indexOf('{', end)

//     if (start === -1) break

//     end = template.indexOf('}', start)
//     paths.push(template.slice(start + 1, end))
//   }

//   return paths
// }

// function expand(template, obj) {
//   let result = template
//   const paths = getPaths(template)

//   for (const path of paths) {
//     const value = getValueOfPath(path, obj)
//     if (value !== undefined) result = result.replace(`{${path}}`, value)
//   }

//   return result
// }

// console.log(expand('Hello, {user.name}!', {user: {name: 'Paul'}}))
// console.log(expand('Hello, {user.name}! Now at {time}', {user: {name: 'Paul'}, time: '15:00'}))

// ===================================================== //
/**
 * Список методов API:
 *  – GET /api/comments?page={page_number}
 *    Ответ: {"pageCount": 123, comments: [{"id": "...", "text": "..."}]}
 *  – GET /api/likes?comment={comment_id}
 *    Ответ: {"like": 123, "dislike": 456}
 *
 * Нужно вернуть массив в формате:
 *   [{"id": "...", "text": "...", "likes":{"like": 123, "dislike": 456}}]
 */

// async function getComments(pageNumber) {
//   const pageCount = 5

//   const pages = [
//     {
//       id: 1,
//       pageCount,
//       comments: [
//         {
//           id: 1,
//           text: 'page 1, comment 1',
//         },
//         {
//           id: 2,
//           text: 'page 1, comment 2',
//         },
//       ],
//     },
//     {
//       id: 2,
//       pageCount,
//       comments: [
//         {
//           id: 3,
//           text: 'page 2, comment 3',
//         },
//       ],
//     },
//     {
//       id: 3,
//       pageCount,
//       comments: [
//         {
//           id: 4,
//           text: 'page 3, comment 4',
//         },
//       ],
//     },
//     {
//       id: 4,
//       pageCount,
//       comments: [
//         {
//           id: 5,
//           text: 'page 4, comment 5',
//         },
//         {
//           id: 6,
//           text: 'page 4, comment 6',
//         },
//         {
//           id: 7,
//           text: 'page 4, comment 7',
//         },
//       ],
//     },
//     {
//       id: 5,
//       pageCount,
//       comments: [
//         {
//           id: 8,
//           text: 'page 5, comment 8',
//         },
//       ],
//     },
//   ]

//   return new Promise(resolve => {
//     resolve(pages.find(({id}) => id === pageNumber))
//   })
// }

// async function getLikes(commentId) {
//   const likes = [
//     {id: 1, like: 10, dislike: 1},
//     {id: 2, like: 20, dislike: 2},
//     {id: 3, like: 30, dislike: 3},
//     {id: 4, like: 40, dislike: 4},
//     {id: 5, like: 50, dislike: 5},
//     {id: 6, like: 60, dislike: 6},
//     {id: 7, like: 70, dislike: 7},
//     {id: 8, like: 80, dislike: 8},
//   ]

//   return new Promise(resolve => {
//     resolve(likes.find(({id}) => id === commentId))
//   })
// }

// const result = []

// async function getData() {
//   let pageNumber = 1
//   const resultOne = await getComments(pageNumber)
//   const {pageCount, comments} = resultOne
//   const promisesComments = []

//   const fillResult = comment => getLikes(comment.id).then(({like, dislike}) => result.push({...comment, likes: {like, dislike}}))

//   for (pageNumber = 2; pageNumber <= pageCount; pageNumber++) promisesComments.push(getComments(pageNumber))
//   for (const comment of comments) fillResult(comment)

//   Promise.allSettled(promisesComments).then(resultComments => {
//     for (const {value} of resultComments) for (const comment of value.comments) fillResult(comment)
//   })
// }

// getData()
// setTimeout(() => console.log(result))

// ===================================================== //
// Connect Four — это игра, в которой 2 игрока каждый ход бросают цветной диск в один из столбцов сетки. Когда игрок роняет диск, он занимает следующее доступное место в столбце. Победителем становится игрок, который первым образует линию (вертикальную, диагональную или горизонтальную) из 4 дисков своего цвета.

// Однако в этом ката есть следующие повороты:

// Там нет гравитации, поэтому диск будет просто помещен в положение XY.
// Пространство игры практически бесконечно, поэтому диск можно разместить в любом положении XY.
// Игроков может быть больше 2
// Учитывая игровую ситуацию, когда некоторые диски уже были размещены, вам необходимо определить победителя, если он есть.

// Вход
// Вход состоит из массива ходов, сделанных во время игры.

// [
//   {p: 'R', x: 0, y: 0},
//   {p: 'Y', x: 100, y: 100},
//   {p: 'R', x: 1, y: 0},
//   {p: 'Y', x: 99, y: 100},
//   {p: 'R', x: 2, y: 0},
//   {p: 'Y', x: 98, y: 100},
//   {p: 'R', x: 3, y: 0},
//   {p: 'Y', x: 96, y: 100}
// ];
// Вы можете видеть в этом примере, что игрок R выиграл, сделав линию

// {x: 0, y: 0}{x: 1, y: 0}{x: 2, y: 0}{x: 3, y: 0}
// Имейте в виду, что ходы НЕ упорядочены по времени, это пример, который хорошо подходит для описания обычного матча, но ходы, которые вы получите, будут в случайном порядке.

// Выход
// Вы должны вернуть игрока, который выиграл, в виде строки, в приведенном выше примере вы бы вернули'R'

// Если нет победителя, вы должны вернуть null

// Ограничения
// По стандартным правилам, вы должны проверять по строкам, столбцам и диагоналям.
// Если есть победитель, будет только один
// Вы не получите пустой массив или недопустимые входные данные
// Не будет дубликатов точек

// // R
// const moves1 = [
//   {p: 'R', x: 0, y: 0},
//   {p: 'Y', x: 100, y: 100},
//   {p: 'R', x: 1, y: 0},
//   {p: 'Y', x: 99, y: 100},
//   {p: 'R', x: 2, y: 0},
//   {p: 'Y', x: 98, y: 100},
//   {p: 'R', x: 3, y: 0},
//   {p: 'Y', x: 96, y: 100},
// ]

// // Y
// const moves2 = [
//   {p: 'R', x: 15, y: 15},
//   {p: 'Y', x: 10, y: 10},
//   {p: 'Y', x: 10, y: 11},
//   {p: 'Y', x: 10, y: 12},
//   {p: 'Y', x: 10, y: 13},
//   {p: 'R', x: 15, y: 16},
//   {p: 'R', x: 16, y: 15},
//   {p: 'R', x: 16, y: 16},
// ]

// // G
// const moves3 = [
//   {p: 'G', x: 0, y: 0},
//   {p: 'Y', x: 0, y: 1},
//   {p: 'G', x: 1, y: 1},
//   {p: 'Y', x: 1, y: 2},
//   {p: 'G', x: 2, y: 2},
//   {p: 'Y', x: 2, y: 3},
//   {p: 'G', x: -1, y: -1},
//   {p: 'Y', x: 3, y: 3},
// ]

// // null
// const moves4 = [
//   {p: 'A', x: 50, y: -50},
//   {p: 'B', x: 49, y: -50},
//   {p: 'C', x: 48, y: -50},
//   {p: 'D', x: 50, y: -49},
//   {p: 'A', x: 51, y: -50},
//   {p: 'B', x: 49, y: -49},
//   {p: 'C', x: 48, y: -51},
//   {p: 'D', x: 51, y: -49},
// ]

// // E
// const moves5 = [
//   {p: 'P', x: 0, y: 1},
//   {p: 'P', x: 0, y: -1},
//   {p: 'P', x: 0, y: -2},
//   {p: 'P', x: 0, y: -3},
//   {p: 'E', x: 0, y: 0},
//   {p: 'E', x: 1, y: -1},
//   {p: 'E', x: 2, y: -2},
//   {p: 'E', x: 3, y: -3},
// ]

// // E
// const moves6 = [
//   {p: 'P', x: 0, y: 10},
//   {p: 'P', x: 0, y: 4},
//   {p: 'P', x: 0, y: 10},
//   {p: 'P', x: 0, y: 10},
//   {p: 'E', x: 0, y: 0},
//   {p: 'E', x: 1, y: -1},
//   {p: 'E', x: 2, y: -2},
//   {p: 'E', x: 3, y: -3},
// ]

// // P
// const moves7 = [
//   {p: 'P', x: 0, y: 0},
//   {p: 'P', x: 2, y: 2},
//   {p: 'P', x: 3, y: 3},
//   {p: 'P', x: 1, y: 1},
//   {p: 'E', x: 0, y: 0},
//   {p: 'E', x: 1, y: 1},
//   {p: 'E', x: 2, y: 2},
//   {p: 'E', x: 3, y: 3},
// ]

// // E
// const moves8 = [
//   {p: 'R', x: 0, y: 3},
//   {p: 'R', x: 1, y: 1},
//   {p: 'R', x: 2, y: 0},
//   {p: 'R', x: 3, y: 2},
//   {p: 'E', x: 0, y: 0},
//   {p: 'E', x: 1, y: 1},
//   {p: 'E', x: 2, y: 2},
//   {p: 'E', x: 3, y: 3},
// ]

// // N
// // {x: 68, y: 69} // {p: 'N', x: -4268, y: -6069},
// // {x: 67, y: 70} // {p: 'N', x: -4267, y: -6070},
// // {x: 66, y: 71} // {p: 'N', x: -4266, y: -6071},
// // {x: 65, y: 72} // {p: 'N', x: -4265, y: -6072},
// // '[{"x":73,"y":81},{"x":73,"y":80},{"x":72,"y":83},{"x":72,"y":76},{"x":71,"y":86},{"x":69,"y":88},{"x":69,"y":86},{"x":69,"y":71},{"x":68,"y":87},{"x":68,"y":85},{"x":68,"y":84},{"x":68,"y":74},{"x":68,"y":69},{"x":67,"y":85},{"x":67,"y":84},{"x":67,"y":71},{"x":67,"y":70},{"x":66,"y":82},{"x":66,"y":80},{"x":66,"y":78},{"x":66,"y":72},{"x":66,"y":71},{"x":66,"y":70},{"x":65,"y":82},{"x":65,"y":72}]'
// const moves9 = [
//   {p: 'N', x: -4266, y: -6078},
//   {p: 'N', x: -4268, y: -6069},
//   {p: 'H', x: -4269, y: -6070},
//   {p: 'N', x: -4269, y: -6071},
//   {p: 'H', x: -4266, y: -6083},
//   {p: 'H', x: -4270, y: -6086},
//   {p: 'N', x: -4267, y: -6085},
//   {p: 'H', x: -4268, y: -6070},
//   {p: 'N', x: -4268, y: -6085},
//   {p: 'H', x: -4266, y: -6081},
//   {p: 'H', x: -4268, y: -6072},
//   {p: 'H', x: -4273, y: -6082},
//   {p: 'H', x: -4265, y: -6071},
//   {p: 'N', x: -4266, y: -6072},
//   {p: 'N', x: -4267, y: -6070},
//   {p: 'H', x: -4273, y: -6083},
//   {p: 'H', x: -4269, y: -6087},
//   {p: 'N', x: -4272, y: -6083},
//   {p: 'H', x: -4265, y: -6084},
//   {p: 'H', x: -4266, y: -6068},
//   {p: 'H', x: -4270, y: -6075},
//   {p: 'N', x: -4269, y: -6088},
//   {p: 'H', x: -4265, y: -6080},
//   {p: 'N', x: -4267, y: -6084},
//   {p: 'H', x: -4267, y: -6086},
//   {p: 'N', x: -4266, y: -6071},
//   {p: 'H', x: -4268, y: -6089},
//   {p: 'N', x: -4267, y: -6071},
//   {p: 'N', x: -4266, y: -6082},
//   {p: 'N', x: -4266, y: -6080},
//   {p: 'N', x: -4269, y: -6086},
//   {p: 'H', x: -4265, y: -6070},
//   {p: 'N', x: -4271, y: -6086},
//   {p: 'H', x: -4269, y: -6084},
//   {p: 'N', x: -4266, y: -6070},
//   {p: 'N', x: -4265, y: -6072},
//   {p: 'N', x: -4273, y: -6080},
//   {p: 'H', x: -4264, y: -6082},
//   {p: 'N', x: -4273, y: -6081},
//   {p: 'H', x: -4270, y: -6085},
//   {p: 'H', x: -4270, y: -6087},
//   {p: 'N', x: -4268, y: -6084},
//   {p: 'H', x: -4267, y: -6072},
//   {p: 'N', x: -4265, y: -6082},
//   {p: 'N', x: -4268, y: -6074},
//   {p: 'H', x: -4267, y: -6078},
//   {p: 'H', x: -4273, y: -6078},
//   {p: 'H', x: -4264, y: -6070},
//   {p: 'N', x: -4268, y: -6087},
//   {p: 'N', x: -4272, y: -6076},
// ]

// // R
// const moves10 = [
//   {p: 'R', x: 0, y: 1},
//   {p: 'R', x: 1, y: 1},
//   {p: 'R', x: 0, y: 0},
//   {p: 'R', x: 1, y: 0},
//   {p: 'R', x: 2, y: 2},
//   {p: 'R', x: 3, y: 3},
//   {p: 'E', x: 0, y: 0},
//   {p: 'E', x: 1, y: 1},
//   {p: 'E', x: 2, y: 2},
//   {p: 'E', x: 3, y: 3},
// ]

// // M
// const moves11 = [
//   {p: 'J', x: -4749, y: -6985},
//   {p: 'J', x: -4754, y: -6989},
//   {p: 'J', x: -4741, y: -6976},
//   {p: 'J', x: -4750, y: -6976},
//   {p: 'J', x: -4752, y: -6984},
//   {p: 'M', x: -4750, y: -6986},
//   {p: 'M', x: -4746, y: -6975},
//   {p: 'M', x: -4753, y: -6987},
//   {p: 'J', x: -4754, y: -6987},
//   {p: 'J', x: -4746, y: -6976},
//   {p: 'M', x: -4753, y: -6986},
//   {p: 'M', x: -4748, y: -6975},
//   {p: 'M', x: -4742, y: -6977},
//   {p: 'J', x: -4750, y: -6983},
//   {p: 'M', x: -4753, y: -6988},
//   {p: 'M', x: -4745, y: -6976},
//   {p: 'M', x: -4743, y: -6975},
//   {p: 'M', x: -4753, y: -6989},
//   {p: 'M', x: -4750, y: -6974},
//   {p: 'M', x: -4747, y: -6977},
//   {p: 'M', x: -4751, y: -6984},
//   {p: 'M', x: -4750, y: -6985},
//   {p: 'M', x: -4748, y: -6980},
//   {p: 'M', x: -4745, y: -6978},
//   {p: 'J', x: -4748, y: -6981},
//   {p: 'J', x: -4749, y: -6977},
//   {p: 'J', x: -4745, y: -6977},
//   {p: 'J', x: -4744, y: -6977},
//   {p: 'J', x: -4752, y: -6989},
//   {p: 'M', x: -4751, y: -6976},
//   {p: 'J', x: -4746, y: -6978},
//   {p: 'J', x: -4751, y: -6985},
//   {p: 'M', x: -4748, y: -6982},
//   {p: 'M', x: -4752, y: -6988},
//   {p: 'J', x: -4746, y: -6977},
//   {p: 'J', x: -4754, y: -6988},
//   {p: 'J', x: -4744, y: -6975},
// ]

// // Solution 1
// const connectFour = moves => {
//   const playerMovesLimit = 4
//   const players = {}

//   const M = new Set(moves.map(move => [move.x, move.y].join(move.p)))
//   console.log(M)

//   const getWinner = (movesP, currentX, currentY, action = 'x', count = 0) => {
//     let stepX = 0
//     let stepY = 0

//     if (action === 'y') stepY = 1
//     else stepX = 1
//     if (action === 'diagonalIncrementY') stepY = 1
//     else if (action === 'diagonalDecrementY') stepY = -1

//     const result = movesP.find(({x, y}) => x === currentX + stepX && y === currentY + stepY)
//     if (result) {
//       count++
//       if (count === playerMovesLimit - 1) return result
//       return getWinner(movesP, currentX + stepX, currentY + stepY, action, count)
//     }
//   }

//   for (const move of moves) {
//     const {p, x, y} = move
//     players[p] ? players[p].push({x, y}) : (players[p] = [{x, y}])

//     if (players[p].length >= playerMovesLimit) {
//       players[p].sort((a, b) => a.x - b.x || a.y - b.y)

//       for (let i = 0; i < players[p].length - 1; i++) {
//         if (getWinner(players[p], players[p][i].x, players[p][i].y)) return p
//         if (getWinner(players[p], players[p][i].x, players[p][i].y, 'y')) return p
//         if (getWinner(players[p], players[p][i].x, players[p][i].y, 'diagonalIncrementY')) return p
//         if (getWinner(players[p], players[p][i].x, players[p][i].y, 'diagonalDecrementY')) return p
//       }
//     }
//   }

//   return null
// }

// // Solution 2
// // const connectFour = moves => {
// //   M = new Set(moves.map(move => [move.x, move.y].join(move.p)))
// //   for (move of moves)
// //     for ([x, y] of [
// //       [0, 1],
// //       [1, 0],
// //       [1, 1],
// //       [1, -1],
// //     ])
// //       if ([1, 2, 3].every(i => M.has([move.x + i * x, move.y + i * y].join(move.p)))) return move.p
// //   return null
// // }

// console.log('R', connectFour(moves1))
// console.log('Y', connectFour(moves2))
// console.log('G', connectFour(moves3))
// console.log('null', connectFour(moves4))
// console.log('E', connectFour(moves5))
// console.log('E', connectFour(moves6))
// console.log('P', connectFour(moves7))
// console.log('E', connectFour(moves8))
// console.log('N', connectFour(moves9))
// console.log('R', connectFour(moves10))
// console.log('M', connectFour(moves11))

// ===================================================== //
// Квадрат Сатора. Каждое слово в матрице читается со всех сторон

// const tablet1 = [
//   ['T', 'E', 'N'],
//   ['E', 'Y', 'E'],
//   ['N', 'E', 'T'],
// ]

// const tablet2 = [
//   ['N', 'O', 'T'],
//   ['O', 'V', 'O'],
//   ['N', 'O', 'T'],
// ]

// const tablet3 = [
//   ['B', 'A', 'T', 'S'],
//   ['A', 'B', 'U', 'T'],
//   ['T', 'U', 'B', 'A'],
//   ['S', 'T', 'A', 'B'],
// ]

// const tablet4 = [
//   ['P', 'A', 'R', 'T'],
//   ['A', 'G', 'A', 'R'],
//   ['R', 'A', 'G', 'A'],
//   ['T', 'R', 'A', 'M'],
// ]

// const tablet5 = [
//   ['S', 'A', 'T', 'O', 'R'],
//   ['A', 'R', 'E', 'P', 'O'],
//   ['T', 'E', 'N', 'E', 'T'],
//   ['O', 'P', 'E', 'R', 'A'],
//   ['R', 'O', 'T', 'A', 'S'],
// ]

// const tablet6 = [
//   ['S', 'A', 'L', 'A', 'S'],
//   ['A', 'R', 'E', 'N', 'A'],
//   ['L', 'E', 'V', 'E', 'L'],
//   ['A', 'R', 'E', 'N', 'A'],
//   ['S', 'A', 'L', 'A', 'S'],
// ]

// // Solution 1
// function isSatorSquare(tablet) {
//   const across = []
//   const down = []
//   const up = []
//   const reverse = []

//   for (let i = 0; i < tablet.length; i++) {
//     let word = tablet[i]
//     across.push(word.join(''))
//     reverse.push([...word].reverse().join(''))
//     word = []

//     for (let j = 0; j < tablet.length; j++) word.push(tablet[j][i])

//     down.push(word.join(''))
//     up.push(word.reverse().join(''))
//   }

//   for (const word of across) if (!down.find(item => item === word) || !up.find(item => item === word) || !reverse.find(item => item === word)) return false

//   return true
// }

// // // Solution 2
// // const isSatorSquare = tablet => tablet.every((row, y) => row.every((v, x) => tablet[x][y] == v && tablet[row.length - x - 1][tablet.length - y - 1] == v))

// console.log('true', isSatorSquare(tablet1))
// console.log('false', isSatorSquare(tablet2))
// console.log('true', isSatorSquare(tablet3))
// console.log('false', isSatorSquare(tablet4))
// console.log('true', isSatorSquare(tablet5))
// console.log('false', isSatorSquare(tablet6))

// ===================================================== //
// Серверное получение даты

// function getDate(value?: Date | number) {
//   let date = value ?? new Date()
//   date = typeof date === 'number' ? new Date(value) : date
//   return new Date(date + 'UTC') // Текущее время и фикс получения времени
// }

// ===================================================== //
// Клиентское получение даты

// function getDateWithoutTimezone(value?: Date | number | string) {
//   let date = value ?? new Date()
//   date = typeof date !== 'object' ? new Date(value) : date
//   const timezoneOffsetHours = date.getTimezoneOffset() / 60
//   return new Date(date.setHours(date.getHours() + timezoneOffsetHours))
// }

// function getDate(value?: Date | string) {
//   let format = new Intl.DateTimeFormat('ru', {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//   })

//   return format.format(getDateWithoutTimezone(value))
// }

// ===================================================== //
