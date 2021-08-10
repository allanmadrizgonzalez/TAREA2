import axios from 'axios';
import React, { createContext, useContext, useMemo } from 'react'
import { useState } from 'react';
import { View, Text } from 'react-native'
import IAlbums from '../models/IAlbums';
import IFoto from '../models/IFoto';


interface AlbumesContextProps {
    albu: IAlbums[];
    setAlbumes: (albu: IAlbums[]) => void;
    selectedAlbum: number | null;
    setSelectedAlbum: (albumes: number | null) => void;
    fetchAlbumes: () => Promise<void>;
}


const AlbumesContext = createContext<AlbumesContextProps>({
    albu: [],
    setAlbumes: () => { },
    selectedAlbum: null,
    setSelectedAlbum: () => { },
    fetchAlbumes: () => Promise.resolve(),
});



export const AlbumesProvider: React.FC = ({ children }) => {
    const [albu, setAlbumes] = useState<IAlbums[]>([]);
    const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);

    const fetchAlbumes =
        async () => {
            try {
                const AlbumResponse = await axios.get(
                    'https://jsonplaceholder.typicode.com/albums',
                );


                const FotoResponse = await axios.get(
                    'https://jsonplaceholder.typicode.com/photos',
                );

                const albumes = (AlbumResponse.data as IAlbums[]).map((albumes) => ({
                    ...albumes,
                    photo: (FotoResponse.data as IFoto[]).filter((album) => album.id === albumes.id)
                }))


                setAlbumes(albumes);

            } catch (error) {
                console.error(error);
            }


        }



    const val = useMemo(() => {
        return { albu, setAlbumes, selectedAlbum, setSelectedAlbum, fetchAlbumes }
    }, [albu, setAlbumes, selectedAlbum, setSelectedAlbum, fetchAlbumes])
    return (
        <AlbumesContext.Provider value={val}>
            {children}
        </AlbumesContext.Provider>

    );
};


export const useAlbumes = () => useContext(AlbumesContext);



