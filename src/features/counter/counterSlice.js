import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: Math.random().toString(),
      type: "bullDozers",
      Name: "",
      Title: "",
      Grade: "asdas",
      "Bar Length": "12",
      Date: "",
    },
    {
      id: Math.random().toString(),
      type: "chainsaws",
      Name: "",
      Title: "",
      Grade: "asdas",
      "Bar Length": "12",
      Date: "",
    },
    {
      id: Math.random().toString(),
      type: "bullDozers",
      Name: "",
      Title: "",
      Grade: "asdas",
      "Bar Length": "10",
      Date: "",
    },
    {
      id: Math.random().toString(),
      type: "chainsaws",
      Name: "",
      Title: "",
      Grade: "asdas",
      "Bar Length": "12",
      Date: "",
    },
  ],
  objectTypes: [
    {
      id: Math.random().toString(),
      title: "Bull Dozer",
      type: "bullDozers",
      fields: [
        { type: "Text", label: "Name" },
        { type: "Number", label: "Quantity" },
        { type: "Text", label: "Brand" },
      ],
    },
    {
      id: Math.random().toString(),
      title: "Chainsaws",
      type: "chainsaws",
      fields: [
        { type: "Text", label: "Name" },
        { type: "Number", label: "Quantity" },
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
