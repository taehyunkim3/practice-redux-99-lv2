import React, { useState } from 'react'

const Home = () => {


    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.taeget.value)
    }
    return (
        <>
            <h1>todo</h1>
            <form>
                <input type='text' value={text} onChange={onChange}></input>
            </form>
        </>
    )
}

export default Home