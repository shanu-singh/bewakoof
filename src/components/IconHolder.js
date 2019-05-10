import React, { Component } from 'react'
import Search from './17.svg';
import like from './133.svg';
import log from './141w.svg';
import './IconHolder.css';
export default class IconHolder extends Component {
  render() {
    return (
        <div>
       <img className="IconHolder" src={log} />
      <img className="IconHolder" src={like} />
      <div className="Search-option">
      <img className="IconHolder" src={Search} />
      </div>
     
      </div>
    
    )
  }
}
