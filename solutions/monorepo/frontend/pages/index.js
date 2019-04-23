import Link from "next/link";
import "isomorphic-unfetch";

const IndexPage = ({ stars }) => (
  <div>
    <p>👍 Next.js has {stars} ⭐️</p>
    <Link prefetch href="/nuxtjs">
      <a>How about Nuxt.js?</a>
    </Link>

    <style jsx>{`
      p {
        color: green;
        font-size: 40px;
      }
    `}</style>
  </div>
);

IndexPage.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();

  return { stars: json.stargazers_count };
};

export default IndexPage;
