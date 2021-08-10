
import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useAlbumes } from '../../../contexts/albumes-contexts';
import { IState } from '../../../models/IState';
import AlbumList from '../../molecules/AlbumList'
import { actualizarAlbum } from '../../store/actions/Abumes';
import { fetchalbumes } from '../../store/actions/Albu';




const Album: React.FC = () => {


    //const albumes = useSelector((state: IState) => state.albumes.albumes);
    //const dispatch = useDispatch();

    const { albu, setAlbumes, fetchAlbumes } = useAlbumes();


    useEffect(() => {

        //dispatch(fetchalbumes());
        fetchAlbumes();
    }, [])

    return (
        <View>
            {albu.length > 0 ? (
                <FlatList
                    data={albu}
                    renderItem={({ item, index }) => <AlbumList key={item.id} albumes={item} index={index} />}
                />) : (
                <ActivityIndicator color="#000" />
            )}
        </View>
    )
}

export default Album



