import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./NavTab.module.css";

const NavTab = ({ title, description, pathName, iconSrc: IconSrc, fontSize = 30, visible = true }) => {
  const history = useHistory();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const checkActive = () => {
      const currentPath = history.location.pathname;
      return setActive(currentPath.includes(pathName));
    };
    checkActive();

    return history.listen(checkActive);
  }, [history, pathName]);

  if (!visible) return null;

  return (
    <>
      <div className={`${classes.root} ${active && classes.active}`} onClick={() => history.push(pathName)}>
        <IconSrc style={{ fontSize: fontSize }} />
        <div>
          <p>{title}</p>
          <span>{description}</span>
        </div>
      </div>
      <hr className={classes.divider} />
    </>
  );
};

export default NavTab;
