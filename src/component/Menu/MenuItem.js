import React, { Component } from 'react';
import './menu.css';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: props.reset===true ? props.menulevel_func : this.clickItem,
      menuName: props.Itemvalue
    }
    this.clickItem = this.clickItem.bind(this);
  }

  clickItem() {
    alert("MenuItem Clicked!");
  }

  render () {
    return (
      <div className="menu-item">
            <a className="menu-item-link" href="#blabla" onClick={this.state.onClick}>{this.props.Itemvalue}</a>
      </div>
    )
  }
}


export default MenuItem;
