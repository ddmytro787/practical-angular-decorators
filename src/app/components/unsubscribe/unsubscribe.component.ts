import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-unsubscribe',
	standalone: true,
	imports: [],
	templateUrl: './unsubscribe.component.html',
	styleUrl: './unsubscribe.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnsubscribeComponent {}
