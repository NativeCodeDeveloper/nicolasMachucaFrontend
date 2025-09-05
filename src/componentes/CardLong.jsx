import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function ImgMediaCard({imagen, titulo, descripcion, pagina}) {
  return (
<div className='flex flex-col h-full'>
      <Card className='h-full' sx={{ 
        maxWidth: 700, 
        width: '100%', 
        backgroundColor: '#1e1e1e', 
        color: '#fff', 
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {imagen}
      />
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff', fontSize: '2rem', fontWeight: 'bold' }}>
            {titulo}
          </Typography>
          <Typography variant="body2" sx={{ color: '#ccc', fontSize: '1.2rem' }}>
           {descripcion}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={pagina} passHref>
          <Button
            size="small"
            sx={{ color: '#90caf9', fontSize: '1rem', padding: '10px 20px' }}
          >
            Ver Proyecto
          </Button>
          </Link>
        </CardActions>
      </div>
    </Card>
</div>
  );
}
