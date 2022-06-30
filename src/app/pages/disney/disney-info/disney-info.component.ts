import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
    
  }

}
