import React from "react";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Layouts/Container";
import NavBar from "@/Components/Fragments/Navbar/NavBar";

export default function Show({ invoice }) {
    return (
        <>
            <Head title={`Your Order - ${invoice.order_id}`} />
            <NavBar />
            <Container className="lg:px-60">
                <div className="grid grid-cols-2 gap-10 my-10">
                    <div>
                        {invoice.qr_code ? (
                            <img
                                className="border shadow-md rounded-lg"
                                src={invoice.qr_code}
                                alt="QR Code"
                            />
                        ) : null}
                        {invoice.bank ? (
                            <div>
                                <div className="py-10 rounded-lg text-pink-900 text-center bg-gradient-to-b from-pink-200 via-transparent to-transparent">
                                    <div>
                                        <strong className="font-semibold uppercase">
                                            {invoice.bank.name}
                                        </strong>
                                        Virtual Account Number
                                    </div>
                                    <div>{invoice.bank.va_number}</div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <div className="prose">
                            <h2>Instruction</h2>
                            <p>
                                Please follow the instruction if you dont
                                understand how to pay!
                            </p>
                            <ol>
                                <li>Lorem ipum magni!</li>
                                <li>Ad dolorto laborum eiu voluptate?</li>
                                <li>Commodi temonsequnt id nam!</li>
                                <li>
                                    Nostrum, nulla duci magni on nesciunt ab.
                                </li>
                                <li>Debitis conseqoedit natus quidem.</li>
                                <li>Debitis conseqoedit natus quidem.</li>
                                <li>Debitis conseqoedit natus quidem.</li>
                                <li>Debitis conseqoedit natus quidem.</li>
                                <li>Debitis conseqoedit natus quidem.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
