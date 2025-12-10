interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  loading: boolean;
}

const SearchInput = ({
  value,
  onChange,
  onSearch,
  loading,
}: SearchInputProps) => {
  return (
    <div className="search-input-container">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ingresa un valor numérico"
        aria-label="Valor numérico"
        className="search-input"
      />
      <button
        onClick={onSearch}
        disabled={loading}
        aria-label="Buscar gematria"
        className="search-button"
      >
        {loading ? 'Buscando...' : 'Buscar'}
      </button>
    </div>
  );
};

export default SearchInput;
