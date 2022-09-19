import styles from './Topbar.module.scss';
import * as React from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'usehooks-ts';

// Icons
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// MUI
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from "@mui/material/Tooltip";
import Typography from '@mui/material/Typography';

const Topbar = () => {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (route: string) => {
    router.push(route);
    setAnchorEl(null);
  };

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
        {isDesktop && (
          <>
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
          </>
        )}
        {!isDesktop && (
          <>
            <Tooltip title="Menu">
              <IconButton color="inherit" id="mobile-menu-button" onClick={handleClick}>
                <MenuRoundedIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'mobile-menu-button',
              }}
            >
              <MenuItem disabled onClick={() => handleClose("/tickets")}>Tickets</MenuItem>
              <MenuItem onClick={() => handleClose("/location")}>Location</MenuItem>
              <MenuItem disabled onClick={() => handleClose("/dealers")}>Dealers</MenuItem>
              <MenuItem disabled onClick={() => handleClose("/whats-on")}>What&apos;s On</MenuItem>
              <MenuItem disabled onClick={() => handleClose("/faq")}>FAQ</MenuItem>
              <MenuItem onClick={() => handleClose("/schedule")}>Schedule</MenuItem>
              <MenuItem onClick={() => handleClose("/admin/users")}>Users</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;

