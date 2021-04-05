import 
React,
{Component,
Fragment} from 'react';

import uniqid from 'uniqid'

class FormMain extends Component {

    constructor (props) {
        super(props);
        this.handleChangeTaskText = this.handleChangeTaskText.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleChangeTaskText(e) {
        this.props.onTextNewChange(e.target.value);
    }

    handleAddTask(e) {
        e.preventDefault();
        const person = {
            id:uniqid(),
            taskName:this.props.nameNewTask
        }
        this.props.onAddTask(person);
    }

    render() {

        const {nameNewTask} = this.props

        return (
            <Fragment>
                <form onSubmit={ (e) => this.handleAddTask(e) } className="row ml-1 mt-4 mb-4 w-50" >
                    <label className="col-sm-10 form-label" htmlFor="Task">Task:</label>
                    <br></br>
                    <input
                        onChange={this.handleChangeTaskText}
                        className="col-sm-6 form-control mr-3" 
                        type="text" 
                        id="Task" 
                        placeholder="Task"
                        autoFocus
                        value={nameNewTask}
                        required
                        />
                    
                    <input 
                        className="col-sm-4 btn btn-info" 
                        type="submit" 
                        value="Add task"
                        disable = { nameNewTask.trim().length === 0 ? true : false }
                    />
                </form>
            </Fragment>
        );
    }
}

export default FormMain;