import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global/global.service';

export interface DialogData {
  id: number
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product = { title: '', image: '', description: '', price: '' };
  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private api: GlobalService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.api.getProductById(this.data.id).subscribe(res=> {
      console.log(res);
      this.product = res;
    }, err=> {
      console.log(err);
    })
  }
  AddToCart() {
    this.api.isUserAuthenticated().subscribe(res=> {
      if(res == true) {
        
      }
      else {
        this.router.navigate(['/login']);
        this.dialogRef.close();
      }
    })
  }
}