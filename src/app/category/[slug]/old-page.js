import Link from "next/link";
import Image from "next/image";


export default async function CategoryPage(props) {
  const params = await props.params;
  const slug = params.slug;

  const res = await fetch(
    `http://localhost/globalite-safety/api/products.php?category=${slug}`,
    { cache: "no-store" },
  );

  const products = await res.json();

  return (
    <main>
      <div>
        <Image src="/images/hero-img.webp" width={1920} height={400} className="img-fluid" alt="hero image"/>
      </div>
      <h2 className="text-capitalize text-center mt-4">{slug.split("-").join(" ")}</h2>

      {products.length === 0 && <p>No products found</p>}

      <div className="container pb-5">
        <div className="row">
          {products.map((p) => (
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4" key={p.id}>
              <div className="card h-100 shadow border-0 bg-light">
                <Link href={`/product/${p.slug}`}>
                <img
                  src={`http://localhost/globalite-safety/${p.pro_img}`}
                  className="card-img-top"
                  alt={p.product_name}
                />
                </Link>
                <div className="card-body text-center">
                  <div className="catProDetail">
                    <h6>{p.product_name}</h6>
                    <Link href={`/product/${p.slug}`} className="btn btn-dark border-0 rounded-5 px-4">View Detail</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
