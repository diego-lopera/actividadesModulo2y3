import { Component, inject, model } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  productsService = inject(ProductsService);
  allProducts: any[] = [];

  nombre: string = '';
  precio: number = 0;
  imagen: string = '';
  marca: string = '';
  modelo: string = '';
  showForm: boolean = false;
  editMode: boolean = false;
  editProductId: string | null = null;
  

  getProducts(){
    console.log('Obtener productos');
    this.productsService.getProducts().subscribe((res:any)=>{
      if (res) {
        console.log(res);
        this.allProducts = res;
      } else {
        console.error('Error en la petición');
      }
    });
  }

  postProducts(){
    this.productsService.postProduct(this.nombre, this.marca, this.modelo, this.precio, this.imagen).subscribe((res:any)=>{
      if (res) {
        console.log(res);
        this.getProducts();
      } else {
        console.error('Error en la petición');
      }
    });
  }

  getIdProduct(id:string){
    this.editProductId = id;
    this.editMode = true;
    this.showForm = true;
    console.log(this.editProductId);
  }

  putProduct() {
    if (this.nombre === '' || this.imagen === '' || this.precio === 0 || this.marca === '' || this.modelo === '') {
      alert('Ingrese todos los campos');
    } else if (this.editProductId) {
      this.productsService.putProduct(this.nombre, this.marca, this.modelo, this.precio, this.imagen, this.editProductId)
        .subscribe((res: any) => {
          if (res) {
            this.getProducts();
            this.toggleForm();
          } else {
            console.error('Error en la peticion');
          }
        });
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.nombre = '';
      this.imagen = '';
      this.precio = 0;
      this.editMode = false;
      this.editProductId = null;
    }
  }

 deleteProduct(id: string) {
  console.log('producto a borrar: ', id);
    this.productsService.deleteProduct(id).subscribe((res: any) => {
      if (res) {
        console.log('res', res);
        this.getProducts();
      } else {
        console.error('Error en la peticion');
      }
    });
  }

  clearFields(){
    this.nombre === '';
    this.marca === '';
    this.modelo === '';
    this.precio === 0;
    this.imagen === '';
  }

  ngOnInit(){
    this.getProducts();
  }

}
