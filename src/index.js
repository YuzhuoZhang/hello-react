import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import NameForm from './form';
import Clock from './clock';
import LoginControl from './login-control';





class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    /**
     * handleClick里的this已经不是类的this了，解决方案：
     * 1.手动绑定this：this.handleClick = this.handleClick.bind(this);
     * 2.写成箭头函数:()=>this.setState(....);
     */

    handleClick = () => this.setState({ isToggleOn: !this.state.isToggleOn });


    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }

}

function ListItem(props){
    return <li>{props.value}</li>;
}

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map(
        (number)=>
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>{listItems}</ul>
    )
}

function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'},
    {id: 3, title: 'finish', content: 'you can explore react by yourself.'}
  ];

const numbers = [1,2,3];
ReactDOM.render(
    <div>
        <Clock />
        <Toggle />
        <LoginControl />
        <NumberList numbers={numbers} />
        <Blog posts={posts}/>
        <NameForm />
    </div>,
    document.getElementById('root')
);

