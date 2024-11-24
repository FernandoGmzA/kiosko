import EditProductForm from "@/components/products/EditProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  if (!product) {
    notFound();
  }

  return product;
}

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await getProductById(+id);

  return (
    <>
      <Heading children={`Edit product: ${product.name}`} />

      <Link
        href={"/admin/products"}
        className=" bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
      >
        {" "}
        Back to products
      </Link>

      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>
    </>
  );
}
