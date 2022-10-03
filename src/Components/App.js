import React from 'react'
import '../style/App.css'
import TODOCard from './TODOCard'

const App = () => {
    return (
        <div className='main-container'>
            <div className='sec-container'>
                <h1>TODO List</h1>
                <TODOCard/>
            </div>
        </div>
    )
}

export default App