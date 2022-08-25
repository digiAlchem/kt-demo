import * as React from 'react';
import type { NextPage } from 'next';
import styles from '../../styles/Home.module.scss';
import Layout from '../../components/Layout/Layout';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import demoData from "../../data/users.json";

// Icons
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import LocalPoliceRoundedIcon from '@mui/icons-material/LocalPoliceRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

// MUI
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';

const AdminUsers: NextPage = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [currentEditTarget, setCurrentEditTarget] = React.useState<Record<string, any>>(demoData[0]);

  const getBadgeChips = (userNumber: string, badges: string[]) => {
    const badgeChips = badges.map(badge => {
      let chipIcon = null;
      let chipTitle = "";

      switch(badge) {
        case "event":
          chipIcon = <CampaignRoundedIcon />;
          chipTitle = "Event Runner";
          break;
        case "vip":
          chipIcon = <DiamondRoundedIcon />;
          chipTitle = "VIP";
          break;
        case "gopher":
          chipIcon = <LocalPoliceRoundedIcon />;
          chipTitle = "Gopher";
          break;
        case "press":
          chipIcon = <NewspaperRoundedIcon />;
          chipTitle = "Press";
          break;
        case "committee":
          chipIcon = <BalanceRoundedIcon />;
          chipTitle = "Committee";
          break;
        case "guest":
          chipIcon = <AutoAwesomeRoundedIcon />;
          chipTitle = "Guest";
          break;
        default:
          chipIcon = <AssignmentIndRoundedIcon />;
          chipTitle = "Standard";
      }

      return (
        <Chip className={styles.badgeChip} data-badge={badge} key={`${userNumber}-${badge}`} icon={chipIcon} label={chipTitle} />
      );
    });

    return (
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={1}>
        {badgeChips}
      </Stack>
    );
  };

  const getDataRow = (row: Record<string, any>) => {
    const regDate = format(parseISO(row.registered), "do LLL yyyy',' HH':'mm':'ss");
    const paidDate = row.paid ? format(parseISO(row.paid), "do LLL yyyy',' HH':'mm':'ss") : "Unpaid";

    return (
      <TableRow
        key={`${row.number}-${row.badgeName}`}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.number}</TableCell>
        <TableCell>{row.badgeName}</TableCell>
        <TableCell>{getBadgeChips(row.number, row.badges)}</TableCell>
        <TableCell>{regDate}</TableCell>
        <TableCell>{paidDate}</TableCell>
        <TableCell>
          <IconButton color="inherit" onClick={() => openEditDialog(row)}>
            <CreateRoundedIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    currentPage > 0 ? Math.max(0, (1 + currentPage) * rowsPerPage - demoData.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const getPaginatedRows = () => {
   return demoData.slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage);
  };

  const openEditDialog = (data: Record<string, any>) => {
    setCurrentEditTarget(data);
    setEditDialogOpen(true);
  };

  return (
    <Layout title="User Admin">
      <div className={styles.main}>
        <Paper elevation={1} sx={{padding: "1rem"}}>
          <Dialog
            open={editDialogOpen}
            onClose={() => setEditDialogOpen(false)}
            scroll="paper"
            maxWidth="md"
            fullWidth
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Edit User</DialogTitle>
            <DialogContent dividers>
              <TextField
                margin="dense"
                id="reg-number"
                label="Number"
                disabled
                fullWidth
                value={currentEditTarget.number}
                variant="outlined"
              />
              <FormGroup row sx={{gap: "1rem"}}>
                <TextField
                  margin="dense"
                  id="name"
                  label="Name"
                  value={currentEditTarget.name}
                  variant="outlined"
                  sx={{flexGrow: 1}}
                />
                <TextField
                  margin="dense"
                  id="badge-name"
                  label="Badge name"
                  value={currentEditTarget.badgeName}
                  variant="outlined"
                  sx={{flexGrow: 1}}
                />
              </FormGroup>
              <FormLabel component="legend">Registration types</FormLabel>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={currentEditTarget.badges.includes("standard")} />} label="Standard" />
                <FormControlLabel control={<Checkbox checked={currentEditTarget.badges.includes("vip")} />} label="VIP" />
                <FormControlLabel control={<Checkbox checked={currentEditTarget.badges.includes("committee")} />} label="Committee" />
                <FormControlLabel control={<Checkbox checked={currentEditTarget.badges.includes("guest")} />} label="Guest" />
                <FormControlLabel control={<Checkbox checked={currentEditTarget.badges.includes("gopher")} />} label="Gopher" />
                <FormControlLabel control={<Checkbox checked={currentEditTarget.badges.includes("event")} />} label="Event Runner" />
                <FormControlLabel control={<Checkbox checked={currentEditTarget.badges.includes("press")} />} label="Press" />
              </FormGroup>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setEditDialogOpen(false)}>Discard</Button>
              <Button onClick={() => setEditDialogOpen(false)} variant="contained">Save</Button>
            </DialogActions>
          </Dialog>

          <Typography
            variant="h4"
            component="div"
            sx={{padding: "1rem"}}
          >
            Registered users
          </Typography>
          <TablePagination
            component="div"
            count={demoData.length}
            page={currentPage}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            showFirstButton
            showLastButton
          />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Badge name</TableCell>
                  <TableCell>Registration type(s)</TableCell>
                  <TableCell>Registered</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getPaginatedRows().map((row: Record<string, any>) => (
                  getDataRow(row)
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 73 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={demoData.length}
            page={currentPage}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            showFirstButton
            showLastButton
          />
        </Paper>
      </div>
    </Layout>
  );
};

export default AdminUsers;

