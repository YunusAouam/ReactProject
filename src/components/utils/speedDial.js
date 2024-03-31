import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Chat, Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  speedDial: {
    position: 'fixed',
    bottom: useTheme().spacing(2),
    left: useTheme().spacing(2),
  },
}));

const actions = [
  { icon: <WhatsApp />, name: 'Whatsapp', link :"https://api.whatsapp.com/send/?phone=%2B212648288553&text&type=phone_number&app_absent=0" },
  { icon: <Facebook />, name: 'Facebook', link:"https://api.whatsapp.com/send/?phone=%2B212648288553&text&type=phone_number&app_absent=0" },
  { icon: <Instagram />, name: 'Instagram', link:"https://api.whatsapp.com/send/?phone=%2B212648288553&text&type=phone_number&app_absent=0" }
];

export default function SpeedDialComponent() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const redirect = (link) => {
    window.open(link, "_blank");
  }

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
      icon={<Chat />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="up"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => redirect(action.link)}
        />
      ))}
    </SpeedDial>
  );
}
