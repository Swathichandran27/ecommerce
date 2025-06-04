
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function MediaCard() {
  return (
    <div>
      <div>
        <h1 style={{ color: '#d81b60', textAlign: 'center', fontFamily: 'cursive' }}>
          POPULAR COLLECTIONS
        </h1>
        <br />
        <br />
      </div>
      <Box style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 500, objectFit: 'cover' }}
            image="https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="DressBerry"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              DressBerry
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This co-ords consists of top and trousers
              Mustard yellow and white printed top, has shirt collar, three-quarter sleeves and button closure
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 500, objectFit: 'cover' }}
            image="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?cs=srgb&dl=pexels-frendsmans-1926769.jpg&fm=jpg"
            title="DressBerry"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              DressBerry
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This co-ords consists of top and trousers
              Mustard yellow and white printed top, has shirt collar, three-quarter sleeves and button closure
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 500, objectFit: 'cover' }}
            image="https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Anouk"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Anouk
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Beige and black printed basic jumpsuit with waist tie-ups, has a round neck, sleeveless, 2 pockets
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
      <br />
     
    </div>
  );
}

export default MediaCard;

