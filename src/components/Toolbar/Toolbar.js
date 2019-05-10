import React, { Component } from 'react'
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js';
// export default class Toolbar extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

const toolbar = props => (
    <header className="toolbar">
<nav className="toolbar-navigation">
    <div>
        <DrawerToggleButton click={props.drawerClickHandler}/>
    </div>
    <div className="toolbar-logo">
        <a href="/">THE LOGO</a>
       
    </div>
    <div className="space"></div>
    <div className="toolbar-navigation-items">
        <ul>
            <li><a href ="/">Projects</a></li>
            <li><a href ="/">Users</a></li>
        </ul>
    </div>
</nav>
    </header>
)
export default toolbar;