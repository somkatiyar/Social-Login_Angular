import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-swapvalue',
  templateUrl: './swapvalue.component.html',
  styleUrls: ['./swapvalue.component.scss']
})
export class SwapvalueComponent implements OnInit {

  name;
  address;
  stateList;
  districList;
  productList;
  myOrderList;
  orderView: boolean = false;
  myOrderListView: boolean = false;
  productDetail;
  picUrl = "http://localhost:3000/"
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getState();
    this.getProducts();
  }

  getProducts() {
    this.dataService.getProducts({}).subscribe(result => {

      console.log(result);

      this.productList = result['data'];
    })
  }

  getState() {
    this.dataService.getStates({}).subscribe(result => {


      this.stateList = result['data'];
    })
  }

  getDistrict(id) {


    let body = {
      stateId: id
    }

    this.dataService.getDistrictBystateId(body).subscribe(result => {
      this.districList = result['data'];
    })

  }

  orderDetaildView(itemId) {
    this.orderView = true;
    this.name ="";
    this.address = "";
    this.dataService.getProductById({ id: itemId }).subscribe(data => {
      this.productDetail = data['data'];
    })
  }

  placeOrder() {

    let body = {
      orderBy: this.name,
      itemName: this.productDetail.name,
      address: this.address,
      productId: this.productDetail._id,
      userId:"5d9ecccd575da614daf83d91"
    }
   
    this.dataService.orderCreate(body).subscribe(result => {
      console.log(result, 'result');

    })
  }


  myOrderListDetail() {
    this.myOrderListView = true;
    this.dataService.orderByUserId({id:"5d9ecccd575da614daf83d91"}).subscribe(result =>{
      this.myOrderList = result['data'];
      console.log(this.myOrderList,'bkh');
      
    })
  }

}
