import React from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from "react-redux"

import Layout from './Layout'



const DisplayBooks = () => {


    const bookstore=useSelector(state=>state.books);


const  dispatch=useDispatch()


  return (
    <Layout >
    <div style={{color:'#030385',backgroundColor:"#a49d9d",display:'inline-block',padding:'20px'}}>
      <h2><b>List of Books</b></h2>
      <br/>
      <ol style={{backgroundColor:"#929667"}}>
      {
                bookstore.map((items,index)=>{
                   return(
                        <>
                            <li key={index}>
                            <b>BookName:</b> {items.bookName}<br/>
                             <b>Author:</b>{items.author}<br/>
                             <b>Add Date:</b>{items.add_date}
                             <button onClick={()=>dispatch({type:'REMOVE',index})}>×</button><br/><br/>
                            </li>
                        </>
                          )
                })
            }
      </ol>
    </div>
    </Layout>
  )
}

export default  DisplayBooks