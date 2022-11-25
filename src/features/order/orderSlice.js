import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "abcd",
    name: "biriyani",
    price: 10,
    quantity: 2,
    total: 20,
    calories: 20,
    img: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    addons: ["onion", "cheese"],
  },
];

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
