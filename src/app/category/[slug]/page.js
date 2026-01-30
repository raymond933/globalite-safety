import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }) {
  const { slug } = params;

  console.log("==== CATEGORY PAGE DEBUG START ====");
  console.log("Slug:", slug);
  console.log("API BASE:", process.env.NEXT_PUBLIC_API_BASE);

  try {
    /* -----------------------------
       1. FETCH CATEGORY
    ----------------------------- */
    const categoryUrl = `${process.env.NEXT_PUBLIC_API_BASE}/categories.php?slug=${slug}`;
    console.log("Category API URL:", categoryUrl);

    const catRes = await fetch(categoryUrl, { cache: "no-store" });

    console.log("Category Response Status:", catRes.status);

    const catText = await catRes.text();
    console.log("Raw Category Response:", catText);

    let catData;
    try {
      catData = JSON.parse(catText);
    } catch (err) {
      console.log("Category JSON Parse Error:", err);
      return <ErrorMsg text="Category JSON invalid" />;
    }

    const category = Array.isArray(catData) ? catData[0] : catData;

    console.log("Parsed Category:", category);

    if (!category || !category.id) {
      console.log("Category ID missing");
      return <ErrorMsg text="Invalid category" />;
    }

    /* -----------------------------
       2. FETCH PRODUCTS
    ----------------------------- */
    const productUrl = `${process.env.NEXT_PUBLIC_API_BASE}/category-products.php?category_id=${Number(category.id)}`;
    console.log("Product API URL:", productUrl);

    const prodRes = await fetch(productUrl, { cache: "no-store" });

    console.log("Product Response Status:", prodRes.status);

    const prodText = await prodRes.text();
    console.log("Raw Product Response:", prodText);

    let products = [];
    try {
      products = JSON.parse(prodText);
    } catch (err) {
      console.log("Product JSON Parse Error:", err);
      products = [];
    }

    console.log("Parsed Products:", products);
    console.log("==== CATEGORY PAGE DEBUG END ====");

    /* -----------------------------
       3. RENDER
    ----------------------------- */
    return (
      <>
        <div style={{ padding: 20, background: "#f8f8f8" }}>
          <h3>Debug Mode Active</h3>
          <p>Check Vercel Function Logs for details.</p>
        </div>

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
  } catch (error) {
    console.log("Unexpected Error:", error);
    return <ErrorMsg text="Unexpected server error" />;
  }
}

function ErrorMsg({ text }) {
  return (
    <h2 style={{ padding: 40, textAlign: "center", color: "red" }}>
      {text}
    </h2>
  );
}
