import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  decrement,
  reset,
  undo,
  setCount,
} from '../store/counter.actions';
import { selectCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

  onUndo() {
    this.store.dispatch(undo());
  }

  onSetCount(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const count = parseInt(inputElement.value, 10) || 0;
    this.store.dispatch(setCount({ value: count }));
  }
}
