export default function Follow({ data }) {
  return (
    <>
      <div className="follow">
        <h2>Follow me here:</h2>
        <ul className="list">
          {data &&
            data.map((link) => (
              <li key={link.URL}>
                <a href={link?.URL} target="_blank" rel="noopener noreferrer">
                  {link?.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
