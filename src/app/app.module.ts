import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BoardComponent } from './components/board/board.component';
import { PlayersDetailsComponent } from './components/players-details/players-details.component';
import { EffectsModule } from '@ngrx/effects';
import { DisneyEffects } from './effects/disney.effects';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PlayersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([DisneyEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
