import { Artist } from "../../models/Artist"

enum ArtistActionTyps {
    SET_ARTISTS = 'SET_ARTISTS'
}


interface ActionType {
    type: ArtistActionTyps,
    payload: any
}


export interface ArtistState {
    artists: Artist[] | null
}


const initialState: ArtistState = {
    artists: null
}


const artistReducer = (state = initialState , action: ActionType) => {
    switch (action.type) {
        case ArtistActionTyps.SET_ARTISTS:
            return { ...state, artists: action.payload }

        default:
            return state
    }
}





export { artistReducer, ArtistActionTyps }
