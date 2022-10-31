import React from "react";

function Links(props) {
  let { id, link, name } = props;
  return (
    <>
      <a id={id} href={link}>
        {name}
      </a>
    </>
  );
}
export default Links;
