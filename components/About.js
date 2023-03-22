export default function About({ data }) {
  return (
    <div className="about">
      <div>
        <h2>{data?.about?.heading}</h2>
        <p>{data?.about?.about}</p>
      </div>
    </div>
  );
}
