import Image from "next/image";
import Link from "next/link";

/**
 * IMPORTANT
 * Category page ko dynamic rakho
 * (No build-time API calls)
 */
export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }) {
  const { slug } = params;

  /* -----------------------------
     1. GET CATEGORY (slug → id)
  ----------------------------- */
  const catRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/categories.php?slug=${slug}`,
    { cache: "no-store" }
  );

  if (!catRes.ok) {
    return <ErrorMsg text="Category not found" />;
  }

  const category = await catRes.json();

  if (!category?.id) {
    return <ErrorMsg text="Invalid category" />;
  }

  /* -----------------------------
     2. GET PRODUCTS (by category_id)
  ----------------------------- */
  const prodRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/category-products.php?category_id=${Number(category.id)}`,
    { cache: "no-store" }
  );

  const products = prodRes.ok ? await prodRes.json() : [];

  /* -----------------------------
     3. RENDER
  ----------------------------- */
  return (
    <>
      {/* HERO IMAGE */}
      <Image
        src="/images/hero-img.webp"
        width={1920}
        height={400}
        alt={category.name}
        className="img-fluid"
        priority
      />

      <div className="container py-5">
        <h1 className="text-center mb-4">{category.name}</h1>

        {products.length === 0 && (
          <p className="text-center">No products found.</p>
        )}

        <div className="row">
          {products.map((p) => (
            <div
              key={p.id}
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-4"
            >
              <div className="card h-100 shadow-sm">
                <Link href={`/product/${p.slug}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_BASE}/${p.image_path}`}
                    alt={p.name}
                    width={800}
                    height={800}
                    unoptimized
                    className="img-fluid"
                  />
                </Link>

                <div className="card-body text-center">
                  <h3 style={{ fontSize: 16 }}>{p.name}</h3>
                  <Link
                    href={`/product/${p.slug}`}
                    className="btn btn-dark btn-sm rounded-5 px-4"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---------------------------------------
   SIMPLE ERROR COMPONENT
--------------------------------------- */
function ErrorMsg({ text }) {
  return (
    <h2 style={{ padding: 40, textAlign: "center" }}>
      {text}
    </h2>
  );
}
