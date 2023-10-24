import { component$ } from '@builder.io/qwik';

export interface InputProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value?: string | number
  error?: boolean
  errorMessage?: string
}

export const Input = component$<InputProps>((props) => {
  const { id, label, name, placeholder, type, value, error, errorMessage } = props;

  return (
    <div class="w-full relative">
      <div class="w-full my-4 border border-gray relative flex items-center justify-center">
        <label class="bg-white px-3 absolute text-sm text-center uppercase dark:bg-black">
          {label}
        </label>
      </div>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={`${type ? type : 'text'}`}
        value={value}
        class={`Standard-input ${error ? 'Standard-input--error' : ''}`}
        autoComplete="off"
      />
      {
        error ? <p class="absolute left-0 text-red text-sm">* {errorMessage}</p> : null
      }
    </div>
  );
});
