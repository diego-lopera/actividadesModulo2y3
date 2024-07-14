import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  httpClient = inject(HttpClient);
  API_URL_GET = 'http://localhost:3000/obtenerProductos';
  API_URL_POST = 'http://localhost:3000/registrarProductos';
  API_URL_PUT = 'http://localhost:3000/actualizarProducto';
  API_URL_DELETE = 'http://localhost:3000/eliminarProducto';

  getProducts(){
    return this.httpClient.get(this.API_URL_GET);
  };

  postProduct(nombre:string, marca:string, modelo:string, precio:number, imagen:string){
    const infoProducto = {
      nombre: nombre,
      marca: marca,
      modelo: modelo,
      precio: precio, 
      imagen: imagen
    }

    return this.httpClient.post(this.API_URL_POST, infoProducto);
  };

  putProduct(nombre:string, marca:string, modelo:string, precio:number, imagen:string, id:string){
    const infoProducto = {
      nombre: nombre,
      marca: marca,
      modelo: modelo,
      precio: precio, 
      imagen: imagen
    }

    return this.httpClient.put(`${this.API_URL_PUT}/${id}`, infoProducto);

  };

  deleteProduct(id:string){
    return this.httpClient.delete(`${this.API_URL_DELETE}/${id}`);
  };

}
