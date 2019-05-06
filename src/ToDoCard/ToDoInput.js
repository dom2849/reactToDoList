import React from 'react'
import '../index.css'
import './ToDoCard.css'

export default function ToDoInput(props) {
    return (
        <div onKeyPress = {props.keyPressed} className="todo__input-wrapper">
            <input type="text" className="todo__input input" placeholder="New task" onChange={props.inputChanged} value = {props.value}></input>
            <span onClick = {props.addItem} className="todo__add button">Add</span>
        </div>
    );
}