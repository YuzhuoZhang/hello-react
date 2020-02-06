import React from 'react';
// import ReactDOM from 'react-dom';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            textValue:'',
            selectBoxVar1:'man'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSelectBoxChange = this.handleSelectBoxChange.bind(this);
    }

    handleChange(event){
        this.setState({
            value:event.target.value
        });
    }

    handleSubmit(event){
        alert('提交的名字:' + this.state.value+
        '\n提交的文章:'+this.state.textValue +
        '您的性别是'+this.state.selectBoxVar1);

        event.preventDefault();
    }

    handleTextChange(event){
        this.setState({
            textValue:event.target.value
        });
    }

    handleSelectBoxChange(event){
        this.setState({
            selectBoxVar1:event.target.value
        });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <br />
                    文章：
                    <textarea value={this.state.textValue} onChange={this.handleTextChange} />
                    你的性别:
                    <select value={this.state.selectBoxVar1} onChange={this.handleSelectBoxChange} >
                        <option value='man'>男</option>
                        <option value='woman'>女</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}
export default NameForm;

