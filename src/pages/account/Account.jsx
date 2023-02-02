import React from "react";
import image from "../../assets/images/input.png";
import "./account.css";

export const Account = () => {
  return (
    <>
      <section className="accountInfo">
        <div className="container boxItems">
          <h1>Account Information</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <input type="file" accept="image/*" src={image} alt="img" />
                <img
                  src="https://images.pexels.com/photos/11355572/pexels-photo-11355572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image"
                  class="image-preview"
                />
              </div>
            </div>
            <div className="right">
              <label htmlFor="">Username</label>
              <input type="text" />
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Password</label>
              <input type="password" />
              <button className="button">Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Account;
