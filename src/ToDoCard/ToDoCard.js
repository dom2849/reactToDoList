import React from 'react'
import ToDoList from './ToDoList'
import '../index.css'
import './ToDoCard.css'

export default function ToDoCard(props) {
    return (
        <div className="todo">
            <div className="container">
                <h1 className="todo__title">{props.title}</h1>
                <ToDoList />
            </div>
        </div>
    );
}