import Head from 'next/head';
import { useState, useEffect } from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import compareFunc from 'compare-func';
// import dialogPolyfill from 'dialog-polyfill';

import Album from '../components/album';
import TrackList from '../components/track-list';

export default function Home({ albums }) {
  const [showModal, setShowModal] = useState(false);
  const currentAlbum = albums[0];
  const priorAlbums = albums.slice(1);
  const [currentModalAlbum, setcurrentModalAlbum] = useState(currentAlbum);

  // let dialog;
  useEffect(() => {
    // dialog = document.querySelector('dialog');
    // dialogPolyfill.registerDialog(dialog);
    // dialog.showModal();
  }, []);

  const modalAlbum = (a) => {
    setcurrentModalAlbum(a);
    setShowModal(true);
  };

  return (
    <div className='next-body'>
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
            <div className='current-album'>
              <Album
                key={currentAlbum.id}
                album={currentAlbum}
                size={350}
                clickAction={modalAlbum}
              />
            </div>
            {/* <div className='spotify-embed'>
              <iframe
                src='https://open.spotify.com/embed/playlist/7gHCWiuQwjU8dgDA6tIQby'
                width='300'
                height='380'
                frameborder='0'
                allowtransparency='true'
                allow='encrypted-media'
              ></iframe>
            </div> */}
            <div className='past-albums'>
              {priorAlbums.map((album) => {
                return (
                  <div className='past-album'>
                    <Album
                      key={album.id}
                      album={album}
                      clickAction={modalAlbum}
                    />
                  </div>
                );
              })}
            </div>
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

        {/* <dialog
          onClick={(e) => {
            console.log(e.target);
          }}
        > */}
        <dialog className={showModal ? 'show-modal' : 'hide-modal'}>
          {/* <div className={showModal ? 'show-modal' : 'hide-modal'}> */}
          <div className='album-modal'>
            <button
              onClick={() => {
                console.log('clicked');
                setShowModal(false);
                console.log(showModal);
              }}
            >
              close
            </button>
            <Album album={currentModalAlbum} size={350} />
            <TrackList tracks={currentModalAlbum.songs}></TrackList>
          </div>
          {/* </div> */}
        </dialog>
      </div>
    </div>
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
