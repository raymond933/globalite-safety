import Image from "next/image";
import Link from "next/link";

export default async function CategoryPage({ params }) {
  // 🔥 NEXT.JS 16 FIX
  const { slug } = await params;

  if (!slug) {
    return <h2 style={{ padding: 40 }}>Invalid Category</h2>;
  }

  // const res = await fetch(
  //   `http://localhost/globalite-admin/api/category-products.php?slug=${slug}`,
  //   { cache: "no-store" },
  // );

  const res = await fetch(
    `https://layout.websitelayout.in/globalite-safety/api/category-products.php?slug=${slug}`,
    { cache: "no-store" },
  );

  const text = await res.text();

  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    console.error("API returned HTML:", text);
    return <h2 style={{ padding: 40 }}>Server Error</h2>;
  }

  if (!data?.products || data.products.length === 0) {
    return <h2 style={{ padding: 40 }}>No data found for this category</h2>;
  }

  return (
    <>
      <div>
        <Image
          src="/images/hero-img.webp"
          width={1920}
          height={400}
          className="img-fluid"
          alt="hero image"
        />
      </div>

      <div className="container py-5">
        <h1 className="text-center">{data.category.name}</h1>

        <div className="container py-3">
          <div className="row">
            {data.products.map((p) => (
              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4"
                key={p.id}
              >
                <div className="card bg-light h-100">
                  <Link href={`/product/${p.slug}`}>
                    <Image
                      src={`https://layout.websitelayout.in/globalite-safety/${p.image_path}`}
                      alt={p.name}
                      width={800}
                      height={800}
                      className="card-img-top img-fluid"
                      unoptimized // 👈 dev mode mein best
                    />
                  </Link>
                  <div className="card-body text-center">
                    <h3 style={{ fontSize: 16, margin: "12px 0" }}>{p.name}</h3>
                    <Link href={`/product/${p.slug}`} className="btn btn-dark btn-sm px-4 rounded-5">View Detail</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
