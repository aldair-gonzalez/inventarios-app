import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import routes from './routes';

export interface HeaderProps {}

export const Header = component$<HeaderProps>(() => {
  return (
    <nav class="flex flex-nowrap justify-between">
      <ul class="flex flex-nowrap gap-1">
        {routes.map((route) => {
          return (
            <li key={route.id}>
              <Link class="Standard-button" href={route.path} prefetch>
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