import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

// import { createSelector } from "reselect";

const slice = createSlice({
  name: "orders",
  initialState: {
    list: [],
    items: {
      shirt: {
        name: "",
        quantity: 0,
        price: 0,
        height: "",
        chest: "",
        hip: "",
        sleeve: "",
        shoulder: "",
      },
      jacket: {
        name: "",
        quantity: 0,
        price: 0,
        height: "",
        chest: "",
        hip: "",
        sleeve: "",
        shoulder: "",
      },
      pants: {
        name: "",
        quantity: 0,
        price: 0,
        height: "",
        hip: "",
        leg: "",
      },
      scarf: {
        name: "",
        quantity: 0,
        price: 0,
      },
    },
    totalPrice: 0,
    totalCount: 0,
    url: "",
    authority: "",
    error: "",
    submited: false,
  },
  reducers: {
    totalOrdered: (orders, action) => {
      orders.totalCount =
        parseInt(orders.items.jacket.quantity) +
        parseInt(orders.items.pants.quantity) +
        parseInt(orders.items.shirt.quantity) +
        parseInt(orders.items.scarf.quantity);
      orders.totalPrice =
        orders.items.jacket.price +
        orders.items.pants.price +
        orders.items.shirt.price +
        orders.items.scarf.price;
    },

    scarfAdded: (orders, action) => {
      const { quantity, price, name } = action.payload;
      orders.items.scarf.name = name;
      orders.items.scarf.price = price;
      orders.items.scarf.quantity = quantity;

      orders.list = orders.list.filter((order) => order.name !== "مقنعه");

      orders.list.push(action.payload);
      orders.list = orders.list.filter((order) => order.quantity !== "0");
    },

    pantsAdded: (orders, action) => {
      const {
        pantsHeight,
        pantsHip,
        pantsLeg,
        quantity,
        price,
        name,
      } = action.payload;
      orders.items.pants.height = pantsHeight;
      orders.items.pants.hip = pantsHip;
      orders.items.pants.leg = pantsLeg;
      orders.items.pants.quantity = quantity;
      orders.items.pants.price = price;
      orders.items.pants.name = name;

      orders.list = orders.list.filter((order) => order.name !== "شلوار");

      orders.list.push(action.payload);
      orders.list = orders.list.filter((order) => order.quantity !== "0");
    },
    shirtAdded: (orders, action) => {
      const {
        shirtHeight,
        shirtChest,
        shirtHip,
        quantity,
        shirtShoulder,
        shirtSleeve,
        price,
        name,
      } = action.payload;
      orders.items.shirt.height = shirtHeight;
      orders.items.shirt.chest = shirtChest;
      orders.items.shirt.hip = shirtHip;
      orders.items.shirt.quantity = quantity;
      orders.items.shirt.shoulder = shirtShoulder;
      orders.items.shirt.sleeve = shirtSleeve;
      orders.items.shirt.price = price;
      orders.items.shirt.name = name;

      orders.list = orders.list.filter((order) => order.name !== "بلوز");
      orders.list.push(action.payload);
      orders.list = orders.list.filter((order) => order.quantity !== "0");
    },
    jacketAdded: (orders, action) => {
      const {
        jacketHeight,
        jacketChest,
        jacketHip,
        quantity,
        jacketShoulder,
        jacketSleeve,
        price,
        name,
      } = action.payload;
      orders.items.jacket.height = jacketHeight;
      orders.items.jacket.chest = jacketChest;
      orders.items.jacket.hip = jacketHip;
      orders.items.jacket.quantity = quantity;
      orders.items.jacket.shoulder = jacketShoulder;
      orders.items.jacket.sleeve = jacketSleeve;
      orders.items.jacket.price = price;
      orders.items.jacket.name = name;

      orders.list = orders.list.filter((order) => order.name !== "مانتو");
      orders.list.push(action.payload);
      orders.list = orders.list.filter((order) => order.quantity !== "0");
    },
    ordersRequestFailed: (orders, action) => {
      orders.error = action.payload;
    },
    paymentRequested: (orders, action) => {
      const { url, authority } = action.payload;
      orders.authority = authority;
      orders.url = url;
    },
  },
});
export const {
  paymentRequested,
  totalOrdered,
  usersAdded,
  jacketAdded,
  scarfAdded,
  shirtAdded,
  pantsAdded,
  ordersRequestFailed,
} = slice.actions;

const url = "/addPayments";

export const requestPayment = (orders) =>
  apiCallBegan({
    url,
    method: "post",
    data: orders,
    onSuccess: paymentRequested.type,
    onError: ordersRequestFailed.type,
  });

export default slice.reducer;
