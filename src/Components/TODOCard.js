import React from 'react'
import '../style/TODOCard.css'
import TaskList from './TaskList'

class TODOCard extends React.Component{

    state = {msg : '', task : '', desc : '', msgType : ''}
    static taskList = []

    onAddTask = (e) => {
        e.preventDefault()

        // Error Handling
        if(this.state.task === ''){
            this.setState({msg : 'Task name is required', msgType : 'error'})
        }else{
            this.setState({msg : 'Task Added', msgType : 'success'})
            // check for empty description
            let finalDesc = ''
            if(this.state.desc === ''){
                finalDesc = 'No description found'
            }else{
                finalDesc = this.state.desc
            }
            TODOCard.taskList.push(
                {task : this.state.task,
                desc : finalDesc}
                )
        }
        setTimeout(() => {
            this.setState({msg : '',msgType : ''})
        }, 3000);

    }

    onInputChange = (e) => {
        if(e.target.id === 'task'){
            this.setState({task : e.target.value})
        }else{
            this.setState({desc : e.target.value})
        }
    }

    render(){
        return (
        <div>
            <form>
                <div className="form-item">
                    <input type="text" name="task" id="task" placeholder='Enter Task' value={this.state.task} onChange={this.onInputChange}/>
                </div>
                <div className="form-item">
                    <textarea name="desc" id="desc" cols="30" rows="5" placeholder='Enter Description' value={this.state.desc} onChange={this.onInputChange} ></textarea>
                </div>
                <input type="submit" value="Add Task" onClick={this.onAddTask}/>
            </form>
            <p className={`para ${this.state.msgType}`}>{this.state.msg}</p>
            <TaskList taskList = {TODOCard.taskList}/>
        </div>
        )
    }
}

export default TODOCard