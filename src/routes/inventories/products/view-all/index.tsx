import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      Todos los productos
    </>
  );
});

export const head: DocumentHead = {
  title: 'Todos los productos',
};
