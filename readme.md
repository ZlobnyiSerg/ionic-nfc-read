## Ionic NFC reading example
This is working example to read NFC tags in ionic application.

1. Run `ionic cordova plugin add phonegap-nfc`
2. Run `npm install @ionic-native/nfc`
3. Add to app.module.ts NFC module:
```angular2
import {NFC} from '@ionic-native/nfc/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        NFC,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

4. Import NFC on platform-ready event and subscribe to nfc events (see `app.component.ts`)
