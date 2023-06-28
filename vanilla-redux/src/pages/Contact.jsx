import React from 'react'
import { Link } from 'react-router-dom';
import { data } from '../shared/data';

const Contact = ()=>{

  return (
  <>
      <div>Contact</div>
      {data.map((todo)=>{
        return(
        <div key={todo.id}>
             <h3>id:&nbsp;{todo.id}</h3>
            <h3><Link to={`/contact/${todo.id}`}>{todo.todo}</Link> </h3>
        </div>
        )
      })}
  
  </>

  )
}

export default Contact