import { Component } from '@angular/core';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
        
    
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    isdisabled:boolean=false;

    constructor() { }
    
    myfun(){
        
this.isdisabled=!this.isdisabled;
    }
}
