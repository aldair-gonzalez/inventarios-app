import { component$, useContext } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { GlobalContext } from '~/provider/Provier';

export interface HeaderProps {}

export const Header = component$<HeaderProps>(() => {
  const global = useContext(GlobalContext);
  const { menu } = global.header;

  const pathname = useLocation().url.pathname;

  return (
    <nav class="flex flex-nowrap justify-between">
      <ul class="flex flex-nowrap gap-1">
        {menu.map((route) => {
          return (
            <li key={route.id}>
              <Link
                class={`Standard-button ${
                  pathname.includes(route.href) ? 'bg-gray text-white' : ''
                }`}
                href={route.href}
                prefetch
              >
                {route.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <button class="Standard-button">Cerrar sesión</button>
    </nav>
  );
});
