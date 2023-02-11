import { Drawer, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const DrawerComp = (props) => {
  const [open, setOpen] = useState(false);
  const { menus } = props;
  const handleBurger = () => {
    if (open === false) {
      setOpen(true);
    }
  };
  console.log(open);
  return (
    <div className=" lg:hidden  text-center">
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: "50%" },
        }}
      >
        {menus.map((menu, index) => (
          <ListItemButton
            component="a"
            key={index}
            href={menu.link}
            className="bg-secondary side-bar-link border text-center"
          >
            <Link
              to={`/${menu.title}`}
              relative="path"
              className="mx-auto divide-y divide-slate-200"
            >
              {menu.title}
            </Link>
          </ListItemButton>
        ))}
      </Drawer>
      <span onClick={handleBurger}>
        <button className="btn btn-square text-xl">
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </span>
    </div>
  );
};

export default DrawerComp;
