import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./style.css";
import Cart from "../icons/cart";
import Search from "../icons/search";
import Heart from "../icons/heart";
import IcoX from "../icons/IcoX";

export default function Header(args) {
  let isDesktop = useMediaQuery({ query: "(min-width: 900px)" });
  let [isNavOpen, setIsNavOpen] = useState(!isDesktop);
  return (
    <>
      <style>
        {`
        .cartList::after{
          content:"${args.cartItem}";
        }
      `}
      </style>
      <header
        className="mainHeader"
        style={{ height: isNavOpen ? "10vh" : "" }}
      >
        <div className="left">
          <h1 className="glow">Web Name</h1>
          <span
            className="icox"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <IcoX clicked={isNavOpen} />
          </span>
        </div>
        <div style={{ display: isNavOpen ? "none" : "" }} className="nav">
          <ul>
            <li className="glow">მთავარი</li>
            <li className="glow">პროდუქცია</li>
            <li className="glow">კონტაქტი</li>
            <li className="glow">პირობები</li>
          </ul>
        </div>
        <div style={{ display: isNavOpen ? "none" : "" }} className="right">
          <ul>
            <li className="cartList">
              <Cart />
            </li>
            <li>
              <Search />
            </li>
            <li>
              <Heart />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
