import React, { Component } from 'react';
import FormMain from './FormMain'
import ListTask from './ListTask'

class PageMain extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            nameNewTask: '',
            listTasks: []
        }
        // I create handler methods for the states
        this.handleChangeTaskText = this.handleChangeTaskText.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

    handleChangeTaskText = (name) => {
        this.setState({
            nameNewTask: name
        })
    }

    handleAddTask = (taskToAdd) => {
        this.setState({
            listTasks:[...this.state.listTasks, taskToAdd]
        })

        this.setState({
            nameNewTask:""
        })
    }

    handleDeleteTask = (idOfTask) => {
        const tasksAtTheMoment = this.state.listTasks
        const arrayWithoutTask = tasksAtTheMoment.filter( (item) => item.id !== idOfTask )

        this.setState({
            listTasks: arrayWithoutTask
        })
    }

    render() {
        
        return (
            <main className="container mx-auto mt-3 border border-dark rounded w-50">
                
                <FormMain 
                    nameNewTask={this.state.nameNewTask}
                    onTextNewChange={this.handleChangeTaskText}
                    onAddTask={this.handleAddTask}
                />
                
                <ListTask 
                    listTasks={this.state.listTasks}
                    onDeleteTask={this.handleDeleteTask}
                />
            </main>
        );
    }
}

export default PageMain;