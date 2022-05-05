import React from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AdminPanelSettings,
  Circle,
  ExpandLess,
  ExpandMore,
  Inbox,
  StarBorder,
} from "@mui/icons-material";

const SystemUsers = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AdminPanelSettings />
        </ListItemIcon>
        <ListItemText primary="System Users" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Circle fontSize="2px" />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Circle fontSize="2px" />
            </ListItemIcon>
            <ListItemText primary="Roles" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Circle fontSize="2px" />
            </ListItemIcon>
            <ListItemText primary="Permissions" />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default SystemUsers;
