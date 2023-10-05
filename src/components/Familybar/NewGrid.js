import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import familyUsers from '../FamilyUsers/Family'
import RCards from './reactCard';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { alignProperty } from '@mui/material/styles/cssUtils';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1100,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
};
export default function SpacingGrid() {
    const family = familyUsers.getcompleteFamily();
    console.log("Divyansh")
    console.log(family);

   
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const jsx = `
<Grid container spacing={${spacing}}>
`;

    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Box sx={style}>
                    <Grid container spacing={spacing}>
                        {family.map((value) => (
                            <Grid key={value} item>

                                <IconButton onClick={() => {
                                    let i = 0;
                                    while (family[i].user_id != value.user_id) {
                                        i++;
                                    }

                                    const entuser = family.splice(i, 1);
                                    console.log(entuser);
                                    return entuser;
                                }}><RCards first_name={value.first_name} /></IconButton> <br />

                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}