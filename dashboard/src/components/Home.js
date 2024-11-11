/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import { useCookies } from "react-cookie";


const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:3001",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home; 