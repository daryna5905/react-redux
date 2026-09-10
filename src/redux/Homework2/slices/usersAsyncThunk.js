import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersAPI } from '../services/services';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await usersAPI.fetchAllUsers();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchUsersByAlbum = createAsyncThunk(
  'users/fetchByAlbum',
  async (id, { rejectWithValue }) => {
    try {
      return await usersAPI.fetchByAlbum(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
