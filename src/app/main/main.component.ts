import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  

  countries:any=[];
  amount: number = 0;
  country1: string = 'USD';
  country2: string = 'USD';
  result: number = 0;


  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getCurrencyData().subscribe((data:any)=>{
      this.countries=data.rates;
      console.log(this.countries);
      })
  }

  
  convertCurrency(){
    if (this.countries && this.amount) {
      const rate1 = this.countries[this.country1];
      const rate2 = this.countries[this.country2];
      this.result = (this.amount / rate1) * rate2;
    }
  }

}
