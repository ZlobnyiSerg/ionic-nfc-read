import {Component} from '@angular/core';

import {AlertController, Platform, ToastController} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {NFC} from '@ionic-native/nfc/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private alertCtrl: AlertController,
        private nfc: NFC,
        private toast: ToastController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            // this.checkNfc();
        });
    }

    async checkNfc() {
        /*if (await this.nfc.enabled()) {
            const toast = await this.toast.create({
                message: 'NFC Listener activated',
                duration: 1000
            });
            await toast.present();
        } else {
            const alert = await this.alertCtrl.create({
                subHeader: 'NFC disabled',
                buttons: [{text: 'OK'}, {
                    text: 'GOTO SETTINGS',
                    handler: async () => {
                        await this.nfc.showSettings();
                    }
                }]
            });
            await alert.present();
        }*/
    }

    async addListenNFC() {
        /*this.nfc.addTagDiscoveredListener(nfcEvent => {
            console.log('sesReadNFC', nfcEvent.tag);
        }).subscribe(data => {
            if (data && data.tag && data.tag.id) {
                const tagId = this.nfc.bytesToHexString(data.tag.id);
                console.log(tagId);
            }
        });*/
    }
}
