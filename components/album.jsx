import Image from 'next/image';
import TrackList from './track-list';

const Album = ({ album }) => {
  console.log(album.songs);
  return (
    <div key={`album-${album.id}`} className='album'>
      <h3>{album.albumTitle}</h3>
      <Image
        alt={album.albumTitle}
        title={album.albumTitle}
        src={`/covers/${album.id}-cover.jpeg`}
        layout='intrinsic'
        width={250}
        height={250}
      />
      <TrackList tracks={album.songs} />
    </div>
  );
};

export default Album;
