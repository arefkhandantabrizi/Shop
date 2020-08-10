import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
// import { createSelector } from "reselect";

const slice = createSlice({
  name: "invoices",
  initialState: {
    name: "",
    username: "",
    schoolname: "",
    schoolgrade: "",
    items: [],
    address: "",
    phone: "",
    totalprice: "",
    ispayed: false,
    paymentcode: "",
    proccessed: false,
    error: "",
    submited: false,
    _id: "",
  },
  reducers: {
    invoiceCanceled: (invoices, action) => {
      invoices._id = action.payload._id;
    },
    invoiceValidated: (invoices, action) => {
      const { ispayed, paymentcode } = action.payload;
      invoices.ispayed = ispayed;
      invoices.paymentcode = paymentcode;
      invoices.submited = true;
    },

    invoiceAdded: (invoices, action) => {
      const {
        _id,
        name,
        username,
        schoolname,
        schoolgrade,
        items,
        address,
        phone,
        totalprice,
        ispayed,
        paymentcode,
        proccessed,
      } = action.payload;
      invoices.address = address;
      invoices.ispayed = ispayed;
      invoices.items = items;
      invoices.name = name;
      invoices.paymentcode = paymentcode;
      invoices.phone = phone;
      invoices.proccessed = proccessed;
      invoices.schoolgrade = schoolgrade;
      invoices.schoolname = schoolname;
      invoices.totalprice = totalprice;
      invoices.username = username;
      invoices._id = _id;
    },
    invoiceRequestsFailed: (invoices, action) => {
      invoices.error = action.payload;
    },
    invoiceClearedData: (invoices, action) => {
      const {
        _id,
        name,
        username,
        schoolname,
        schoolgrade,
        items,
        address,
        phone,
        totalprice,
        ispayed,
        paymentcode,
        proccessed,
      } = action.payload;
      invoices.address = address;
      invoices.ispayed = ispayed;
      invoices.items = items;
      invoices.name = name;
      invoices.paymentcode = paymentcode;
      invoices.phone = phone;
      invoices.proccessed = proccessed;
      invoices.schoolgrade = schoolgrade;
      invoices.schoolname = schoolname;
      invoices.totalprice = totalprice;
      invoices.username = username;
      invoices._id = _id;
    },
  },
});
export const {
  invoiceAdded,
  invoiceRequestsFailed,
  invoiceValidated,
  invoiceClearedData,
  invoiceCanceled,
} = slice.actions;

const url = "/invoices";
export const addInvoice = (invoice, jwt) =>
  apiCallBegan({
    url,
    method: "post",
    data: invoice,
    jwt,
    onSuccess: invoiceAdded.type,
    onError: invoiceRequestsFailed.type,
  });
export const updateInvoice = (invoice, jwt) =>
  apiCallBegan({
    url: url + "/:" + invoice._id,
    method: "put",
    data: invoice,
    jwt,
    onSuccess: invoiceValidated.type,
    onError: invoiceRequestsFailed.type,
  });

export default slice.reducer;
