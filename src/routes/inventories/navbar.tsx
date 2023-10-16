import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type { IRoutes } from '~/provider/Provier';

export default component$(({ routes, pathname }: { routes: IRoutes[], pathname: string }) => {

  return (
    <>
      <div class="flex flex-col gap-2">
        {
          routes.map((route) => {
            return (
              <Link
                key={route.id}
                href={`${pathname}${route.href}`}
                class="w-full py-3 px-4 rounded-md uppercase text-sm hover:bg-gray-100 dark:hover:text-black-900"
                >
                {route.title}
              </Link>
            );
          })
        }
      </div>
    </>
  );
});
