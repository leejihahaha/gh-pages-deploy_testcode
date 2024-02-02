import React from "react";
import { Link } from "react-router-dom";

export default function RouteTest() {
  return (
    <>
      <Link to={"/"}>HOME</Link>
      <br />
      <Link to={"/about"}>ABOUT</Link>
    </>
  );
}
