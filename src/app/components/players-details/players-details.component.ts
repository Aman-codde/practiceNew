import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { selectPlayers } from 'src/app/selectors/players.selectors';

@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.scss']
})
export class PlayersDetailsComponent implements OnInit {
  players$ =  this.store.select(selectPlayers);

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
  }



}
