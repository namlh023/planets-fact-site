import { PLANETS } from "../utils/contants";

export default function Planet(props) {
  return (
    <div>
      <p>Haha</p>
      <p>{props.planet}</p>
    </div>
  );
}

export const getStaticPaths = async () => {
  const paths = PLANETS.map((p) => {
    return {
      params: { planet: p.href },
    };
  });

  return {
    paths,
    fallback: false, // fallback is set to false because we already know the slugs ahead of time
  };
};

export async function getStaticProps({ params }) {
  console.log("params", params);
  return { props: params };
  // Fetch necessary data for the blog post using params.id
}
