import { Subscription } from 'rxjs';

export function Unsubscribe(target: any, _: string, description: PropertyDescriptor) {
	const prototype = target.constructor.prototype;
	let subscription: Subscription;

	const method = description.value;
	description.value = function (...args: any[]) {
		subscription = method.apply(this, args);
	};

	const onDestroy = prototype.ngOnDestroy ?? (() => {});
	prototype.ngOnDestroy = function () {
		onDestroy.call(this);
		subscription?.unsubscribe();
	};
}
