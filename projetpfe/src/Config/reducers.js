import { createSlice } from '@reduxjs/toolkit';
import requestsData from '../Components/leave_requests.json';
import employeeJson from '../Components/employee.json';

const initialState = {
  requests: requestsData.leaveRequests,
  employees: employeeJson.Employees,
};

export const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addRequest: (state, action) => {
      state.requests = [...state.requests, action.payload];
    },
    updateRequest: (state, action) => {
      const request = state.requests.find((req) => req.id === parseInt(action.payload.id));
      if (request) {
        request.leaveReason = action.payload.leaveReason;
        request.startDate = action.payload.startDate;
        request.endDate = action.payload.endDate;
        request.detail = action.payload.detail;
      }
    },
    deleteRequest: (state, action) => {
      state.requests = state.requests.filter((request) => request.id !== action.payload);
    },
    acceptRequest: (state, action) => {
      state.requests = state.requests.map((request) => {
        if (request.id === action.payload) {
          return {
            ...request,
            status: 'Accepted',
          };
        }
        return request;
      });
    },
    refuseRequest: (state, action) => {
      state.requests = state.requests.map((request) => {
        if (request.id === action.payload) {
          return {
            ...request,
            status: 'Refused',
          };
        }
        return request;
      });
    },
    updateMission: (state, action) => {
      const emps = state.employees.find((emp) => emp.employeeId === parseInt(action.payload.id));
      if (emps) {
        emps.mission = action.payload.mission;
      }
    },
  },
});

export const {
  addRequest,
  updateRequest,
  deleteRequest,
  acceptRequest,
  refuseRequest,
  updateMission,
} = requestsSlice.actions;

export default requestsSlice.reducer;
