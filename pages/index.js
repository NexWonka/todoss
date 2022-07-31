import Landing from './components/Landing';
import Form from './components/Form';
import Head from 'next/head';

export default function Home() {
  return (
    <section>
      <Head>
        <title>ToDos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </section>
  )
}
