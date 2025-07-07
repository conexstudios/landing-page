import SecondaryMenu from "../../components/SecondaryMenu";

const noticiasEjemplo = [
  {
    titulo: "ConexStudios lanza nueva plataforma para colegios",
    fecha: "2 de julio de 2025",
    resumen: "Nuestra nueva plataforma digital facilita la gestión escolar y la comunicación entre docentes, estudiantes y padres.",
    imagen: "https://source.unsplash.com/featured/?school,technology",
    enlace: "#",
  },
  {
    titulo: "Participamos en el Congreso EdTech 2025",
    fecha: "15 de junio de 2025",
    resumen: "ConexStudios presentó sus soluciones innovadoras en uno de los eventos más importantes del sector educativo.",
    imagen: "https://source.unsplash.com/featured/?conference,education",
    enlace: "#",
  },
  {
    titulo: "Nueva integración con sistemas de pago",
    fecha: "30 de mayo de 2025",
    resumen: "Ahora las instituciones pueden gestionar pagos y matrículas de forma más sencilla y segura.",
    imagen: "https://source.unsplash.com/featured/?payment,online",
    enlace: "#",
  },
];

export default function Noticias() {
  return (
    <>
      <SecondaryMenu />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-[#144378]">Noticias y Actualizaciones</h1>
        <p className="mb-8 text-gray-700">Mantente informado con las últimas noticias y novedades de ConexStudios y el sector educativo.</p>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Noticias destacadas</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {noticiasEjemplo.map((noticia, idx) => (
              <article key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <img src={noticia.imagen} alt={noticia.titulo} className="h-36 w-full object-cover" />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg text-[#144378] mb-2">{noticia.titulo}</h3>
                  <span className="text-xs text-gray-400 mb-1">{noticia.fecha}</span>
                  <p className="text-gray-600 text-sm flex-1">{noticia.resumen}</p>
                  <a href={noticia.enlace} className="mt-3 inline-block text-[#144378] font-medium hover:underline">Leer más</a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="text-center py-8 bg-[#f6f8fa] rounded-xl">
          <h2 className="text-2xl font-bold mb-2 text-[#144378]">¿Quieres recibir novedades?</h2>
          <p className="mb-4 text-gray-700">Suscríbete a nuestro boletín y recibe las últimas noticias directamente en tu correo.</p>
          <a href="#" className="inline-block bg-[#144378] text-white font-semibold px-6 py-3 rounded hover:bg-[#144378]/90 transition-all">Suscribirme</a>
        </section>
      </main>
    </>
  );
}
