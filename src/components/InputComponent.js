import React, { Component } from 'react';

class InputComponent extends Component {


    render() {
        return (
            <p>
                <input type="text" value={this.props.value} onChange={this.props.handleChange} />
            </p>
        );
    }
}


export default InputComponent;