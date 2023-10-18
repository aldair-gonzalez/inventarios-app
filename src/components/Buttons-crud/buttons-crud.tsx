import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type { IRoutes } from '~/provider/Provier';

export interface ButtonsCrudProps {
  routes: IRoutes[]
}

export const ButtonsCrud = component$<ButtonsCrudProps>((props) => {
  const { routes } = props;

  return (
    <>
      {
        routes.map((route) => {
          return (
            <Link
              key={route.id}
              class="w-full px-4 py-3 border border-gray rounded-md uppercase text-sm hover:bg-gray hover:text-white"
              href={route.href}
              prefetch
              >
                {route.title}
            </Link>
          );
        })
      }
    </>
  );
});
