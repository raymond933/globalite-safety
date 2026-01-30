import Image from "next/image";

export default async function ProductDetailPage(props) {
  const params = await props.params;
  const slug = params.slug;

  const res = await fetch(
    `http://localhost/globalite-safety/api/product.php?slug=${slug}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    return <h2>Failed to load product</h2>;
  }

  const product = await res.json();

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
            <img
              src={`http://localhost/globalite-safety/${product.pro_img}`}
              alt={product.product_name}
              className="img-fluid img-thumbnail"
            />
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="proCardDec">
              <div className="text-red mb-2">
                <strong>[{product.category}]</strong>
              </div>
              <h3>{product.product_name}</h3>
              <p className="text-red">
                <strong className="text-dark">SKU:</strong> {product.sku}
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }} className="proTable"
              />
              <div className="mt-3 proDescList"
                  dangerouslySetInnerHTML={{
                    __html: product.short_description,
                  }}
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
