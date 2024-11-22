/**
 * Interfaz que define la estructura de un objeto `Medicamento`.
 * Representa un modelo de datos utilizado en la aplicación para gestionar medicamentos.
 */
export interface Medicamento {
  /**
   * Identificador único del medicamento.
   * Es opcional porque no estará presente al crear un nuevo medicamento, 
   * pero se asignará automáticamente por el backend.
   */
  id?: number;

  /**
   * Nombre del medicamento.
   * Campo obligatorio que debe ser proporcionado al crear o actualizar un medicamento.
   */
  nombre: string;

  /**
   * Descripción del medicamento.
   * Campo obligatorio que contiene información adicional sobre el medicamento.
   */
  descripcion: string;

  /**
   * Precio del medicamento.
   * Campo obligatorio que representa el costo unitario del medicamento.
   */
  precio: number;

  /**
   * Cantidad disponible del medicamento.
   * Campo obligatorio que indica el inventario actual del medicamento.
   */
  cantidad: number;
}

  