export default function Profile({ data }) {
    return (
      <div className="profile">
        <figure>
          <img
            src={data?.imageAdress}
            alt="me"
            loading="lazy"
            className="profile__image"
          />
          <figcaption>{data?.type}</figcaption>
        </figure>
      </div>
    );
  }
  