import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { Header } from '~/components/Header/header';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <main class="w-full h-full overflow-hidden flex flex-col gap-4">
        <Header />
        <div class="w-full h-full overflow-hidden">
          <Slot />
        </div>
      </main>
    </>
  );
});
