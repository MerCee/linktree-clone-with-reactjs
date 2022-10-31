import React from "react";

function Profile(props) {
  const { picture, name } = props;

  return (
    <>
      <img src={picture} alt="" />
      <h3>{name}</h3>
    </>
  );
}
export default Profile;
