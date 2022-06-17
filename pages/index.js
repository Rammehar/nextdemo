import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../shared/components/Layout";

// ProductList.js
// ProductDetails.js

const questions = [
  {
    question: "Where are you?",
    slug: "where-are-you",
    answer: ["Delhi", "Kolkata", "Haryana"],
    correctAns: "Delhi",
  },
  {
    question: "What would you like to eat?",
    slug: "what-would-you-like-to-eat",

    answer: ["Banana", "Mango", "Orange"],
    correctAns: "Orange",
  },
  {
    question: "In which Compnay are you working?",
    slug: "in-which-company-are-you-working",

    answer: ["Delhi", "Kolkata", "Haryana"],
    correctAns: "Kolkata",
  },
  {
    question: "What are you learning now?",
    slug: "what-are-you-learning-now",
    answer: ["Programming", "Music", "Basic"],
    correctAns: "Programming",
  },
];

const Home = () => {
  return (
    <Layout>
      {questions.map((q) => (
        <Link href={`blog/${q.slug}`} key={q}>
          <a>
            <p>{q.question}</p>
          </a>
        </Link>
      ))}
    </Layout>
  );
};
export default Home;
