import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }) {
  const { slug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/product-detail.php?slug=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <h2 style={{ padding: 40 }}>Product not found</h2>;
  }

  const product = await res.json();

  if (!product?.id) {
    return <h2 style={{ padding: 40 }}>Product not found</h2>;
  }

  return (
    <main className="container py-5">
      <div className="row">
        <div className="col-md-5">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_BASE}/${product.images?.[0]}`}
            alt={product.name}
            width={600}
            height={450}
            unoptimized
            className="img-fluid img-thumbnail"
          />
        </div>

        <div className="col-md-7">
          <h2>{product.name}</h2>
          <div><strong>SKU:</strong> {product.sku}</div>
          <hr />

          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      </div>
    </main>
  );
}
