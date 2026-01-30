import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CategoryPage(props) {
  const slug = props?.params?.slug;

  console.log("Slug:", slug);
  console.log("API BASE:", process.env.NEXT_PUBLIC_API_BASE);

  if (!slug) {
    return <h2 style={{ padding: 40 }}>Slug missing</h2>;
  }

  /* =========================
     1️⃣ FETCH CATEGORY
  ========================= */
  const catUrl = `${process.env.NEXT_PUBLIC_API_BASE}/categories.php?slug=${slug}`;
  console.log("Category API URL:", catUrl);

  const catRes = await fetch(catUrl, { cache: "no-store" });

  const rawCategory = await catRes.text();
  console.log("Raw Category Response:", rawCategory);

  console.log("ENV CHECK:", process.env.NEXT_PUBLIC_API_BASE);
  console.log("ENV:", process.env.NEXT_PUBLIC_API_BASE);

  let category;
  try {
    const parsed = JSON.parse(rawCategory);

    // handle object OR array
    category = Array.isArray(parsed) ? parsed[0] : parsed;
  } catch (err) {
    console.log("Category JSON Parse Error");
    return <ErrorMsg text="Category API error" />;
  }

  if (!category?.id) {
    console.log("Category ID missing");
    return <ErrorMsg text="Invalid category" />;
  }

  console.log("Category ID:", category.id);

  /* =========================
     2️⃣ FETCH PRODUCTS
  ========================= */
  const prodUrl = `${process.env.NEXT_PUBLIC_API_BASE}/category-products.php?category_id=${category.id}`;
  console.log("Product API URL:", prodUrl);

  const prodRes = await fetch(prodUrl, { cache: "no-store" });

  const rawProducts = await prodRes.text();
  console.log("Raw Products Response:", rawProducts);

  let products = [];
  try {
    products = JSON.parse(rawProducts);
  } catch {
    console.log("Products JSON Parse Error");
  }

  console.log("Parsed Products:", products);

  /* =========================
     3️⃣ RENDER
  ========================= */
  return (
    <>
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
            <div key={p.id} className="col-lg-3 col-md-4 col-sm-6 mt-4">
              <div className="card h-100 shadow-sm">
                <Link href={`/product/${p.slug}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_BASE}/${p.image_path}`}
                    alt={p.name}
                    width={600}
                    height={600}
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

function ErrorMsg({ text }) {
  return (
    <h2 style={{ padding: 40, textAlign: "center", color: "red" }}>
      {text}
    </h2>
  );
}
