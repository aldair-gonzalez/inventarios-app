import { Slot, component$ } from '@builder.io/qwik';

export type ICol = {
  id: string;
  name: string;
};

export interface TableProps {
  cols: ICol[];
}

export const Table = component$<TableProps>((props) => {
  const { cols } = props;

  return (
    <div class="relative overflow-x-auto shadow-md rounded-t-md">
      <table class="w-full text-sm text-left">
        <thead class="bg-gray-500 text-xs uppercase">
          <tr>
            {cols.map((col) => (
              <th key={col.id} scope="col" class="px-6 py-3">
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Slot />
        </tbody>
      </table>
    </div>
  );
});
