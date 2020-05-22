import React from 'react';
import logo from './logo.svg';
import './App.css';

class Main extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      data: null
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(response => {
        console.log('data', response.data)
        this.setState({data : response.data})
      })
  }

  render(){
    return (
      <div>
        <h2>{this.state.data}</h2>
        <Items />
      </div>
    )
  }
}

class Items extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      items: []
    }

    
  }

  componentDidMount(){
    fetch('http://localhost:3001/items')
      .then(response => response.json())
      .then(response => {
        this.setState({items: response})
      })
  }

  render(){
    let _items = this.state.items
    
    return (
      <div>
        <ul>
          {
            _items.map(item => <li>{item.id} - {item.title} ({item.text}).</li>)
          }
        </ul>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Main />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
