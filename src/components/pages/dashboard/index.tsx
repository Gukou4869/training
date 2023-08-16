import { logout } from "@/lib/firebase/utils/auth";

import styles from "./dashboard.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1>This is Dashboard</h1>
      <button
        onClick={() => {
          logout();
        }}
        type="button"
      >
        Logout
      </button>
    </div>
  );
}
