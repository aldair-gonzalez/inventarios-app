import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      Todos los inventarios
    </>
  );
});

export const head: DocumentHead = {
  title: 'Todos los inventarios',
};
