const Results = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <h1 key={result.link}>{result.title}</h1>
      ))}
    </div>
  );
};
export default Results;
