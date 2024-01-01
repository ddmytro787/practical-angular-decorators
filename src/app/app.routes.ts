import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'complete-event',
		loadComponent: () =>
			import('./components/complete-event/complete-event.component').then((cmp) => cmp.CompleteEventComponent),
	},
	{
		path: 'unsubscribe',
		loadComponent: () =>
			import('./components/unsubscribe/unsubscribe.component').then((cmp) => cmp.UnsubscribeComponent),
	},
	{
		path: 'validate-form',
		loadComponent: () =>
			import('./components/validate-form/validate-form.component').then((cmp) => cmp.ValidateFormComponent),
	},
	{
		path: 'confirm',
		loadComponent: () => import('./components/confirm/confirm.component').then((cmp) => cmp.ConfirmComponent),
	},
	{
		path: '',
		loadComponent: () => import('./components/welcome/welcome.component').then((cmp) => cmp.WelcomeComponent),
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full',
	},
];
