import axios from "axios";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ACTUALIZAR_ALBUM, ACTUALIZAR_SELECTED_ALBUM } from "..";
import { IAction } from "../../../../models/IAction";
import IAlbums from "../../../../models/IAlbums";
import IFoto from "../../../../models/IFoto";
import { IState } from "../../../../models/IState";
import { albumes } from "../../reducers";

export const actualizarAlbum = (payload: IAlbums[]) => ({
    type: ACTUALIZAR_ALBUM,
    payload,
});

export const actualizarSelectedAlbum = (payload: any) => ({
    type: ACTUALIZAR_SELECTED_ALBUM,
    payload,
});

export const fetchalbumes =
    () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
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

            dispatch(actualizarAlbum(albumes));


        } catch (error) {
            console.error(error);
        }


    }
