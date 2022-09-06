import styles from './Topbar.module.scss';
import * as React from 'react';
import { useRouter } from 'next/router';

// Icons
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

// MUI
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from "@mui/material/Tooltip";
import Typography from '@mui/material/Typography';

const Topbar = () => {
  const router = useRouter();

  return (
    <AppBar className={styles.topbar} component="nav">
      <Toolbar>
        <Tooltip title="Home">
          <IconButton color="inherit" onClick={() => router.push("/")}>
            <HouseRoundedIcon />
          </IconButton>
        </Tooltip>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'block' } }}
        >
          Kita
        </Typography>
        <Button color="inherit" disabled>Tickets</Button>
        <Button color="inherit" onClick={() => router.push("/location")}>Location</Button>
        <Button color="inherit" disabled>Dealers</Button>
        <Button color="inherit" disabled>What&apos;s On</Button>
        <Button color="inherit" disabled>FAQ</Button>
        <Tooltip title="Schedule">
          <IconButton color="inherit" onClick={() => router.push("/schedule")}>
            <CalendarMonthRoundedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Users">
          <IconButton color="inherit" onClick={() => router.push("/admin/users")}>
            <AccountBoxRoundedIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;

