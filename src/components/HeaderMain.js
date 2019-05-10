import React, { Component } from 'react'
import './Header.css';
import logo from '../logo.svg';
import TabSearch from './TabSearch';
import IconHolder from './IconHolder';


// import {Link} from "react-router-dom"
export default class HeaderMain extends Component {
  routeToMain(){
   window.location="/Home"
  }
  routeToWomen(){
    window.location="/About"
   }
  render() {
    return (
      <div className="HeaderMain" history={this.props.history}>
       <div className="Header-Wrapper">
       <img src={"https://images.bewakoof.com/logos/bewakoof-logo-og.png"} className="site-logo" alt="logo" />
       <TabSearch text={'MEN'} path onClick={()=>this.routeToMain()}/>
       <TabSearch text={'WOMEN'} onClick={()=>this.routeToWomen()}/>
       <TabSearch text={'MOBILE COVERS'}/>
       <TabSearch text={'CLEARANCE ZONE'}/>
       <IconHolder/>
       </div>
      </div>
    )
  }
}
