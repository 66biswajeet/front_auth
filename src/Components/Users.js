import React from "react";
import Header from "./Header";
import Login from "./Login";

import styled from "styled-components";

import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Users = () => {
  const [userdata, setUserdata] = useState({});
  console.log("response", userdata);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://google-auth-project.onrender.com/sucess",
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
    window.open("https://google-auth-project.onrender.com/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #9dd0fa;
    height: 50vh;
    margin: 25px 0 0 0;
    font-size: 50px;
    list-style: none;
    text-align: center;
  `;

  return (
    <Container>
      <li style={{ color: "black", fontWeight: "bold" }}>
        HELLO <li>{userdata.displayName}</li>
      </li>
    </Container>
  );
};

export default Users;
