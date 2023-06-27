import React, { useState } from 'react'

const Home = () => {


    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
    }
    return (
        <>
            <h1>todo</h1>
            <form onSubmit={onSubmit}>
                <input type='text' value={text} onChange={onChange}></input>
                <button>add</button>
            </form>
        </>
    )
}

export default Home