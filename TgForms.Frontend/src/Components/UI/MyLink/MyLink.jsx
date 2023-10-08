import React from 'react';
import {Link} from "react-router-dom";
import mcl from "./myLink.module.css"

const MyLink = ({to, value, ...props}) => {
  return (
      <>
        <Link
            to={to}
            children={value}
            className={mcl.myLink + ' ' + props.className}
        />
      </>
  );
};

export default MyLink;