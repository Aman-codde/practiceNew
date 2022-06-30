import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board$ = this.store.select('board');
  
  constructor(
    private store: Store<State>
  ) { 
    
  }

  ngOnInit(): void {
  }

}
