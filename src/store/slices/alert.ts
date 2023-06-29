import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../store/index";
import { wait } from "../../utils";

interface Alert {
  id: string | number;
  type: string;
  text: string;
  completed: boolean;
}

interface AlertState {
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
    const { alerts } = getState();
    const id = type + text + alerts.alertList.length;
    dispatch(addAlert({ id, type, text }));
    await wait(5000);
    dispatch(deleteAlert({ id }));
  };
};
export default alertsSlice.reducer;