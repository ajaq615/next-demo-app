import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li><Link href='news/news1'>News 1</Link></li>
        <li>News 2</li>
      </ul>
    </>
  );
};

export default NewsPage;
