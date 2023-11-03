import React from "react";
import { Head } from "@inertiajs/react";
import Product from "@/Components/Layouts/Product";
import NavBar from "@/Components/Fragments/Navbar/NavBar";
import Container from "@/Components/Layouts/Container";
import Header from "@/Components/Layouts/Header";
import Pagination from "@/Components/Elements/Button/Pagination";

export default function Index(props) {
    const { data: products, meta, links } = props.products;

    return (
        <>
            <Head title="Products" />

            <div className="bg-blue-gray-50 pb-10">
                <NavBar />

                <div>
                    <Header
                        title="Product"
                        description="Kami menyediakan panduan komprehensif tentang berbagai produk perawatan kulit yang dapat membantu Anda mencapai kulit yang sehat dan berseri. Temukan ulasan mendalam, rekomendasi produk, dan tips penggunaan yang tepat untuk berbagai jenis kulit."
                    />
                </div>
                <Container className="lg:px-60">
                    {products.length ? (
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
                            {products.map((product) => (
                                <Product product={product} key={product.id} />
                            ))}
                        </div>
                    ) : (
                        "Products doesnt exits"
                    )}
                    <Pagination meta={meta} links={links} />
                </Container>
            </div>
        </>
    );
}
