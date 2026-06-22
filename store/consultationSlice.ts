import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ConsultationLead = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

const initialState: ConsultationLead = {
  name: "",
  email: "",
  phone: "",
  city: "",
  message: ""
};

const consultationSlice = createSlice({
  name: "consultation",
  initialState,
  reducers: {
    updateLead: (state, action: PayloadAction<Partial<ConsultationLead>>) => ({
      ...state,
      ...action.payload
    }),
    clearLead: () => initialState
  }
});

export const { updateLead, clearLead } = consultationSlice.actions;
export default consultationSlice.reducer;
