import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

function Welcome(props){
    return <h1>Hello,{props.name}!</h1>
}

function tick(){
    const element = (
        <div>
            <Welcome name = 'zyz' />
            <h1>hello,react!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element,document.getElementById('root'));

}

setInterval(tick,1000);