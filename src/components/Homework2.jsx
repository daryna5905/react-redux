import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/Homework2/slices/usersAsyncThunk';
import styles from './Homework2.module.css';
import { Link, Outlet } from 'react-router';
function Homework2() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const allUsers = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  return (
    <>
      {loading && <div className={styles.loader}></div>}
      {error && <p className={styles.error}>Error: {error}</p>}
      <ul className={styles.usersList}>
        {allUsers?.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id}>
            <li className={styles.userItem}>
              {`${user.name} ${user.username}`}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Homework2;
