import React from 'react'

class TodoItem extends React.Component {
  constructor(){
    super()
  }
  // 子组件与父组件通信，子组件要调用父组件传过来的方法
  handleDelete() {
    this.props.delete(this.props.index)
  }

  render() {
    return (
      <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
    )
  }
}

export default TodoItem