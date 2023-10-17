import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import type { IRoutes } from '~/provider/Provier';

export default component$(({ routes, pathname }: { routes: IRoutes[], pathname: string }) => {

  return (
    <>
      <div class="flex flex-col gap-2">
        {
          routes.map((route) => <ButtonNavigation route={route} pathname={pathname} key={route.id}/>)
        }
      </div>
    </>
  );
});

const ButtonNavigation = component$(({ route, pathname }: { route: IRoutes, pathname: string }) => {
  const path = useLocation().url.pathname;
  return (
    <>
      <Link
        href={`${pathname}${route.href}`}
        class={`w-full py-3 px-4 rounded-md uppercase text-sm hover:bg-gray hover:text-white ${path.includes(route.href) ? 'bg-gray text-white' : ''}`}
        >
        {route.title}
      </Link>
    </>
  );
});
