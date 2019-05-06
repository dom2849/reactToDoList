import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import ToDoInput from './ToDoInput'
import '../index.css'
import './ToDoCard.css'

export default class ToDoList extends Component {
    state = {
        currentToDo: "",
        toDoItems: [
            { id: 1, value: "Fun" },
            { id: 2, value: "d" },
            { id: 3, value: "de" },
            { id: 4, value: "e" },
        ]
    }
    id = 5;

    handleInputChange(event) {
        let currentToDo = event.target.value;
        this.setState({ currentToDo: currentToDo })
    }

    handleItemAdd() {
        this.id++;
        let newItem = { id: this.id, value: this.state.currentToDo }
        let toDoItems = [...this.state.toDoItems, newItem];
        this.setState({ currentToDo: "", toDoItems: toDoItems });
    }

    handleItemDeletion(index) {
        let toDoItems = [...this.state.toDoItems];
        toDoItems.splice(index, 1);
        this.setState({toDoItems: toDoItems});
    }

    getToDoItems() {
        let toDoItems = this.state.toDoItems.map((currentItem, index) => {
            return (
                <ToDoItem key={currentItem.id} value={currentItem.value}
                    deleteItem={this.handleItemDeletion.bind(this, index)} />
            )
        });
        return toDoItems;
    }

    render() {
        let todoWrapperClasses = ["todo__wrapper"];
        let toDoItems = null;

        if (this.state.toDoItems.length <= 0) {
            todoWrapperClasses.push("display-none");
        }

        else {
            toDoItems = this.getToDoItems();
        }

        return (
            <div>
                <ToDoInput value={this.state.currentToDo} inputChanged={this.handleInputChange.bind(this)} addItem={this.handleItemAdd.bind(this)} />
                <div className={todoWrapperClasses.join(' ')}>
                    <ul className="list">
                        {toDoItems}
                    </ul>
                    <p className="todo__clear-all"> <span className="button">Clear</span></p>
                </div>
            </div>
        );
    }
}