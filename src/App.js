import './App.css';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import useStyles from './styled';
import heroImage from './images/illustration-hero.svg';
import musicIcon from './images/icon-music.svg';
import zIndex from '@mui/material/styles/zIndex';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div/>
      
      <div>
        <Card>
          <CardContent>
            <div className={classes.heroImage}>
              <img src={heroImage} alt="party" />
            </div>

            <Typography variant="h4">Order Summary</Typography>
            <Typography variant="h6">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</Typography>

            {/* Annual Plan */}
            <div className={classes.annual}>
              <img src={musicIcon} alt="music-icon" />
              <Typography variant="h5">Annual Plan</Typography>
              <Typography variant="h6">$59.99/year</Typography>
              <Button variant="text">Change</Button>
            </div>

            {/* Buttons */}
            <CardActions>
              <Button variant="contained">Proceed to Payment</Button>
              <Button variant="text">Cancel Order</Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
