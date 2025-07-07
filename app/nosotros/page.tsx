import SecondaryMenu from "../../components/SecondaryMenu";

const equipo = [
  {
    nombre: "Ana Torres",
    rol: "CEO & Fundadora",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
    descripcion: "Apasionada por la tecnología educativa y el liderazgo innovador.",
  },
  {
    nombre: "Carlos Ramírez",
    rol: "CTO",
    foto: "https://randomuser.me/api/portraits/men/46.jpg",
    descripcion: "Experto en desarrollo de software y arquitecturas escalables.",
  },
  {
    nombre: "María López",
    rol: "Directora de Operaciones",
    foto: "https://randomuser.me/api/portraits/women/47.jpg",
    descripcion: "Gestora de proyectos y procesos orientados a resultados.",
  },
  {
    nombre: "Javier Gómez",
    rol: "Líder de Producto",
    foto: "https://randomuser.me/api/portraits/men/48.jpg",
    descripcion: "Enfocado en crear soluciones útiles y usables para la educación.",
  },
];

export default function Nosotros() {
  return (
    <>
      <SecondaryMenu />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-[#144378]">Sobre ConexStudios</h1>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Nuestra historia</h2>
          <p className="text-gray-700 mb-4">
            ConexStudios nació en 2021 con la visión de transformar la educación a través de la tecnología. Desde nuestros inicios, hemos trabajado junto a instituciones educativas para crear soluciones digitales que conecten, inspiren y potencien el aprendizaje.
          </p>
        </section>
        <section className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-xl font-semibold mb-2">Misión</h2>
            <p className="text-gray-700">
              Facilitar el acceso a herramientas tecnológicas innovadoras que mejoren la gestión y la experiencia educativa para todos.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Visión</h2>
            <p className="text-gray-700">
              Ser líderes en el desarrollo de soluciones digitales que impulsen la educación en Latinoamérica y el mundo.
            </p>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Nuestros valores</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Innovación constante</li>
            <li>Compromiso con la calidad</li>
            <li>Colaboración y trabajo en equipo</li>
            <li>Ética y transparencia</li>
            <li>Enfoque en el usuario</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Nuestro equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {equipo.map((persona) => (
              <div key={persona.nombre} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <img src={persona.foto} alt={persona.nombre} className="w-24 h-24 rounded-full mb-3 object-cover border-4 border-[#144378]/20" />
                <h3 className="font-semibold text-lg text-[#144378]">{persona.nombre}</h3>
                <p className="text-sm text-gray-500 mb-1">{persona.rol}</p>
                <p className="text-gray-600 text-xs">{persona.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center py-8 bg-[#f6f8fa] rounded-xl">
          <h2 className="text-2xl font-bold mb-2 text-[#144378]">¿Quieres saber más o colaborar?</h2>
          <p className="mb-4 text-gray-700">Contáctanos y descubre cómo podemos ayudarte a transformar la educación en tu institución.</p>
          <a href="/contacto" className="inline-block bg-[#144378] text-white font-semibold px-6 py-3 rounded hover:bg-[#144378]/90 transition-all">Ir a contacto</a>
        </section>
      </main>
    </>
  );
}
