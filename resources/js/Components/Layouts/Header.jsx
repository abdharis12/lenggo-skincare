import Container from "@/Components/Layouts/Container";
import React from "react";

export default function ({ title, description }) {
    return (
        <>
            <div className="w-full py-16 bg-white border-b shadow-sm">
                <Container className="lg:px-60">
                    <h1 className="font-extrabold text-5xl py-8">{title}</h1>
                    <div className="text-lg leading-relaxed text-gray-500">
                        {description}
                    </div>
                </Container>
            </div>
        </>
    );
}
