import React from "react";
import NavList from "./NavList";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Collapse,
    Typography,
    IconButton,
    Badge,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/react";
import AuthLink from "./AuthLink";
import NavLink from "./NavLink";

export default function NavBar() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const { auth, carts_global_count } = usePage().props;

    return (
        <div className="h-max w-full lg:px-60 px-8 py-3 bg-white border-b shadow-sm">
            <div className="w-full items-center text-black">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-2 lg:gap-5 items-center">
                    <div className="">
                        <Typography
                            as="a"
                            href="/"
                            variant="h6"
                            className="mr-4 cursor-pointer py-1.5"
                        >
                            Lenggo Skin Care
                        </Typography>
                    </div>

                    {/* Menu  */}
                    <div className="hidden lg:flex lg:justify-center">
                        <NavList />
                    </div>

                    <div className="flex justify-end">
                        {/* Profile Picture List */}
                        <div className="hidden lg:block">
                            {auth.user ? (
                                <>
                                    <Link
                                        href="/profile"
                                        className="font-semibold text-gray-600 hover:text-gray-900 mr-3"
                                    >
                                        {auth.user.name}
                                    </Link>

                                    <Menu>
                                        <MenuHandler>
                                            <Avatar
                                                variant="circular"
                                                alt="tania andrew"
                                                className="cursor-pointer"
                                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                            />
                                        </MenuHandler>
                                        <MenuList>
                                            <MenuItem className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal"
                                                >
                                                    <NavLink
                                                        href={route(
                                                            "dashboard"
                                                        )}
                                                    >
                                                        Dashboard
                                                    </NavLink>
                                                </Typography>
                                            </MenuItem>
                                            <MenuItem className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal"
                                                >
                                                    <NavLink
                                                        href={route(
                                                            "profile.edit"
                                                        )}
                                                    >
                                                        My Profile
                                                    </NavLink>
                                                </Typography>
                                            </MenuItem>
                                            <MenuItem className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                                                    />
                                                </svg>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal"
                                                >
                                                    Inbox
                                                </Typography>
                                            </MenuItem>
                                            <MenuItem className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                                                    />
                                                </svg>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal"
                                                >
                                                    Help
                                                </Typography>
                                            </MenuItem>
                                            <hr className="my-2 border-blue-gray-50" />
                                            <MenuItem className="flex items-center gap-2 ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                                                    />
                                                </svg>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal"
                                                >
                                                    <Link
                                                        href={route("logout")}
                                                        method="post"
                                                        as="button"
                                                        className="font-semibold text-black hover:text-pink-200"
                                                    >
                                                        Logout
                                                    </Link>
                                                </Typography>
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="font-semibold text-black hover:text-pink-200"
                                    >
                                        Log in
                                    </Link>

                                    <Link
                                        href={route("register")}
                                        className="ml-4 font-semibold text-black hover:text-pink-200"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className="flex lg:ml-5 sm:gap-3">
                            <NavLink className="flex items-center" href="/cart">
                                <Badge
                                    content={
                                        carts_global_count > 0
                                            ? carts_global_count
                                            : "0"
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Badge>
                            </NavLink>

                            <IconButton
                                variant="text"
                                className="mx-3 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <XMarkIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                ) : (
                                    <Bars3Icon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                )}
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>

            <Collapse open={openNav}>
                <NavList />
                <AuthLink />
            </Collapse>
        </div>
    );
}
