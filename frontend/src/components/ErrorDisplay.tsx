interface ErrorDisplayProps {
  error: string;
}

const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  if (!error) return null;

  return (
    <div className="mt-4 animate-fade-in">
      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-900/30 to-red-900/10 border border-red-500/30 rounded-xl backdrop-blur-sm">
        <div>
          <p className="font-medium text-red-300">Error en la búsqueda</p>
          <p className="text-red-200/80 mt-1">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
