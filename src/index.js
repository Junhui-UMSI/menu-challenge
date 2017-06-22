import React from 'react';
import ReactDOM from 'react-dom';
import MenuComponent from './component/Menu/MenuComponent';
import './index.css';


window.MenuComponent= MenuComponent;

ReactDOM.render(
  <div className="index">
    <MenuComponent />
  </div>,
  document.getElementById('root')
);
