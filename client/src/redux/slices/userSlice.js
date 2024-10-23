import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
}


// sign up
export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const responseData = await res.json();

      if (res.status === 400) {
        return rejectWithValue(responseData.message || 'Bad Request');
      }

      if (responseData.success === false) {
        return rejectWithValue(responseData.message);
      }

      return responseData; // Return response data for success case
    } catch (error) {
      return rejectWithValue(error.message); // Handle errors
    }
  }
);

// sign in
export const signInUser = createAsyncThunk(
  'user/signInUser',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const userSlice = createSlice(
  {
    name: "user",
    initialState,
    reducers: {
      signOutSuccess: (state) => {
        state.currentUser = null;
        state.error = null;
        state.loading = false;
      },
  },
  extraReducers: (builder) => {
    builder
    .addCase(signUpUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(signUpUser.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = null;
    })
    .addCase(signUpUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

     // Sign In
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
}
);

export const {
  signOutSuccess
} = userSlice.actions;

export default userSlice.reducer;