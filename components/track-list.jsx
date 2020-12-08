import nextId from 'react-id-generator';

const TrackList = ({ tracks }) => {
  return (
    <div className='track-list'>
      <ol>
        {tracks.map((track) => {
          const id = nextId('track-');
          return (
            <li key={id}>
              {track.songTitle} / {track.songArtist} [{track.songDuration}]
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TrackList;
