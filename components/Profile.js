/* eslint-disable @next/next/no-img-element */
export default function Profile({ data }) {
    return (
      <div className="profile">
        <figure>
          <img
            src={data?.personalInfo?.imageAdress}
            alt="me"
            loading="lazy"
            className="profile__image"
          />
          <figcaption>{data?.type}</figcaption>
        </figure>
      </div>
    );
  }
  