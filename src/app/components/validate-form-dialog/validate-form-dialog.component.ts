import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogRef,
	MatDialogTitle,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ValidateForm } from '../../decorators/validate-form.decorator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { Required } from '../../decorators/required.decorator';
import { MaxLength } from '../../decorators/maxlength.decorator';

const CUSTOM_DATE_FORMATS = {
	parse: {
		dateInput: ['YYYY-MM-DD', 'DD-MM-YYYY', 'MM-DD-YYYY', 'YYYY/MM/DD', 'DD/MM/YYYY', 'MM/DD/YYYY'],
	},
	display: {
		dateInput: 'YYYY-MM-DD',
		monthYearLabel: 'MMMM YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM YYYY',
	},
};

@Component({
	selector: 'app-validate-form-dialog',
	standalone: true,
	imports: [
		MatButtonModule,
		MatDialogActions,
		MatDialogClose,
		MatDialogContent,
		MatDialogTitle,
		MatInputModule,
		ReactiveFormsModule,
		NgIf,
		MatDatepickerModule,
		MatNativeDateModule,
	],
	templateUrl: './validate-form-dialog.component.html',
	styleUrl: './validate-form-dialog.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{ provide: DateAdapter, useClass: NativeDateAdapter },
		{
			provide: MAT_DATE_FORMATS,
			useValue: CUSTOM_DATE_FORMATS,
		},
	],
})
export class ValidateFormDialogComponent {
	@Required
	@MaxLength(5)
	inputControl = new FormControl('');
	@Required
	@MaxLength(7)
	inputControl2 = new FormControl('');
	@Required
	startDateControl = new FormControl('');
	@Required
	endDateControl = new FormControl('');
	dateRangeControl = new FormGroup({
		startDate: this.startDateControl,
		endDate: this.endDateControl,
	});
	form = new FormGroup({
		input: this.inputControl,
		input2: this.inputControl2,
		dateRange: this.dateRangeControl,
	});

	constructor(private dialogRef: MatDialogRef<ValidateFormDialogComponent>) {}

	@ValidateForm('form')
	submit() {
		this.dialogRef.close();
	}
}
