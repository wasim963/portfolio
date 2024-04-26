import React from 'react';
 
 // local dependencies
 import { iconView } from './icon-bank.view';
 import { iconConfig } from '@config/icon.config';
 
 /**
  * @desc This is basically an hoc which has 'icon' view as its component, it receives the config, sends it to 'icon' view along with the props.
  * @param {*} Component - icon view
  * @param {*} config - icon-config containing icon configurations.
  */
 const getIconBank = ( Component = iconView, config ) => {

    const getIcon = ( props ) => {
        return(
            <Component 
                { ...props }
                { ...config }
            />
        )
    }

    return getIcon;
 };
 
 /**
  * @desc Renders an icon based on custom icon-config.
  */
 export const iconBank = ( config = {} ) => {
     return getIconBank( iconView, config );
 };
 
 /**
  * @desc Renders an icon based on icon id from iconConfig icon-config.
  * @example
  * import { Icon } from 'modules/icon-bank';
  */
 export const Icon = iconBank( iconConfig );