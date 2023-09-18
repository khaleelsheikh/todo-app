import React, { useState } from 'react'

export default function AddTodo ({addTodo}) {
    const [text, setText] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        addTodo(text);
        
    }
  return (
    
  )
}
