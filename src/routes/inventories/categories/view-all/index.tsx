import { component$, useStore } from '@builder.io/qwik';
import {
  useNavigate,
  type DocumentHead,
  useLocation,
} from '@builder.io/qwik-city';
import { v4 as uuidv4 } from 'uuid';
import type { ICol } from '~/components/Table/table';
import { Table } from '~/components/Table/table';

const categoriesDB = [
  {
    id: uuidv4(),
    name: 'Lácteos',
    description: 'Productos derivados de la vaca',
  },
  { id: uuidv4(), name: 'Panadería', description: 'Productos de panadería' },
];

export default component$(() => {
  const categories = useStore(categoriesDB);
  const cols: ICol[] = [
    { id: uuidv4(), name: 'nombre' },
    { id: uuidv4(), name: 'descripción' },
  ];
  const nav = useNavigate();
  const pathname = useLocation().url.pathname;

  return (
    <Table cols={cols}>
      {categories.map((category) => {
        return (
          <tr
            key={category.id}
            class="border-b hover:bg-gray-300"
            role="button"
            onClick$={() => nav(`${pathname}${category.id}`)}
          >
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
              {category.name}
            </th>
            <td class="px-6 py-4">{category.description}</td>
          </tr>
        );
      })}
    </Table>
  );
});

export const head: DocumentHead = {
  title: 'Todas la categorías',
};
