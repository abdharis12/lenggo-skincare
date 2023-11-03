import React from "react";
import { Button } from "@material-tailwind/react";
export default function SecondaryButton({
    children = "Secondary",
    type = "button",
    className = "",
    ...props
}) {
    return (
        <div className="flex items-center gap-4">
            <Button
                {...props}
                type={type}
                className={`flex items-center gap-3 bg-purple-500 ${className}`}
            >
                {children}
            </Button>
        </div>
    );
}
