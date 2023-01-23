import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nested() {
  const router = useRouter();
  const id = router.query.id as string;

  React.useEffect(() => {
    const path = router.pathname;
    console.log("PATH", path);
    if (path === "/nested") {
      router.push("/nested/1");
    }
  }, [router]);

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Nested Route: {id}</h1>

      <Link href={`/nested/${id === "1" ? "2" : "1"}`}>
        Page {id === "1" ? "2" : "1"}
      </Link>
    </div>
  );
}
