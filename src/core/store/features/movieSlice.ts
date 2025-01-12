import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoviesState {
  searchTerm: string;
}

const initialState: MoviesState = {
  searchTerm: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

// Export actions
export const { setSearchTerm } = moviesSlice.actions;

export default moviesSlice.reducer;
