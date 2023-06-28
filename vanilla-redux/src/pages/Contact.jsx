import React from 'react'

const data = [
    {
        id: 1,
        todo: '리엑트 동적라우팅',
    },
    {
        id: 2,
        todo: '리엑트 동적라우팅',
    },
    {
        id: 3,
        todo: '리엑트 동적라우팅',
    },
    {
        id: 4,
        todo: '리엑트 동적라우팅',
    },
    {
        id: 5,
        todo: '리엑트 동적라우팅',
    },
    {
        id: 6,
        todo: '리엑트 동적라우팅',
    },
    {
        id: 7,
        todo: '리엑트 동적라우팅',
    },
    {
        id: 8,
        todo: '리엑트 동적라우팅',
    },
];



const Contact = () => {
  return (
  <>
      <div>Contact</div>
      {data.map((todo)=>{
        return(
        <div key={todo.id}>
             <h3>id:&nbsp;{todo.id}</h3>
            <h3>{todo.todo}</h3>
        </div>
        )
      })}
  
  </>

  )
}

export default Contact