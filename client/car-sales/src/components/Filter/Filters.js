import { Card, CardActions, CardContent } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';


const Filters = (props) => {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="col-12">
        <Box sx={{ boxShadow: 3, mb: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <FormControl sx={{ minWidth: "100%" }}>
                <Select
                  value={props.makeList[0]}
                  onChange=""
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {
                    props.makeList.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ boxShadow: 3, mb: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <FormControl sx={{ minWidth: "100%" }}>
                <Select
                  value={props.bodyTypes[0]}
                  onChange=""
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                {
                  props.bodyTypes.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))
                }
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ boxShadow: 3, mb: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <div>
                
                <FormGroup>
                  {
                    props.fuelTypes.map((item) => (
                      <FormControlLabel
                        control={<Checkbox />}
                        label={item}
                      />
                    ))
                  }
                </FormGroup>
              </div>
            </CardContent>
          </Card>
        </Box>
        <Button variant="contained">Apply Filters</Button>
        <Button variant="contained" className="mt-2">Clear Filters</Button>
      </div>
    </>
  );
};

export default Filters;
