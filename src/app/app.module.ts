import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createEpicMiddleware } from 'redux-observable';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootEpic } from './store/epics/epics';
import { IAppState, INITIAL_STATE, rootReducer } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devtools: DevToolsExtension,
    private rootEpic: RootEpic
  ) {
    const epicMiddleware = createEpicMiddleware();
    const middleware = [epicMiddleware];
    let enhancers = [];

    if(!environment.production && devtools.isEnabled()){
      enhancers = [...enhancers, devtools.enhancer()]
    }

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      middleware, 
      enhancers
    );

    epicMiddleware.run(rootEpic.epics)
  }

}
