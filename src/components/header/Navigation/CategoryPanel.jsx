import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import Button from "@mui/material/Button";

import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegMinusSquare } from "react-icons/fa";

import { IoClose } from "react-icons/io5";

import "./style.css"; // Assuming you have a CSS file for styles

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = React.useState(null);
  const [innersubmenuIndex, setInnerSubmenuIndex] = React.useState(null);
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innersubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          {/* First main item */}
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FaRegMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative mb-1">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Women
                    </Button>
                  </Link>

                  {innersubmenuIndex === 0 ? (
                    <FaRegMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}
                  {innersubmenuIndex === 0 && (
                    <ul className="inner_submenu  w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Sarees
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Tops
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Jeans
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="list-none relative mb-1">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Girls
                    </Button>
                  </Link>

                  {innersubmenuIndex === 1 ? (
                    <FaRegMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}
                  {innersubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Kurtas & Suits
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Tops
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Second main item */}
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Electronics
              </Button>
            </Link>
            {submenuIndex === 2 ? (
              <FaRegMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(2)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(2)}
              />
            )}

            {submenuIndex === 2 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative mb-1">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Mobile
                    </Button>
                  </Link>

                  {innersubmenuIndex === 2 ? (
                    <FaRegMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  )}
                  {innersubmenuIndex === 2 && (
                    <ul className="inner_submenu  w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Sarees
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Samsung
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Oppo
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Vivo
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="list-none relative mb-1">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Laptop
                    </Button>
                  </Link>

                  {innersubmenuIndex === 3 ? (
                    <FaRegMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(3)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(3)}
                    />
                  )}
                  {innersubmenuIndex === 3 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Dell
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Mac
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          HP
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );
  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
