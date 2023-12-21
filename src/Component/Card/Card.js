import React, { useState } from "react";
import "./Card.css";
import Form from "../Form/Form";

const Card = () => {
  const [isFormSet, setForm] = useState(false);
  
  return (
    <>
      <div className="container-fluid">
        <div className="row heading">
          <div className="col-md-4 cards-form" >
            <span className="Todo">TODO LIST</span>
            <span className="more">...</span>

            <div className="card">
              <div className="row card-1">
                <div className="col-md-5">
                  <button className="urgent">URGENT</button>
                </div>
                <div className="col-md-4">
                  <button className="Fronted">FRONTED</button>
                </div>
              </div>
              <h5 className="note">Add Date to Function Done</h5>
              <button
                className="addcart"
                onClick={() => {
                  setForm(true);
                }}
              >
                + Add Card
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <span className="Todo">IN PROGRESS </span>
            <span className="more">...</span>
            <div className="card">
              <div className="row card-1">
                <div className="col-md-5">
                  <button className="urgent">URGENT</button>
                </div>
                <div className="col-md-4">
                  <button className="Fronted">FRONTED</button>
                </div>
                </div>
                <h5 className="demonstarte">Demonstarte Kanban</h5>
              

              {/* <button className="addcart" onClick={()=>{setForm(true)}}>+ Add Card</button> */}
            </div>
          </div>
          <div className="col-md-4">
            <span className="Todo">FINiSHED</span>
            <span className="more">...</span>
            <div className="card">
              {/* <button className="addcart" onClick={()=>{setForm(true)}}>+ Add Card</button> */}
            </div>
          </div>
        </div>
      </div>
      {isFormSet ? <Form setForm={setForm} /> : null}
    </>
  );
};

export default Card;
