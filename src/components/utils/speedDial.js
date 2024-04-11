import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Chat, Facebook, LinkedIn, Telegram, WhatsApp } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';

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
  { icon: <Telegram />, name: 'Telegram', link:"https://t.me/Mehdigsc" },
  { icon: <LinkedIn />, name: 'LinkedIn', link:"https://www.linkedin.com/company/goleador-sport-consulting/" }
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
