import { component$, useStore } from '@builder.io/qwik';
import { useNavigate, type DocumentHead, useLocation } from '@builder.io/qwik-city';
import { v4 as uuidv4 } from 'uuid';

const categoriesDB = [
  { id: uuidv4(), name: 'Lácteos', description: 'Productos derivados de la vaca' },
  { id: uuidv4(), name: 'Panadería', description: 'Productos de panadería' }
];

export default component$(() => {
  const categories = useStore(categoriesDB);

  const nav = useNavigate();
  const pathname = useLocation().url.pathname;

  return (
    <div class="relative overflow-x-auto shadow-md rounded-t-md">
      <table class="w-full text-sm text-left">
        <thead class="bg-gray-500 text-xs uppercase">
          <tr>
            <th scope="col" class="px-6 py-3">
              nombre
            </th>
            <th scope="col" class="px-6 py-3">
              descripción
            </th>
          </tr>
        </thead>
        <tbody>
          {
            categories.map((category) => {
              return (
                <tr key={category.id} class="border-b hover:bg-gray-300" role="button" onClick$={() => nav(`${pathname}${category.id}`)}>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {category.name}
                  </th>
                  <td class="px-6 py-4">{category.description}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Todas la categorías',
};
