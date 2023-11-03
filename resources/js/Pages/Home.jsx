import React from "react";
import { Head } from "@inertiajs/react";
import NavBar from "@/Components/Fragments/Navbar/NavBar";
import Hero from "@/Components/Layouts/Hero";

export default function Home() {
    return (
        <>
            <Head title="Homepage" />
            <div className="relative z-0 h-screen w-auto">
                <div className="bg-bg-hero bg-cover bg-no-repeat bg-center">
                    <NavBar />
                    <Hero />
                </div>
            </div>
        </>
    );
}
