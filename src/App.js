import React, {Component} from 'react';
import logo from './logo.svg';
import HeaderMain from './components/HeaderMain.js';
import './App.css';
import {BrowserRouter , Route} from "react-router-dom";

import Toolbar from './components/Toolbar/Toolbar';
// import DrawerToggleButton from './components/SideDrawer/DrawerToggleButton.js'
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import backdrop from './components/BackDrop/BackDrop';

export default class App extends Component {
  state = {
    sideDrawerOpen : false
  };
  drawerToggleClickHandler = () =>{
    this.setState((prevState)=> {
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    } );
  };
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false});
  }
  render() {
    // let sideDrawer;
    let backdrop;
    if(this.state.sideDrawerOpen){
      // sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backdropClickHandler}/>
    }
    return (
    <div  style={{height:"100%"}}>
    <div>
     <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
     <SideDrawer show={this.state.sideDrawerOpen}/>
     {backdrop}
     </div>
     <div>
     <main style={{marginTop:'64px'}}>  
       <p>This is the page Content!</p>
       </main>
   </div>
       {/* <HeaderMain  />
       <BrowserRouter>
       <Route path='/' component={Home} exact/>
       <Route path='/About' component={About}  exact/>
       <Route path='/Contact' component={Contact}/>
       <Route path='/Term' component={Term}/>
       </BrowserRouter> */}
    </div>
  )
}
}




