interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: Props) {
  return (
    <div className="mb-8">
      <label className="block text-lg font-semibold mb-2 text-white">
        Procure uma mensagem:
      </label>

      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded
          border
          border-zinc-500
          bg-zinc-900
          px-3
          py-2
          text-white
          outline-none
          focus:border-white
        "
      />
    </div>
  );
}