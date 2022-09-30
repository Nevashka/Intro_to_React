import React from "react";
import {Routes, Route} from 'react-router-dom'
import  {Header, Footer}  from "./layout";
import {Home, About, Albums, FindArtist, NotFound} from './pages'


function App () {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="albums" element={<Albums/>}></Route>
        <Route path="findArtist" element={<FindArtist/>}></Route>
        <Route path="about" element={<About/>}></Route>
        
      </Routes>
      {/* <Footer/> */}
    </>
  )
}


export default App;



// const App = (props) => (
//   // <Fragment></Fragment>
//   <>
//     {/* <h1>Hello World</h1>
//     <Trainer name='Mike' location='London'></Trainer>
//     <Trainer name='Beth' location='Cornwall' ></Trainer>
//     <Pokemon></Pokemon>
//     {/* <div>Trainers: {props.name} </div>
//     {/* Trainer(mike)
//     Trainer(monia)
//     Trainer(beth) */}
//     {/* <div>Pokemon</div> */}
//   </>

// )

// const App = (props) => (
//   // <Fragment></Fragment>
//   <>
//     <h1>Hello World</h1>
//     <div>Trainers: {props.name} </div>
//     {/* Trainer(mike)
//     Trainer(monia)
//     Trainer(beth) */}
//     <div>Pokemon</div>
//   </>

// )
// mdn w3c
// param -> placeholder in react is called PROPS
//argument -> actual value
