import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";

const LeftBar = () => {
  const location = useLocation();
  const leftBarItems = [{title: 'API KEYS', link: '/Settings'},
    {title: 'Profile', link: '/'},
    {title: 'Password', link: 'https://www.google.com/'},
    {title: 'Team', link: 'https://www.google.com/'},
    {title: 'Plan', link: 'https://www.google.com/'},
    {title: 'Billing', link: 'https://www.google.com/'},
    {title: 'Email', link: 'https://www.google.com/'},
    {title: 'Notifications', link: 'https://www.google.com/'},
    {title: 'Integrations', link: 'https://www.google.com/'},
    {title: 'Api', link: 'https://www.google.com/'},
  ]
  return (
    <div className="left-bar">
      {leftBarItems.map((item) => <Link className={`left-bar-item ${item.link === location.pathname ? 'active' : ''}`} to={item.link}>{item.title}</Link>)}
    </div>
  );
};

export default LeftBar;
