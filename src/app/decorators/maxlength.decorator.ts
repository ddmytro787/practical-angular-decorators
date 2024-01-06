import { AbstractControl, Validators } from '@angular/forms';

export function MaxLength(length: number) {
	return (target: any, propertyName: string) => {
		const prototype = target.constructor.prototype;
		const onInit = prototype.ngOnInit ?? (() => {});

		prototype.ngOnInit = function () {
			onInit.call(this);
			const control: AbstractControl = this[propertyName];
			control?.addValidators(Validators.maxLength(length));
		};
	};
}
