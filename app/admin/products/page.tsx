import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getProducts() {
  const products = await prisma.product.findMany({
    take: 10,
    include: {
      category: true,
    },
  });

  return products;
}

export type ProductsWithCategories = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const products = await getProducts();
  console.log(await searchParams.page);

  return (
    <>
      <Heading children="Admin your products" />
      <ProductTable products={products} />
    </>
  );
}
