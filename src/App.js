import './App.css';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useStyles from './styled';
import heroImage from './images/illustration-hero.svg';
import musicIcon from './images/icon-music.svg';

function App() {
  const classes = useStyles();
  const themer = createTheme({
    typography: {
      fontFamily: [
        'Red Hat Display',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={themer}>
      <div>
        <div>
          <Card sx={{ 
            width: 400,
            paddingX: 5,
            paddingY: 0.5,
            display: 'flex',
            justifyContent: 'center',
            borderRadius: 2,
            marginX: 'auto',
            marginY: 5,
            textAlign: 'center',
            boxShadow: 3,
            }}>
            <CardContent textAlign="center">
              <CardMedia 
                component="img"
                image={heroImage}
                alt="party"/>

              <Typography variant="h4" gutterBottom fontWeight='900' sx={{ marginTop: 3, }}>Order Summary</Typography>
              <Typography variant="h6" gutterBottom fontWeight='500' color="GrayText" fontSize="10">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</Typography>

              {/* Annual Plan */}
              <div className={classes.annual}>
                <img src={musicIcon} alt="music-icon" />
                    <div className={classes.text}>
                      <Typography variant="h6" fontWeight='700'>Annual Plan</Typography>
                      <Typography variant="h7" color="GrayText">$59.99/year</Typography>
                    </div>
                <Button variant="text" sx={{ textDecoration: 'underline', color: '#382AE1' }}>Change</Button>
              </div>

              {/* Buttons */}
              <CardActions sx={{ display: 'flex', flexDirection: 'column', marginTop: 5, marginBottom: -3,}}>
                <Button fontWeight="900" variant="contained" sx={{ color: '#fff', backgroundColor: '#382AE1', paddingX: 13, paddingY: 2, fontSize: 12 }}>Proceed to Payment</Button>
                <Button variant="text" className="as" sx={{ color: 'gray' }}>Cancel Order</Button>
              </CardActions>
            </CardContent>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
