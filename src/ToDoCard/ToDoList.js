import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import '../index.css'
import './ToDo.css'

export default class ToDoList extends Component {
    render() {
        return (
            <div className="todo__wrapper">
                <ul className="list">
                    <ToDoItem />
                    <ToDoItem />
                </ul>
                <p class="todo__clear-all"> <span class="button">Clear</span></p>
            </div>
        );
    }
}