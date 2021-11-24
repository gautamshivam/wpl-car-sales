import { Card, CardContent } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Filters = () => {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="col-12">
        <Box sx={{ boxShadow: 3, mb: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <FormControl sx={{ minWidth: "100%" }}>
                <Select
                  value={"make"}
                  onChange=""
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="make">
                    <em>Make</em>
                  </MenuItem>
                  <MenuItem value="audi">Audi</MenuItem>
                  <MenuItem value="bmw">BMW</MenuItem>
                  <MenuItem value="tesla">Tesla</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ boxShadow: 3, mb: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <Box sx={{ width: "100%" }}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText=""
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ boxShadow: 3, mb: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <FormControl sx={{ minWidth: "100%" }}>
                <Select
                  value={"make"}
                  onChange=""
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="make">
                    <em>BodyStyle</em>
                  </MenuItem>
                  <MenuItem value="sedan">Sedan</MenuItem>
                  <MenuItem value="suv">SUV</MenuItem>
                  <MenuItem value="truck">Truck</MenuItem>
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
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Gasoline"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Diesel"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Electric"
                  />
                </FormGroup>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
};

export default Filters;
