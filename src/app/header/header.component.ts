import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private router: Router,) { }
  
    // navigate_contact() {
    //   this.loadingService.startLoading();
  
    //   // Simulate a delay (replace with your actual navigation logic)
    //   setTimeout(() => {
    //     this.router.navigate(['/']);
    //     this.loadingService.stopLoading();
    //   }, 2000);
    // }
}
