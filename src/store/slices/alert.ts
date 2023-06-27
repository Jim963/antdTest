import { createSlice } from "@reduxjs/toolkit";

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
export default alertsSlice.reducer;
