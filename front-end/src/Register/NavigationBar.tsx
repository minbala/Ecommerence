import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";
/* 
need to add more features 
*/

export const NavigationBar = () => {
  return (
    <div className={styles.nav}>
      <nav>
        <Link to="/">
          <h1>Welcome From ThiHaYarZar Stores</h1>
        </Link>
      </nav>
    </div>
  );
};
