import React, { useContext } from 'react'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'

const Note = ({ note }) => {
    const { dispatch } = useContext(NotesContext)
    const position = useMousePosition()
    return (
       <>
           <h3>{note.title}</h3>
           <p>{note.body}</p>
           <p>Mouse position currently: {position.x},{position.y}</p>
           <button onClick={()=> dispatch({ type: 'REMOVE_NOTE', title: note.title })}>X</button>
       </>
    )
}

export { Note as default}