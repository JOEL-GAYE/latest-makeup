import { useRef, useState } from "react";
import React from "react";
import "./Navbar.css";  
import avatar from "../Assests/Avatar/1703695629509.png";
import Cart from "./Cart";

const items = [
    {
        name: "PRODUCTS",
        items: ["Hair", "Facial", "Wigs", "Nails", "Men Items"],
    },
    {
        name: "PRODUCTS",
        items: ["Hair", "Facial", "Wigs", "Nails", "Men Items"],
    },
];

const Link = ({ items, activeItem, onHover }) => {
    const linkRef = useRef();

    const handleHover = () => {
        const rect = linkRef.current.getBoundingClientRect();
        onHover(items, `${rect.x}px`);
    };

    return (
        <a
            className={items?.name === activeItem?.name ? "active" : ""}
            ref={linkRef}
            onMouseEnter={handleHover}
        >
            {items.name}
        </a>
    );
};

const Search = () => (
    <div className="navbar-search">
        <span className="material-symbols-outlined"></span>
        <input type="text" placeholder="Search" />
    </div>
);

const NavBar = () => {
    const [translatex, setTranslatex] = useState("0");
    const [activeItem, setActiveItem] = useState(null);

    const handleLinkHover = (item, x) => {
        setActiveItem(item || null);
        setTranslatex(x);
    };

    return (
        <nav className="navbar">
            <img src={avatar} alt="User Avatar" />
            <div className="navbar-menu">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        activeItem={activeItem}
                        items={item}
                        onHover={handleLinkHover}
                    />
                ))}
                <div
                    style={{
                        transform: `translateX(${translatex})`,
                    }}
                    className={`navbar-dropdown ${activeItem ? "visible" : ""}`}
                >
                    {activeItem?.items?.map((link) => (
                        <a key={link}>{link}</a>
                    ))}
                </div>
            </div>
            <Cart/>
            <Search />
           
           
        </nav>
    );
};

export default NavBar;
