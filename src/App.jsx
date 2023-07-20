import React, { useRef, useState } from 'react'



export const App = () => {
  const changeColor = useRef([])
  const changeColor2 = useRef([])

  const [Todo, setTodo] = useState({
    state: false,
    content: ""
  });
  const value = useRef()
  const valueDesc = useRef()

  const eliminar = (id) => {
    //  console.log(Todo.content[id])

    const update = Todo.content.filter(reply =>
      reply.id !== id
    )
    console.log(update)
    setTodo({
      state: true,
      content: update
    })

  }

  const onSetTodo = () => {

    setTodo({
      state: true,
      content:
        [...Todo.content, {
          id: Todo.content.length,
          title: value.current.value,
          desc: valueDesc.current.value
        }]
    })
  }




  const onChangeColor = (id) => {
    console.log(id)
    console.log(changeColor.current[id].style.color = "green")
    console.log(changeColor2.current[id].style.color = "green")
  }











  return (
    <>

      <h1>Todo List</h1>
      <input ref={value} type="text" placeholder='Ingrese su titulo de tarea' />
      <input ref={valueDesc} type="text" placeholder='Ingrese su cuerpo de tarea' />

      <button onClick={onSetTodo}>Agregar</button>
      <br />
      {
        Todo.state
          ?
          Todo.content.map(body =>
            <>
              <h2 ref={el => changeColor.current[body.id] = el} style={{ display: "inline-block", paddingRight: "15px" }}>{body.title}</h2>
              <h5 ref={el => changeColor2.current[body.id] = el} style={{ display: "inline-block", paddingRight: "15px" }}>{body.desc}</h5>
              <button onClick={() => onChangeColor(body.id)} style={{ display: "inline-block" }}>✔</button>
              <button onClick={() => eliminar(body.id)} style={{ display: "inline-block" }}>❌</button>
              <br />
            </>
          )

          :
          <h3>Ingrese primer todoa</h3>
      }
      {console.log(Todo.content)}

    </>
  )
}
