import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './menu.css';

class TopLevelMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state={
        menulist : props.menu_list,
        onClick: props.reset===true ? props.toplevel_func : null
    };
  }

 render () {
   let toplevel_list=this.props.toplevel_list;
   let menu_list=this.props.menu_list[this.props.keyvalue];

   return (
          <li className="nav-item">
            <div className="nav-wrap">
              <button className="toplevel-link" href="#" onClick={this.state.onClick}>
               {toplevel_list}
              </button>
              {
                <div className="menu-item-wrap">
                  {menu_list.map((item)=>(
                      <MenuItem
                         key={item}
                         Itemkey={this.props.keyvalue}
                         menulevel_func={this.props.menulevel_func}
                         reset={this.props.reset}
                         Itemvalue={item}
                      />
                  ))}
                </div>
              }
            </div>
          </li>
   )

 }
}


export default TopLevelMenuItem;
