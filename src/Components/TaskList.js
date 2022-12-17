import React from 'react'
import '../style/TaskList.css'
import DescriptionModal from './DescriptionModal'

class TaskList extends React.Component{

    state = {taskList : this.props.taskList, descJSX : ''}

    onTaskRemove = (e) => {
        let idx = e.target.parentElement.parentElement.id
        this.props.taskList.splice(idx,1)
        this.setState({taskList : this.props.taskList})
    }

    onTaskInfo = (e) => {
        let idx = e.target.parentElement.parentElement.id
        let jsx = <DescriptionModal header='Description' desc={this.state.taskList[idx].desc} obj={this}/>
        this.setState({descJSX : jsx})
    }

    showList = () => {
        return this.state.taskList.map((task,idx)=>{
            return (
                <div key={idx} id={idx} className='task'>
                    <h3>{idx+1 + '. ' + task.task}</h3>
                    <div className='task-options'>
                        <button className='removeBtn' onClick={this.onTaskRemove}>Remove</button>
                        <button className='moreBtn' onClick={this.onTaskInfo}>More Info</button>
                    </div>
                </div>
            )
        })
    }

    render(){
        return (
            <div className='task-container'>
                {this.showList()}
                {this.state.descJSX}
            </div>
        )
    }
}

export default TaskList
