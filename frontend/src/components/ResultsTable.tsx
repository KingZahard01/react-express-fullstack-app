interface GematriaResult {
  gematriaValue: number;
  word: string;
  book: string;
  chapter: number;
  verse: number;
}

interface ResultsTableProps {
  results: GematriaResult[];
}

const ResultsTable = ({ results }: ResultsTableProps) => {
  if (results.length === 0) return null;

  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
        {/* Header de la tabla con efecto especial */}
        <div className="relative overflow-hidden">
          <div className="relative">
            <div className="px-6 py-4 border-b border-gray-700/50">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="relative">
                  Resultados Encontrados
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
                </span>
                {/* <span className="text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded-full text-sm">
                  {results.length}
                </span> */}
              </h2>
            </div>
          </div>
        </div>

        {/* Tabla responsiva */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-800/50 to-gray-900/50">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300 uppercase tracking-wider border-b border-gray-700/50">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    Valor
                  </span>
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300 uppercase tracking-wider border-b border-gray-700/50">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Palabra
                  </span>
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300 uppercase tracking-wider border-b border-gray-700/50">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Referencia
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/30">
              {results.map((item, index) => (
                <tr
                  key={index}
                  className="group hover:bg-gray-800/30 transition-all duration-300 transform hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-900/30 to-cyan-900/10 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                          <span className="text-xl font-bold text-cyan-400">
                            {item.gematriaValue}
                          </span>
                        </div>
                        <div className="absolute -inset-1 bg-cyan-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      {/* <div>
                        <div className="text-xs text-gray-400">Gematría</div>
                        <div className="text-sm">Valor numérico</div>
                      </div> */}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {item.word}
                      </div>
                      {/* <div className="text-sm text-gray-400">
                        Palabra hebrea
                      </div> */}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-medium text-white">
                        {item.book}
                      </div>
                      <div className="flex items-center">
                        <div className="px-3 py-1 bg-gradient-to-r from-green-900/30 to-green-900/10 rounded-full border border-green-500/20">
                          <span className="text-green-400 font-semibold">
                            {item.chapter}:{item.verse}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer de la tabla */}
        <div className="px-6 py-4 border-t border-gray-700/50 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              Los datos se obtienen del análisis gematría de textos sagrados
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <div className="text-sm text-gray-300">
                {results.length} coincidencias encontradas
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsTable;
