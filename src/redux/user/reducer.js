
const initialState = {
    currentUser: false,
    isLoggedIn: false,
    token: '',
    mensagem: ''
};

const userReducer = (state = initialState, action) => {
    if(action.type === 'user/login'){
        return {...state, 
        currentUser: action.payload,
        isLoggedIn: true,
        token: action.payload.token
        }
    }
    if(action.type === 'user/register'){
        return {...state, 
        currentUser: action.payload,
        isLoggedIn: true,
        token: action.payload.token}
    }
    if(action.type === 'user/logout'){
        return {...state, 
        currentUser: false,
        isLoggedIn: false}
    }
    if(action.type === 'user/error'){
        return {...state,
            currentUser: false,
            isLoggedIn: false,
            mensagem: action.payload
        }
    }
    return state;
}

export default userReducer;