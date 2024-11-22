// Importaciones necesarias para inicializar la aplicación en Angular
import { bootstrapApplication } from '@angular/platform-browser'; // Función para iniciar la aplicación Angular
import { AppComponent } from './app/app.component'; // Componente raíz de la aplicación
import { provideHttpClient } from '@angular/common/http'; // Proveedor para manejar solicitudes HTTP
import { provideRouter } from '@angular/router'; // Proveedor para configurar el sistema de rutas
import { routes } from './app/app.routes'; // Configuración de las rutas de la aplicación

/**
 * Inicializa la aplicación Angular.
 * Configura los servicios necesarios como el cliente HTTP y el sistema de enrutamiento.
 */
bootstrapApplication(AppComponent, {
  providers: [
    /**
     * Proveedor para habilitar el uso de `HttpClient`.
     * Esto permite que los servicios de la aplicación realicen solicitudes HTTP al backend.
     */
    provideHttpClient(),

    /**
     * Proveedor para configurar el sistema de enrutamiento.
     * Se utiliza la configuración de rutas definida en `app.routes`.
     */
    provideRouter(routes),
  ],
})
  .catch(err => console.error(err)); // Manejo de errores al inicializar la aplicación
