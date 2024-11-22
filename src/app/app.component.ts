// Importaciones necesarias para el componente principal de la aplicación
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Directiva que permite renderizar rutas dinámicas
import { MedicamentoListComponent } from './components/medicamento-list/medicamento-list.component'; // Componente de la lista de medicamentos

/**
 * Componente principal de la aplicación.
 * Actúa como el punto de entrada para toda la interfaz de usuario y contiene configuraciones globales.
 */
@Component({
  selector: 'app-root', // Selector que identifica al componente en las plantillas HTML
  standalone: true, // Define el componente como independiente, sin necesidad de un módulo asociado
  imports: [RouterOutlet], // Importa los módulos y componentes necesarios
  templateUrl: './app.component.html', // Ruta al archivo de plantilla HTML del componente
  styleUrl: './app.component.css', // Ruta al archivo de estilos CSS del componente
})
export class AppComponent {
  /**
   * Título de la aplicación.
   * Puede ser utilizado en la plantilla para mostrar el nombre de la aplicación.
   */
  title = 'medicamentos-frontend';
}
