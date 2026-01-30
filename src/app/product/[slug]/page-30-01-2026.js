import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600; // 1 hour

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/products-slugs.php`
  );

  const data = await res.json();

  return data.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductPage({ params }) {
    const { slug } = await params;

    // const res = await fetch(
    //     `http://localhost/globalite-admin/api/product-detail.php?slug=${slug}`,
    //     { cache: "no-store" }
    // );

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/product-detail.php?slug=${slug}`,
        { 
            next: { revalidate: 3600 },
            // IMPORTANT: timeout protection
            signal: AbortSignal.timeout(8000),
        }
        //{ cache: "no-store" }
    );

    const text = await res.text();

    let product;
    try {
        product = JSON.parse(text);
    } catch {
        return <h2 style={{ padding: 40 }}>Server Error</h2>;
    }

    if (!product?.id) {
        return <h2 style={{ padding: 40 }}>Product not found</h2>;
    }

    return (
        <main className="container py-5">
            <div className="row">
                <div className="col-md-5">
                    {product.images && product.images.length > 0 ? (
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG_BASE}/${product.images[0]}`}
                            alt={product.name}
                            width={600}
                            height={450}
                            unoptimized
                            className="img-fluid img-thumbnail"
                        />
                    ) : (
                        <p>No image available</p>
                    )}


                </div>

                {/* CONTENT */}
                <div className="col-md-7">
                    <h2>{product.name}</h2>
                    <div className="text-red"><strong className="text-dark">SKU: </strong>{product.sku}</div>
                    <hr/>
                    <h4 className="mt-4 text-red">Specifications</h4>
                    {product.short_description && (
                        <div
                            className="mt-3"
                            dangerouslySetInnerHTML={{
                                __html: product.short_description,
                            }}
                        />
                    )}

                    <hr />
                    {product.description && (
                        <div
                            className="product-description"
                            dangerouslySetInnerHTML={{
                                __html: product.description,
                            }}
                        />
                    )}
                    <hr />
                    <Link href="" className="btn btn-dark px-4 rounded-5">Enquiry Now</Link>
                </div>
            </div>
        </main>
    );
}
