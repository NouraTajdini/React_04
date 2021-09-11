import React from 'react'
import ReactDom from 'react-dom'
import Weather from './Components/Weather'
import './Stylesheets/index.css'

const App = () =>{
  return(
    <Weather/>
  )
}

ReactDom.render(<App />, document.getElementById('root'))