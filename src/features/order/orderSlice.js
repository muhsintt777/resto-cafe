import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   id: "abcd",
  //   name: "biriyani",
  //   price: 10,
  //   quantity: 2,
  //   calories: 20,
  //   addons: ["onion", "cheese"],
  // },
  // {
  //   id: "abcde",
  //   name: "chakka",
  //   price: 20,
  //   quantity: 5,
  //   calories: 200,
  //   addons: ["olakka", "ooola"],
  // },
  // {
  //   id: "abcdef",
  //   name: "toato",
  //   price: 20,
  //   quantity: 5,
  //   calories: 200,
  //   addons: ["olakka", "ooola"],
  // },
];

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    deleteOrder: (state, action) => {
      const newArr = state.filter((st) => st.id !== action.payload);
      return [...newArr];
    },
    addOrder: (state, action) => {
      state.unshift(action.payload);
    },
    incrementQuantity: (state, action) => {
      const orderObj = state.find((odr) => odr.id === action.payload);
      const newOrderObj = {
        id: orderObj.id,
        name: orderObj.name,
        price: orderObj.price,
        quantity: orderObj.quantity + 1,
        calories: orderObj.calories,
        addons: orderObj.addons,
      };

      const newArr = state.filter((odr) => odr.id !== action.payload);
      return [newOrderObj, ...newArr];
    },
    decrementQuantity: (state, action) => {
      const orderObj = state.find((odr) => odr.id === action.payload);
      const newOrderObj = {
        id: orderObj.id,
        name: orderObj.name,
        price: orderObj.price,
        quantity: orderObj.quantity - 1,
        calories: orderObj.calories,
        addons: orderObj.addons,
      };

      const newArr = state.filter((odr) => odr.id !== action.payload);
      return [newOrderObj, ...newArr];
    },
  },
});

export const { deleteOrder, addOrder, incrementQuantity, decrementQuantity } =
  orderSlice.actions;

export const selectAllOrder = (state) => state.order;

export default orderSlice.reducer;
