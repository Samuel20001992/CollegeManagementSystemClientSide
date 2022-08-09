import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid, TextField } from '@mui/material';
import {
  Region,
  subcity,
  zones,
  zone_1_woreda,
  zone_2_woreda,
  zone_3_woreda,
  zone_4_woreda,
  addis_woreda,
  akaky_woreda,
  arada_woreda,
  bole_woreda,
  gullele_woreda,
  kirkos_woreda,
  yeka_woreda,
  nifas_woreda,
  lideta_woreda,
  kolfe_woreda,
  lafto_woreda

} from './Arrays';


export default function SelectForm() {
  const [zone, setCountry] = React.useState('');
    const [regions, setContinent] = React.useState('');
  const [city, setCity] = React.useState('');
  const [woreda, setWoreda] = React.useState('');
    const arr = React.useState();
    const handleChange1 = (event) => {
    setContinent(event.target.value);
    };
    
const handleChange2 = (event) => {
    setCountry(event.target.value);
};
    
  const handleChange3 = (event) => {
    setCity(event.target.value);
    console.log('city ' + city);
  };

const handleChange4 = (event) => {
    setWoreda(event.target.value);
    console.log('woreda ' + woreda);
  };

  
  return (
    <  >
      <Grid item xs={6} md={4} sm={6}>

      <FormControl style={{ float:'left', marginLeft:'75px', width:'300px'}}   size="small">
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={regions}
          label="Region"
          onChange={handleChange1}
              >
        {Region.map((reg) => {
           return <MenuItem value={reg}>{reg}</MenuItem>
        })}
          
        </Select>
          </FormControl>
      </Grid>
      <Grid item xs={6} md={4} sm={6}>

          <FormControl style={{ float:'left', marginLeft:'75px', width:'300px'}}   size="small">
                 
        <InputLabel id="demo-simple-select-label">Zone / Subcity </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={zone}
          label="Zone / Subcity"
          onChange={handleChange2}
              >
          {regions == 'Addis Ababa' ?
            subcity.map((cy) => {
              return <MenuItem value={cy}>{cy}</MenuItem>
            }) : null
          }
          {
            regions == 'Amhara' ?
              zones.map((cy) => {
                     return <MenuItem value={cy}>{cy}</MenuItem>
              }): null
          }
          {regions == 'Afar' ?
            zones.map((cy) => {
              return <MenuItem value={cy}>{cy}</MenuItem>
            }) : null
          }
          {regions == 'Benishangul - Gumuz' ?
            zones.map((cy) => {
              return <MenuItem value={cy}>{cy}</MenuItem>
            }) : null
          }
       
          {regions == 'Gambela' ?
            zones.map((cy) => {
              return <MenuItem value={cy}>{cy}</MenuItem>
            }) : null
          }
          {regions == 'Harari' ?
            zones.map((cy) => {
              return <MenuItem value={cy}>{cy}</MenuItem>
            }) : null
          }
          {regions == 'Oromia' ?
            zones.map((cy) => {
              return <MenuItem value={cy}>{cy}</MenuItem>
            }) : null
          }
          {regions == 'Somalia' ?
            zones.map((cy) => {
              return <MenuItem value={cy}>{cy}</MenuItem>
            }) : null
          }
          {regions == 'Southern Nations, Nationalities Peoples' ?
            zones.map((cy) => {
              return <MenuItem value={cy}>{cy}</MenuItem>
            }) : null
          }
          {regions == 'Sidama' ?
            zones.map((cy) => {
              return <MenuItem value={cy}>{cy}</MenuItem>
            }) : null
          }
            
          
        
        </Select>
          </FormControl>
      </Grid>
      <Grid item xs={6} md={4} sm={6}>

          <FormControl style={{ float:'left', marginLeft:'75px', width:'300px'}}   size="small">
        <InputLabel id="demo-simple-select-label">Woreda</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={woreda}
          label="Woreda"
          onChange={handleChange3}
        >
          {zone == 'Zone 1' ?
            zone_1_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }
          {
            zone == 'Zone 2' ?
              zone_2_woreda.map((ct) => {
                     return <MenuItem value={ct}>{ct}</MenuItem>
                }): null
          }

          {zone == 'Zone 3' ?
            zone_3_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }
          {zone == 'Zone 4' ?
            zone_4_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }

          {zone == 'Addis Ketema' ?
            addis_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }

          {zone == 'Akaky Kaliti' ?
            akaky_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }

          {zone == 'Arada' ?
            arada_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }
          {zone == 'Bole' ?
            bole_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }
          {zone == 'Gullele' ?
            gullele_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }
          {zone == 'Kirkos' ?
            kirkos_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }
          {zone == 'Kolfe Keranio' ?
            kolfe_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }
          {zone == 'Lideta' ?
            lideta_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }
          {zone == 'Nifas Silk' ?
            nifas_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
            }
            {zone == 'Lafto' ?
            lafto_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }
          {zone == 'Yeka' ?
            yeka_woreda.map((ct) => {
              return <MenuItem value={ct}>{ct}</MenuItem>
            }) : null
          }
        </Select>
          </FormControl>
      </Grid>
      <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="City" variant="outlined" size="small"
                            //     name='attendance_year' onChange={(e) => setApplicantData({ ...applicantData, attendance_year: e.target.value })}
                            // value={applicantData.attendance_year}
                            />
      </Grid>
      <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="House Number" variant="outlined" size="small"
                            //     name='attendance_year' onChange={(e) => setApplicantData({ ...applicantData, attendance_year: e.target.value })}
                            // value={applicantData.attendance_year}
                            />
                </Grid>
      
    </>
  );
}
