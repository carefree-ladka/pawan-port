export default function Hobbies({ data }) {
  return (
    <div className="hobbies">
      <h2>Hobbies</h2>
      <ul>{data && data?.hobbies?.map((hobby) => <li key={hobby}>{hobby}</li>)}</ul>
      <div className="resume">
        <div className="link">
          <a
            href={data?.resume}
            rel="noopener noreferrer"
            target="_blank"
            download
            title="Resume"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
