import styles from '../styles/Home.module.css'
import Layout from '../Containers/Layout/Layout'
import Nav from '../Components/Nav/Nav'
import FrontPage from '../Components/FontPage/FrontPage'
import Content from '../Containers/Content/Content'
export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <FrontPage />
        <Content />
      </Layout>
    </div>
  )
}
