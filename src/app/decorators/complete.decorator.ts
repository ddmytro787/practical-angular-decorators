export function Complete(target: any, propertyName: string) {
	const prototype = target.constructor.prototype;
	const onDestroy = prototype.ngOnDestroy ?? (() => {});

	prototype.ngOnDestroy = function () {
		onDestroy.call(this);
		this[propertyName]?.complete?.();
	};
}
