import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { selectSquares } from 'src/app/selectors/board.selectors';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  //board$ = this.store.select('board');
  squares$ = this.store.select(selectSquares);
  
  constructor(
    private store: Store<State>
  ) { 
    
  }

  ngOnInit(): void {
  }

}
