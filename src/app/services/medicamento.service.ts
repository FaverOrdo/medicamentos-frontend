// Importaciones necesarias para el servicio
import { Injectable } from '@angular/core'; // Decorador para servicios en Angular
import { HttpClient } from '@angular/common/http'; // Cliente HTTP para realizar peticiones al backend
import { Observable } from 'rxjs'; // Manejo de datos asíncronos con observables
import { Medicamento } from '../models/medicamento'; // Modelo del medicamento

/**
 * Servicio para manejar las operaciones relacionadas con medicamentos.
 * Este servicio realiza peticiones al backend para obtener, crear, actualizar y eliminar medicamentos.
 */
@Injectable({
  providedIn: 'root', // Proporciona el servicio en el nivel raíz de la aplicación
})
export class MedicamentoService {
  /**
   * URL base del backend donde se gestionan los medicamentos.
   * Debe estar alineada con el endpoint configurado en el backend.
   */
  private apiUrl = 'http://localhost:8080/api/medicamentos';

  /**
   * Constructor del servicio.
   * @param http Cliente HTTP para realizar las peticiones.
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtener la lista de todos los medicamentos.
   * Realiza una petición GET al endpoint principal.
   * @returns Observable que emite un arreglo de objetos `Medicamento`.
   */
  getMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(this.apiUrl);
  }

  /**
   * Obtener un medicamento por su ID.
   * Realiza una petición GET al endpoint con el ID específico.
   * @param id Identificador único del medicamento que se desea obtener.
   * @returns Observable que emite el objeto `Medicamento` correspondiente.
   */
  getMedicamentoById(id: number): Observable<Medicamento> {
    return this.http.get<Medicamento>(`${this.apiUrl}/${id}`);
  }

  /**
   * Crear un nuevo medicamento.
   * Realiza una petición POST para agregar un medicamento al backend.
   * @param medicamento Objeto `Medicamento` que se desea crear.
   * @returns Observable que emite el objeto `Medicamento` creado.
   */
  createMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    return this.http.post<Medicamento>(this.apiUrl, medicamento);
  }

  /**
   * Actualizar un medicamento existente.
   * Realiza una petición PUT para modificar un medicamento ya registrado.
   * @param medicamento Objeto `Medicamento` con los datos actualizados.
   * @returns Observable que emite el objeto `Medicamento` actualizado.
   */
  updateMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    return this.http.put<Medicamento>(`${this.apiUrl}/${medicamento.id}`, medicamento);
  }

  /**
   * Eliminar un medicamento por su ID.
   * Realiza una petición DELETE al endpoint con el ID específico.
   * @param id Identificador único del medicamento que se desea eliminar.
   * @returns Observable que emite un valor vacío tras eliminar el medicamento.
   */
  deleteMedicamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
