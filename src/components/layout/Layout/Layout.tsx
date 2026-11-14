// src/components/layout/Layout/Layout.tsx
import { Outlet } from 'react-router';
import styles from './Layout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <div className={styles.layout}>
      <Header/>

      <main className={styles.content}>
        <Outlet/>
      </main>

      <Footer/>
    </div>
  );
}

export default Layout;