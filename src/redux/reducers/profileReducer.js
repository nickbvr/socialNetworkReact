let initialState = {
        posts: [
            {id: 1, like: 3, message: 'dolor sit amet'},
            {id: 2, like: 12, message: 'lorem ipsum'},
            {id: 3, like: 8, message: 'Джо Джо'},
            {id: 4, like: 19, message: 'test test'}
        ],
    }

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            state.posts.push(
                {id: '', like: '', message: action.newText}
            )
            return state
        default:
            return state
    }
}
export const addPostCreator = (text) => ({type: 'ADD_POST', newText: text})