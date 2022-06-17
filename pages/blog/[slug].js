import React from "react";
import { useRouter } from "next/router";
import Layout from "../../shared/components/Layout";

const QuestionDetailPage = () => {
  const router = useRouter();

  const querySlug = router.query.slug;

  return (
    <Layout>
      <p>Hellow</p>
    </Layout>
  );
};

export default QuestionDetailPage;
