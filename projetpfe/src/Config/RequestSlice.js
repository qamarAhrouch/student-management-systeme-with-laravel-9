import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requests: [],
};

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addRequest: (state, action) => {
      state.requests.push(action.payload);
    },
    updateRequest: (state, action) => {
      const { id, leaveReason, startDate, endDate, detail } = action.payload;
      const request = state.requests.find((req) => req.id === parseInt(id));
      if (request) {
        request.leaveReason = leaveReason;
        request.startDate = startDate;
        request.endDate = endDate;
        request.detail = detail;
      }
    },
    deleteRequest: (state, action) => {
      state.requests = state.requests.filter((request) => request.id !== action.payload);
    },
    acceptRequest: (state, action) => {
      state.requests = state.requests.map((request) =>
        request.id === action.payload ? { ...request, status: 'Accepted' } : request
      );
    },
    refuseRequest: (state, action) => {
      state.requests = state.requests.map((request) =>
        request.id === action.payload ? { ...request, status: 'Refused' } : request
      );
    },
  },
});

export const { addRequest, updateRequest, deleteRequest, acceptRequest, refuseRequest } =
  requestsSlice.actions;

export default requestsSlice.reducer;
