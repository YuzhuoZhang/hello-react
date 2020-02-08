import React from 'react';
import "./my-list.css";
// const styles = require('./my-list.css');

class AddItem extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>
                    add a item
                </button>
            </div>

        );
    }
}

function Reset(props) {
    return (
        <button onClick={props.onClick}>
            reset
        </button>
    );
}
class Item extends React.Component {

    render() {
        return (
            <div>
                name:<input type='text'/>
                phone:<input type='text' />
            </div>
        );
    }
}

class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ItemList: [],
            num:0
        };
        // this.handleClick=this.handleClick.bind(this);
        // this.handleReset=this.handleReset.bind(this);
    }

    handleClick() {
        let ItemList = this.state.ItemList;
        this.setState({
            ItemList: ItemList.concat(<Item key={this.state.num}/>),
            num:this.state.num+1
        });
    }

    handleReset() {
        this.setState({
            ItemList: [],
            num:0
        });
    }

    handleDelete() {
        let ItemList = this.state.ItemList.slice(0, this.state.ItemList.length - 1);
        this.setState(
            {
                ItemList: ItemList,
                num:this.state.num-1>0?this.state.num-1:0
            }
        );
    }


    render() {

        let ItemList = this.state.ItemList;

        return (
            <div>
                <div className='button-row'>
                    <AddItem onClick={() => this.handleClick()} />
                    <button onClick={() => this.handleDelete()} >delete a item</button>
                    <Reset onClick={() => this.handleReset()} />
                </div>
                <div id='item-list'>
                    {ItemList}
                </div>
                
            </div>
        );
    }
}

export default MyList;