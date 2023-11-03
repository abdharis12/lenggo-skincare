import React from "react";

export default function Container({ children, className = "" }) {
    return (
        <>
            <div className={`max-w-3/5 px-[4.5rem] ${className}`}>
                {children}
            </div>
        </>
    );
}
