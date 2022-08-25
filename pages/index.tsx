import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <Paper elevation={1} sx={{padding: "1rem"}}>
          <Typography
            gutterBottom
            variant="h3"
            component="div">
            Welcome to Kita 20XX!
          </Typography>
          <Typography
            variant="body2"
            component="div">
            Currently working pages: Schedule, Location, Account.
          </Typography>
        </Paper>
      </div>
    </Layout>
  )
}

export default Home;
