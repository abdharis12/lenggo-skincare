import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    href,
    className = "",
    children,
    ...props
}) {
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
