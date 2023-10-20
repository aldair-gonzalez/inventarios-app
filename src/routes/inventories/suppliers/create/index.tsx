import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      {/*
        name
        description
        address
        city
        state
        zip_code
        phone_number
        email_address
        website
        credit_limit
      */}
      Crear proveedores
    </>
  );
});

export const head: DocumentHead = {
  title: 'Crear proveedores',
};
