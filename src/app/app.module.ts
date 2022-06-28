import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
<<<<<<< HEAD
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
=======
>>>>>>> 26d2aa6296282a9a651413cfedd77fb2d64fd872

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
=======
    StoreModule.forRoot({}, {})
>>>>>>> 26d2aa6296282a9a651413cfedd77fb2d64fd872
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
