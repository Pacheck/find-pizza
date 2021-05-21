export type UserActionType = 'SET_CURRENT_USER';

export interface UserAction {
    type: UserActionType, 
    payload: any 
}
