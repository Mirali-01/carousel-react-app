import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Receipt from "./components/Receipt";
import receiptInfo from "./models/receiptInfo";

function App() {
  // useState(receiptInfo);
  const totalReceipts = receiptInfo.map((receipt) => {
    return receipt.paid ? null : <Receipt currentReceipt={receipt} />;
  });

  return <div className="App">{totalReceipts}</div>;
}

export default App;

// reciepts are put inside a defined space instead of individual spaces
