import { component$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const { id } = useLocation().params;
  return (
    <>
      Categoria { id }
    </>
  );
});


export const head: DocumentHead = {
  title: 'Categoría'
};
