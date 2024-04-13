import React from "react";
import Button from "./Button";
import PropTypes from 'prop-types'

Button.defaultProps = {
  color: "steelblue",
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes. func,
  
};

export default function Header({title,onAdd,showAdd}) {

  return (
    <>
      <header className="header">
        <h1>{title}</h1>
        <Button color={showAdd ? 'red':'green'} text={showAdd ? 'Close':'Add'} onClick={onAdd}/>
      </header>
    </>
  );
}
