// Importación de módulos y recursos necesarios para el componente
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MedicamentoService } from '../../services/medicamento.service';
import { Medicamento } from '../../models/medicamento';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';

/**
 * Componente que muestra una lista de medicamentos.
 * Este componente permite listar, actualizar y eliminar medicamentos.
 */
@Component({
  selector: 'app-medicamento-list', // Selector del componente para usarlo en las plantillas
  standalone: true, // Define el componente como independiente
  imports: [RouterModule, CommonModule, NgFor, CurrencyPipe], // Módulos necesarios para funcionalidades en la plantilla
  templateUrl: './medicamento-list.component.html', // Ruta al archivo de plantilla HTML
  styleUrls: ['./medicamento-list.component.css'], // Ruta al archivo de estilos CSS
})
export class MedicamentoListComponent {
  /**
   * Lista de medicamentos que se mostrarán en la tabla.
   * Inicialmente es un arreglo vacío.
   */
  medicamentos: Medicamento[] = [];

  /**
   * Mensaje que se muestra al usuario tras una operación exitosa, como eliminar un medicamento.
   * Inicialmente es null.
   */
  mensajeExito: string | null = null;

  /**
   * Constructor del componente.
   * @param medicamentoService Servicio para manejar operaciones relacionadas con medicamentos.
   * @param router Utilizado para navegar entre rutas.
   */
  constructor(
    private medicamentoService: MedicamentoService,
    private router: Router
  ) {
    this.cargarMedicamentos(); // Cargar la lista de medicamentos al inicializar el componente
  }

  /**
   * Método para cargar la lista de medicamentos desde el backend.
   * Realiza una petición al servicio y actualiza la propiedad `medicamentos`.
   */
  cargarMedicamentos() {
    this.medicamentoService.getMedicamentos().subscribe({
      next: (data) => {
        this.medicamentos = data; // Asignar los datos recibidos a la lista de medicamentos
      },
      error: (error) => {
        console.error('Error al cargar medicamentos:', error);
      },
    });
  }

  /**
   * Método para eliminar un medicamento por su ID.
   * Pregunta al usuario si está seguro antes de realizar la operación.
   * @param id Identificador del medicamento que se desea eliminar.
   */
  eliminarMedicamento(id: number | undefined): void {
    if (!id) {
      console.error('ID no válido para eliminar el medicamento.');
      return;
    }

    // Confirmar la acción con el usuario antes de proceder
    if (confirm('¿Está seguro de que desea eliminar este medicamento?')) {
      this.medicamentoService.deleteMedicamento(id).subscribe({
        next: () => {
          console.log('Medicamento eliminado exitosamente');
          this.cargarMedicamentos(); // Refrescar la lista de medicamentos tras la eliminación
        },
        error: (err) => {
          console.error('Error al eliminar el medicamento:', err);
        },
      });
    }
  }
}
