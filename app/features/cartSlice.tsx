import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ICart {
    open: boolean;
}

const initialState: ICart = {
    open: false,
};

const cartSlice = createSlice({
    name: 'navbar',
    initialState: initialState,
    reducers: {
        setOpen : (state, action: PayloadAction<boolean>) => {
            console.log('action', action)
            state.open = action.payload;
        },
    },
});

export const { setOpen } = cartSlice.actions;

export default cartSlice.reducer;