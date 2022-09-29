import React from "react";
import {Artist, Album, Form, Liked} from "./components";

function App () {
  return (
    <main>
      <div>
      <h1>My Favourite Artists</h1>
        <Artist />
      </div>
      <div>
        <Form/>
        
      </div>
      <div>
      <h2>Albums</h2>
        <Album />
      </div>
    </main>
  )
}


export default App;



// const App = (props) => (
//   // <Fragment></Fragment>
//   <>
//     {/* <h1>Hello World</h1> */}
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
