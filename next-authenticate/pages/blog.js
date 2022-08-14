import { getSession } from "next-auth/react";

export default function Blog(props) {
  return <>Blog list - {props.data}</>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: session ? "List of 100 blogs" : "List of free blogs",
    },
  };
}
