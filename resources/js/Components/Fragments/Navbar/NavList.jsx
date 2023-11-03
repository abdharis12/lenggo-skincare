import React from "react";
import { Typography } from "@material-tailwind/react";
import NavLink from "./NavLink";

export default function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <NavLink href="/">Home</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <NavLink href="/products">Products</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <NavLink href="#">News</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <NavLink href="#">Contact</NavLink>
            </Typography>
        </ul>
    );
}
