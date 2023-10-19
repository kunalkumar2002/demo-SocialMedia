import styles from '../styles/home.module.css';
import { Comment } from '../component';

const Home = ({ posts }) => {
  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <div className={styles.postWrapper} key={post._id}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <img
                src="https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"
                alt="user-pic"
              />
              <div>
                <span className={styles.postAuthor}>{post.user.name}</span>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.content}</div>

            <div className={styles.postActions}>
              <div className={styles.postLike}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/000/422/468/original/like-icon-vector-illustration.jpg"
                  alt="likes-icon"
                />
                <span>5</span>
              </div>

              <div className={styles.postCommentsIcon}>
                <img
                  src="https://logodix.com/logo/2083453.png"
                  alt="comments-icon"
                />
                <span>2</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="Start typing a comment" />
            </div>

            <div className={styles.postCommentsList}>
              {post.comments.map((comment) => (
                <Comment comment={comment} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
