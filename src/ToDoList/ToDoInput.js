import React from 'react'
import '../index.css'
import './ToDo.css'

export default function ToDoInput() {
    return (
        <div class="todo__input-wrapper">
            <input type="text" class="todo__input input" placeholder="New task"></input>
            <span class="todo__add button">Add</span>
        </div>
    );
}