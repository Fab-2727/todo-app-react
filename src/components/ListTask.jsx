import React, { Component, Fragment} from 'react';

class ListTask extends Component {

    createListItems = () => { 
        const listElements = this.props.listTasks.map( item => 
            <li key={item.id} className="list-group-item">{
                item.taskName
                }
            <span className="btn btn-danger btn-sm float-right">X</span>
            </li>
        )
        
        return listElements
    }

    render() {

        return (
            <Fragment>
                <section className="row  border-top border-dark">
                    <h4 className="col-md-8 mt-3">List of tasks</h4>
                    <div className="col-md-6 mt-2 mb-3">
                        <ul className="list-group">
                            {
                                this.createListItems()
                            }
                        </ul>
                    </div>
                </section>
            </Fragment>    
        );
    }
}

export default ListTask;