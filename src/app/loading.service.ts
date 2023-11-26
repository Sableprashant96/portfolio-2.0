import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  startLoading() {
    this.loadingSubject.next(false);
  }

  stopLoading() {
    // Simulate a delay before stopping the loader (e.g., 2000 milliseconds or 2 seconds)
    setTimeout(() => {
      this.loadingSubject.next(false);
    }, 500);
  }
}
