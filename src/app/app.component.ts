import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive';
  secretPassword=false;
  list:any[]=[];
  onToggleDetails(){
    this.secretPassword= !this.secretPassword;
    this.list.push(this.list.length+1);
    console.log(this.secretPassword);
    console.log(this.list);
    
  }
}
