

import React from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = React.useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="navigation">
        <div className="container flex items-center justify-end gap-5">
          <div className="col1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" /> Shop By Categories
              <FaAngleDown className="text-[14px] font-bold " />
            </Button>
          </div>
          <div className="col2 w-[60%]">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none">
                <Link
                  to="{/}"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[400] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[var(--primary-color)] !py-4">
                    Home
                  </Button>
                </Link>
              </li>

              <li className="list-none relative">
                <Link
                  to="{/}"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[400] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[var(--primary-color)] !py-4">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] bg-white shadow-md min-w-[150px] opacity-0 transition-all">
                  <ul className="p-3">
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full link transition ">
                        <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] bg-white shadow-md min-w-[150px] opacity-0 transition-all">
                          <ul className="p-3">
                            <li className="list-none w-full">
                              <Link
                                to="{/}"
                                className="w-full link transition "
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Women
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="{/}"
                                className="w-full link transition "
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Girls
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="{/}"
                                className="w-full link transition "
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Men
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full link transition ">
                        <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full link transition ">
                        <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link
                  to="{/}"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[400] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[var(--primary-color)] !py-4">
                    Electronics
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to="{/}"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[400] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[var(--primary-color)] !py-4">
                    Bags
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to="{/}"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[400] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[var(--primary-color)] !py-4">
                    Footwear
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to="{/}"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[400] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[var(--primary-color)] !py-4">
                    Groceries{" "}
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to="{/}"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[400] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[var(--primary-color)] !py-4">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="{/}"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[400] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[var(--primary-color)] !py-4">
                    Jwellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Category panel component */}
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
