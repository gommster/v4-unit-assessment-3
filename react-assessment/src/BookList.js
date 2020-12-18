import React, {Component} from 'react'

export default class BookList extends Component {
  render () {
    
    let mappedBooks = this.props.books.map((element, index) => {
      return (<div className = 'bookCard'>
        <img src= {element.img} onClick={()=>{this.props.shelfIt(element.title)}} alt={element.title}></img>
        <p>{element.title} by {element.author}</p>
      </div>)
    })
    
    return (
      <div className = 'BookList'>
        {mappedBooks}
      </div>
    )
  }
}