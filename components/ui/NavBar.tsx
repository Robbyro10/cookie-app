import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuIcon />
        </IconButton>
        <Link href={"/"} underline="none" color="inherit">
          <Typography variant="h6" color="white">
            CookieMaster
          </Typography>
        </Link>

        <div style={{ flex: 1 }} />
        <Link href={"/theme-changer"} underline="none" color="inherit">
          <Typography variant="h6" color="white">
            Change Theme
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
