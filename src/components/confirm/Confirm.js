import React from 'react'
import "./Confirm.css"

export default function Confirm(props) {

  return (
    <div
    id="confirmBox"
      className="Container justify-content-center align-items-center flex-column bg-danger rounded-3"
      style={{
        display:"none",
        width: "40%",
        maxWidth: "600px",
        minWidth: "250px",
        height: "20%",
        minHeight:"170px",
        maxHeight:"180px",
        position: "absolute",
        boxShadow: "3px 3px 15px indianred",
        zIndex:1
      }}
    >
      <h3 className="fs-4 text-light mx-4">
        Do you really want to delete the whole list?
      </h3>
      <div
        className="Container d-flex justify-content-between align-items-center flex-wrap mt-4 w-100"
        style={{ maxWidth: "500px", minWidth: "100px" }}
      >
        <button type="button" className="btn btn-primary mx-4" onClick={props.confirmCancel}>
          Cancel
        </button>{" "}
        <button type="button" className="btn btn-primary mx-4" onClick={props.confirmDelete} >
          Clear
        </button>
      </div>
    </div>
  )
}
