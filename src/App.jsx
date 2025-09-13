import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExamMarksForm from './components/ExamMarksForm.jsx'
import Header from './components/Header.jsx'
import ProgressionCard from './components/ProgressionCard.jsx'
import ResourceBadge from './components/ResourceBadge.jsx'
import ScheduleGrid from './components/ScheduleGrid.jsx'
import Sidebar from './components/Sidebar.jsx'
import StudentRoll from './components/StudentRoll.jsx'
import Dashboard from './pages/Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Dashboard />
      </div>
    </div>  
  )
}

export default App
