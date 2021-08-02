import { IAction } from "../../../../models/IAction"
import IAlbums from "../../../../models/IAlbums"
import { ACTUALIZAR_ALBUM, ACTUALIZAR_SELECTED_ALBUM } from "../../actions"

export interface IAlbumReducerState {
    albumes: IAlbums[];
    selectedAlbum: any;
}


const initialState: IAlbumReducerState = {
    albumes: [],
    selectedAlbum: null,
}

export default (state = initialState, { type, payload }: IAction) => {
    switch (type) {
        case ACTUALIZAR_ALBUM:
            return { ...state, albumes: payload }

        case ACTUALIZAR_SELECTED_ALBUM:
            return { ...state, selectedAlbum: payload }

        default:
            return state
    }
}
