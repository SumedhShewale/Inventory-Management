import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: Math.random().toString(),
      type: "bullDozers",
      Name: "",
      Title: "",
      Grade: "asdas",
      Brand: "ADF",
      Quantity: 10,
      Date: "12-02-2022",
    },
    {
      id: Math.random().toString(),
      type: "chainsaws",
      Name: "",
      Title: "",
      Brand: "ADF",
      Grade: "asdas",
      Length: "12",
      Quantity: 10,
      Date: "11-01-2022",
    },
    {
      id: Math.random().toString(),
      type: "bullDozers",
      Name: "",
      Title: "",
      Brand: "ADF",
      Grade: "asdas",
      Quantity: 10,
      Date: "06-02-2022",
    },
    {
      id: Math.random().toString(),
      type: "chainsaws",
      Name: "",
      Title: "",
      Grade: "asdas",
      Brand: "ADF",
      Length: "12",
      Quantity: 10,
      Date: "12-01-2022",
    },
  ],
  objectTypes: [
    {
      id: Math.random().toString(),
      title: "Bull Dozer",
      type: "bullDozers",
      fields: [
        { type: "Text", label: "Name" },
        { type: "Text", label: "Title" },
        { type: "Text", label: "Grade" },
        { type: "Number", label: "Quantity" },
        { type: "Text", label: "Brand" },
        { type: "Date", label: "Date" },
      ],
    },
    {
      id: Math.random().toString(),
      title: "Chainsaws",
      type: "chainsaws",
      fields: [
        { type: "Text", label: "Name" },
        { type: "Text", label: "Title" },
        { type: "Text", label: "Grade" },
        { type: "Number", label: "Quantity" },
        { type: "Number", label: "Length" },
        { type: "Date", label: "Date" },
      ],
    },
  ],
  status: "idle",
};

export const slice = createSlice({
  name: "objects",
  initialState,
  reducers: {
    addition: (state, action) => {
      state.value = [...action.payload];
    },
    additionType: (state, action) => {
      state.objectTypes = [...action.payload];
    },
  },
});

export const { addition, additionType } = slice.actions;

export const selectObjects = (state) => {
  return state.counter.value;
};

export const selectObjectsTypes = (state) => {
  return state.counter.objectTypes;
};
export const addObject = (data) => (dispatch, getState) => {
  let currentState = selectObjects(getState());
  dispatch(addition([...currentState, ...data]));
};

export const editObject = (data, index) => (dispatch, getState) => {
  let currentState = [...selectObjects(getState())];
  currentState[index] = { ...currentState[index], ...data };
  dispatch(addition([...currentState]));
};

export const addObjectType = (data) => (dispatch, getState) => {
  let currentState = selectObjectsTypes(getState());
  dispatch(additionType([...currentState, ...data]));
};

export const editObjectType = (data, index) => (dispatch, getState) => {
  let currentState = [...selectObjectsTypes(getState())];
  currentState[index] = { ...currentState[index], ...data };
  dispatch(additionType([...currentState]));
};

export default slice.reducer;
