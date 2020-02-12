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
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }

}

class Calculator extends React.Component{
    render(){

        return (
        <div>
            <TemperatureInput scale='c'/>
            <TemperatureInput scale='f'/>
        </div>);

    }

}

export default Calculator;