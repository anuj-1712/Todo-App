import React from "react";

export default function Notes(props) {
  return (
    <>
      <div className="form-check d-flex align-items-center my-3">
        <input
          className="form-check-input me-2"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          style={{
            height: "40%",
            maxHeight: "35px",
            minHeight: "25px",
            width: "7%",
            maxWidth: "30px",
            minWidth: "25px",
            border: "2px solid",
          }}
        />
        <label className="form-check-label fs-4" htmlFor="flexCheckDefault" style={{color:"#F0F0F0" , fontFamily:"cursive" , fontWeight : "bold" , width:"70vw" , marginRight:"1rem"}}>
          {props.title}
        </label>
      </div>
    </>
  );
}
