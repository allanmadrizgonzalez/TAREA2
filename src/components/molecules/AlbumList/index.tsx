import styled from '@emotion/native'
import React from 'react'
import { Text } from 'react-native'
import { useDispatch } from 'react-redux'
import IAlbums from '../../../models/IAlbums'
import { actualizarAlbum } from '../../store/actions/Abumes'
import { actualizarSelectedAlbum } from '../../store/actions/Albu'
import { albumes } from '../../store/reducers'



export interface AlbumListProps {
    albumes: IAlbums;
    index: number;

}

const AlbumList: React.FC<AlbumListProps> = ({
    albumes,
    index
}) => {
    const dispatch = useDispatch();

    const onPress = () => {
        dispatch(actualizarSelectedAlbum(index));
    }

    return (
        <ItemContainer onPress={onPress}>

            <Text>
                {++index}.{albumes.title}
            </Text>
        </ItemContainer>
    )
}


const ItemContainer = styled.TouchableOpacity`
background-color: #f1f1f1;
border-radius: 15px;
padding: 8px 12px;
margin: 4px 0;
`;


export default AlbumList;