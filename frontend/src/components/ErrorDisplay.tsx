interface ErrorDisplayProps {
  error: string;
}

const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  if (!error) return null;

  return <p className="error-message">{error}</p>;
};

export default ErrorDisplay;
