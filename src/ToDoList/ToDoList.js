import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import '../index.css'
import './ToDo.css'

export default class ToDoList extends Component {
    render() {
        return (
            <div className="todo">
                <div className="container">
                    <h1 className = "todo__title">{this.props.title}</h1>
                    <ToDoInput/>
                </div>
            </div>
        );
    }
}