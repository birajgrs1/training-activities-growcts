import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";

const HeaderComponent = () => {
  const { toggleTheme } = useThemeContext();
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: theme.palette.secondary.main,
              fontSize: "2rem",
            }}
          >
            Main-Task
          </Typography>
          <Button
            color="inherit"
            sx={{
              color: theme.palette.secondary.main,
              border: `2px solid ${theme.palette.secondary.main}`,
              fontSize: "1.25rem",
            }}
            onClick={toggleTheme}
          >
            Change Theme
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
