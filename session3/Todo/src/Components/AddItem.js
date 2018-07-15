import React, { Component } from 'react'

export default class AddItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      priority: 'High'
    }
  }
  handleTextChange(e){
    console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }
  handleLevelChange = (e) => {
    console.log(e.target.value)
    this.setState({
      priority: e.target.value
    })
  }
  handleSubmit = () => {
    this.props.onAdd(this.state)
  }
  render() {
    const levels = ['High', 'Medium', 'Low']
    let levelOption=levels.map(level => {
        return <option key={level} value={level}>{level}</option>
    })
    return (
      <div>
        <h3>{this.props.title}</h3>
          <div>
            <label>Title</label>
            <input type="text" ref="title" onChange={this.handleTextChange.bind(this)} />
          </div>
          <div>
            <label>Level</label>
            <select ref="level" onChange={this.handleLevelChange}>
              {levelOption}
            </select>
          </div>
          <br />
          <button onClick={this.handleSubmit} >Add</button>
      </div>
    )
  }
}
