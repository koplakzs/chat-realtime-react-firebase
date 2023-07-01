import React from "react";

const Search = () => {
  return (
    <div>
      <div className="search">
        <input
          className="form-control me-2 bg-transparent shadow-none"
          type="search"
          placeholder="Find a User"
        />
      </div>
      <div
        className="user mb-2 pb-2 pt-2 gap-3 d-flex align-items-center border-bottom border-secondary "
        role="button"
        tabIndex={0}
      >
        <img
          src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="rounded-circle border-0 ms-2"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "cover",
          }}
        />
        <p className="m-0">Your Name</p>
      </div>
    </div>
  );
};

export default Search;
