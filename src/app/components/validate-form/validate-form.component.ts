import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-validate-form',
	standalone: true,
	imports: [],
	templateUrl: './validate-form.component.html',
	styleUrl: './validate-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidateFormComponent {}
