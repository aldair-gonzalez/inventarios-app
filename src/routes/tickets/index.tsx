import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      Este es el index de tickets
    </>
  );
});

export const head: DocumentHead = {
  title: 'TICKETS'
};
