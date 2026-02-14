import React from "react";

export const CardComponent = (props) => {
  return (
    <div className="container mt-5" style={{textAlign:"center"}}>
      <div className="card custom-card" style={{ width: "16rem" }}>
        <img
          src={props.image || "https://picsum.photos/300/200"}
          className="card-img-top"
          alt="image"
          style={{ height: "200px", width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title || "PROJECT "}</h5>
          <p className="card-text">{props.description || "DESCRIPTION "}</p>
          <a href={props.link || "#"} className="btn custom-btn">
            {props.buttonText || "Go somewhere"}
          </a>
        </div>
      </div>
    </div>
  );
};
