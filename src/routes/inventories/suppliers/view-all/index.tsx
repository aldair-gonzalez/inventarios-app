import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      Todos los proveedores
    </>
  );
});

export const head: DocumentHead = {
  title: 'Todos los proveedores',
};
