import React, { Component } from 'react'
import './TabSearch.css';
export default class TabSearch extends Component {
    onClick=()=>{
        if(this.props.onClick){
            this.props.onClick()
        }
    }
  render() {
    return (
      <div className="TabSearch" onClick={()=>this.onClick()}>
      {this.props.text}
      </div>
    )
  }
}
