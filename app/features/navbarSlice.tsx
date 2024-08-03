import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface INavbar {
    openMobile: boolean;
    isHover: {
         isHover: boolean;
         name: string;
      };
}

const initialState: INavbar = {
    openMobile: false,
      isHover: {
         isHover: false,
         name: '',
      },
};

const navBarSlice = createSlice({
    name: 'navbar',
    initialState: initialState,
    reducers: {
        setOpenMobile: (state, action: PayloadAction<boolean>) => {
            state.openMobile = action.payload;
        },
         setIsHover: (state, action: PayloadAction<{ isHover: boolean; name: string }>) => {
               state.isHover = action.payload;
        },
    },
});

export const { setOpenMobile, setIsHover } = navBarSlice.actions;

export default navBarSlice.reducer;