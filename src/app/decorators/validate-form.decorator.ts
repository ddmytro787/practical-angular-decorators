import { FormGroup } from '@angular/forms';

export function ValidateForm<T>(propertyName: string, cb?: Function) {
	return (_: any, _1: string, descriptor: PropertyDescriptor) => {
		const method = descriptor.value;
		descriptor.value = function (...args: any[]) {
			const form = (this as { [key: string]: FormGroup })[propertyName];
			if (form?.status === 'INVALID') {
				cb?.(this);
				form.markAllAsTouched();
				form.updateValueAndValidity();
				return;
			}
			return method.apply(this, args);
		};
	};
}
