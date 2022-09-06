import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/global/global.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  constructor(private service: GlobalService, public dialog: MatDialog) { }

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


  SeeDetails(id: number){
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '500px',
      data: {id: id},
    });
  }
}
