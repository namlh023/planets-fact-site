import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { PLANETS } from "../utils/contants";
import PlanetComponent from "../views/Planet";
import data from "../data.json";
import { planetAtom } from "../store";

export default function Planet(props) {
  const [, setPlanet] = useAtom(planetAtom);

  useEffect(() => {
    setPlanet(props);
  }, [props, setPlanet]);

  return <PlanetComponent />;
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
  const planet = data.filter(
    (d) => d.name.toLowerCase() == params.planet.toLowerCase()
  );
  return { props: planet[0] };
  // Fetch necessary data for the blog post using params.id
}
