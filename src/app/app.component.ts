import {Component, ViewEncapsulation} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {MdSnackBar, MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from '../auth/auth.service';

@Component({
    selector: 'app',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    constructor(private auth: AuthService,
                private router: Router,
                public snackBar: MdSnackBar,
                iconRegistry: MdIconRegistry,
                sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'google',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/auth/google.svg'));

        iconRegistry.addSvgIcon(
            'facebook',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/auth/facebook.svg'));

        iconRegistry.addSvgIcon(
            'twitter',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/auth/twitter.svg'));

        iconRegistry.addSvgIcon(
            'github',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/auth/github.svg'));

        iconRegistry.addSvgIcon(
            'logo_white',
            sanitizer.bypassSecurityTrustResourceUrl('assets/images/logo_fireplace_white.svg'));

        iconRegistry.addSvgIcon(
            'logo_color',
            sanitizer.bypassSecurityTrustResourceUrl('assets/images/logo_fireplace_color.svg'));
    }

    signOut(message: string): void {
        this.auth.signOut();
        this.router.navigate(['/landing']);

        this.snackBar.open(message, null, {
            duration: 1000
        });
    }
}
