// ===================================================== //
// // Вывести матрицу, обозначить цветом единицы
// https://codesandbox.io/s/matrix-p9xjt7

// export interface MatrixInterface {
//   [key: number]: number
// }

// export const matrix: MatrixInterface[] = [
//   [1, 0, 1, 0, 1],
//   [0, 0, 0, 1, 1],
//   [1, 0, 0, 1, 0],
//   [1, 0, 1, 1, 1],
//   [0, 0, 1, 1, 0],
// ]

// // Solution 1

// const rootElement = document.getElementById('root')

// const showMatrix = arr => {
//   if (Array.isArray(arr)) return <div style={{display: 'flex', flexDirection: 'column'}}>{arr.map(value => showMatrix(value))}</div>
//   else return <div style={{display: 'flex', flexDirection: 'row', color: arr ? '#ff0000' : '#000'}}>{arr}</div>
// }

// ReactDOM.render(
//   <StrictMode>
//     <div style={{display: 'flex'}}>{matrix.map(value => showMatrix(value))}</div>
//   </StrictMode>,
//   rootElement
// )

// // Solution 2

// interface Props {
//   matrix: MatrixInterface[]
// }

// export default function Matrix(props: Props) {
//   const {matrix} = props

//   const matrixRender = useMemo(() => {
//     return matrix.map(item => (
//       <div style={style.matrixString}>
//         {item.map((item2: number) => (
//           <div style={item2 ? style.red : style.black}>{item2}</div>
//         ))}
//       </div>
//     ))
//   }, [matrix])

//   return <div style={style.matrixDiv}>{matrixRender}</div>
// }

// const rootElement = document.getElementById('root')!
// const root = ReactDOM.createRoot(rootElement)

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

// export default function App() {
//   return (
//     <div className="App">
//       <Matrix matrix={matrix} />
//     </div>
//   )
// }

// export const matrixDiv = {
//   display: 'flex',
// }

// export const matrixString = {
//   display: 'flex',
//   'flex-direction': 'column',
// }

// export const red = {
//   color: '#ff0000',
// }

// export const black = {
//   color: '#000',
// }

// ===================================================== //
// Typescript Generic

// interface X {
//     [key: string]: number
// }

// const x: X = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

// function getProperty<T extends typeof x, K extends keyof typeof x>(obj: T, key: K): T[K] {
//     return obj[key]
// }

// getProperty(x, 'a') // 1
// getProperty(x, 'm') // error

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

interface MyComment {
  id: string
  text: string
}

interface Page {
  comments: MyComment[]
  pageCount: number
}

interface Pages {
  [id: string]: Page
}

interface Like {
  like: number
  dislike: number
}

interface Likes {
  [id: string]: Like
}

type Result = Array<{
  id: string
  text: string
  likes: Likes
}>

async function getComments(pageNumber: number): Promise<Page> {
  const pageCount = 5

  const pages: Pages = {
    '1': {
      pageCount,
      comments: [
        {
          id: '1',
          text: 'page 1, comment 1',
        },
        {
          id: '2',
          text: 'page 1, comment 2',
        },
      ],
    },
    '2': {
      pageCount,
      comments: [
        {
          id: '3',
          text: 'page 2, comment 3',
        },
      ],
    },
    '3': {
      pageCount,
      comments: [
        {
          id: '4',
          text: 'page 3, comment 4',
        },
      ],
    },
    '4': {
      pageCount,
      comments: [
        {
          id: '5',
          text: 'page 4, comment 5',
        },
        {
          id: '6',
          text: 'page 4, comment 6',
        },
        {
          id: '7',
          text: 'page 4, comment 7',
        },
      ],
    },
    '5': {
      pageCount,
      comments: [
        {
          id: '8',
          text: 'page 5, comment 8',
        },
      ],
    },
  }

  return new Promise((resolve, reject) => {
    resolve(pages[pageNumber])
  })
}

async function getLikes(commentId: string): Promise<Like> {
  const likes: Likes = {
    '1': {like: 10, dislike: 1},
    '2': {like: 20, dislike: 2},
    '3': {like: 30, dislike: 3},
    '4': {like: 40, dislike: 4},
    '5': {like: 50, dislike: 5},
    '6': {like: 60, dislike: 6},
    '7': {like: 70, dislike: 7},
    '8': {like: 80, dislike: 8},
  }

  return new Promise((resolve, reject) => {
    resolve(likes[commentId])
  })
}

const result: Result[] = []

async function getData(): Promise<Result[]> {
  const commentsPromise: Promise<Page>[] = []
  const comment1 = await getComments(1)
  const pageCount = comment1.pageCount

  const fillResult = comment => getLikes(comment.id).then(like => result.push({...comment, likes: like}))

  for (let page = 2; page <= pageCount; page++) commentsPromise.push(getComments(page))
  for (const comment of comment1.comments) fillResult(comment)

  Promise.allSettled(commentsPromise).then(commentsPromiseSettled => {
    //   {
    //     status: 'fulfilled',
    //     value: {
    //       '1': {
    //         pageCount,
    //         comments: [
    //           {
    //             id: '1',
    //             text: 'page 1, comment 1',
    //           },
    //           {
    //             id: '2',
    //             text: 'page 1, comment 2',
    //           },
    //         ],
    //       },
    //     },
    //   },
    //   {
    //     status: 'fulfilled',
    //     value: {
    //       '2': {
    //         pageCount,
    //         comments: [
    //           {
    //             id: '3',
    //             text: 'page 2, comment 3',
    //           },
    //         ],
    //       },
    //     },
    //   },
    // ]

    for (const commentPromiseSettled of commentsPromiseSettled) for (const comment of commentPromiseSettled.value.comments) fillResult(comment)
  })
}

getData()
setTimeout(() => console.log(result))
