import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static" color="primary">
    <Toolbar className="flex justify-between">
      <Typography variant="h6" component="div">
        Quiz App
      </Typography>
      <div>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/quiz" color="inherit" sx={{ ml: 2 }}>
          Quiz
        </Button>
      </div>
    </Toolbar>
  </AppBar>
);

export default Navbar;