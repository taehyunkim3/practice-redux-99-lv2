import React from 'react'
import { useNavigate } from 'react-router-dom'

const Works = () => {

    const navigate = useNavigate();
  return (<>
  <div>Works</div>
  <button onClick={()=>{navigate("/")}}>home으로 돌아가기</button>
  
  </>
  )
}

export default Works