// app/page.tsx

import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DSA Guide</title>
        <meta
          name="description"
          content="Learn Data Structures and Algorithms"
        />
      </Head>
      <div className="container mx-auto p-8">
        {/* Banner Image */}
        <div className="mb-8">
          <Image
  src="/images/banner.jpg"
  alt="Banner Image"
  width={700}
            height={200}
            priority
  className="rounded-lg shadow-lg"
          />
          {/* <img
            src="/public/images/banner.jpg"
            alt="Banner Image"
            style={{ width: "100%", height: "auto" }}
          /> */}
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to DSA Guide
        </h1>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <a href="/topics/arrays" className="text-blue-500 hover:underline">
              Arrays
            </a>
          </li>
          <li>
            <a
              href="/topics/linked-lists"
              className="text-blue-500 hover:underline"
            >
              Linked Lists
            </a>
          </li>
          <li>
            <a href="/topics/trees" className="text-blue-500 hover:underline">
              Trees
            </a>
          </li>
          <li>
            <a href="/topics/sorting" className="text-blue-500 hover:underline">
              Sorting Algorithms
            </a>
          </li>
          <li>
            <a
              href="/topics/searching"
              className="text-blue-500 hover:underline"
            >
              Searching Algorithms
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
