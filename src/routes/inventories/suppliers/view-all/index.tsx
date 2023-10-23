import { $, component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import type { SubmitHandler } from '@modular-forms/qwik';
import { useForm, type InitialValues, valiForm$, formAction$ } from '@modular-forms/qwik';
import type { Input} from 'valibot';
import { minLength, object, string } from 'valibot';
import { Input as ComponentInput } from '~/components/Input/input';

export default component$(() => {
  return (
    <>
      Todos los proveedores
      <ModularForm />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Todos los proveedores',
};


const ProductSchema = object({
  name: string([
    minLength(1, 'Por favor ingresa el nombre del producto')
  ]),
  description: string([
    minLength(5, 'Por favor ingresa una descripción válida'),
  ])
});
type ProductForm = Input<typeof ProductSchema>

export const useFormLoader = routeLoader$<InitialValues<ProductForm>>(() => ({
  name: 'chicharrones',
  description: 'con salsa',
}));

export const useFormAction = formAction$<ProductForm>(() => {}, valiForm$(ProductSchema));

export const ModularForm = component$(() => {
  const [productForm, { Form, Field }] = useForm<ProductForm>({
    loader: useFormLoader(),
    validate: valiForm$(ProductSchema)
  });

  const handleSubmit = $<SubmitHandler<ProductForm>>(() => {
    productForm.element?.onreset;
  });

  return (
    <Form onSubmit$={handleSubmit}>
      <Field name="name">
        {(field: any, props: any) => (
          <div>
            <ComponentInput
              id="324"
              title="Nombre"
              name="name"
              placeholder="Nombre del producto"
              value={field.value}
              {...props}
            />
            {/* <input {...props} type="text" value={field.value} /> */}
            {field.error && <div>{field.error}</div>}
          </div>
        )}
      </Field>
    <Field name="description">
        {(field: any, props: any) => (
          <div>
            {/* <input {...props} type="text" value={field.value} /> */}
            <ComponentInput
              id="325"
              title="Descripción"
              name="description"
              placeholder="Descripción del producto"
              value={field.value}
              {...props}
            />
            {field.error && <div>{field.error}</div>}
          </div>
        )}
      </Field>
      <button type="submit">Login</button>
    </Form>
  );
});
