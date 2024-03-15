import './App.css'
import BookDownload from './components/BookDownload'
import Landinpage from './components/Landinpage'
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom"

function App() {  
  return (
    <div className=''>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Landinpage />}/>
        <Route path='/download' element={<BookDownload/>} />
      </Routes>
    </div>
  )
}

export default App
