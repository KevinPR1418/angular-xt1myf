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

  Pesan = '';
  Klikbutton(){
    this.Pesan = 'tombol di tea';
  }
}

