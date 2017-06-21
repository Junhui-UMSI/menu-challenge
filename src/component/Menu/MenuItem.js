import React, { Component } from 'react';
import './nav.css';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: props.reset===true ? props.menufunc : this.clickItem,
    }
    this.clickItem = this.clickItem.bind(this);
  }

  clickItem() {
    alert("MenuItem Clicked!");
  }

  render () {
    console.log("Menuitem: ",this.props.menufunc);
    console.log("MenuState: ",this.state.onClick);
    return (
      <div className="menu-item">
            <a className="menu-item-link" href="#blabla" onClick={this.state.onClick}>{this.props.Itemvalue}</a>
      </div>
    )
  }
}


export default MenuItem;
