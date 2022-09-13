import { Injectable } from '@angular/core';

import { timer, BehaviorSubject, Subject, tap, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class DataService {
  private close$ = new Subject<void>();
  private bufferSource = new BehaviorSubject<number>(0);
  public readonly buffer$ = this.bufferSource.asObservable();

  public initialize(): void {
    timer(0, 2000)
      .pipe(
        tap((value: number) => this.bufferSource.next(value)),
        tap((value) => console.log(value)),
        takeUntil(this.close$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    console.log('Service ngOnDestroy triggered');
    this.close$.next();
  }
}
