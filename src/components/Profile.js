import React from "react";

function Profile(props) {
  const { picture, alt, name } = props;

  return (
    <>
      <img src={picture} alt={alt} />
      <h2>{name}</h2>
    </>
  );
}
export default Profile;
