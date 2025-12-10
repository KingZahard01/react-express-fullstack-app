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
    <div className="space-y-4">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>

        <div className="relative flex items-center bg-gray-900 rounded-2xl overflow-hidden">
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            // onKeyPress={handleKeyPress}
            placeholder="Ingresa un valor numérico..."
            aria-label="Valor numérico para búsqueda de gematría"
            className="w-full bg-transparent py-4 px-4 text-white placeholder-gray-500 focus:outline-none text-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            min="1"
            step="1"
          />

          <button
            onClick={onSearch}
            disabled={loading}
            aria-label="Buscar gematría"
            className={`px-8 py-4 font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              loading
                ? 'bg-gray-700 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500'
            }`}
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Buscando...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <span>Explorar</span>
                <div className="w-1 h-4 animate-pulse"></div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Sugerencias */}
      <div className="flex flex-wrap gap-2 justify-center">
        {[89, 42].map((num) => (
          <button
            key={num}
            onClick={() => {
              onChange(num.toString());
              setTimeout(() => onSearch(), 100);
            }}
            className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-sm transition-colors duration-300 border border-gray-700 hover:border-cyan-500/50"
          >
            Probar con {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
