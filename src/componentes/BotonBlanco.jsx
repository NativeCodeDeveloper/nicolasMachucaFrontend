import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400"
});

export default function BasicButtons({contenido}) {
  return (
    <Stack spacing={2} direction="row">
      <Button 
        variant="contained"
    
        sx={{ 
          backgroundColor: '#ffffff',
          color: '#000000',
          '&:hover': { backgroundColor: '#e5e5e5' },
          borderRadius: '9999px',
          paddingLeft: { xs: '16px', sm: '20px', md: '24px' },
          paddingRight: { xs: '16px', sm: '20px', md: '24px' },
          paddingTop: { xs: '6px', sm: '8px', md: '10px' },
          paddingBottom: { xs: '6px', sm: '8px', md: '10px' },
          fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
          fontWeight: 'bold',
          fontFamily: 'michroma',
          minWidth: '140px',
          textAlign: 'center'
        }}
      >
        {contenido}
      </Button>
    </Stack>
  );
}
