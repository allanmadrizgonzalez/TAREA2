import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Album from '../../organims/Album';
import { IState } from '../../../models/IState';
import AlbumList from '../../molecules/AlbumList';

import AlbumsDetails from '../../molecules/AlbumsDetails';



const HomeScreen: React.FC = () => {
    const selectedAlbum = useSelector((state: IState) => state.albumes.selectedAlbum);



    return (
        <View>
            <Text>
                {selectedAlbum ?
                    <AlbumsDetails />
                    :
                    <Album />
                }
            </Text>
        </View>


    );
};

export default HomeScreen
