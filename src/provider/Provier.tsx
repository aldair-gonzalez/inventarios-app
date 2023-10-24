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
        { id: uuidv4(), label: 'Nombre', name: 'name', placeholder: 'Nombre' },
        {
          id: uuidv4(),
          label: 'Descripción',
          name: 'description',
          placeholder: 'Descripción',
        },
      ],
      supplier: [
        { id: uuidv4(), label: 'name', name: 'name', placeholder: 'name' },
        {
          id: uuidv4(),
          label: 'description',
          name: 'description',
          placeholder: 'description',
        },
        {
          id: uuidv4(),
          label: 'address',
          name: 'address',
          placeholder: 'address',
        },
        { id: uuidv4(), label: 'city', name: 'city', placeholder: 'city' },
        { id: uuidv4(), label: 'state', name: 'state', placeholder: 'state' },
        {
          id: uuidv4(),
          label: 'zip_code',
          name: 'zip_code',
          placeholder: 'zip_code',
          type: 'number',
        },
        {
          id: uuidv4(),
          label: 'phone_number',
          name: 'phone_number',
          placeholder: 'phone_number',
          type: 'number',
        },
        {
          id: uuidv4(),
          label: 'email_address',
          name: 'email_address',
          placeholder: 'email_address',
        },
        {
          id: uuidv4(),
          label: 'website',
          name: 'website',
          placeholder: 'website',
        },
        {
          id: uuidv4(),
          label: 'credit_limit',
          name: 'credit_limit',
          placeholder: 'credit_limit',
          type: 'number',
        },
      ],
      product: [
        {
          id: uuidv4(),
          label: 'Código',
          name: 'product_code',
          placeholder: 'Código',
        },
        { id: uuidv4(), label: 'Nombre', name: 'name', placeholder: 'Nombre' },
        {
          id: uuidv4(),
          label: 'Descripción',
          name: 'description',
          placeholder: 'Descripción',
        },
        {
          id: uuidv4(),
          label: 'Unidad de medida',
          name: 'unit_measure',
          placeholder: 'Unidad de medida',
        },
        {
          id: uuidv4(),
          label: 'Stock',
          name: 'quantity',
          placeholder: 'Stock',
        },
        {
          id: uuidv4(),
          label: 'Stock mínimo',
          name: 'stock_min',
          placeholder: 'Stock mínimo',
          type: 'number',
        },
        {
          id: uuidv4(),
          label: 'Stock máximo',
          name: 'stock_max',
          placeholder: 'Stock máximo',
          type: 'number',
        },
        {
          id: uuidv4(),
          label: 'Precio de venta',
          name: 'sale_price',
          placeholder: 'Precio de venta',
          type: 'number',
        },
        {
          id: uuidv4(),
          label: 'Demanda',
          name: 'demand',
          placeholder: 'Demanda',
          type: 'number',
        },
        {
          id: uuidv4(),
          label: 'Stock inicial',
          name: 'initial_quantity',
          placeholder: 'Stock inicial',
          type: 'number',
        },
        {
          id: uuidv4(),
          label: 'Stock final',
          name: 'final_quantity',
          placeholder: 'Stock final',
          type: 'number',
        },
        {
          id: uuidv4(),
          label: 'Categoría',
          name: 'category',
          placeholder: 'Categoría',
          type: 'number',
        },
        {
          id: uuidv4(),
          label: 'Proveedor',
          name: 'supplier',
          placeholder: 'Proveedor',
          type: 'number',
        },
      ],
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
  label: string;
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
