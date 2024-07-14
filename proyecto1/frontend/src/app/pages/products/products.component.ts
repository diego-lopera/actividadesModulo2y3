import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productsService = inject(ProductsService);
  allProducts: any[] = [];

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

  ngOnInit(){
    this.getProducts();
  }

}
