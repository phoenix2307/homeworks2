import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return state.sort((a,b)=>{
                if (action.payload === 'up'){
                    if (a.name > b.name){
                        return 1
                    }
                    if (a.name < b.name){
                        return -1
                    }
                    return 0
                }
                if (action.payload === 'down'){
                    if (a.name < b.name){
                        return 1
                    }
                    if (a.name > b.name){
                        return -1
                    }
                    return 0
                }
                return 0

            })

            // return newState // need to fix
        }
        case 'check': {
            state = state.filter((u)=>{
                return u.age > action.payload || u.age === action.payload
            })

            return state // need to fix
        }
        default:
            return state
    }
}
