import { component$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import Provider from './provider/Provier';

import './global.css';

export default component$(() => {
  return (
    <QwikCityProvider>
      <Provider>
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <RouterHead />
          <ServiceWorkerRegister />
        </head>
        <body lang="en">
          <div class="w-screen h-screen p-14">
            <RouterOutlet />
          </div>
        </body>
      </Provider>
    </QwikCityProvider>
  );
});
