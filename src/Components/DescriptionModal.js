import React from 'react'
import '../style/DescriptionModal.css'

class DescriptionModal extends React.Component{

    onClose = (e) => {
        this.props.obj.setState({descJSX : ''})
    }

    render(){
        return(
            <div className="desc-main-container">
                <div className="desc-sec-container">
                    <h1>{this.props.header}</h1>
                    <p>{this.props.desc}</p>
                    <button className='closeBtn' onClick={this.onClose}>Close</button>
                </div>
            </div>
        )
    }
}

export default DescriptionModal