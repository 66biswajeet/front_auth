import React from "react";
import styled from "styled-components";
import "./Header.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const Header = styled.div`
    text-align: center;
    font-size: 30px;
    background-color: black;
    color: white;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    text-decoration: none;
  `;

  const Img = styled.img`
    width: 50px;
    border-radius: 50%;
  `;

  const Btn = styled.div`
    height: 50%;
    background: #9dd0fa;
    padding: 0 10px;
    border-radius: 5px;

    &:hover {
      color: black;
    }
  `;

  const [userdata, setUserdata] = useState({});
  console.log("response", userdata);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://frontauth-zkve.onrender.com/sucess",
        {
          withCredentials: true,
        }
      );

      setUserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  // logoout;
  const logout = () => {
    window.open("https://frontauth-zkve.onrender.com/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Header>
        HEADER
        {/* <li style={{ color: "white", fontWeight: "bold" }}>
          {userdata?.displayName}
        </li>
        <Img src={userdata?.image}></Img> */}
        {/* start */}
        {Object?.keys(userdata)?.length > 0 ? (
          <>
            {/* <li style={{ color: "black", fontWeight: "bold" }}>
              {userdata?.displayName}
            </li> */}

            <Btn onClick={logout} style={{ cursor: "pointer" }}>
              Logout
            </Btn>
            <li>
              <img
                src={userdata?.image}
                style={{ width: "50px", borderRadius: "50%" }}
                alt=""
              />
            </li>
          </>
        ) : (
          <li>APP</li>
        )}
        {/* end */}
      </Header>
    </>
  );
};

export default Header;
