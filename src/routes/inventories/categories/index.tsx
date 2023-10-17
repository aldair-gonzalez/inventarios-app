import { component$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { v4 as uuidv4 } from 'uuid';
import type { IRoutes } from '~/provider/Provier';

// Categorias
export default component$(() => {
  const routes: IRoutes[] = [
    { id: uuidv4(), href: '/inventories/categories/create', title: 'nueva categoría', alt: 'Crear' },
    { id: uuidv4(), href: '/inventories/categories/view-all', title: 'todas las categorías', alt: 'Ver todas' }
  ];

  return (
    <>
      <div class="w-full grid grid-cols-1 gap-4">
        {
          routes.map((route) => {
            return (
              <Link
                key={route.id}
                class="w-full px-4 py-3 border border-gray rounded-md uppercase text-sm hover:bg-gray hover:text-white"
                href={route.href}
                >
                  {route.title}
              </Link>
            );
          })
        }
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'CATEGORIAS'
};
