import iconLocation from "../img/location.svg";
import iconLink from "../img/link.svg";
import iconCompany from "../img/company.svg";
import iconTwitter from "../img/twitter.svg";

export const User = ({ data }) => {
  let date = new Date(data.created_at).toLocaleDateString();

  return (
    <article className="bg-gh-gray max-w-3xl mx-auto mt-10 py-6 px-4 xs:px-6 xs:py-8 rounded-3xl text-white shadow-lg">
      <header className="flex flex-col text-center md:text-start md:grid grid-flow-col gap-4 items-center">
        <img
          src={data.avatar_url}
          alt="profile of user"
          className="w-20 xs:w-24 sm:w-32 rounded-full justify-self-end"
        />
        <div className="max-w-full justify-self-center self-center col-start-2 col-end-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-1">
            {!data.name ? "not available" : data.name}
          </h2>
          <a
            className="text-gh-green md:text-xl"
            href={!data.html_url ? "/" : data.html_url}
          >
            @{!data.login ? "not available" : data.login}
          </a>
        </div>
        <p className="opacity-80 mt-2 self-center justify-self-center">
          Joined: {!data.created_at ? "not available" : date}
        </p>
      </header>

      <p className="opacity-80 pt-10 text-center">
        {!data.bio ? "This profile has no bio" : data.bio}
      </p>

      <div className="max-w-2/4 m-auto my-10 p-2 bg-gh-black flex gap-4 text-center rounded-xl">
        <div className="w-2/4">
          <p className="opacity-80">Repos</p>
          <p>{!data.public_repos ? "not available" : data.public_repos}</p>
        </div>
        <div className="w-2/4">
          <p className="opacity-80">Followers</p>
          <p>{!data.followers ? "not available" : data.followers}</p>
        </div>
        <div className="w-2/4">
          <p className="opacity-80">Following</p>
          <p>{!data.following ? "not available" : data.following}</p>
        </div>
      </div>

      <footer className="flex flex-col sm:grid sm:grid-cols-2 sm:justify-items-center md:grid-cols-4 gap-6 md:gap-2">
        <div className="flex gap-2">
          <img src={iconLocation} alt="location" />
          <p className="w-fit">
            {!data.location ? "not available" : data.location}
          </p>
        </div>
        <div className="flex gap-2">
          <img src={iconCompany} alt="company" />
          <p className="w-fit">
            {!data.company ? "not available" : data.company}
          </p>
        </div>
        <div className="flex gap-2">
          <img src={iconLink} alt="link" />
          <a
            href={!data.blog ? "/" : data.blog}
            className="w-fit hover:text-gh-green transition-all"
          >
            {!data.blog ? "not available" : data.blog}
          </a>
        </div>
        <div className="flex gap-2">
          <img src={iconTwitter} alt="Twitter" className="w-6" />
          <a
            href={
              !data.twitter_username
                ? "/"
                : `https://twitter.com/${data.twitter_username}`
            }
            className="w-fit hover:text-gh-green transition-all"
          >
            {!data.twitter_username
              ? "not available"
              : `@${data.twitter_username}`}
          </a>
        </div>
      </footer>
    </article>
  );
};
