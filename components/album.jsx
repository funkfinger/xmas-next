import Image from 'next/image';

const Album = ({ album, size }) => {
  const coverSize = size ? size : 250;
  return (
    <div className='past-album'>
      <div key={`album-${album.id}`} className='album'>
        <h3>{album.albumTitle}</h3>
        <Image
          alt={album.albumTitle}
          title={album.albumTitle}
          src={`/covers/${album.id}-cover.jpeg`}
          layout='intrinsic'
          width={coverSize}
          height={coverSize}
        />
      </div>
    </div>
  );
};

export default Album;
