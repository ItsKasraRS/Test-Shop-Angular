import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  constructor(private service: GlobalService) { }

  ngOnInit(): void {
    // this.service.productList().then(res=>{
    //   this.product = res.json();
    //   console.log(res.json());
    // })
    this.service.productsList().subscribe(res=> {
      console.log(res);
      this.products = res;
    })
  }

}
