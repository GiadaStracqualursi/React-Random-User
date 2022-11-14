import "../style/User.css";

import React, { Fragment, useEffect, useState } from "react";
import { BiHomeSmile, BiPhone, BiUser, BiEnvelope } from "react-icons/bi";

export function User() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      setData(results);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <div className="card" key={index}>
            
              <div className="img-container">
                <img src={item.picture.large} alt="#" />
                <h3> {item.login.username} </h3>
                <p>My password is: {item.login.password}</p>
              </div>
              <div className="user">
              

              <div className="row">
                <BiUser className="icons" />
                <h3>
                  My Name is: {item.name.first} {item.name.last}
                </h3>
              </div>

              <div className="row">
                <BiHomeSmile className="icons" />
                <p>
                  <strong>City: </strong>
                  {item.location.city}
                  <br />
                  <strong>State: </strong>
                  {item.location.state}
                  <br />
                  <strong>Country: </strong>
                  {item.location.country}
                </p>
              </div>

              <div className="row">
                <BiPhone className="icons" />
                <p>
                  {item.phone} | {item.cell}
                </p>
              </div>

              <div className="row">
                <BiEnvelope className="icons" />
                <p> {item.email}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
