import { Button, Card, Input, Text, Loading } from "@nextui-org/react"; // Importar Loading
import type { NextPage } from "next";
import { useState } from "react";
import Swal from "sweetalert2";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
  capacidadInversion: boolean | null;
  tiendaFisica: boolean | null;
  nichoDeNegocio: string;
  ventaOnline: boolean | null;
  medioDeContacto: string;
};

// Tipo para los errores de validación
type ValidationErrors = {
  [key: string]: string;
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
    capacidadInversion: null,
    tiendaFisica: null,
    nichoDeNegocio: "",
    ventaOnline: null,
    medioDeContacto: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Estado para el spinner
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({}); // Estado para errores de validación

  // Maneja cambios en los campos de texto y select
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Convertir valores de campos booleanos
    let newValue: string | boolean | null = value;
    if (
      name === "capacidadInversion" ||
      name === "tiendaFisica" ||
      name === "ventaOnline"
    ) {
      newValue = value === "" ? null : value === "true"; // Convierte "true" o "false" a boolean, o null si es "Seleccionar"
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });

    // Limpiar el error de validación cuando el usuario modifica el campo
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Activar el spinner
    setValidationErrors({}); // Limpiar errores anteriores

    if (!apiUrl) {
      throw new Error("La variable de entorno no está definida.");
    }
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();

        // Si el error es de validación, mapear los errores a los campos correspondientes
        if (errorData.status === "validation error") {
          const validationErrors = errorData.errors.reduce((acc: ValidationErrors, err: { field: string; message: string }) => {
            acc[err.field] = err.message;
            return acc;
          }, {});
          setValidationErrors(validationErrors);
          return;
        }

        console.log(validationErrors)

        // Mostrar un modal de error si la respuesta no es exitosa
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.",
          backdrop: "rgba(0, 0, 0, 0.5)",
          confirmButtonColor: "#3085d6",
        });
        return;
      }

      const data = await response.json();
      console.log("Formulario enviado con éxito:", data);

      // Mostrar un modal de éxito
      Swal.fire({
        icon: "success",
        title: "¡Formulario enviado!",
        text: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
        backdrop: "rgba(0, 0, 0, 0.5)",
        confirmButtonColor: "#3085d6",
      });

      // Limpiar los campos del formulario
      setFormData({
        nombre: "",
        apellido: "",
        razonSocial: "",
        pais: "Guatemala",
        telefono: "",
        email: "",
        redesSociales: "",
        paginaWeb: "",
        capacidadInversion: null,
        tiendaFisica: null,
        nichoDeNegocio: "",
        ventaOnline: null,
        medioDeContacto: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);

      // Mostrar un modal de error si hay una excepción
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.",
        backdrop: "rgba(0, 0, 0, 0.5)",
        confirmButtonColor: "#3085d6",
      });
    } finally {
      setIsLoading(false); // Desactivar el spinner (tanto en éxito como en error)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        {/* Título del formulario */}
        <Text h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4 mt-4">
          Conviértete en distribuidor oficial! TESTING
        </Text>
        {/* Texto descriptivo */}
        <Text className="text-center text-gray-600 mb-8 p-8">
          Completa el formulario a continuación y uno de nuestros representantes se pondrá en contacto contigo para compartirte los detalles y beneficios de convertirte en distribuidor oficial de GoPro.
        </Text>

        <form onSubmit={handleSubmit} className="space-y-6 p-8">
          {/* Campos del formulario */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                label="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                fullWidth
                required
                placeholder="Ingresa tu nombre"
                className="bg-gray-100 rounded-lg"
              />
              {validationErrors.nombre && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.nombre}
                </Text>
              )}
            </div>
            <div>
              <Input
                label="Apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                fullWidth
                required
                placeholder="Ingresa tu apellido"
                className="bg-gray-100 rounded-lg"
              />
              {validationErrors.apellido && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.apellido}
                </Text>
              )}
            </div>
            <div>
              <Input
                label="Razon Social"
                name="razonSocial"
                value={formData.razonSocial}
                onChange={handleChange}
                fullWidth
                required
                placeholder="Ingresa tu razón social"
                className="bg-gray-100 rounded-lg"
              />
              {validationErrors.razonSocial && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.razonSocial}
                </Text>
              )}
            </div>
            <div>
              <Input
                label="Pais"
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                fullWidth
                required
                placeholder="Ingresa tu país"
                className="bg-gray-100 rounded-lg"
              />
              {validationErrors.pais && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.pais}
                </Text>
              )}
            </div>
            <div>
              <Input
                label="Número de Teléfono"
                name="telefono"
                type="number"
                value={formData.telefono}
                onChange={handleChange}
                fullWidth
                required
                placeholder="Ingresa tu número de teléfono"
                className="bg-gray-100 rounded-lg"
              />
              {validationErrors.telefono && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.telefono}
                </Text>
              )}
            </div>
            <div>
              <Input
                label="Correo Electrónico"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                placeholder="Ingresa tu correo electrónico"
                className="bg-gray-100 rounded-lg"
              />
              {validationErrors.email && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.email}
                </Text>
              )}
            </div>
            <div>
              <Input
                label="Redes Sociales (URL)"
                name="redesSociales"
                value={formData.redesSociales}
                onChange={handleChange}
                fullWidth
                placeholder="https://www.instagram.com/gopro/"
                className="bg-gray-100 rounded-lg"
              />
              {validationErrors.redesSociales && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.redesSociales}
                </Text>
              )}
            </div>
            <div>
              <Input
                label="Página Web (URL)"
                name="paginaWeb"
                value={formData.paginaWeb}
                onChange={handleChange}
                fullWidth
                placeholder="https://gopro.com/es/us/"
                className="bg-gray-100 rounded-lg"
              />
              {validationErrors.paginaWeb && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.paginaWeb}
                </Text>
              )}
            </div>
          </div>

          {/* Campos de selección (select nativo) */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿Tienes capacidad de inversión inicial?
              </label>
              <select
                name="capacidadInversion"
                value={formData.capacidadInversion === null ? "" : formData.capacidadInversion.toString()}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
              >
                <option value="">Seleccionar</option>
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
              {validationErrors.capacidadInversion && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.capacidadInversion}
                </Text>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿Cuentas con una tienda física?
              </label>
              <select
                name="tiendaFisica"
                value={formData.tiendaFisica === null ? "" : formData.tiendaFisica.toString()}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
              >
                <option value="">Seleccionar</option>
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
              {validationErrors.tiendaFisica && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.tiendaFisica}
                </Text>
              )}
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
              {validationErrors.nichoDeNegocio && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.nichoDeNegocio}
                </Text>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿Buscas vender los productos en línea o en marketplace?
              </label>
              <select
                name="ventaOnline"
                value={formData.ventaOnline === null ? "" : formData.ventaOnline.toString()}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
              >
                <option value="">Seleccionar</option>
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
              {validationErrors.ventaOnline && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.ventaOnline}
                </Text>
              )}
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
              {validationErrors.medioDeContacto && (
                <Text color="error" className="text-sm text-red-500 mt-1">
                  {validationErrors.medioDeContacto}
                </Text>
              )}
            </div>
          </div>

          {/* Botón de envío */}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
              disabled={isLoading} // Deshabilitar el botón mientras se carga
            >
              {isLoading ? (
                <Loading type="points" color="white" size="sm" />
              ) : (
                "Enviar"
              )}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;