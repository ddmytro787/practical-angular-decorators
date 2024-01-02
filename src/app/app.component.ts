import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { setAppInject } from './constants/injector';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatSidenavModule,
		RouterLink,
		RouterLinkActive,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	constructor(private injector: Injector) {
		setAppInject(this.injector);
	}
}
