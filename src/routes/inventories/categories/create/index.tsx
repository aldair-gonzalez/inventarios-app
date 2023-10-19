import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Input } from '~/components/Input/input';

export default component$(() => {
  return (
    <>
      <form class="w-full h-full relative" action="">
        <h2 class="font-medium uppercase">Nueva categoría</h2>

        <div class="flex gap-16">
          <Input title="Nombre" name="name" placeholder="Nombre" id="category-name" />
          <Input title="Descripción" name="description" placeholder="Descripción" id="category-description" />
        </div>

        <button class="Standard-button absolute bottom-0 right-0" type="submit">Crear categoría</button>
      </form>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Crear categoría',
};
