export const theme = (state, action) => {
    switch(action.type) {
        case 'dark':
            return {theme: 'dark'}
        case 'light':
            return {theme: 'light'}
        default: 
            throw new Error()
    }
}