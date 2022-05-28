export default function About({ data }) {
    return (
      <div className="about">
        <div>
          <h2>{data?.heading}</h2>
          <p>{data?.about}</p>
        </div>
      </div>
    );
  }
  