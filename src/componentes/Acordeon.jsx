import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage({ titulo, cuerpo1, cuerpo2, cuerpo3, cuerpo4, cuerpo5, cuerpo6, cuerpo7 }) {
  return (
    <Accordion
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#f5f5f5",
        border: "1px solid #333",
        "& .MuiAccordionSummary-root": {
          backgroundColor: "#2c2c2c",
        },
        "& .MuiAccordionDetails-root": {
          backgroundColor: "#1e1e1e",
        }
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography component="span">{titulo}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          {cuerpo1 && <li>{cuerpo1}</li>}
          {cuerpo2 && <li>{cuerpo2}</li>}
          {cuerpo3 && <li>{cuerpo3}</li>}
          {cuerpo4 && <li>{cuerpo4}</li>}
          {cuerpo5 && <li>{cuerpo5}</li>}
          {cuerpo6 && <li>{cuerpo6}</li>}
          {cuerpo7 && <li>{cuerpo7}</li>}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
}
