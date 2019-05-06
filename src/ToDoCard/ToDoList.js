import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import ToDoInput from './ToDoInput'
import '../index.css'
import './ToDoCard.css'

export default class ToDoList extends Component {
    state = {
        currentToDo: "",
        toDoItems: [
            { id: 1, value: "Fun", completed: false },
            { id: 2, value: "d", completed: false },
            { id: 3, value: "d", completed: false }
        ]
    }
    id = 5;

    handleInputChange(event) {
        const currentToDo = event.target.value;
        this.setState({ currentToDo: currentToDo })
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') this.handleItemAdd();
    }

    handleItemAdd() {
        if (this.state.currentToDo.trim() === '') return;
        this.id++;
        const newItem = { id: this.id, value: this.state.currentToDo }
        const toDoItems = [...this.state.toDoItems, newItem];
        this.setState({ currentToDo: "", toDoItems: toDoItems });
    }

    handleItemDeletion(index) {
        const toDoItems = [...this.state.toDoItems];
        toDoItems.splice(index, 1);
        this.setState({ toDoItems: toDoItems });
    }

    toggleComplete(index) {
        let toDoItems = [...this.state.toDoItems];
        const currentCompletionStatus = this.state.toDoItems[index].completed;
        toDoItems[index].completed = !currentCompletionStatus;
        this.setState({ toDoItems: toDoItems })
    }

    clearAllItems() {
        const toDoItems = [];
        this.setState({ toDoItems: toDoItems });
    }

    getToDoItems() {
        const toDoItems = this.state.toDoItems.map((currentItem, index) => {
            return (
                <ToDoItem key={currentItem.id} value={currentItem.value}
                    deleteItem={this.handleItemDeletion.bind(this, index)}
                    toggleComplete={this.toggleComplete.bind(this, index)} />
            )
        });
        return toDoItems;
    }

    clearCompletedTasks() {
        let unfinishedTasks = this.getUnfinishedTasks();
        this.setState({ toDoItems: unfinishedTasks });
    }

    getUnfinishedTasks() {
        let toDoItems = [...this.state.toDoItems];
        let unfinishedTasks = [];
        toDoItems.forEach(item => {
            if (!item.completed) unfinishedTasks.push(item);
        })
        return unfinishedTasks;
    }

    render() {
        let todoWrapperClasses = ["todo__wrapper", "display-none"];
        let toDoItems = null;

        if (this.state.toDoItems.length > 0) {
            const indexOfClassToRemove = todoWrapperClasses.indexOf("display-none");
            todoWrapperClasses.splice(indexOfClassToRemove, 1);
            toDoItems = this.getToDoItems();
        }

        return (
            <div>
                <ToDoInput value={this.state.currentToDo} inputChanged={this.handleInputChange.bind(this)} keyPressed={this.handleKeyPress.bind(this)} addItem={this.handleItemAdd.bind(this)} />

                <div className={todoWrapperClasses.join(' ')}>
                    <ul className="todo__list list">
                        {toDoItems}
                    </ul>

                    <div className="todo__clear-group">
                        <span onClick={this.clearCompletedTasks.bind(this)} className="button">Clear Completed</span>
                        <span onClick={this.clearAllItems.bind(this)} className="button">Clear All</span>
                    </div>
                    
                </div>
            </div>
        );
    }
}