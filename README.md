## Menu Component Challenge

This project was intended to build a single page web application which renders menucomponents as well as providing an API for user to access in the developer console.

## Install

All the modules are wrapped up in the package json, so simply run the following command after clone this repo.
```javascript
npm install
npm run
```
And your web app should be run in a good shape!

## API instructions
- addTopLevelItem(des,func)
-- takes two parameters, des is the description for the top level menucomponent, the func is the click function for the top level menucomponent

- removeTopLevelItem(des)
-- takes one parameter, des represents the desctiption of the top level menucomponent you want to delete

- addItem(parent, des, func)
-- takes three parameters, parent represents the description of the top level menucomponent where this item will be inserted into, des represents the description of the menu item, the func represent the click function for this menu item component.

- removeItem(parent, des)
-- takes two parameters, parent represents the  description of the top level menucomponent where this item will be removed from, des represents the description of the menu item to be removed.
