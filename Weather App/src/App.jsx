import { useState } from 'react'
import "./App.css"
import Clock from "./components/Clock.jsx"
// import { MouseTracker } from './MouseTracker.jsx'
// import { HourlyForecast } from './HourlyForecast.jsx'



function App() {


  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
        <h1>🌍 Weather Homework App 🌍</h1>
        <Clock />
    </div>
  )
}

export default App
