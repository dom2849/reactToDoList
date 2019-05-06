import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import ToDoInput from './ToDoInput'
import '../index.css'
import './ToDoCard.css'

export default class ToDoList extends Component {
    state = {
        currentToDo: "",
        toDoItems: [
            // { id: 1, value: "Fun" },
            // { id: 2, value: "d" },
            // { id: 3, value: "de" },
            // { id: 4, value: "e" },
        ]
    }
    id = 5;

    handleInputChange(event) {
        const currentToDo = event.target.value;
        this.setState({ currentToDo: currentToDo })
    }

    handleKeyPress(event){
        if (event.key ==='Enter') this.handleItemAdd();
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
        this.setState({toDoItems: toDoItems});
    }

    clearAllItems(){
        const toDoItems = [];
        this.setState({toDoItems: toDoItems});
    }

    getToDoItems() {
        const toDoItems = this.state.toDoItems.map((currentItem, index) => {
            return (
                <ToDoItem key={currentItem.id} value={currentItem.value}
                    deleteItem={this.handleItemDeletion.bind(this, index)} />
            )
        });
        return toDoItems;
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
                <ToDoInput value={this.state.currentToDo} inputChanged={this.handleInputChange.bind(this)} keyPressed = {this.handleKeyPress.bind(this)} addItem={this.handleItemAdd.bind(this)} />
                <div className={todoWrapperClasses.join(' ')}>
                    <ul className="list">
                        {toDoItems}
                    </ul>
                    <p onClick = {this.clearAllItems.bind(this)}className="todo__clear-all"> <span className="button">Clear All</span></p>
                </div>
            </div>
        );
    }
}