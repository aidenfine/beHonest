import Head from 'next/head'
import Message from '../components/message';
import { useEffect, useState } from 'react';
import { db } from '../utils/firebase';
import { async } from '@firebase/util';
import { collection, doc, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';


export default function Home() {
  // create state with all posts

  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    const collectionRef = collection(db, 'posts');
    const q = query(collectionRef, orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q,(snapshot) => 
    setAllPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;

  }


  return (
    <div>
      <Head>
        <title>beHonset.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className='my-12 text-lg font-medium'>
      <h2 >This is what people are up to</h2>
     </div>
    </div>
  );
}
