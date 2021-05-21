import { UserAction } from './types';

export const CHANGE_CURRENT_USER = <UserAction>(user: any) => ({
    type: 'SET_CURRENT_USER',
    payload: user
});

