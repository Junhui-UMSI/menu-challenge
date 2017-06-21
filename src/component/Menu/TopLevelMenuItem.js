import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './nav.css';

class TopLevelMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state={
        menulist : props.showMenuItem,
        onClick: props.reset===true ? props.topLevelfunc : this.clickItem,
    };
  }

  clickItem(){
    alert("TopLevelComponent Clicked!");
  }

 render () {
   let namelist=this.props.showTopLevelItem;
   let menulist=this.props.showMenuItem[this.props.keyvalue];
   console.log("Toplevel: ",this.state.onClick);
   console.log("MEnuList: ", menulist);
   console.log("keys: ", this.props.keyvalue);
   return (
          <li className="nav-item">
            <div className="nav-wrap">
              <button className="toplevel-link" href="#" onClick={this.state.onClick}>
               {namelist}
              </button>
              <div className="menu-item-wrap">
                {menulist.map((item)=>(
                    <MenuItem
                       key={item}
                       Itemkey={this.props.keyvalue}
                       menufunc={this.props.menufunc}
                       reset={this.props.reset}
                       Itemvalue={item}
                    />
                ))}
              </div>
            </div>
          </li>
   )

 }
}


export default TopLevelMenuItem;
