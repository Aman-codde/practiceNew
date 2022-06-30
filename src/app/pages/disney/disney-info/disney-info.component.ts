import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { actionloadCharacters } from 'src/app/actions/disney.actions';
import { State } from 'src/app/reducers/disney.reducer';
import { DisneyService } from 'src/app/services/disney.service';

@Component({
  selector: 'app-disney-info',
  templateUrl: './disney-info.component.html',
  styleUrls: ['./disney-info.component.scss']
})
export class DisneyInfoComponent implements OnInit {
  characterRes$ = this.disneyService.getCharacters();

  constructor(
    private disneyService: DisneyService,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(actionloadCharacters());
  }

}
