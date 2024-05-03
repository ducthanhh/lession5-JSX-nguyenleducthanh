import React, { Component } from 'react'

export default class NLDT_Form2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            khoahoc:"ReactJS"
        }
    }
    //ham su li su kien
    handlechange=(ev)=>{
        this.setState({
            khoahoc:ev.target.value
        })
    }
    handlesubmit = (event)=>{
        event.preventDfault(
            alert(this.state.khoahoc)
        )
    }

  render() {
    return (
      <div>
        <form>
            <label>khoa hoc  </label>
                <select value={this.state.khoahoc} name="khoahoc" onChange={this.handlechange}>
                    <option value='HTML'>HTML</option>
                    <option value='CSS'>CSS</option>
                    <option value='JS'>JS</option>
                    <option value='ReactJS'>ReactJS</option>
                </select>
          <button onClick={this.handlesubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
