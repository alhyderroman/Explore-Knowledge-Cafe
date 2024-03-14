import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Bloggs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'






function App() {

  return (
    <>
    
   <Header></Header>
   <div className='md:flex'>
   <Blogs></Blogs>
   <Bookmarks></Bookmarks>
   </div>
   
  
    
    </>
  )
}

export default App
