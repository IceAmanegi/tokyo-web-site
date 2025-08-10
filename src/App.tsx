import React from 'react';
import logo from './logo.svg';
import './App.css';

import { IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

import { IgrIcon } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';




function App() {
  return (
    <IgrNavDrawer open={true}>
    <IgrNavDrawerHeaderItem>
        <span>Sample Drawer</span>
    </IgrNavDrawerHeaderItem>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="home" collection="material" />
        </div>
        <span slot="content">Home</span>
    </IgrNavDrawerItem>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="search" collection="material" />
        </div>
        <span slot="content">Search</span>
    </IgrNavDrawerItem>
</IgrNavDrawer>

  );
}


export default App;
