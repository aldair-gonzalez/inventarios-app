import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      Todas la categorías
    </>
  );
});

export const head: DocumentHead = {
  title: 'Todas la categorías',
};
