import Head from 'next/head';
import { promises as fs } from 'fs';
import path from 'path';
import compareFunc from 'compare-func';

import Album from '../components/album';

export default function Home({ albums }) {
  return (
    <>
      <Head>
        <title>Carrie, Jay &amp; Wilson's MERRY MERRY XMAS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='page'>
        <header>
          <h1>
            <small>Carrie, Jay &amp; Wilson's</small> MERRY MERRY XMAS
          </h1>
        </header>

        <main>
          <div className='albums'>
            {albums.map((album) => {
              return <Album album={album} />;
            })}
          </div>
        </main>

        <footer>
          <p>
            All media on this website is for sampling and promotional purposes
            and we encourage you to purchase the albums of any song you hear and
            like. If you have rights to any of the media here (or represent
            those who do) and feel that we have not used your media in the way
            it was intended, please contact us (xmas [at] irk dot com) and we'll
            remove it. Happy holidays!
          </p>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const raw = await fs.readFile(`/pages/data/albums.json`);
  const raw = await fs.readFile(
    path.join(process.cwd(), 'data', 'albums.json')
  );
  const albums = JSON.parse(raw);
  albums.sort(compareFunc(-'id'));
  return {
    props: {
      albums,
    },
  };
}
