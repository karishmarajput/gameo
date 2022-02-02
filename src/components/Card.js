import React, { Component, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import data from '../data.json';
import './Card.css';

function RenderCard(games) {
  return (
    <div>
      <a href={games.games.link}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={games.games.thumbnailimage}
              alt={games.games.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {games.games.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

export default function Card() {
  const [searchTerm, setSearchTerm] = useState('');
  const games = data.games
    .filter((val) => {
      if (searchTerm == '') {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map((games) => {
      return (
        <div key={games.id} className="cards">
          <RenderCard games={games} />
        </div>
      );
    });
  return (
    <div className="container">
      <div className="heading-course">
        <input
          className="input"
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="card-container">{games}</div>;
    </div>
  );
}
