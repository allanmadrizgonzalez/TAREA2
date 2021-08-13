import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AlbumsDetails from '../components/molecules/AlbumsDetails'
import Album from '../components/organims/Album'

const BottomTabNav = () => {

    const { Navigator, Screen } = createBottomTabNavigator();

    return <NavigationContainer>
        <Navigator>

            <Screen name="AlbumDetails" component={AlbumsDetails} />
            <Screen name="Album" component={Album} />





        </Navigator>


    </NavigationContainer>
}

export default BottomTabNav
