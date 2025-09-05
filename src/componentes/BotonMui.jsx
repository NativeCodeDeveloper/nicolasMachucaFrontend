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
        className={michroma.className }
        sx={{ 
          backgroundColor: '#2E0057',
          backgroundImage: 'linear-gradient(145deg, #360067, #2E0057)',
          border: '2px solid #8000ff',
          boxShadow: '0px 0px 6px rgba(128, 0, 255, 0.35)',
          transition: 'all 0.2s ease',
          '&:hover': { 
            backgroundColor: '#1E003A',
            backgroundImage: 'linear-gradient(145deg, #2A004D, #1E003A)',
            border: '2px solid #9a00ff',
            boxShadow: '0px 0px 8px rgba(154, 0, 255, 0.45)'
          },
          borderRadius: '9999px',
          paddingLeft: { xs: '16px', sm: '20px', md: '24px' },
          paddingRight: { xs: '16px', sm: '20px', md: '24px' },
          paddingTop: { xs: '6px', sm: '8px', md: '10px' },
          paddingBottom: { xs: '6px', sm: '8px', md: '10px' },
          fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
          fontWeight: 'bold',
          fontFamily: 'michroma',
          minWidth: '140px',
          width: '180px',
          textShadow: '0 0 5px rgba(255, 255, 255, 0.7)',
          textAlign: 'center'
        }}
      >
        {contenido}
      </Button>
    </Stack>
  );
}
