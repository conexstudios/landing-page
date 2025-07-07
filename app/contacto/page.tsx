import SecondaryMenu from "../../components/SecondaryMenu";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <SecondaryMenu />
      <section className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[#144378]">Contáctanos</h1>
        <p className="mb-8 text-gray-600">
          ¿Tienes preguntas, sugerencias o deseas una demo personalizada? Completa el formulario y nuestro equipo te responderá lo antes posible.
        </p>
        <ContactForm />
        <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
          <h2 className="text-xl font-semibold mb-2">Información de contacto</h2>
          <ul className="mb-4 space-y-1">
            <li><strong>Email:</strong> info@conexstudios.com</li>
            <li><strong>Teléfono:</strong> +58 414 422 5188</li>
            <li><strong>Dirección:</strong> Calle 123 #45-67, Bogotá, Colombia</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/company/conexstudios" target="_blank" rel="noopener noreferrer" className="hover:text-[#144378]">LinkedIn</a>
            <a href="https://twitter.com/ConexStudios" target="_blank" rel="noopener noreferrer" className="hover:text-[#144378]">Twitter</a>
            <a href="https://facebook.com/ConexStudios" target="_blank" rel="noopener noreferrer" className="hover:text-[#144378]">Facebook</a>
          </div>
        </div>
      </section>
    </>
  );
}

