import { v4 as uuidv4 } from 'uuid'

export default [
  { id: uuidv4(), path: '/', title: 'tickets', alt: 'ir a tickets' },
  { id: uuidv4(), path: '/discounts', title: 'descuentos', alt: 'ir a descuentos' },
  { id: uuidv4(), path: '/inventories', title: 'inventarios', alt: 'ir a inventarios' },
  { id: uuidv4(), path: '/suppliers', title: 'proveedores', alt: 'ir a proveedores' },
  { id: uuidv4(), path: '/purchase-orders', title: 'pedidos', alt: 'ir a pedidos' },
  { id: uuidv4(), path: '/reports', title: 'reportes', alt: 'ir a reportes' },
  { id: uuidv4(), path: '/configuration', title: 'configuración', alt: 'ir a configuración' },
];
