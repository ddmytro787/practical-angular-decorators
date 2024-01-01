import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ValidateFormDialogComponent } from '../validate-form-dialog/validate-form-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-validate-form',
	standalone: true,
	imports: [MatButtonModule],
	templateUrl: './validate-form.component.html',
	styleUrl: './validate-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidateFormComponent {
	constructor(private dialog: MatDialog) {}

	openDialog() {
		this.dialog.open(ValidateFormDialogComponent, { minWidth: '600px' });
	}
}
