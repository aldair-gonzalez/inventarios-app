import { Slot, component$, createContextId, useContextProvider, useStore } from '@builder.io/qwik';
import { v4 as uuidv4 } from 'uuid';

const bbdd = {
  header: {
    menu: [
      { id: uuidv4(), href: '/', title: 'tickets', alt: 'ir a tickets' },
      { id: uuidv4(), href: '/discounts', title: 'descuentos', alt: 'ir a descuentos', },
      { id: uuidv4(), href: '/inventories', title: 'inventarios', alt: 'ir a inventarios' },
      { id: uuidv4(), href: '/suppliers', title: 'proveedores', alt: 'ir a proveedores' },
      { id: uuidv4(), href: '/purchase-orders', title: 'pedidos', alt: 'ir a pedidos' },
      { id: uuidv4(), href: '/reports', title: 'reportes', alt: 'ir a reportes' },
      { id: uuidv4(), href: '/configuration', title: 'configuración', alt: 'ir a configuración' },
    ]
  }
};

export interface IRoutes {
  id: string
  href: string
  title: string
  alt: string
}

export interface IGlobalContext {
  header: {
    menu: IRoutes[]
  }
}

export const GlobalContext = createContextId<IGlobalContext>('docs-global-context');

export default component$(() => {
  const data = useStore(bbdd);
  useContextProvider(GlobalContext, data);
  return <Slot />;
});
