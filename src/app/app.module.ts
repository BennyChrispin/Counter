import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './store/counter.reducer';
import { historyReducer } from './store/history.reducer';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer,
      history: historyReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
