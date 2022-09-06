import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Grid2 from '@mui/material/Unstable_Grid2';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styles from '../styles/Home.module.scss';
import Script from 'next/script';

const Home: NextPage = () => {
  return (
    <>
      <div id="fb-root"></div>
      <Script async defer
        crossOrigin="anonymous"
        id="fb-embed"
        src="https://connect.facebook.net/en_PI/sdk.js#xfbml=1&version=v14.0"
        nonce="LfNqXYQ9">
      </Script>
      <Layout>
        <div>
          <Paper elevation={1} sx={{padding: "1rem"}}>
            <Typography
              gutterBottom
              variant="h3"
              component="div">
              Welcome to Kita 20XX!
            </Typography>
          </Paper>
          <Grid2 spacing={2} container>
            <Grid2 xs={12} md={4}>
              <Paper elevation={1} sx={{height: 532, padding: "1rem", overflowY: "scroll"}}>
                <TwitterTimelineEmbed
                  noFooter
                  noHeader
                  tweetLimit={10}
                  options={{height: 500}}
                  sourceType="profile"
                  screenName="Kitacon" />
              </Paper>
            </Grid2>
            <Grid2 xs={12} md={4} mdOffset="auto">
              <Paper elevation={1} sx={{height: 532, padding: "1rem"}}>
                <div className="fb-page" data-href="https://www.facebook.com/kitacon/" data-tabs="timeline"
                data-width="500" data-height="500" data-small-header="true" data-adapt-container-width="true"
                data-hide-cover="false" data-show-facepile="false">
                  <blockquote cite="https://www.facebook.com/kitacon/" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/kitacon/">Cap&#039;n Kitacon</a>
                  </blockquote>
                </div>
              </Paper>
            </Grid2>
          </Grid2>
        </div>
      </Layout>
    </>
  )
}

export default Home;
