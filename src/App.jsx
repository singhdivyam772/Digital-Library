import './App.css'
import NavBar from './common/NavBar'
import Landinpage from './components/Landinpage'
import BooksCategory from './components/BooksCategory'

function App() {
  return (
    <div className='w-screen min-h-screen relative flex flex-col justify-center items-center  overflow-x-hidden'>
    <NavBar/>
    <Landinpage/>
    {/* <BooksCategory/> */}
  </div>
  )
}

export default App
