import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/sslogo.png'
import profile from '../images/ChrisProfilePic.jpg'


class NavBar extends React.Component {
    
    render() {
       return (
        <header className="navbar">  
        <a id="sLink" className="skip-link" tabIndex="0">
         Skip to content</a>
         <button id="menuBtn" type="button" className="navbar-btn" 
            title="Menu" aria-controls="sideMenu" 
            aria-label="Actions" aria-haspopup="true" 
            aria-expanded="false">
            <FontAwesomeIcon icon={faBars} className="navbar-btn-icon"/>
          </button>
          <img src={logo} className="navbar-app-icon" 
            alt="SpeedScore logo" />
           <h1 id="appName" className="navbar-title">SpeedScore</h1> 
           <div className="navbar-right-items">
                <input id="searchBox" className={"search-input"+ this.props.mode == 'LoginMode'? null: "slide"} 
                aria-label="Search Rounds" size="30"
                type="search" />
                <button id="searchBtn" type="button" className={"navbar-btn" + this.props.mode =='LoginMode'? null: "hidden"} 
                     aria-label="Open Rounds Search"> 
         {/* <span class="navbar-btn-icon fas fa-search"></span>  */}
                      
                    <FontAwesomeIcon icon={faSearch} className="navbar-btn-icon"/>
                </button>
                {/* <button id="searchBtn" type="button" className="navbar-btn" title="Search" aria-label="Search">
        <span className="navbar-btn-icon fas fa-search" aria-hidden></span>
      </button> */}
                <button id="profileBtn" type="button" 
                  className="navbar-btn navbar-profile-btn " 
                  aria-label="Account and Profile Settings">
        <img className="navbar-profile-pic" src={profile}
        alt="User's profile picture" />
                </button> 
            </div>
      </header>
    ); 
  }
}

export default NavBar;