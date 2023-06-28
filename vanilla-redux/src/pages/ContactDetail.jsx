import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../shared/data';

const ContactDetail = () => {

    const param = useParams();
    console.log(param.id);

    const todo = data.find((a)=>a.id===parseInt(param.id));
    console.log(todo)

  return (
  <>

  <div>하위페이지입니다.</div>
  <h1>{todo.id}</h1>
  <h2>{todo.todo}</h2>
  </>

  )
}

export default ContactDetail