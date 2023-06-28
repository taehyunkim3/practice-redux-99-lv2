import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const Works = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {param} = useParams();
    console.log(param)
    console.log(location)
  return (<>
  <div>Works</div>
  <button onClick={()=>{navigate("/")}}>home으로 돌아가기</button>
  <Link to='/contact'>컨텍트페이지로이동</Link>
  
  </>
  )
}

export default Works