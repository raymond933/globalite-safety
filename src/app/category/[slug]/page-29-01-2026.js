import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600; // 1 hour

// 🔹 STEP 1: saare category slugs batao

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/categories.php`
  );

  const data = await res.json();

  return data.map((cat) => ({
    slug: cat.slug,
  }));
}

// 🔹 STEP 2: page render
export default async function CategoryPage({ params }) {
  const { slug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/categories.php?slug=${slug}`,
    { 
        next: { revalidate: 3600 },
        // IMPORTANT: timeout protection
        signal: AbortSignal.timeout(8000), 
    }
    //{ cache: "no-store" }
  );

  const text = await res.text();
  let data;

  try {
    data = JSON.parse(text);
  } catch {
    return <h2 style={{ padding: 40 }}>Server Error</h2>;
  }

  if (!data?.products?.length) {
    return <h2 style={{ padding: 40 }}>Invalid Category</h2>;
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
                      src={`${process.env.NEXT_PUBLIC_IMG_BASE}/uploads/${p.image_path}`}
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
