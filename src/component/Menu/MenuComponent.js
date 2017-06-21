import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TopLevelMenuItem from './TopLevelMenuItem';
import './nav.css';

const TopLevelList = ['Export', 'Save', 'Edit'];
const MenuList = {'Export': ['Export-PDF', 'Export-CSV'],
                  'Save': ['SAVE-PDF', 'SAVE-CSV'],
                  'Edit': ['EDIT-PDF', 'EDIT-CSV']};

class MenuComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
          showTopLevelItem : props.reset===true ? [] : TopLevelList,
          showMenuItem : props.reset===true ? {} : MenuList,
          TopLevelfunc: function(){},
          MenuLevelfunc: function(){}
      }
    }

    static Create(elem){
      return ReactDOM.render(<MenuComponent reset={true} />, elem);
    }

// API Instance Method ########################################################

    addTopLevelItem(des,func) {
        let currentTopLevel = this.state.showTopLevelItem;

        if(!currentTopLevel.includes(des)){           // Only adding toplevelMenuItem that is not duplicate
          let updateTopLevel = this.state.showTopLevelItem.concat([des]);
          let updateMenuLevel = this.state.showMenuItem;
          updateMenuLevel[des] = [];

          this.setState({
              showTopLevelItem: updateTopLevel,
              showMenuItem: updateMenuLevel,
              TopLevelfunc: func
          })
        }else{
          console.log("Already exist this toplevelMenuItem");
        }
    }
    removeTopLevelItem(des) {
        let array = this.state.showTopLevelItem;
        let index = array.indexOf(des);
        array.splice(index,1);
        this.setState({
            showTopLevelItem: array
        })

    }
    addItem(parent,des,func) {
        let MenuItemDict = this.state.showMenuItem;
        if(MenuItemDict.hasOwnProperty(parent)){
            MenuItemDict[parent].push(des);
            this.setState({
                showMenuItem: MenuItemDict,
                MenuLevelfunc: func
            })
        }else{
            console.log("Toplevel Menu not exist, please call addTopLevelItem first");
        }
    }

    removeItem(parent,des) {
        let array = this.state.showMenuItem[parent];
        let index = array.indexOf(des);
        array.splice(index,1);
        this.setState({
            showMenuItem: array
        })

    }


    render() {
        console.log("MenuComponent: ",this.state.TopLevelfunc);
      let namelist = this.state.showTopLevelItem;
      let menulist = this.state.showMenuItem;
        return(
                <div className="menu-section">
                    <ul>
                    {namelist.map((item) =>(
                        <TopLevelMenuItem
                          key={item}
                          showTopLevelItem={item}
                          showMenuItem={menulist}
                          topLevelfunc={this.state.TopLevelfunc}
                          menufunc={this.state.MenuLevelfunc}
                          keyvalue={item.toString()}
                          reset={this.props.reset}
                        />
                    ))}
                    </ul>
                </div>
        )
    }
}

export default MenuComponent;
