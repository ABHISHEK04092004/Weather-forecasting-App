import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GrainIcon from '@mui/icons-material/Grain';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

function InfoBox({info}) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?q=80&w=1170&auto=format&fit=crop";

 const HOT_URL="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 const COLD_URL="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyfGVufDB8fDB8fHww";
 const RAIN_URL="https://images.unsplash.com/photo-1603321544554-f416a9a11fcf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW55fGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <h1>Weather Info - {info.weather}</h1>

<div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} 
        
        image={info.humidity>80?
          RAIN_URL:info.temp>25?
          HOT_URL:COLD_URL}
          
          />

        <CardContent>
          <Typography gutterBottom variant="h5">
            {info.city}
            {info.humidity>80
          ?<GrainIcon/>
          :info.temp>25?
     <WbSunnyOutlinedIcon/>
     :<AcUnitIcon/>
            }

          </Typography>

          <Typography
            variant="body2"
            component="span"
            sx={{ color: "text.secondary" }}
          >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}%</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels
              like {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}

export default InfoBox;
