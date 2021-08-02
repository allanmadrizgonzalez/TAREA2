import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../models/IState';
import { actualizarAlbum } from './store/actions/Abumes';

const TestRedux: React.FC = () => {
    const albumes = useSelector((state: IState) => state.albumes.albumes);
    const dispatch = useDispatch();


    useEffect(() => {
        setTimeout(() => {
            dispatch(actualizarAlbum(["Nueva Carga"]))
        }, 3000);
    }, [])


    return (
        <View>
            <Text>{albumes}</Text>
        </View>
    )
}

export default TestRedux
