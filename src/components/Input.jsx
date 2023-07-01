import React from "react";
const onClick = () => alert("Coming Soon");
const Input = () => {
  return (
    <div className="input p-2 border-top d-flex">
      <input
        className="form-control me-2 bg-transparent shadow-none border-0"
        type="search"
        placeholder="Message.."
      />
      <div
        className="icons d-flex gap-4 fs-4 ms-2 me-3"
        role="button"
        tabIndex={0}
      >
        <div>
          <input type="file" id="file" className="d-none" />
          <label htmlFor="file" role="button" tabIndex={0}>
            <i className="bi bi-paperclip"></i>
          </label>
        </div>
        <i className="bi bi-send"></i>
      </div>
    </div>
  );
};

export default Input;
