import React from "react";
import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Layouts/Header";
import Container from "@/Components/Layouts/Container";
import NavBar from "@/Components/Fragments/Navbar/NavBar";
import { IconButton } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { numberFormat } from "@/Libs/help";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import Table from "@/Components/Layouts/Table";
import NavLink from "@/Components/Fragments/Navbar/NavLink";
import DropdownMenu from "@/Components/Elements/Button/DropdownMenu";

export default function Index({ carts }) {
    const onDeleteHandler = (cart_id) => {
        Inertia.post(
            route("cart.delete", { cart: cart_id }),
            { _method: "delete" },
            { onSuccess: () => toast.success("Cart is deleted") }
        );
    };

    let subtotal = carts.reduce((acc, cart) => acc + cart.price, 0);
    let ppn = (11 / 100) * subtotal;
    let total = subtotal + ppn;

    return (
        <>
            <Head title="Cart" />
            <div className="bg-blue-gray-50 pb-10">
                <NavBar />

                <Header
                    title="Cart"
                    description="Kami menyediakan panduan komprehensif tentang berbagai produk perawatan kulit"
                />
                <Container className="lg:px-60 py-10">
                    <Table>
                        <Table.tableHead>
                            <Table.Tr>
                                <Table.Th className="w-0">#</Table.Th>
                                <Table.Th>Name</Table.Th>
                                <Table.Th className={"text-right"}>
                                    Price
                                </Table.Th>
                                <Table.Th></Table.Th>
                            </Table.Tr>
                        </Table.tableHead>
                        <tbody>
                            {carts.length ? (
                                <>
                                    {carts.map((cart, i) => (
                                        <Table.Tr key={cart.id}>
                                            <Table.Td className="w-0">
                                                {i + 1}
                                            </Table.Td>
                                            <Table.Td>
                                                <Link
                                                    href={`/products/${cart.product.slug}`}
                                                >
                                                    {cart.product.name}
                                                </Link>
                                            </Table.Td>
                                            <Table.Td className="text-right">
                                                Rp. {numberFormat(cart.price)}
                                            </Table.Td>
                                            <Table.Td className="text-right">
                                                <IconButton
                                                    type="button"
                                                    onClick={() =>
                                                        onDeleteHandler(cart.id)
                                                    }
                                                >
                                                    <TrashIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Table.Td>
                                        </Table.Tr>
                                    ))}

                                    <Table.Tr>
                                        <Table.Td></Table.Td>
                                        <Table.Td className="font-bold">
                                            PPN 11% (Pajak Penambahan Nilai)
                                        </Table.Td>
                                        <Table.Td className="font-bold text-right">
                                            Rp. {numberFormat(ppn)}
                                        </Table.Td>
                                    </Table.Tr>

                                    <Table.Tr className="font-bold bg-pink-50 text-black">
                                        <Table.Td></Table.Td>
                                        <Table.Td>Total</Table.Td>
                                        <Table.Td className="text-right">
                                            Rp. {numberFormat(total)}
                                        </Table.Td>
                                        <Table.Td></Table.Td>
                                    </Table.Tr>
                                </>
                            ) : (
                                <Table.Empty
                                    colSpan={4}
                                    message={
                                        <>
                                            Oops.. You Cart is Empty <br />
                                            <NavLink href="/products">
                                                Try add a new one !
                                            </NavLink>
                                        </>
                                    }
                                />
                            )}
                        </tbody>
                    </Table>

                    {/* {carts.length > 0 ? ( */}
                    <div className="flex justify-end mt-10">
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <DropdownMenu
                                    label="Please choose your Payment method"
                                    className="bg-Primary text-white font-semibold px-4 py-2 rounded-lg"
                                >
                                    <div className="bg-Primary rounded-lg overflow-hidden mt-2 font-semibold ">
                                        <DropdownMenu.Link
                                            href="/invoice"
                                            method="post"
                                            data={{
                                                carts: carts,
                                                total: total,
                                                payment_type: "gopay",
                                            }}
                                        >
                                            Gopay
                                        </DropdownMenu.Link>

                                        <DropdownMenu.Divider />
                                        <DropdownMenu.Link
                                            href="/invoice"
                                            method="post"
                                            data={{
                                                carts: carts,
                                                total: total,
                                                payment_type: "bank_transfer",
                                                bank: "bca",
                                            }}
                                        >
                                            BCA Vitual Account
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link
                                            href="/invoice"
                                            method="post"
                                            data={{
                                                carts: carts,
                                                total: total,
                                                payment_type: "bank_transfer",
                                                bank: "bni",
                                            }}
                                        >
                                            BNI Vitual Account
                                        </DropdownMenu.Link>
                                    </div>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                    {/* ) : null} */}
                </Container>
            </div>
        </>
    );
}
