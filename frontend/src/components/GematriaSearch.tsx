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
        `https://gematria-explorer-backend.onrender.com/api/gematria/${searchValue}`
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
    <div className="gematria-search-container">
      <h1>Búsqueda de Gematria en la Torá</h1>
      <SearchInput
        value={searchValue}
        onChange={setSearchValue}
        onSearch={handleSearch}
        loading={loading}
      />

      <ErrorDisplay error={error} />

      <ResultsTable results={results} />
    </div>
  );
};

export default GematriaSearch;
