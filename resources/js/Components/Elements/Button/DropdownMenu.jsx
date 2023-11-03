import { Menu } from "@headlessui/react";
import { InertiaLink } from "@inertiajs/inertia-react";
import clsx from "clsx";
import React from "react";

function Link({ children, href, className = "", type = "button", ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <InertiaLink
                    {...props}
                    href={href}
                    type={type}
                    className={clsx(
                        className,
                        active ? "bg-pink-100 text-gray-700" : "text-white",
                        "block px-4 py-2 text-sm"
                    )}
                >
                    {children}
                </InertiaLink>
            )}
        </Menu.Item>
    );
}
function DropdownMenu({ label, children, className = "" }) {
    return (
        <>
            <Menu className="relative" as="div">
                {({ open }) => (
                    <>
                        <Menu.Button
                            type="button"
                            className={clsx(
                                className,
                                "flex items-center gap-x-2"
                            )}
                        >
                            {label}
                            <svg
                                className={clsx(
                                    "ml-2 -mr-0.5 h-4 w-4 transition duration-200",
                                    open && "rotate-180"
                                )}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Menu.Button>
                        <Menu.Items>{children}</Menu.Items>
                    </>
                )}
            </Menu>
        </>
    );
}

function Divider() {
    return <div className="bg-gray-300 my-2 block h-px" />;
}

DropdownMenu.Link = Link;
DropdownMenu.Divider = Divider;

export default DropdownMenu;
