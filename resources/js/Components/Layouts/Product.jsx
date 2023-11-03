import React from "react";
import { Link } from "@inertiajs/react";
import { numberFormat } from "@/Libs/help";

export default function Product({ product }) {
    return (
        <>
            <div className="w-full">
                <Link href={`/products/${product.slug}`}>
                    <img
                        className="w-full rounded-md"
                        src={product.picture}
                        alt="img product"
                    />
                </Link>
                <div className="mt-4">
                    <Link
                        className="text-sm block mb-2"
                        href={`/products/${product.slug}`}
                    >
                        {product.name}
                    </Link>
                    <div className="flex items-center justify-between text-sm">
                        <Link
                            className="text-white text-xs bg-pink-200 rounded-md px-2 py-1"
                            href={`/products?category=${product.category.slug}`}
                        >
                            {product.category.name}
                        </Link>
                        <div className="font-bold">
                            Rp. {numberFormat(product.price)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
