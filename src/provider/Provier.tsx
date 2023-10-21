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
        {
          id: uuidv4(),
          title: 'Descripción',
          name: 'description',
          placeholder: 'Descripción',
        },
      ],
      supplier: [
        { id: uuidv4(), title: 'name', name: 'name', placeholder: 'name' },
        {
          id: uuidv4(),
          title: 'description',
          name: 'description',
          placeholder: 'description',
        },
        {
          id: uuidv4(),
          title: 'address',
          name: 'address',
          placeholder: 'address',
        },
        { id: uuidv4(), title: 'city', name: 'city', placeholder: 'city' },
        { id: uuidv4(), title: 'state', name: 'state', placeholder: 'state' },
        {
          id: uuidv4(),
          title: 'zip_code',
          name: 'zip_code',
          placeholder: 'zip_code',
          type: 'number',
        },
        {
          id: uuidv4(),
          title: 'phone_number',
          name: 'phone_number',
          placeholder: 'phone_number',
          type: 'number',
        },
        {
          id: uuidv4(),
          title: 'email_address',
          name: 'email_address',
          placeholder: 'email_address',
        },
        {
          id: uuidv4(),
          title: 'website',
          name: 'website',
          placeholder: 'website',
        },
        {
          id: uuidv4(),
          title: 'credit_limit',
          name: 'credit_limit',
          placeholder: 'credit_limit',
          type: 'number',
        },
      ],
      product: [],
    },
  },
};

export type IRoutes = {
  id: string;
  href: string;
  title: string;
  alt: string;
};
export type IInput = {
  id: string;
  title: string;
  name: string;
  placeholder: string;
  type?: string;
};

export type IGlobalContext = {
  header: {
    menu: IRoutes[];
  };
  CRUDS: {
    inputs: {
      category: IInput[];
      supplier: IInput[];
      product: IInput[];
    };
  };
};

export const GlobalContext = createContextId<IGlobalContext>(
  'docs-global-context',
);

export default component$(() => {
  const data = useStore(bbdd);
  useContextProvider(GlobalContext, data);
  return <Slot />;
});
