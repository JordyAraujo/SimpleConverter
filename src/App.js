import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import InputComponent from "./components/InputComponent";
import UnitComponent from "./components/UnitComponent";


class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "0",
            value: "0",
            unitI: "",
            unitO: "",
            converted: ""
        }
    }

    handleChange = e => {
        let checkResult = e.target.value
        e.preventDefault();        
        if(e.target.value.includes(' ')){
            checkResult = e.target.value.replaceAll(' ','')
        }
        if(e.target.value.includes('--')){
            checkResult = checkResult.replaceAll('--','+')
        }

        this.setState({value: checkResult});
        
        try {
            this.setState({
                result: (eval(checkResult) || "0" ) + ""
            })
        } catch (e) {
            this.setState({
                result: ""
            })
        }
    }

    render() {
        return (
            <div>
                <div className="converter-body">
                    <h1>Simple Converter</h1>
                    <p>Input:</p>
                    <UnitComponent />
                    <InputComponent handleChange={this.handleChange}/>
                    <p>Result:</p>
                    <ResultComponent result={this.state.result}/>
                </div>
            </div>
        );
    }
}

export default App;