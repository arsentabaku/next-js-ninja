import { useState, useEffect } from "react";
import { getSession, signIn } from "next-auth/react";

export default function Dashboard() {
  const [loading, setLoading] = useState();

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();

      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <>Dashboard</>;
}
