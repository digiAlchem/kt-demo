import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.scss';

// Icons
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

// MUI
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid2 from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const exampleScheduleGrid: JSX.Element = (
  <Grid2 spacing={2} container>
    <Grid2 xs={12} md={6} lg={4}>
      <Card elevation={2} raised>
        <CardHeader
          sx={{borderBottom: "1px solid rgb(200, 200, 200)"}}
          title="Main Hall"
          subheader="Butterworth Hall, Arts Centre"
        />
        <CardContent className={styles.noPad} sx={{height: 300, overflow: "scroll"}}>
          <List>
            <ListItem disablePadding secondaryAction={
              <IconButton edge="end" aria-label="Add to my schedule">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            }>
              <ListItemButton>
                <ListItemText primary="Speed Cosplay" secondary="10:00 - 12:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding secondaryAction={
              <IconButton edge="end" aria-label="Add to my schedule">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            }>
              <ListItemButton>
                <ListItemText primary="Masquerade Rehearsal" secondary="14:30 - 16:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding secondaryAction={
              <IconButton edge="end" aria-label="Add to my schedule">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            }>
              <ListItemButton>
                <ListItemText primary="Masquerade" secondary="16:00 - 18:00" />
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid2>
    <Grid2 xs={12} md={6} lg={4}>
      <Card elevation={2} raised>
        <CardHeader
          sx={{borderBottom: "1px solid rgb(200, 200, 200)"}}
          title="Medium Events"
          subheader="Studio, Arts Centre"
        />
        <CardContent className={styles.noPad} sx={{height: 300, overflow: "scroll"}}>
          <List>
            <ListItem disablePadding secondaryAction={
              <IconButton edge="end" aria-label="Add to my schedule">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            }>
              <ListItemButton>
                <ListItemText primary="Cosplay Support Group" secondary="10:00 - 11:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding secondaryAction={
              <IconButton edge="end" aria-label="Add to my schedule">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            }>
              <ListItemButton>
                <ListItemText primary="Which Metal Gear Was Best?" secondary="11:30 - 12:30" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding secondaryAction={
              <IconButton edge="end" aria-label="Add to my schedule">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            }>
              <ListItemButton>
                <ListItemText primary="Hell on a Cel: Best Anime Fight Scenes" secondary="13:00 - 14:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding secondaryAction={
              <IconButton edge="end" aria-label="Add to my schedule">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            }>
              <ListItemButton>
                <ListItemText primary="It Was Fookin' One Of Yas: A Murder Mystery" secondary="14:30 - 16:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding secondaryAction={
              <IconButton edge="end" aria-label="Add to my schedule">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            }>
              <ListItemButton>
                <ListItemText primary="Big Dumb Hentai Quiz" secondary="18:30 - 19:30" />
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid2>
    <Grid2 xs={12} md={6} lg={4}>
      <Card elevation={2} raised>
        <CardHeader
          sx={{borderBottom: "1px solid rgb(200, 200, 200)"}}
          title="Small Events One"
          subheader="Panorama 1, Rootes Building"
        />
        <CardContent className={styles.noPad} sx={{height: 300, overflow: "scroll"}}>
          <List>
            <ListItem disablePadding secondaryAction={
              <IconButton edge="end" aria-label="Add to my schedule">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            }>
              <ListItemButton>
                <ListItemText primary="Grell Sutcliff Stich 'n Bitch" secondary="10:00 - 11:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding secondaryAction={
              <IconButton edge="end" aria-label="Add to my schedule">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            }>
              <ListItemButton>
                <ListItemText primary="Modding: Either make your game pretty or break it" secondary="11:30 - 12:30" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding secondaryAction={
              <IconButton edge="end" aria-label="Add to my schedule">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            }>
              <ListItemButton>
                <ListItemText primary="Japanese Literature: From Murasaki to Murakami" secondary="13:00 - 14:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding secondaryAction={
              <IconButton edge="end" aria-label="Add to my schedule">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            }>
              <ListItemButton>
                <ListItemText primary="Back To D-D-D-Duel" secondary="14:30 - 15:30" />
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid2>
  </Grid2>
);

const Schedule: NextPage = () => {
  const [currentScheduleTab, setCurrentScheduleTab] = React.useState(0);

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <>
            {children}
          </>
        )}
      </div>
    );
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentScheduleTab(newValue);
  };

  return (
    <Layout>
      <div>
        <Paper elevation={1} sx={{padding: "1rem"}}>
          <Typography
            gutterBottom
            variant="h5"
            component="div">
            Happening now
          </Typography>
          <div className={styles.happeningEventsList}>
            <div>
              <Card elevation={2} raised sx={{height: 300, width: 400}}>
                <CardHeader
                  title="Main Hall"
                  subheader="Butterworth Hall, Arts Centre"
                  sx={{borderBottom: "1px solid rgb(200, 200, 200)"}}
                />
                <CardContent sx={{height: "211px", marginBottom: "2rem", overflow: "scroll"}}>
                  <Typography component="div" variant="h6">
                    A Really Cool Event
                  </Typography>
                  <Typography component="div" variant="body2" sx={{color: "rgb(100, 100, 100)"}}>
                    10:30 - 11:30
                  </Typography>
                  <Typography component="div" variant="body2" sx={{marginTop: "0.5rem"}}>
                    Edison bulb subway tile shaman sus coloring book. Poke kale chips gochujang, big mood hashtag franzen
                    schlitz tousled everyday carry flexitarian la croix lumbersexual. Williamsburg 3 wolf moon cornhole
                    slow-carb. Sriracha tattooed chambray mixtape hell of 3 wolf moon salvia twee try-hard. Migas beard
                    hexagon aesthetic DIY, hashtag artisan jianbing. Stumptown crucifix shaman franzen la croix cred unicorn
                    actually. Mumblecore yes plz leggings fanny pack trust fund vaporware cliche chambray scenester pug tbh.
                  </Typography>
                </CardContent>
              </Card>
              <Card elevation={2} raised sx={{height: 300, width: 400}}>
                <CardHeader
                  title="Small Events One"
                  subheader="Panorama 1, Rootes Building"
                  sx={{borderBottom: "1px solid rgb(200, 200, 200)"}}
                />
                <CardContent sx={{height: "211px", marginBottom: "2rem", overflow: "scroll"}}>
                  <Typography component="div" variant="h6">
                    Another Really Cool Event, For Sure
                  </Typography>
                  <Typography component="div" variant="body2" sx={{color: "rgb(100, 100, 100)"}}>
                    10:45 - 12:15
                  </Typography>
                  <Typography component="div" variant="body2" sx={{marginTop: "0.5rem"}}>
                    Edison bulb subway tile shaman sus coloring book. Poke kale chips gochujang, big mood hashtag franzen
                    schlitz tousled everyday carry flexitarian la croix lumbersexual. Williamsburg 3 wolf moon cornhole
                    slow-carb. Sriracha tattooed chambray mixtape hell of 3 wolf moon salvia twee try-hard. Migas beard
                    hexagon aesthetic DIY, hashtag artisan jianbing. Stumptown crucifix shaman franzen la croix cred unicorn
                    actually. Mumblecore yes plz leggings fanny pack trust fund vaporware cliche chambray scenester pug tbh.
                  </Typography>
                </CardContent>
              </Card>
              <Card elevation={2} raised sx={{flexGrow: 0, height: 300, width: 400}}>
                <CardHeader
                  title="Medium Events"
                  subheader="Studio, Arts Centre"
                  sx={{borderBottom: "1px solid rgb(200, 200, 200)"}}
                />
                <CardContent sx={{height: "211px", marginBottom: "2rem", overflow: "scroll"}}>
                  <Typography component="div" variant="h6">
                    How About A Third One?
                  </Typography>
                  <Typography component="div" variant="body2" sx={{color: "rgb(100, 100, 100)"}}>
                    10:45 - 12:15
                  </Typography>
                  <Typography component="div" variant="body2" sx={{marginTop: "0.5rem"}}>
                    Edison bulb subway tile shaman sus coloring book. Poke kale chips gochujang, big mood hashtag franzen
                    schlitz tousled everyday carry flexitarian la croix lumbersexual. Williamsburg 3 wolf moon cornhole
                    slow-carb. Sriracha tattooed chambray mixtape hell of 3 wolf moon salvia twee try-hard. Migas beard
                    hexagon aesthetic DIY, hashtag artisan jianbing. Stumptown crucifix shaman franzen la croix cred unicorn
                    actually. Mumblecore yes plz leggings fanny pack trust fund vaporware cliche chambray scenester pug tbh.
                  </Typography>
                </CardContent>
              </Card>
              <Card elevation={2} raised sx={{flexGrow: 0, height: 300, width: 400}}>
                <CardHeader
                  title="Medium Events"
                  subheader="Studio, Arts Centre"
                  sx={{borderBottom: "1px solid rgb(200, 200, 200)"}}
                />
                <CardContent sx={{height: "211px", marginBottom: "2rem", overflow: "scroll"}}>
                  <Typography component="div" variant="h6">
                    Perhaps Even A Fourth?
                  </Typography>
                  <Typography component="div" variant="body2" sx={{color: "rgb(100, 100, 100)"}}>
                    10:45 - 12:15
                  </Typography>
                  <Typography component="div" variant="body2" sx={{marginTop: "0.5rem"}}>
                    Edison bulb subway tile shaman sus coloring book. Poke kale chips gochujang, big mood hashtag franzen
                    schlitz tousled everyday carry flexitarian la croix lumbersexual. Williamsburg 3 wolf moon cornhole
                    slow-carb. Sriracha tattooed chambray mixtape hell of 3 wolf moon salvia twee try-hard. Migas beard
                    hexagon aesthetic DIY, hashtag artisan jianbing. Stumptown crucifix shaman franzen la croix cred unicorn
                    actually. Mumblecore yes plz leggings fanny pack trust fund vaporware cliche chambray scenester pug tbh.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </Paper>
        <Paper elevation={1} sx={{marginTop: "1rem", padding: "1rem"}}>
          <Typography
            gutterBottom
            variant="h5"
            component="div">
            Your schedule
          </Typography>
          <Container sx={{alignItems: "center", display: "flex", flexDirection: "column", height: 190, textAlign: "center"}}>
            <div className={styles.featureIcon}>
              <CalendarTodayRoundedIcon fontSize="large" />
            </div>
            <Typography component="div" variant="h5" sx={{margin: "1rem 0"}}>
              Nothing here yet!
            </Typography>
            <Typography component="div" variant="body2" sx={{display: "flex", justifySelf: "center"}}>
              Click the heart icon next to an event on the full schedule to add it to this list.
            </Typography>
          </Container>
        </Paper>
        <Paper elevation={1} sx={{marginTop: "1rem", padding: "1rem"}}>
          <Typography
            gutterBottom
            variant="h5"
            component="div">
            Full schedule
          </Typography>
          <Tabs value={currentScheduleTab} onChange={handleChange}>
            <Tab label="Friday" />
            <Tab label="Saturday" />
            <Tab label="Sunday" />
          </Tabs>
          <TabPanel value={currentScheduleTab} index={0}>
            {exampleScheduleGrid}
          </TabPanel>
          <TabPanel value={currentScheduleTab} index={1}>
            {exampleScheduleGrid}
          </TabPanel>
          <TabPanel value={currentScheduleTab} index={2}>
            {exampleScheduleGrid}
          </TabPanel>
        </Paper>
      </div>
    </Layout>
  )
}

export default Schedule;
