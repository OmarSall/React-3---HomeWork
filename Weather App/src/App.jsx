import "./App.css"
import Clock from "./components/Clock.jsx"
import MouseTracker from "./components/MouseTracker.jsx"
import  HourlyForecast  from './components/HourlyForecast.jsx'

function App() {

  return (
    <div>
        <h1>🌍 Weather Homework App 🌍</h1>
        <Clock />
        <MouseTracker />
        <HourlyForecast />
    </div>
  )
}

export default App