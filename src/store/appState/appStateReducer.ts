import { createReducer } from '@reduxjs/toolkit'
import { setBridgeServiceIsInitialized, setTheme } from './appStateActions'

type AppStateReducerState = {
    bridgeServiceIsInitialized: boolean,
    theme: 'Auto' | 'Light' | 'Dark'
}

const initialState: AppStateReducerState = {
    bridgeServiceIsInitialized: false,
    theme: 'Auto'
}

const appStateReducer = createReducer(initialState, builder => {
    return builder
        .addCase(setBridgeServiceIsInitialized, (state, action) => {
            state.bridgeServiceIsInitialized = action.payload.bridgeServiceIsInitialized
        })

        .addCase(setTheme, (state, action) => {
            state.theme = action.payload.theme
        })
})

export default appStateReducer