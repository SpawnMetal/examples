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

// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//   return obj[key]
// }

// let x = {a: 1, b: 2, c: 3, d: 4}

// getProperty(x, 'a') // 1
// getProperty(x, 'm') // error: Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.

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

// interface MyComment {
//   id: string
//   text: string
// }

// interface Page {
//   comments: MyComment[]
//   pageCount: number
// }

// interface Pages {
//   [id: string]: Page
// }

// interface Like {
//   like: number
//   dislike: number
// }

// interface Likes {
//   [id: string]: Like
// }

// type Result = Array<{
//   id: string
//   text: string
//   likes: Likes
// }>

// async function getComments(pageNumber: number): Promise<Page> {
//   const pageCount = 5

//   const pages: Pages = {
//     '1': {
//       pageCount,
//       comments: [
//         {
//           id: '1',
//           text: 'page 1, comment 1',
//         },
//         {
//           id: '2',
//           text: 'page 1, comment 2',
//         },
//       ],
//     },
//     '2': {
//       pageCount,
//       comments: [
//         {
//           id: '3',
//           text: 'page 2, comment 3',
//         },
//       ],
//     },
//     '3': {
//       pageCount,
//       comments: [
//         {
//           id: '4',
//           text: 'page 3, comment 4',
//         },
//       ],
//     },
//     '4': {
//       pageCount,
//       comments: [
//         {
//           id: '5',
//           text: 'page 4, comment 5',
//         },
//         {
//           id: '6',
//           text: 'page 4, comment 6',
//         },
//         {
//           id: '7',
//           text: 'page 4, comment 7',
//         },
//       ],
//     },
//     '5': {
//       pageCount,
//       comments: [
//         {
//           id: '8',
//           text: 'page 5, comment 8',
//         },
//       ],
//     },
//   }

//   return new Promise((resolve, reject) => {
//     resolve(pages[pageNumber])
//   })
// }

// async function getLikes(commentId: string): Promise<Like> {
//   const likes: Likes = {
//     '1': {like: 10, dislike: 1},
//     '2': {like: 20, dislike: 2},
//     '3': {like: 30, dislike: 3},
//     '4': {like: 40, dislike: 4},
//     '5': {like: 50, dislike: 5},
//     '6': {like: 60, dislike: 6},
//     '7': {like: 70, dislike: 7},
//     '8': {like: 80, dislike: 8},
//   }

//   return new Promise((resolve, reject) => {
//     resolve(likes[commentId])
//   })
// }

// const result: Result[] = []

// async function getData(): Promise<Result[]> {
//   const commentsPromise: Promise<Page>[] = []
//   const comment1 = await getComments(1)
//   const pageCount = comment1.pageCount

//   const fillResult = comment => getLikes(comment.id).then(like => result.push({...comment, likes: like}))

//   for (let page = 2; page <= pageCount; page++) commentsPromise.push(getComments(page))
//   for (const comment of comment1.comments) fillResult(comment)

//   Promise.allSettled(commentsPromise).then(commentsPromiseSettled => {
//     //   {
//     //     status: 'fulfilled',
//     //     value: {
//     //       '1': {
//     //         pageCount,
//     //         comments: [
//     //           {
//     //             id: '1',
//     //             text: 'page 1, comment 1',
//     //           },
//     //           {
//     //             id: '2',
//     //             text: 'page 1, comment 2',
//     //           },
//     //         ],
//     //       },
//     //     },
//     //   },
//     //   {
//     //     status: 'fulfilled',
//     //     value: {
//     //       '2': {
//     //         pageCount,
//     //         comments: [
//     //           {
//     //             id: '3',
//     //             text: 'page 2, comment 3',
//     //           },
//     //         ],
//     //       },
//     //     },
//     //   },
//     // ]

//     for (const commentPromiseSettled of commentsPromiseSettled) for (const comment of commentPromiseSettled.value.comments) fillResult(comment)
//   })
// }

// getData()
// setTimeout(() => console.log(result))

// ===================================================== //
// Жизненный цикл

// export const Child = ({num}) => {
//   console.log('child: render')

//   useLayoutEffect(() => {
//     console.log('child: layout effect')

//     return () => {
//       console.log('child: cleanup layout effect')
//     }
//   }, [num])

//   useEffect(() => {
//     console.log('child: effect')
//     return () => {
//       console.log('child: cleanup effect')
//     }
//   }, [num])

//   return null
// }

// export const App = () => {
//   const [num, setNum] = useState(0)

//   console.log('parent: render')

//   function clickHandler() {
//     setNum(prev => prev + 1)
//   }

//   useLayoutEffect(() => {
//     console.log('parent: layout effect')

//     return () => {
//       console.log('parent: cleanup layout effect')
//     }
//   }, [num])

//   useEffect(() => {
//     console.log('parent: effect')
//     return () => {
//       console.log('parent: cleanup effect')
//     }
//   }, [num])

//   return (
//     <>
//       <Child num={num} />
//       <button onClick={clickHandler}>render</button>
//       <div style={{fontSize: '45px', textAlign: 'center'}}>{num}</div>
//     </>
//   )
// }

// При рендере:
// parent: render
// developer // parent: render
// child: render
// developer // child: render
// child: layout effect
// parent: layout effect
// child: effect
// parent: effect
// developer // child: cleanup layout effect
// developer // parent: cleanup layout effect
// developer // child: cleanup effect
// developer // parent: cleanup effect
// developer // child: layout effect
// developer // parent: layout effect
// developer // child: effect
// developer // parent: effect

// После нажатия на кнопку:
// parent: render
// developer // parent: render
// child: render
// developer // child: render
// child: cleanup layout effect
// parent: cleanup layout effect
// child: layout effect
// parent: layout effect
// child: cleanup effect
// parent: cleanup effect
// child: effect
// parent: effect

// ===================================================== //
// useCallback

// const LiveSearch = () => {
// const [val, setVal] = useState('');
// const [response, setResponse] = useState('');

// function search (query){
//     fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
//         .then(response => response.json())
//         .then(json => setResponse(json))
// }

// const onChange = (e) => {
//     setVal(e.target.value)
//     search(val)
// }

// const onReccomendationClick = useCallback(() => {
//     console.log(title)
// },
// [title],
// )

// return(
//     <div>
//         <input value={val} onChange={onChange} type="text"/>
//         <Reccomendations onClick={onReccomendationClick} response={response} />
//     </div>
// )
// }

// ===================================================== //
// Scroll

import React, {useState, useEffect} from 'react'

// Имитация запроса к серверу
const fetchCall = () => Promise.resolve(Math.random())

const NumberAndScroll = () => {
  const [number, setNumber] = useState(0)
  const [scroll, setScroll] = useState(window.scrollY)

  useEffect(() => {
    let timer = null

    fetchCall().then(value => setNumber(value))

    const setScrl = () => {
      clearTimeout(timer)

      timer = setTimeout(() => {
        setScroll(window.scrollY)
      }, 500)
    }

    window.addEventListener('scroll', setScrl)

    return () => window.removeEventListener('scroll', setScrl)
  }, [])

  return (
    <div style={{position: 'fixed'}}>
      <div> Number: {number} </div>
      <div> ScrollY: {scroll} </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <NumberAndScroll />
      {Array(100)
        .fill()
        .map((_, index) => (
          <div key={index} style={{height: '100px'}}>
            1
          </div>
        ))}
    </>
  )
}
