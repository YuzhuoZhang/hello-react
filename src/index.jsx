import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state={
      title:'',
      items:''
    };
  }

  handleClick() {
    var xmlhttp;
    if (window.ActiveXObject) {
      // code for IE6, IE5
      xmlhttp = new window.ActiveXObject("Microsoft.XMLHTTP");
      
    }
    else {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.open('GET','127.0.0.1:8080/api/getObjects',true);
    xmlhttp.send();
    var objects = xmlhttp.responseText;
    alert(objects);
  }

  render() {
    return (

      <React.Fragment>
        <button onClick={this.handleClick}>向服务器请求数据</button>
        <table>
          <th>
            <TableHeader title={this.state.title}/>
          </th>
          <tr>
            <TableRows rows={this.state.items} />
          </tr>
        </table>
      </React.Fragment>
    );
  }

}

class TableHeader extends React.Component{
}

class TableRows extends React.Component{

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
  );