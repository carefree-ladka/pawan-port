export default function Hobbies({ data }) {
  return (
    <div className="hobbies">
      <h2>Hobbies</h2>
      <ul>{data && data.map((hobby) => <li key={hobby}>{hobby}</li>)}</ul>
      <div className="resume">
        <div className="link">
          <a
            href="/Pawan_FE.docx"
            rel="noopener noreferrer"
            target="_blank"
            download
            title="Resume"
          >
            <p>Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}
