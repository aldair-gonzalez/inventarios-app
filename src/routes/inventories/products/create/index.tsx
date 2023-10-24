import { $, component$, useContext } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Form } from '~/components/Form/form';
import { Input } from '~/components/Input/input';
import { GlobalContext } from '~/provider/Provier';

export default component$(() => {
  const global = useContext(GlobalContext).CRUDS.inputs;
  const { product } = global;

  const handlerClick = $(() => alert('Producto creado'));

  return (
    <Form
      title="Nuevo Producto"
      buttonName="Crear producto"
      onClick$={handlerClick}
    >
      {product.map((input) => (
        <Input
          key={input.id}
          id={input.id}
          label={input.label}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
        />
      ))}
    </Form>
  );
});

export const head: DocumentHead = {
  title: 'Crear producto',
};
