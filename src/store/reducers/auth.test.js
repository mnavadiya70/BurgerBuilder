import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('Auth reducer', () => {
    it('it should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

    it('it should return token when login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
                type: actionTypes.AUTH_SUCCESS,
                token: 'test',
                userId: '1'
            }))
            .toEqual({
                token: 'test',
                userId: '1',
                error: null,
                loading: false,
                authRedirectPath: '/'
            });
    });
});