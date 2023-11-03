import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function AuthLink() {
    const { auth } = usePage().props;
    return (
        <div className="">
            {auth.user ? (
                <Link
                    href={route("dashboard")}
                    className="font-semibold text-black hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm"
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <hr className="my-3" />
                    <Link
                        href={route("login")}
                        className="flex text-sm pl-1 pt-2 text-black hover:text-pink-200 focus:outline focus:outline-2 focus:rounded-sm"
                    >
                        Log in
                    </Link>

                    <Link
                        href={route("register")}
                        className="flex text-sm pl-1 pt-4 text-black hover:text-pink-200 focus:outline focus:outline-2 focus:rounded-sm"
                    >
                        Register
                    </Link>
                </>
            )}
        </div>
    );
}
