import React from "react";
import { Twitter } from "react-social-icons";

function Profile(props) {
  const { picture, name } = props;

  return (
    <>
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <Twitter url="https://www.twitter.com/etima_" />
    </>
  );
}
export default Profile;
