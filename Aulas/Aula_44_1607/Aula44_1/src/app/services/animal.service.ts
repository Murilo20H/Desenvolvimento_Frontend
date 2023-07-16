
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {}

  public getAnimais(): Observable<Animal[]> {
    return this.http.get<Animal[]>("http://localhost:8070/listar-animais");
  }

  public AdicionarAnimal(animal: Animal): Observable<string> {
    return this.http.post<string>("http://localhost:8070/adicionar-animal", animal);
  }
}
