import React from 'react';
// import ReactDOM from 'react-dom';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            textValue:'',
            selectBoxVar1:'man',
            isGoing:true,
            numberOfGuests:2
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSelectBoxChange = this.handleSelectBoxChange.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
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

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox'?target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
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
                    {/* 文件: */}
                    {/* <input type='file'/> */}
                    <br/>
                    <label>
                        参与:
                        <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                    </label>

                    <label>
                        来宾人数:
                        <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                    </label>
                    
                    {this.state.isGoing.toString()}
                    {this.state.numberOfGuests}
                    <br/><input value='hi'/>
                    
                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}
export default NameForm;

