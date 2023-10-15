import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      Este es el index del layout inicial
    </>
  );
});

export const head: DocumentHead = {
  title: 'Server YAJID',
  meta: [
    {
      name: 'description',
      content: 'YAJID SITE DESCRIPTION',
    },
  ],
};
