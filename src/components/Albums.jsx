import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersByAlbum } from '../redux/Homework2/slices/usersAsyncThunk';
import styles from './Albums.module.css';
import { useEffect } from 'react';
import { useParams } from 'react-router';
function Albums() {
  const albums = useSelector((state) => state.users.albums);
  const albumsLoading = useSelector((state) => state.users.albumsLoading);
  const albumsError = useSelector((state) => state.users.albumsError);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersByAlbum(id));
  }, [dispatch]);

  return (
    <div className={styles.albumPage}>
      {albumsLoading && <div className={styles.loader}></div>}
      {albumsError && <p className={styles.error}>Error: {albumsError}</p>}
      <h1 className={styles.title}>Альбоми</h1>
      <ul className={styles.albumList}>
        {albums?.map((album) => (
          <li className={styles.albumItem} key={album.id}>
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
