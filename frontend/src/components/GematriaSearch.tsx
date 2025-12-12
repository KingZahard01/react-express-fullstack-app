import { useState } from 'react';
import ErrorDisplay from './ErrorDisplay';
import ResultsTable from './ResultsTable';
import SearchInput from './SearchInput';

interface GematriaResult {
  gematriaValue: number;
  word: string;
  book: string;
  chapter: number;
  verse: number;
}

const GematriaSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [results, setResults] = useState<GematriaResult[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!searchValue) {
      setError('Por favor ingresa un valor numérico');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const response = await fetch(
        `https://gematria-explorer-backend.onrender.com/api/words/gematria/${searchValue}`
      );

      if (!response.ok) {
        throw new Error('No se encontraron resultados');
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocurrió un error inesperado');
      }
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header con efecto futurista */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 -right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Explorador de Gematría
            </h1>
            {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubre conexiones numéricas en textos sagrados
            </p> */}
          </div>
        </div>

        {/* Contenedor principal con efecto de vidrio */}
        <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6 md:p-8 mb-8">
          <SearchInput
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
            loading={loading}
          />

          <ErrorDisplay error={error} />

          {/* Stats */}
          {results.length > 0 && (
            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl border border-cyan-500/20">
              <p className="text-lg font-semibold">
                <span className="text-cyan-400">{results.length}</span>{' '}
                resultados encontrados para el valor{' '}
                <span className="text-purple-400">{searchValue}</span>
              </p>
            </div>
          )}
        </div>

        <ResultsTable results={results} />

        {/* Footer */}
        {results.length === 0 && !loading && (
          <div className="mt-12 text-center text-gray-400">
            <p className="mb-2">
              💡 Ingresa un valor numérico para buscar en la Torá
            </p>
            <p className="text-sm">
              La búsqueda analiza palabras hebreas y sus valores gematría
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GematriaSearch;
