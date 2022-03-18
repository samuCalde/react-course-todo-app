import React from "react";

function TodoIcon({icon, color}) {
  return <i className={`fa fa-${icon}`} style={{color: color}}></i>;
}

export { TodoIcon };
