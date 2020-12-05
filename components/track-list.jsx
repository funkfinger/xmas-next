const TrackList = ({ tracks }) => {
  return (
    <div className='track-list'>
      <ol>
        {tracks.map((track) => {
          return (
            <li>
              {track.songTitle} / {track.songArtist} [{track.songDuration}]
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TrackList;
