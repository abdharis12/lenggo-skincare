import React from "react";
import NavBar from "@/Components/Fragments/Navbar/NavBar";
import { Toaster } from "react-hot-toast";
export default function AppLayout({ header, children }) {
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <NavBar />
                <Toaster position="top-center" reverseOrder={false} />
                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </>
    );
}
