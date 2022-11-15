import "../style/User.css";

import React, { useEffect, useState } from "react";
import { BiHomeSmile, BiPhone, BiUser, BiEnvelope, BiLockOpenAlt } from "react-icons/bi";

export function User() {
  const [data, setData] = useState([]);
  const [name, setName] = useState(false);
  const [location, setLocation] = useState(false);
  const [number, setNumber] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

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
                
              </div>
              <div className="user">
              

              <div className="row">
                <BiUser onMouseLeave={()=>{setName(false)}}  onMouseOver={()=>{setName(true)}} className="icons" />
                { name && <h3> 
                  My Name is: {item.name.first} {item.name.last}
                </h3>}
              </div>

              <div className="row">
                <BiHomeSmile onMouseLeave={()=>{setLocation(false)}}  onMouseOver={()=>{setLocation(true)}} className="icons" />
                { location && <p>
                  <strong>City: </strong>
                  {item.location.city}
                  <br />
                  <strong>State: </strong>
                  {item.location.state}
                  <br />
                  <strong>Country: </strong>
                  {item.location.country}
                </p>}
              </div>

              <div className="row">
                <BiPhone onMouseLeave={()=>{setNumber(false)}}  onMouseOver={()=>{setNumber(true)}} className="icons" />
                { number && <p>
                  {item.phone} | {item.cell}
                </p>}
              </div>

              <div className="row">
                <BiEnvelope onMouseLeave={()=>{setEmail(false)}}  onMouseOver={()=>{setEmail(true)}} className="icons" />
                { email && <p> {item.email}</p>}
              </div>
              
              <div className="row">
                  <BiLockOpenAlt onMouseLeave={()=>{setPassword(false)}}  onMouseOver={()=>{setPassword(true)}} className="icons" />
              { password && <p>My password is: {item.login.password}</p>}

              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}
