import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadChildren: () => import('@my-app/modules/products').then((m) => m.PROCUTCS_ROUTE ),
  },
  {
    path: 'orders',
    loadChildren: () => import('@my-app/modules/orders').then((m) => m.ORDERS_ROUTE ),
  },
];
