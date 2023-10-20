import {
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import { v4 as uuidv4 } from 'uuid';

const bbdd = {
  header: {
    menu: [
      { id: uuidv4(), href: '/tickets', title: 'tickets', alt: 'ir a tickets' },
      {
        id: uuidv4(),
        href: '/discounts',
        title: 'descuentos',
        alt: 'ir a descuentos',
      },
      {
        id: uuidv4(),
        href: '/inventories',
        title: 'inventarios',
        alt: 'ir a inventarios',
      },
      {
        id: uuidv4(),
        href: '/loans',
        title: 'préstamos',
        alt: 'ir a préstamos',
      },
      {
        id: uuidv4(),
        href: '/purchase-orders',
        title: 'pedidos',
        alt: 'ir a pedidos',
      },
      {
        id: uuidv4(),
        href: '/reports',
        title: 'reportes',
        alt: 'ir a reportes',
      },
      {
        id: uuidv4(),
        href: '/configuration',
        title: 'configuración',
        alt: 'ir a configuración',
      },
    ],
  },
  CRUDS: {
    inputs: {
      category: [
        { id: uuidv4(), title: 'Nombre', name: 'name', placeholder: 'Nombre' },
        { id: uuidv4(), title: 'Descripción', name: 'description', placeholder: 'Descripción' }
      ],
      supplier: [],
      product: [],
    }
  }
};

export type IRoutes = {
  id: string;
  href: string;
  title: string;
  alt: string;
}
export type IInput = {
  id: string
  title: string
  name: string
  placeholder: string
  type?: string
}

export type IGlobalContext = {
  header: {
    menu: IRoutes[];
  };
  CRUDS: {
    inputs: {
      category: IInput[]
      supplier: IInput[]
      product: IInput[]
    }
  }
}

export const GlobalContext = createContextId<IGlobalContext>(
  'docs-global-context',
);

export default component$(() => {
  const data = useStore(bbdd);
  useContextProvider(GlobalContext, data);
  return <Slot />;
});
