import { Invoice } from "./types";

export const invoice: Invoice = {
  id: "2034",
  date: "2018-2-21",
  customerId: "564",
  terms: "Due Upon Receipt",
  billFrom: {
    name: "ABC Company",
    streetAddress: "Level 1, Industry Offices",
    city: "Singapore",
    postalCode: "123456",
    phoneNumber: "60305029"
  },
  billTo: {
    company: {
      name: "DEF Company",
      streetAddress: "Level 2, Industry Offices",
      city: "Singapore",
      postalCode: "612345",
      phoneNumber: "61204028"
    },
    name: "James Lee",
    email: "def@company.com"
  },
  billableItems: [
    {
      description: "Service Fee",
      quantity: 1,
      unitPrice: 200,
      amount: 200
    },
    {
      description: "Labor: 5 hours at $75/hr",
      quantity: 5,
      unitPrice: 75,
      amount: 375
    },
    {
      description: "New client discount",
      quantity: 1,
      unitPrice: 50,
      amount: 50
    }
  ],
  subtotal: 625,
  tax: 0,
  taxTotal: 0,
  total: 625,
  $template: {
    name: "INVOICE",
    type: "EMBEDDED_RENDERER",
    url: "http://localhost:3000"
  }
};
