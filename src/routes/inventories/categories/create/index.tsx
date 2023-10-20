import { $, component$, useContext } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Form } from '~/components/Form/form';
import { Input } from '~/components/Input/input';
import { GlobalContext } from '~/provider/Provier';

export default component$(() => {
  const global = useContext(GlobalContext).CRUDS.inputs;
  const { category } = global;

  const handlerClick = $(() => alert('Categoría creada'));

  return (
    <Form
      title="Nueva categoría"
      buttonName="Crear categoría"
      onClick$={handlerClick}
    >
      {category.map((input) => (
        <Input
          key={input.id}
          id={input.id}
          title={input.title}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
        />
      ))}
    </Form>
  );
});

export const head: DocumentHead = {
  title: 'Crear categoría',
};
