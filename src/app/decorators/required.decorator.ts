import { AbstractControl, Validators } from '@angular/forms';

export function Required(target: any, propertyName: string) {
	const prototype = target.constructor.prototype;
	const onInit = prototype.ngOnInit ?? (() => {});

	prototype.ngOnInit = function () {
		onInit.call(this);
		const control: AbstractControl = this[propertyName];
		control?.addValidators(Validators.required);
	};
}
