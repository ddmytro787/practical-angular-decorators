import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { filter, tap } from 'rxjs';
import { AppInjector } from '../constants/injector';

export function Confirm(message: string) {
	return (_: any, _1: string, descriptor: PropertyDescriptor) => {
		const method = descriptor.value;
		descriptor.value = function (...args: any[]) {
			AppInjector.get(MatDialog)
				?.open(ConfirmDialogComponent, {
					minWidth: '400px',
					data: message.replace('{{id}}', `"${args[0]?.toString()}"`),
				})
				.afterClosed()
				.pipe(
					filter((confirm) => !!confirm),
					tap(() => method.apply(this, args)),
				)
				.subscribe();
		};
	};
}
