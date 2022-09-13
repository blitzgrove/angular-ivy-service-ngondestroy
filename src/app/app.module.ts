import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DataService } from './data.service';

import { take } from 'rxjs/operators';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DataComponent],
  bootstrap: [AppComponent],
  providers: [
    DataService,
    {
      provide: APP_INITIALIZER,
      useFactory: (data: DataService) => () => data.initialize(),
      deps: [DataService],
      multi: true,
    },
  ],
})
export class AppModule {}
