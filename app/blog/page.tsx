import SecondaryMenu from "../../components/SecondaryMenu";

// Cambia esta URL por la de tu WordPress
const WORDPRESS_API = "https://public-api.wordpress.com/wp/v2/sites/en.blog.wordpress.com/posts";

async function getPosts() {
  // Puedes cambiar el endpoint por el de tu sitio
  const res = await fetch(WORDPRESS_API, { next: { revalidate: 900 } });
  if (!res.ok) return [];
  const data = await res.json();
  // Normaliza para que el resto del código sea sencillo
  return Array.isArray(data) ? data : data.posts || [];
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <>
      <SecondaryMenu />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-[#144378]">Blog</h1>
        <p className="mb-8 text-gray-700">Explora nuestros artículos, novedades y recursos sobre tecnología y educación.</p>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Últimos artículos</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {posts.length === 0 && (
              <p className="text-gray-500 col-span-2">No hay artículos disponibles en este momento.</p>
            )}
            {posts.slice(0,6).map((post: any) => (
              <article key={post.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                {post.featured_media && post.featured_media.source_url ? (
                  <img src={post.featured_media.source_url} alt={post.title.rendered} className="h-36 w-full object-cover" />
                ) : null}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg text-[#144378] mb-2" dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                  <span className="text-xs text-gray-400 mb-1">{new Date(post.date).toLocaleDateString()}</span>
                  <div className="text-gray-600 text-sm flex-1 line-clamp-3" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-[#144378] font-medium hover:underline">Leer completo</a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="text-center py-8 bg-[#f6f8fa] rounded-xl">
          <h2 className="text-2xl font-bold mb-2 text-[#144378]">¿Quieres ver más artículos?</h2>
          <a href="https://wordpress.com/read/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#144378] text-white font-semibold px-6 py-3 rounded hover:bg-[#144378]/90 transition-all">Ver más en WordPress</a>
        </section>
      </main>
    </>
  );
}
