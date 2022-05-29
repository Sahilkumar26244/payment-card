import "./styles.css";
import Card from "./comp/Card"
import {useState} from "react";
const d = new Date();
const curDate = d.getTime();

export default function App() {
  return (
    <>
      <Card 
      bgcolor="yellow"
      date="29/05/2020" 
      logo="logo" 
      title="Case Study" 
      compTitle="Amazon Gift"
      pay="Pay" 
      mode="Desktop - Mobile" />

      <Card 
      bgcolor="yellow"
      date="29/05/2020" 
      logo="logo" 
      title="Case Study" 
      compTitle="Amazon" 
      pay="Pay"
      mode="Desktop - Mobile" />

      <Card 
      bgcolor="redCol"
      date="29/05/2020" 
      logo="logoApple" 
      title="Case Study" 
      compTitle="Apple" 
      pay="Payment"
      mode="MacOs-Mobile" />
    </>
  );
}
