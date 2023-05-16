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
