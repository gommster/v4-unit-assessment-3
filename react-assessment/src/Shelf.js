import React, {Component} from 'react'

export default class Shelf extends Component {
  render() {

    let titles = this.props.shelvedBooks.map((element, index)=> {
      console.log('this is the element', element)
      return <div key={index}>{element}</div>
    })

    return (
      <div className='Shelf'>
        <h1>Shelf<button onClick={()=>this.props.clear()}>CLEAR SHELF</button></h1>
        <div>{titles}</div>
      </div>
    )
  }
}