import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-confirm',
	standalone: true,
	imports: [],
	templateUrl: './confirm.component.html',
	styleUrl: './confirm.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmComponent {}
