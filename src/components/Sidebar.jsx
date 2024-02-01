import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = ({ isOpen, onClose }) => {
  const [openSublist, setOpenSublist] = React.useState(false);
  const navigate = useNavigate();

  const handleSublistToggle = () => {
    setOpenSublist(!openSublist);
  };

  const handleNavigationClick = (route) => {
    navigate(route);
    onClose();
  };

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <List>
        <ListItemButton onClick={() => handleNavigationClick('/')}>
          <ListItemText primary='Dashboard' />
        </ListItemButton>

        <ListItemButton onClick={handleSublistToggle}>
          <ListItemText primary='Organization' />
          {openSublist ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSublist} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              onClick={() => handleNavigationClick('organizationsRole')}
              sx={{ pl: 4 }}>
              <ListItemText primary='Roles' />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
