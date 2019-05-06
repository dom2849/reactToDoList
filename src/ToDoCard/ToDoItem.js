import React from 'react'
import '../index.css'
import './ToDoCard.css'

export default function ToDoItem(props) {
    return (
        <li className = "todo__item">
            <div className="todo__item-group">
                <input type="checkbox" className="todo__checkbox input" />
                <span className="todo__description">{props.value}</span>
            </div>
            <i onClick = {props.deleteItem} className="fas fa-times todo__delete button"></i>
        </li>
    )
}