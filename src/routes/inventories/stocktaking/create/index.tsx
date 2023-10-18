import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      Crear inventario
    </>
  );
});

export const head: DocumentHead = {
  title: 'Crear inventario',
};
