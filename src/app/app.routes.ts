import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'complete',
		loadComponent: () => import('./components/complete/complete.component').then((cmp) => cmp.CompleteComponent),
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
