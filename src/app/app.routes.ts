// Importación de los módulos necesarios desde Angular y los componentes relacionados
import { Routes } from '@angular/router';
import { MedicamentoListComponent } from './components/medicamento-list/medicamento-list.component';
import { MedicamentoFormComponent } from './components/medicamento-form/medicamento-form.component';

/**
 * Configuración de las rutas para la aplicación.
 * Define las rutas asociadas a los componentes que gestionan medicamentos.
 */
export const routes: Routes = [
  /**
   * Ruta raíz ('') que redirige automáticamente a la lista de medicamentos.
   * - `redirectTo`: Indica que el usuario será redirigido al path 'medicamentos'.
   * - `pathMatch: 'full'`: Especifica que debe coincidir exactamente con la ruta '' para redirigir.
   */
  { path: '', redirectTo: 'medicamentos', pathMatch: 'full' },

  /**
   * Ruta para mostrar la lista de medicamentos.
   * - `path: 'medicamentos'`: Define el segmento de URL asociado a este componente.
   * - `component: MedicamentoListComponent`: Especifica el componente que se renderizará.
   */
  { path: 'medicamentos', component: MedicamentoListComponent },

  /**
   * Ruta para agregar un nuevo medicamento.
   * - `path: 'medicamentos/add'`: Define el segmento de URL para crear un medicamento.
   * - `component: MedicamentoFormComponent`: Utiliza el formulario para ingresar datos del medicamento.
   */
  { path: 'medicamentos/add', component: MedicamentoFormComponent },

  /**
   * Ruta para editar un medicamento existente.
   * - `path: 'medicamentos/edit/:id'`: Define el segmento de URL para editar un medicamento específico.
   * - `:id`: Parámetro dinámico que representa el identificador del medicamento.
   * - `component: MedicamentoFormComponent`: Utiliza el mismo formulario pero en modo edición.
   */
  { path: 'medicamentos/edit/:id', component: MedicamentoFormComponent },
];
