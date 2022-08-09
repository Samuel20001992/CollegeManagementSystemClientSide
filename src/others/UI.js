import React from 'react'
import { Grid } from '@material-ui/core';
import { CardContent, TextField, Typography } from '@material-ui/core';
import {Button} from '@material-ui/core';
function UI() {

    const styles = {
        bg: {
            backgroundColor: "gray"
        },

        form: {
            backgroundColor: "white",
            mt: 2,
            boxSizing: "border-box",
            display:'block'
        }
    };

    

  return (
      <div style={{ backgroundColor: '#E7E9EB' }}>
          
          <CardContent style={{backgroundColor:'white', margin:'10px'}}>
            <Grid container spacing={3} style={{padding:'10px'}}>
                <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                  </Grid>
                  <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                  </Grid>
                  <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                  </Grid>
                  <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                  </Grid>
                  <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                  </Grid>
                  <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                  </Grid>
                  <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                  </Grid>
                  
            </Grid>  
          </CardContent>
          <CardContent style={{backgroundColor:'white', margin:'10px'}}>
            <Grid container spacing={3} style={{padding:'10px'}}>
                <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic"  display="flex" justifyContent="flex-start" sx={{minWidth:'300'}}  label="First Name" variant="outlined" size="small"
                    />
                  </Grid>
                  <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    < TextField id="outlined-basic" display="flex" justifyContent="flex-start" sx={{minWidth:'300'}} label="First Name" variant="outlined" size="small"
                    />
                </Grid>
            </Grid>  
          </CardContent>
    </div>
  )
}

export default UI