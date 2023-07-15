import React from 'react'
import { BrowserRouter,Routes,Router } from 'react-router-dom'
import Header from './Header'
import DisplayBooks from './DisplayBooks'
import AddBooks from './AddBooks'

const BookRouter = () => {
  return (
    
        <BrowserRouter>
        <div>
            <Header/>
            <div>
                <Routes>
                    <Router path='./DisplayBooks.jsx' element={DisplayBooks}/>
                    <Router path='./AddBooks.jsx' element={AddBooks}/>
                </Routes>
            </div>

        </div>
        </BrowserRouter>
    
  )
}

export default BookRouter