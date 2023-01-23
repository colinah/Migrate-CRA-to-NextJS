import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nested({ article }) {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>{article.title}</h1>
      <h4>Nested Route: {id}</h4>

      <Link href={`/nested/${id === "1" ? "2" : "1"}`}>
        Page {id === "1" ? "2" : "1"}
      </Link>
    </div>
  );
}

export const getStaticProps = async (context) => {
  // Invest Example
  //  const companyProfile = await axios.get(getCompanyProfile(context.symbol))
  // End

  console.log(context);
  const article = { title: "this title " + context.params.id };

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  // Invest Example
  // const symbolsList = await axios.get(masterSymbolsList())
  // End

  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const paths = posts.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: "blocking",
  };
};
