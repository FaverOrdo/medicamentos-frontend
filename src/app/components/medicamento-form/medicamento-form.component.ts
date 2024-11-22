// Importación de módulos necesarios desde Angular y otros recursos
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Medicamento } from '../../models/medicamento';
import { MedicamentoService } from '../../services/medicamento.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-medicamento-form', // Selector que se usa para insertar este componente en la plantilla HTML
  standalone: true, // Indica que el componente es independiente y no depende de un módulo
  imports: [RouterModule, FormsModule, NgIf, CommonModule], // Importa los módulos necesarios para el componente
  templateUrl: './medicamento-form.component.html', // Ruta al archivo de plantilla HTML
  styleUrls: ['./medicamento-form.component.css'], // Ruta al archivo de estilos CSS
})
export class MedicamentoFormComponent implements OnInit {
  /**
   * Objeto que representa el medicamento en el formulario.
   * Inicializado con valores por defecto.
   */
  medicamento: Medicamento = {
    nombre: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
  };

  /**
   * Mensaje que se muestra al usuario tras una operación exitosa (crear o actualizar).
   * Inicialmente es null.
   */
  mensajeExito: string | null = null;

  /**
   * Bandera que indica si el formulario está en modo edición o creación.
   * Si es `true`, significa que se está editando un medicamento existente.
   */
  esEdicion: boolean = false;

  /**
   * Constructor del componente.
   * @param medicamentoService Servicio para manejar operaciones relacionadas con medicamentos.
   * @param router Utilizado para navegar entre rutas.
   * @param route Permite acceder a parámetros de la ruta actual.
   */
  constructor(
    private medicamentoService: MedicamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   * Verifica si hay un `id` en los parámetros de la URL para determinar si se debe cargar un medicamento existente.
   */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtener ID desde los parámetros de la URL
    if (id) {
      this.esEdicion = true; // Establecer modo edición
      this.medicamentoService.getMedicamentoById(+id).subscribe({
        next: (medicamento) => {
          this.medicamento = medicamento; // Cargar datos del medicamento en el formulario
        },
        error: (error) => {
          console.error('Error al cargar el medicamento:', error);
        },
      });
    }
  }

  /**
   * Método para guardar el medicamento.
   * Realiza validaciones para diferenciar entre creación de un nuevo medicamento y actualización de uno existente.
   */
  guardarMedicamento() {
    // Validar si los campos del formulario son válidos
    if (!this.medicamento.nombre || !this.medicamento.descripcion || this.medicamento.precio < 0 || this.medicamento.cantidad < 0) {
      console.error('El formulario contiene errores de validación.');
      return;
    }

    if (this.esEdicion) {
      // Actualizar un medicamento existente
      this.medicamentoService.updateMedicamento(this.medicamento).subscribe({
        next: () => {
          this.mensajeExito = '¡Medicamento actualizado exitosamente!';
          // Esperar 2 segundos antes de redirigir a la lista de medicamentos
          setTimeout(() => {
            this.mensajeExito = null;
            this.router.navigate(['/medicamentos']); // Redirigir a la lista
          }, 2000);
        },
        error: (error) => {
          console.error('Error al actualizar el medicamento:', error);
        },
      });
    } else {
      // Crear un nuevo medicamento
      this.medicamentoService.createMedicamento(this.medicamento).subscribe({
        next: () => {
          this.mensajeExito = '¡Medicamento agregado exitosamente!';
          // Esperar 2 segundos antes de redirigir a la lista de medicamentos
          setTimeout(() => {
            this.mensajeExito = null;
            this.router.navigate(['/medicamentos']); // Redirigir a la lista
          }, 2000);
        },
        error: (error) => {
          console.error('Error al agregar el medicamento:', error);
        },
      });
    }
  }
}
