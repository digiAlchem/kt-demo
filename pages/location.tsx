import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <Paper elevation={1} sx={{padding: "1rem"}}>
          <Typography
            className={styles.paperTitle}
            variant="h5"
            component="div"
            gutterBottom>
            Location
          </Typography>
          <iframe
            width="100%"
            height="400" id="gmap_canvas"
            src="https://maps.google.com/maps?q=University%20of%20Warwick,%20Coventry&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0} />
        </Paper>
        <Paper elevation={1} sx={{marginTop: "1rem", padding: "1rem"}}>
          <Typography
            className={styles.paperTitle}
            variant="h5"
            component="div"
            gutterBottom>
            Accommodation
          </Typography>
          <Typography
            variant="h6"
            component="div"
            gutterBottom>
            Discounted Rooms
          </Typography>
          <Typography component="p" variant="body2" gutterBottom>
            Kitacon is happy to offer attendees accommodation options to cater to single, twin and double beds.
            There&apos;s also a good range of pricing options available to suit your convention budget.
          </Typography>
          <Typography component="p" variant="body2" gutterBottom>
            Upon paying for registration, attendees will be presented with an online link to book their accommodation
            on-site at Warwick University.
          </Typography>
          <Typography component="p" variant="body2" gutterBottom>
            All prices and options below include VAT and breakfast. Accommodation options all include ensuite bathroom.
            Please note, room options are subject to availability. Remember, Kitacon registration does NOT include accommodation.
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Accommodation Block</TableCell>
                  <TableCell>Price (per night)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Jack Martin / Arthur Vick</TableCell>
                  <TableCell>£66.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bluebell (Single)</TableCell>
                  <TableCell>£75.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Radcliffe (Twin)</TableCell>
                  <TableCell>£135.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Scarman (Double)</TableCell>
                  <TableCell>£135.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            variant="h6"
            component="div"
            marginTop="1rem"
            gutterBottom>
            Off-Site Accommodation
          </Typography>

        </Paper>
      </div>
    </Layout>
  )
}

export default Home;
