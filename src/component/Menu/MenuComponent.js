import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TopLevelMenuItem from './TopLevelMenuItem';
import './menu.css';

const TOPLEVEL_LIST = ['Export', 'Save', 'Edit'];
const MENU_LIST = {'Export': ['Export-PDF', 'Export-CSV'],
                  'Save': ['SAVE-PDF', 'SAVE-CSV'],
                  'Edit': ['EDIT-PDF', 'EDIT-CSV']};

class MenuComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
          toplevel_list : props.reset===true ? [] : TOPLEVEL_LIST,    // depending on reset or not, if reset===true, then api is called
          menu_list : props.reset===true ? {} : MENU_LIST,
          toplevel_func: function(){},
          menulevel_func: function(){}
      }
    }

// API Static Method ###########################################################

    static Create(elem){
      return ReactDOM.render(<MenuComponent reset={true} />, elem);
    }

// API Instance Method #########################################################

    addTopLevelItem(des,func) {
        let currenttop_list = this.state.toplevel_list;
        if(!currenttop_list.includes(des)){           // Only adding toplevelMenuItem that is not duplicate
          let updatetop_list = this.state.toplevel_list.concat([des]);
          let updatemenu_level = this.state.menu_list;
          updatemenu_level[des] = [];

          this.setState({
              toplevel_list: updatetop_list,
              menu_list: updatemenu_level,
              toplevel_func: func
          })
        }else{
          console.log("Already exist this toplevelMenuItem");
        }
    }
    removeTopLevelItem(des) {
        let currenttop_list = this.state.toplevel_list;
        let index = currenttop_list.indexOf(des);
        currenttop_list.splice(index,1);
        this.setState({
            toplevel_list: currenttop_list
        })

    }
    addItem(parent,des,func) {
        let MenuItemDict = this.state.menu_list;
        if(MenuItemDict.hasOwnProperty(parent)){
            MenuItemDict[parent].push(des);
            this.setState({
                menu_list: MenuItemDict,
                menulevel_func: func
            })
        }else{
            console.log("Toplevel Menu not exist, please call addTopLevelItem first");
        }
    }

    removeItem(parent,des) {
        let MenuItemDict = this.state.menu_list;
        let currentmenu_list = this.state.menu_list[parent];
        let index = currentmenu_list.indexOf(des);
        currentmenu_list.splice(index,1);
        MenuItemDict[parent]=currentmenu_list;
        this.setState({
            menu_list: MenuItemDict
        })
    }


    render() {
      let TopLevelList = this.state.toplevel_list;
      return(
                <div className="menu-section">
                    <ul>
                    {TopLevelList.map((item) =>(
                        <TopLevelMenuItem
                          key={item}
                          keyvalue={item.toString()}
                          reset={this.props.reset}
                          toplevel_list={item}
                          menu_list={this.state.menu_list}
                          toplevel_func={this.state.toplevel_func}
                          menulevel_func={this.state.menulevel_func}
                        />
                    ))}
                    </ul>
                </div>
             )
    }
}

export default MenuComponent;
