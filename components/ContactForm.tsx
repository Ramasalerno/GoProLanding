import { Button, Card, Input, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import { useState } from "react";

// Definimos un tipo para los valores del formulario
type FormData = {
  nombre: string;
  apellido: string;
  razonSocial: string;
  pais: string;
  telefono: string;
  email: string;
  redesSociales: string;
  paginaWeb: string;
  capacidadInversion: string;
  tiendaFisica: string;
  nichoDeNegocio: string;
  ventaOnline: string;
  medioDeContacto: string;
};

const ContactForm: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    razonSocial: "",
    pais: "",
    telefono: "",
    email: "",
    redesSociales: "",
    paginaWeb: "",
    capacidadInversion: "",
    tiendaFisica: "",
    nichoDeNegocio: "",
    ventaOnline: "",
    medioDeContacto: "",
  });

  // Maneja cambios en los campos de texto y select
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        {/* Título del formulario */}
        <Text h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4 mt-4">
          Conviértete en distribuidor oficial
        </Text>
        {/* Texto descriptivo */}
        <Text className="text-center text-gray-600 mb-8 p-8">
          Completa el formulario a continuación y uno de nuestros representantes se pondrá en contacto contigo para compartirte los detalles y beneficios de convertirte en distribuidor oficial de GoPro.
        </Text>

        <form onSubmit={handleSubmit} className="space-y-6 p-8">
          {/* Campos de texto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              fullWidth
              required
              className="bg-gray-100 rounded-lg"
            />
            <Input
              label="Apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              fullWidth
              required
              className="bg-gray-100 rounded-lg"
            />

            <Input
              label="Razon Social"
              name="razonSocial"
              value={formData.apellido}
              onChange={handleChange}
              fullWidth
              required
              className="bg-gray-100 rounded-lg"
            />

            <Input
              label="Pais"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              fullWidth
              required
              className="bg-gray-100 rounded-lg"
            />
            <Input
              label="Número de Teléfono"
              name="telefono"
              type="number"
              value={formData.telefono}
              onChange={handleChange}
              fullWidth
              required
              className="bg-gray-100 rounded-lg"
            />
            <Input
              label="Correo Electrónico"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              className="bg-gray-100 rounded-lg"
            />
            <Input
              label="Redes Sociales"
              name="redesSociales"
              value={formData.redesSociales}
              onChange={handleChange}
              fullWidth
              className="bg-gray-100 rounded-lg"
            />
            <Input
              label="Página Web"
              name="paginaWeb"
              value={formData.paginaWeb}
              onChange={handleChange}
              fullWidth
              className="bg-gray-100 rounded-lg"
            />
          </div>

          {/* Campos de selección (select nativo) */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿Tienes capacidad de inversión inicial?
              </label>
              <select
                name="capacidadInversion"
                value={formData.capacidadInversion}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
              >
                <option value="">Seleccionar</option>
                <option value="True">Sí</option>
                <option value="False">No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿Cuentas con una tienda física?
              </label>
              <select
                name="tiendaFisica"
                value={formData.tiendaFisica}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
              >
                <option value="">Seleccionar</option>
                <option value="True">Sí</option>
                <option value="False">No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿A qué nicho pertenece tu negocio?
              </label>
              <select
                name="nichoDeNegocio"
                value={formData.nichoDeNegocio}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
              >
                <option value="">Seleccionar</option>
                <option value="Bike">Bike</option>
                <option value="Drive">Drive</option>
                <option value="Skydive">Skydive</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Motosport">Motosport</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿Buscas vender los productos en línea o en marketplace?
              </label>
              <select
                name="ventaOnline"
                value={formData.ventaOnline}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
              >
                <option value="">Seleccionar</option>
                <option value="True">Sí</option>
                <option value="False">No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿Por qué medio deseas que nos contactemos?
              </label>
              <select
                name="medioDeContacto"
                value={formData.medioDeContacto}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
              >
                <option value="">Seleccionar</option>
                <option value="Telefono">Teléfono</option>
                <option value="Mail">Mail</option>
                <option value="Redes Sociales">Redes Sociales</option>
              </select>
            </div>
          </div>

          {/* Botón de envío */}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Enviar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;