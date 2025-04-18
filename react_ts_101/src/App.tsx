// type fakerAPI<T> = {
//   status: "OK" | "Error"
//   code: 200 | 400 | 500 ;
//   locale: string;
//   seed: number | null;
//   total: number ;
//   data: T[]
// }

// type book = {
  
//   status: string;
//   code: number;
//   locale: string;
//   seed: string
//   total: number
// }

// type creditcard = {
  
//   status: string;
//   code: number;
//   locale: string;
//   seed: string
//   total: number
// }

// function App() {
//   const test:fakerAPI<book> = {
//     status: "Error",
//   code: 200,
//   locale: "ㅁㄴㅇ",
//   seed: 123,
//   total: 1,
//   data

//   }

//     const test1:creditcard = {
//       status: "하위",
//     code: 1,
//     locale: "ㅁㄴㅇ",
//     seed: "ㅎㅎㅎ",
//     total: 1,

//     }
//     type Lunch = {
//       name: string;
//       price: number;
//       kcal: number;
//     }

    // type a = keyof Lunch
    // function App(){
    //   const test:a = "price"
    // }

    // type size = {
    //   xs: string;
    //   sm: string;
    //   md: string;
    //   lg: string;
    //   xl: string;
    //   xxl: string;
    // }

    // type keySize = keyof size
    // function App(){
    //   const test:keySize = "sm"
    //   const fontSize: {size: keySize; color: "red" | "blue" | "green"} = {
    //     size: "md",
    //     color: "blue",
    //   }
    // }

// //keyof 연산자
// type A =keyof Order;
// //인덱스드 타입
// type B = Order["first"]
// //인덱스드 시그니처
//     type Coffee = {
//       [key: string]:string | number;
  
//     }

//     type Main = "primary" | "secondary" | "warning"
//     type Color = {
//       [key in "primary" | "secondary" | "warning"]:string
       
//     }

//     type Sandwich = {
//       [key: string]:{name:string, price:number,kcal:number}
//     }

//     function App() {

//     }

  //1. keyof: 키값들을 상수화
  //2. 인덱스 타입: 벨류값들을 타입
  //3. 인덱스 시그니처: 키값을 타입화
    //string, number 만 가능 그래서
  //4. 맵드 타입: key in type 
  //5. template literal type

// type Hserises = "h1" | "h2" | "h3" 
// type Bseries = "b1" | "b2" | "b3"

// type numow = {
//   [key in Hserises|Bseries ]:28 | 20 | 18 | 16 | 14 | 12;
// }

// type Sponsoner = "GEN G" | "NONG SIM" | "HAN HWA" |"KIA" | "T1"
// type Team = `${Sponsoner} Team`;
// type LCKTeam = {
//   [key in Team]:{top:string, jg:string , mid:string, ad:string, sp:string}
// }

// type Singers = "이현배" | "트와이스" | "김민규" | "있지"
// type JYP = `${Singers} JYP`
// type JYPEntertainment = {
//   [key in JYP]:string[]
// }
type them = "primary" | "secondary" | "warning" 
type color = "black" | "white"
type combi = `${them}${color}`

type Green = "Green" | "Green_dark" | "Green_Variant" | "Green_ligth"
type KiaColor = `kia${Green}`
type HexColor = `#${string}`

function App() {
//  const gen:Team = "GEN G Team"
//  const nong:Team = "NONG SIM Team"

//     const kia:LCKTeam = {
//       "KIA Team": {top:"siwoo", jg:"lucid", mid:"showmaker", ad:"aiming", sp:"beryl"}
//     };
// const data:JYPEntertainment = {
//   "이현배 JYP": ["이현배"],
//   "트와이스 JYP" : ["사나", "모모"],

// }

const test:combi = "primaryblack"

const colors : {[key in KiaColor]:HexColor} = {
  kiaGreen: "#5D7D2B",
  kiaGreen_dark: "#4C5B35",

}


  return (
    <>
     
    </>
  )
}

export default App
