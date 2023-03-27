import { useRouter } from 'next/router';

const NewsDetailPage = () => {
  const router = useRouter();
  console.log(router.query.newsId)
  return (
    <>
      <h1>The News Detail Page</h1>
      
    </>
  );
};

export default NewsDetailPage;
