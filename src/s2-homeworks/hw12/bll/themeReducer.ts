const initState = {
    themeId: 1,
}

type InitStateType = typeof  initState
export const themeReducer = (state = initState, action: ThemeActionType): InitStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}

// type ActionType = ReturnType<typeof changeThemeId>
type ThemeActionType = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): ThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any
