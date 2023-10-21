import type { PropFunction } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';

export interface FormProps {
  title: string;
  buttonName: string;
  onClick$?: PropFunction<() => void>;
}

export const Form = component$<FormProps>((props) => {
  const { title, buttonName, onClick$ } = props;

  return (
    <form class="w-full h-full relative" action="">
      <h2 class="font-medium uppercase">{title}</h2>

      <div class="grid grid-cols-3 gap-8">
        <Slot />
      </div>

      <button
        class="Standard-button absolute bottom-0 right-0"
        type="submit"
        preventdefault:click
        onClick$={onClick$}
      >
        {buttonName}
      </button>
    </form>
  );
});
