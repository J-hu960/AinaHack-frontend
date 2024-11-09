export type Curso = {
    titulo: string;
    descripcion: string;
    tipo: "curso" | "taller" | "webinar"; // Puedes agregar más opciones según lo necesites
    modalidad: "online" | "presencial"; // Puedes agregar más opciones si aplica
    nivel: "básico" | "intermedio" | "avanzado";
    rating: number; // Asumiendo que el rating puede ser un número decimal
    precio: number;
    estado: "activo" | "inactivo"; // Puedes agregar más estados según sea necesario
  };
  