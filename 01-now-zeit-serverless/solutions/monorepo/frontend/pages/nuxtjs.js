import Link from "next/link";
import "isomorphic-unfetch";

const IndexPage = ({ stars }) => (
  <div>
    <p>👎 Nuxt.js has only {stars} ⭐️</p>
    <Link prefetch href="/">
      <a>Go back...</a>
    </Link>

    <style jsx>{`
      p {
        color: red;
        font-size: 40px;
      }
    `}</style>
  </div>
);

IndexPage.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/nuxt/nuxt.js");
  const json = await res.json();

  return { stars: json.stargazers_count };
};

export default IndexPage;
