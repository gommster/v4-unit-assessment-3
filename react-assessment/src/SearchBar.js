import React, {Component} from 'react'

export default class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ''
    }
  }

  search() {this.props.filter(this.state.userInput)}

  clear() {this.props.clear(); this.setState({userInput: ''})}

  render () {
    return (
      <div className='SearchBar'>
        <input onChange={e=>this.setState({userInput: e.target.value})}></input>
        <button onClick={()=>this.search()}>Search</button>
        <button onClick={()=>this.clear()}>Clear Search</button>
      </div>
    )
  }
}