import React from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import '../index.css'
import './ToDo.css'

export default function ToDoCard(props) {
    return (
        <div className="todo">
            <div className="container">
                <h1 className="todo__title">{props.title}</h1>
                <ToDoInput />
                <ToDoList />
            </div>
        </div>
    );
}