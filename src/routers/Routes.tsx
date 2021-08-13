import React from 'react'
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import AlbumsDetails from '../components/molecules/AlbumsDetails';
import Album from '../components/organims/Album';

const Routes = () => {
    return (
        <NativeRouter>
            <Switch>
                <Route path="/details" component={AlbumsDetails}></Route>
                <Route path="/" component={Album} ></Route>
            </Switch>
        </NativeRouter>
    );
};

export default Routes;
