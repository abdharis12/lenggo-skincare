import React from "react";
import { numberFormat } from "@/Libs/help";
import PrimaryButton from "@/Components/Elements/Button/PrimaryButton";
import { Head, Link } from "@inertiajs/react";
import Container from "@/Components/Layouts/Container";
import NavBar from "@/Components/Fragments/Navbar/NavBar";
import Header from "@/Components/Layouts/Header";
import { Inertia } from "@inertiajs/inertia";
import toast, { Toaster } from "react-hot-toast";

export default function Show({ product }) {
    const addToCart = () => {
        Inertia.post(
            route("cart.store", product),
            {},
            {
                onSuccess: () => {
                    toast.success("Cart is added");
                },
            }
        );
    };

    return (
        <>
            <Head title={product.name} />
            <NavBar />
            <Header
                title="Single Product"
                description="Kami menyediakan panduan komprehensif tentang berbagai produk perawatan kulit yang dapat membantu Anda mencapai kulit yang sehat dan berseri. Temukan ulasan mendalam, rekomendasi produk, dan tips penggunaan yang tepat untuk berbagai jenis kulit."
            />

            <Container className="lg:px-60 py-10">
                <div className="flex gap-5">
                    <div className="w-1/3">
                        <img
                            className="w-full rounded-md"
                            src={product.picture}
                            alt="Product Picture"
                        />
                    </div>
                    <div className="w-2/3">
                        <div className="text-xs font-semibold px-3 py-1 inline-flex bg-pink-400 text-white rounded-md my-5">
                            <Link
                                href={`/products?category=${product.category.slug}`}
                            >
                                {product.category.name}
                            </Link>
                        </div>
                        <h1 className="text-4xl font-bold">{product.name}</h1>
                        <div className="leading-relaxed text-gray-500">
                            {product.description}
                        </div>
                        <div className="my-5 font-semibold text-lg">
                            <sup>Rp.</sup> {numberFormat(product.price)}
                        </div>
                        <PrimaryButton onClick={addToCart}>
                            Add to cart
                        </PrimaryButton>
                        <Toaster position="top-center" reverseOrder={false} />
                    </div>
                </div>
            </Container>
        </>
    );
}
