import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'World';
  item = [{
    nama: 'buah kelengkeng',
    harga : 10000
  },{
    nama:'buah jeruk',
    harga:9000
  }];

  arr = [1,2,3,4];

  show : boolean = true;

  user = {
    nama:'kevin'
  }
  a;
  b;
  c;
  numb : boolean;
  star="***"
  list =[
    "***"
    ]
  Generate(){
    this.c = Math.pow(this.a, this.b);
    if(this.c%2!=0){
      this.numb = true;
      
    }
    else if(this.c%2==0){
      this.numb = false;
      for(var i = 3;i<=this.c;i++){
        this.star+="*";
        this.list.push(this.star);
      }
    }
  }

  Clear(){
    this.c = '';
    this.a = '';
    this.b = '';
  }

}

