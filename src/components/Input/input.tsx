import { component$ } from '@builder.io/qwik';

export interface InputProps {
  type?: string;
  name: string;
  placeholder: string;
  id: string;
  title: string;
}

export const Input = component$<InputProps>((props) => {
  const { type, name, placeholder, id, title } = props;

  return (
    <div class="w-full">
      <div class="w-full my-4 border border-gray relative flex items-center justify-center">
        <label class="bg-white px-3 absolute text-sm text-center uppercase dark:bg-black">
          {title}
        </label>
      </div>
      <input
        class="Standard-input"
        type={`${type ? type : 'text'}`}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        id={id}
      />
    </div>
  );
});
