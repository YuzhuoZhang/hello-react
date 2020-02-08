import React from 'react';

const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
};

function BoilingVerdict(props){
    if(props.celsius>=100){
        return (<p>The water would boil.</p>);
    }
    return (<p>The water would not boil.</p>);
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            temperature:''
        };
    }

    handleChange(event){
        this.setState({
            temperature:event.target.value
        });
    }

    render(){
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.onChange} />
            </fieldset>
        );
    }

}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state = {
            temperature:''
        };
    }

    handleChange(event){
        this.setState({
            temperature:event.target.value
        });
    }

    render(){
        const temperature = this.state.temperature;

        return (
        <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input value={temperature} onChange={this.handleChange}/>
            <BoilingVerdict celsius = {parseFloat(temperature)} />

        </fieldset>);

    }

}

export default Calculator;