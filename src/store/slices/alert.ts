import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../store/index";
import { wait } from "../../utils";

export interface Alert {
  id: string | number;
  type?: "error" | "success" | "info" | "warning";
  text: string;
  completed: boolean;
}

export interface AlertState {
  alertList: Alert[];
}

const initialState: AlertState = {
  alertList: [],
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert(state, action) {
      const { type, text, id } = action.payload;
      state.alertList.push({ id, type, text, completed: false });
    },
    deleteAlert(state, action) {
      const { id } = action.payload;
      state.alertList = state.alertList.filter((item) => {
        return item.id !== id;
      });
    },
  },
});

export const { addAlert, deleteAlert } = alertsSlice.actions;

export const handleAlert = (type: string, text: string): AppThunk => {
  return async (dispatch, getState) => {
    const id = type + new Date().getTime();
    dispatch(addAlert({ id, type, text }));
    await wait(5000);
    dispatch(deleteAlert({ id }));
  };
};
export default alertsSlice.reducer;
