import { Slot, component$ } from '@builder.io/qwik';
import Navbar from './navbar';
import { v4 as uuidv4 } from 'uuid';
import type { IRoutes } from '~/provider/Provier';

export default component$(() => {
  const pathname = '/inventories';

  const routes: IRoutes[] = [
    { id: uuidv4(), href: '/categories', title: 'categorias', alt: 'ir a categorias' },
    { id: uuidv4(), href: '/products', title: 'productos', alt: 'ir a productos' },
    { id: uuidv4(), href: '/inventories', title: 'inventarios', alt: 'ir a inventarios' }
  ];

  return (
    <>
      <div class="w-full h-full flex gap-2">
        <div class="Standard-container w-1/4 h-full p-4">
          <Navbar routes={routes} pathname={pathname} />
        </div>
        <div class="Standard-container w-3/4 h-full p-4">
          <Slot />
        </div>
      </div>
    </>
  );
});
