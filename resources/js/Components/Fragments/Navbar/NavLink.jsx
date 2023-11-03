import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";

export default function NavLink({ href, className = "", children, ...props }) {
    return (
        <Link
            {...props}
            href={href}
            className={clsx(
                className,
                usePage().url == href && "font-extrabold text-pink-100",
                "text-black hover:text-Primary transition-colors"
            )}
        >
            {children}
        </Link>
    );
}
