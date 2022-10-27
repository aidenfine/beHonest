import Head from 'next/head'
import Message from '../components/message';

export default function Home() {
  return (
    <div>
      <Head>
        <title>beHonset.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className='my-12 text-lg font-medium'>
      <h2 >This is what people are up to</h2>
      <Message />
      <Message />
      <Message />
      <Message />
     </div>
    </div>
  );
}
