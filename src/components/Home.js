import React from "react";

export default function Home() {
  return (
    <>
      <div id="home">
        <img
          src="https://images.pexels.com/photos/131979/pexels-photo-131979.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="a person writing a list"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "400px",
            maxHeight: "700px",
          }}
        />
      </div>
      <h1 className="text-primary text-center my-4 fs-1">
        Welcome To WebTick <i className="fa-solid fa-square-check ms-2"></i>
      </h1>
      <p className="text-dark fs-4 my-4 mx-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at ab,
        itaque aut dolore iste nisi repellat numquam laboriosam sed molestias,
        tenetur vitae voluptas quasi ipsum excepturi delectus iusto. Voluptate
        impedit architecto, nostrum quia tempore consequatur possimus ipsum
        culpa quos! Sit quod reprehenderit, fugiat velit totam magnam
        perspiciatis eius veritatis.
      </p>
      <div className="d-flex mx-4 my-4 text-primary justify-content-between flex-wrap align-items-center">
        <h3>Start by creating your first ToDo-List</h3>
        <a href="#/list">
          <button type="button" className="btn btn-primary ">
            List <i className="fa-solid fa-arrow-right"></i>
          </button>
        </a>
      </div>
    </>
  );
}
