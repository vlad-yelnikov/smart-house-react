import { deviceActions } from './../actions/deviceActions/deviceActions';
import { ADD_DEVICE, REMOVE_ALL_DEVICES } from '../../constants/deviceActions';

export interface DevicesState {
    devices: Device[];
}

export interface Device {
    name: string,
    id: number,
    image: string,
    temp: {
        min: number,
        max: number,
        current: number,
        step: number,
    },
    modes: string[]
}

const initialState: DevicesState = {
    devices: []
}

export const deviceReducer = (state = initialState, action: deviceActions): DevicesState => {
    switch(action.type) {
        case ADD_DEVICE:
            return { ...state, devices: [...state.devices, action.payload] };
        case REMOVE_ALL_DEVICES:
            return state = initialState;
        default:
            return state;
    }
}