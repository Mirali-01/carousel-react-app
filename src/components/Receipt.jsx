import React from 'react'

const Receipt = (props) => {

    console.log(props)
  return (
    <div className="receipt">
        <h1> {props.currentReceipt.person} </h1>

        <h3> <span>{"Main: "}</span> {props.currentReceipt.order.main}  </h3>
        <h3> <span>{"Protein: "}</span> {props.currentReceipt.order.protein}  </h3>
        <h3> <span>{"Rice: "}</span> {props.currentReceipt.order.rice}  </h3>
        <h3> <span>{"Sauce: "}</span> {props.currentReceipt.order.sauce}  </h3>
        <h3> <span>{"Drink: "}</span> {props.currentReceipt.order.drink}  </h3>
        <h3> <span>{"Cost: "}</span> {props.currentReceipt.order.cost}  </h3>
    </div>
  )
}

export default Receipt