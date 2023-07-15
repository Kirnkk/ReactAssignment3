import React,{ useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { updateBooks } from './BookAction'
import Layout from './Layout';


const AddBooks = () => {

  const dispatch =useDispatch();
    const bookstore=useSelector(state=>state.books);

    const[tempbooks,setBooks] = useState([
      [
        {
          bookName:"",
          author:'',
          add_date:"",
        }
      ]
    ]);



    const handleInputBooks=(e)=>{
    setBooks({...tempbooks,[e.target.id]:e.target.value})
    }

    const handleAddBook=(e)=>{
     e.preventDefault();
      dispatch(updateBooks(tempbooks))
      
  }



  return (
    <Layout>
    <div>
      
      <form style={{backgroundColor:"grey",padding:'50px'}} onSubmit={handleInputBooks}>
        <fieldset>
          <legend>Add Books Form</legend>
      <input type="text"  id='bookName'    placeholder='Enter another Book' onChange={handleInputBooks} required/><br/><br/>
      <input type="text"  id='author'      placeholder='Enter author'       onChange={handleInputBooks} required/><br/><br/>
      <input type="date"  id='add_date'    placeholder='Enter date'         onChange={handleInputBooks} required/><br/><br/>


      <button onClick={handleAddBook}>Add</button>
      </fieldset>
      </form>
      <br/>
      <ol style={{backgroundColor:"#b1e4f0",color:"#1b037c",border:'2px solid black'}}>
      {
                bookstore.map((items,index)=>{
                   return(
                        <>
                            <li key={index}>
                            <b>BookName:</b> {items.bookName}<br/>
                             <b>Author:</b>{items.author}<br/>
                             <b>Add Date:</b>{items.add_date}
                            </li>
                        </>
                          )
                })
            }
        {/* {
            books.map((item,index)=>{
              return(
                      <>
                        <li key={index}>
                              {item.bookName}<br/>
                              {item.author}<br/>
                              {item.add_date}<br/>
                        </li>
                      </>
              )
            })
        } */}
      </ol>

    </div>
    </Layout>
  )
}

export default AddBooks