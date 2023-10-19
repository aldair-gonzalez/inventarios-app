import { component$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import type { IRoutes } from '~/provider/Provier';
import { v4 as uuidv4 } from 'uuid';
import { ButtonsCrud } from '~/components/Buttons-crud/buttons-crud';

const routes: IRoutes[] = [
  { id: uuidv4(), href: '/inventories/categories/create', title: 'nueva categoría', alt: 'Crear' },
  { id: uuidv4(), href: '/inventories/categories/view-all', title: 'todas las categorías', alt: 'Ver todas' }
];

export default component$(() => {
  return (
    <>
      <div class="w-full grid grid-cols-1 gap-4">
        <ButtonsCrud routes={routes}/>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Categorías'
};
