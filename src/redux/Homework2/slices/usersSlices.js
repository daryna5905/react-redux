import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './usersAsyncThunk';
import { fetchUsersByAlbum } from './usersAsyncThunk';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
    albumsLoading: false,
    albumsError: null,
    albums: [],
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUsersByAlbum.pending, (state) => {
        state.albumsLoading = true;
        state.albumsError = null;
      })
      .addCase(fetchUsersByAlbum.fulfilled, (state, action) => {
        state.albumsLoading = false;
        state.albums = action.payload;
      })
      .addCase(fetchUsersByAlbum.rejected, (state, action) => {
        state.albumsLoading = false;
        state.albumsError = action.payload;
      });
  },
});

export const { clearError } = usersSlice.actions;
export default usersSlice.reducer;
