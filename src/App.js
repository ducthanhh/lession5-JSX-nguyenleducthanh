import React, { Component } from 'react'
import NLDT_Form1 from './NLDT_Form1'
import NLDT_Form2 from './NLDT_Form2';
import NLDT_Form3 from './NLDT_Form3';

export default class App extends Component {
  handleSubmit = (param)=>{
    console.log(param);
  }
  render() {
    return (
      <div>
        <h1>Event form-controlled compoment</h1>
        <div>
          <NLDT_Form1/>
          <NLDT_Form2/>
          <NLDT_Form3  onSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}
