import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent {
loading : boolean = false;


constructor(private loadingService: LoadingService) { }

// ngOnInit(): void {
//   this.loadingService.loading$.subscribe(loading => this.loading = loading);
// }

}
