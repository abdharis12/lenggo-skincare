import React from "react";
import { Button } from "@material-tailwind/react";
import clsx from "clsx";
export default function PrimaryButton({
    children = "Primary",
    type = "button",
    href,
    className = "",
    ...props
}) {
    return (
        <div className="flex items-center gap-4">
            <Button
                {...props}
                type={type}
                href={href}
                className={clsx(
                    className,
                    "flex items-center gap-3 bg-Primary"
                )}
            >
                {children}
            </Button>
        </div>
    );
}
