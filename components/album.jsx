// import Image from 'next/image';

const Album = ({ album, size, clickAction }) => {
  const coverSize = size ? size : 250;
  const image = (
    // <Image
    //   alt={album.albumTitle}
    //   title={album.albumTitle}
    //   src={`/covers/${album.id}-cover.jpeg`}
    //   layout='intrinsic'
    //   width={coverSize}
    //   height={coverSize}
    // />
    <img
      alt={album.albumTitle}
      title={album.albumTitle}
      src={`/covers/${album.id}-cover.jpeg`}
      layout='intrinsic'
      width={coverSize}
      height={coverSize}
    />
  );

  const imageLink = clickAction ? (
    <button onClick={() => clickAction(album)} className='no-style'>
      {image}
    </button>
  ) : (
    image
  );

  return (
    <div className='past-album'>
      <div key={`album-${album.id}`} className='album'>
        <h3>{album.albumTitle}</h3>
        {imageLink}
      </div>
    </div>
  );
};

export default Album;
