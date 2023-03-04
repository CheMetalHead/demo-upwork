import React from "react";
import "./styles.scss";
import {useLocation} from 'react-router-dom';

const PageHeader = () => {
  const location = useLocation()
  console.log('test', location);
  return <div className="page-header">{location.pathname === '/' ? 'Home' : location.pathname.replace('/', '')} {location.search && ` -${search}`}</div>;
};

export default PageHeader;
