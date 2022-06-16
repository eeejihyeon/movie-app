import Content from "../components/Content";
import category from "../atom/Category";
import styles from "../css/Movie.module.css";

function Home() {
  return (
    <div className={styles.content}>
      {category.map((s) => (
        <Content
          movieApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${s.path}&sort_by=year`}
        />
      ))}
    </div>
  );
}

export default Home;
