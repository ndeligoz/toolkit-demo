import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userTimeElapsed: 0,
    timerId: null,
}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        timer: (state) => {

            state.timerId = setInterval(() => {
                state.userTimeElapsed += 1;
            }, 1000);
            console.log('...');
        }
    },

})

// Action creators are generated for each case reducer function
export const { timer } = userSlice.actions

export default userSlice.reducer


