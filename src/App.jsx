import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    // console.log('Bookmark btn clicked')
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <main className='md:flex my-4'>
      <Blogs
      handleAddToBookmark={handleAddToBookmark}
      ></Blogs>
      <Bookmarks
      bookmarks={bookmarks}
      ></Bookmarks>
      </main>
    </div>
  )
}

export default App
