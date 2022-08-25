import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.scss';

// Icons
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';

// MUI
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid2 from '@mui/material/Unstable_Grid2';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

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
          title="Main Hall"
          subheader="Butterworth Hall, Arts Centre"
        />
        <CardContent className={styles.noPad} sx={{height: 300, overflow: "scroll"}}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Speed Cosplay" secondary="10:00 - 12:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Masquerade Rehearsal" secondary="14:30 - 16:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
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
          title="Medium Events"
          subheader="Studio, Arts Centre"
        />
        <CardContent className={styles.noPad} sx={{height: 300, overflow: "scroll"}}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Cosplay Support Group" secondary="10:00 - 11:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Which Metal Gear Was Best?" secondary="11:30 - 12:30" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Hell on a Cel: Best Anime Fight Scenes" secondary="13:00 - 14:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="It Was Fookin' One Of Yas: A Murder Mystery" secondary="14:30 - 16:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
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
          title="Small Events One"
          subheader="Panorama 1, Rootes Building"
        />
        <CardContent className={styles.noPad} sx={{height: 300, overflow: "scroll"}}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Grell Sutcliff Stich 'n Bitch" secondary="10:00 - 11:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Modding: Either make your game pretty or break it" secondary="11:30 - 12:30" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Japanese Literature: From Murasaki to Murakami" secondary="13:00 - 14:00" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
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
            variant="h4"
            component="div">
            Happening now
          </Typography>
          <Grid2 spacing={2} container>
            <Grid2 xs={12} md={6} lg={4}>
              <Card elevation={2} raised sx={{height: 300, overflow: "scroll"}}>
                <CardHeader
                  action={<EmojiEventsRoundedIcon />}
                  title="A Really Cool Event, Honest"
                  subheader="Panorama 1 (10:30 - 11:30)"
                />
                <CardContent>
                  <Typography component="div" variant="body2">
                    Edison bulb subway tile shaman sus coloring book. Poke kale chips gochujang, big mood hashtag franzen
                    schlitz tousled everyday carry flexitarian la croix lumbersexual. Williamsburg 3 wolf moon cornhole
                    slow-carb. Sriracha tattooed chambray mixtape hell of 3 wolf moon salvia twee try-hard. Migas beard
                    hexagon aesthetic DIY, hashtag artisan jianbing. Stumptown crucifix shaman franzen la croix cred unicorn
                    actually. Mumblecore yes plz leggings fanny pack trust fund vaporware cliche chambray scenester pug tbh.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 xs={12} md={6} lg={4}>
              <Card elevation={2} raised sx={{height: 300, overflow: "scroll"}}>
                <CardHeader
                 action={<BookRoundedIcon />}
                  title="Another Really Cool Event, For Sure"
                  subheader="Butterworth Hall (10:45 - 12:15)"
                />
                <CardContent>
                  <Typography component="div" variant="body2">
                    Edison bulb subway tile shaman sus coloring book. Poke kale chips gochujang, big mood hashtag franzen
                    schlitz tousled everyday carry flexitarian la croix lumbersexual. Williamsburg 3 wolf moon cornhole
                    slow-carb. Sriracha tattooed chambray mixtape hell of 3 wolf moon salvia twee try-hard. Migas beard
                    hexagon aesthetic DIY, hashtag artisan jianbing. Stumptown crucifix shaman franzen la croix cred unicorn
                    actually. Mumblecore yes plz leggings fanny pack trust fund vaporware cliche chambray scenester pug tbh.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 xs={12} md={6} lg={4}>
              <Card elevation={2} raised sx={{height: 300, overflow: "scroll"}}>
                <CardHeader
                 action={<BrushRoundedIcon />}
                  title="How About A Third One?"
                  subheader="Woods-Scawen (10:45 - 12:15)"
                />
                <CardContent>
                  <Typography component="div" variant="body2">
                    Edison bulb subway tile shaman sus coloring book. Poke kale chips gochujang, big mood hashtag franzen
                    schlitz tousled everyday carry flexitarian la croix lumbersexual. Williamsburg 3 wolf moon cornhole
                    slow-carb. Sriracha tattooed chambray mixtape hell of 3 wolf moon salvia twee try-hard. Migas beard
                    hexagon aesthetic DIY, hashtag artisan jianbing. Stumptown crucifix shaman franzen la croix cred unicorn
                    actually. Mumblecore yes plz leggings fanny pack trust fund vaporware cliche chambray scenester pug tbh.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Paper>
        <Paper elevation={1} sx={{marginTop: "1rem", padding: "1rem"}}>
          <Typography
            gutterBottom
            variant="h4"
            component="div">
            Schedule
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
