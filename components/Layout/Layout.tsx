import Head from 'next/head';
import React from 'react';
import Topbar from '../Topbar/Topbar';
import styles from './Layout.module.scss';

// MUI
import Grid2 from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';

// Icons
import Icon from '@mdi/react';
import { mdiTwitter, mdiInstagram, mdiFacebook } from '@mdi/js';
import Tooltip from '@mui/material/Tooltip';

type LayoutProps = React.PropsWithChildren<{
  title?: string;
}>;

const Layout = ({ children, title }: LayoutProps) => {
  const childElements = React.Children.toArray(children);
  const mainElement = childElements.shift();

  return (
    <div className={styles.layout}>
      <Head>
        <title>Kita Demo Site{title && ` - ${title}`}</title>
        <meta name="description" content="Test demo site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{minHeight: "64px"}}>
        <Topbar />
      </header>

      <main className={styles.mainContainer}>
        <Grid2 container spacing={2}>
          {childElements.length > 0 && <Grid2 xs={12} lg={(childElements.length ? 2 : 0)}>
            {childElements}
          </Grid2> }
          <Grid2 xs={12} lg={(childElements.length ? 10 : 12)}>
            {mainElement}
          </Grid2>
        </Grid2>
      </main>

      <footer className={styles.footer}>
        <Tooltip title="Twitter">
          <IconButton color="inherit">
            <Icon path={mdiTwitter}
            size={2}
            title="Twitter"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Facebook">
          <IconButton color="inherit">
            <Icon path={mdiFacebook}
            size={2}
            title="Facebook"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagram">
          <IconButton color="inherit">
            <Icon path={mdiInstagram}
            size={2}
            title="Instagram"/>
          </IconButton>
        </Tooltip>
      </footer>
    </div>
  );
};

export default Layout;

