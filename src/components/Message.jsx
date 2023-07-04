import React from "react";

const Message = () => {
  return (
    <div className="d-flex mt-4 ms-4 me-4 flex-row-reverse">
      <div className="me-4 ms-4">
        <img
          src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="rounded-circle border-0"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
          }}
        />
        <p className="mt-1 fw-light">Just Now</p>
      </div>
      <div className="info-message d-flex flex-column">
        <p className="bg-success text-light p-2 ps-3 pe-3 rounded-3">Haiiii</p>
        {/* <img
          src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="border-0 "
          style={{
            height: "200px",
          }}
        /> */}
      </div>
    </div>
  );
};

export default Message;
