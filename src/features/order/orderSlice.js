import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "abcd",
    name: "biriyani",
    price: 10,
    quantity: 2,
    calories: 20,
    addons: ["onion", "cheese"],
  },
  {
    id: "abcde",
    name: "chakka",
    price: 20,
    quantity: 5,
    calories: 200,
    addons: ["olakka", "ooola"],
  },
  {
    id: "abcdef",
    name: "toato",
    price: 20,
    quantity: 5,
    calories: 200,
    addons: ["olakka", "ooola"],
  },
];

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    deleteOrder: (state, action) => {
      const newArr = state.filter((st) => st.id !== action.payload);
      return [...newArr];
    },
  },
});

export const { deleteOrder } = orderSlice.actions;

export const selectAllOrder = (state) => state.order;

export default orderSlice.reducer;
