import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: ['learn react', 'learn vue'],
      inputValue: ''
    }
  }
  handleAddClick () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete (index) {
    const list = [...this.state.list] // 复制一份数据
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  render () {
    return (
      <div className="App">
        <div>
          <input value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
          <button onClick={this.handleAddClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem delete={this.handleDelete.bind(this)} content={item} key={index} index={index} />
                // <li key={index} className="item" onClick={this.handleDeleteItem.bind(this, index)}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
