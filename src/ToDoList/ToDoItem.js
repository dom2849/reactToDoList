import React from 'react'
import '../index.css'
import './ToDo.css'

export default function ToDoItem() {
    return (
        <li className = "todo__item">
            <div className="todo__item-group">
                <input type="checkbox" className="todo__checkbox input" />
                <span className="todo__description">have fun</span>
            </div>
            <i className="fas fa-times todo__delete button"></i>
        </li>
    )
}