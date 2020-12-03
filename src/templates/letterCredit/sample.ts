import { LetterCredit } from "./types";

export const letterCredit: LetterCredit = {
  name: "Letter of Credit",
  logo:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQV6NicJvNSgzuLopZXtJymIRQavwgZwPUc5_X-7K84YW2nuj1TWDgGG2zTXu8cLHDmnMAoZeCmgnfswQ4Q8BJtJvoyU9Ud1jEfdtP4jDc&usqp=CAU&ec=45722098",
  creditNum: "123456",
  issueDate: "11-Nov-2020",
  partialShipments: "Partial Shipments is required",
  sellerName: "Seller A",
  buyerName: "Buyer B",
  goodsDesc: "A carton of coke",
  quantity: "1",
  price: "$12",
  portOfLoading: "Malaysia",
  portOfDestination: "India",
  transhipment: "Transhipments via Singapore",
  $template: {
    name: "LETTER_CREDIT",
    type: "EMBEDDED_RENDERER",
    url: "http://localhost:3000"
  },
  links: {
    self: {
      href:
        "https://action.openattestation.com/?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fapi-ropsten.tradetrust.io%2Fstorage%2F1df7a8b2-9998-44d0-acbb-d0598f883aba%22%2C%22key%22%3A%228ff52a5980543346784e16fd9834aeadc38c4bfe28394d3bb7449ada2f40efaf%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fdev.tradetrust.io%2F%22%7D%7D"
    }
  }
};
