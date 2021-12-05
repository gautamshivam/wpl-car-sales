import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import FilterAlt from '@mui/icons-material/FilterAlt';
import ClearIcon from '@mui/icons-material/Clear';

const Filters = (props) => {
  const [selectedMake, setSelectedMake] = React.useState("");
  const [selectedBody, setSelectedBody] = React.useState("");
  const [selectedFuelTypes, setSelectedFuelTypes] = React.useState([]);
  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
  };
  const handleBodyChange = (e) => {
    setSelectedBody(e.target.value);
  };
  const handleFuelChange = (e) => {
    if(e.target.checked) {
      // add fuel type
      setSelectedFuelTypes([...selectedFuelTypes, e.target.name]);
    } else {
      // remove fuel type
      let newFuelTypes = selectedFuelTypes.filter((item) => item !== e.target.name);
      setSelectedFuelTypes(newFuelTypes);
    }
  };

  const applyFilters = () => {
    props.onFilterApplied({make:selectedMake, body:selectedBody, fuelTypes:selectedFuelTypes}, true);
  }
  const onClearFilter = () => {
    props.onClearFilter();
    setSelectedMake("");
    setSelectedBody("");
    setSelectedFuelTypes([]);
  }

  return (
    <>
      <div className="col-12">
        <Box sx={{ boxShadow: 3, mb: 2 }}>
          <Card variant="outlined">
            <CardHeader title="Make" titleTypographyProps={{variant:'h5', fontWeight:'bold' }}></CardHeader>
            <CardContent>
              <FormControl sx={{ minWidth: "100%" }}>
                <Select
                  value={selectedMake}
                  onChange={handleMakeChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">All</MenuItem>
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
            <CardHeader title="Body" titleTypographyProps={{variant:'h5', fontWeight:'bold' }}></CardHeader>
            <CardContent>
              <FormControl sx={{ minWidth: "100%" }}>
                <Select
                  value={selectedBody}
                  onChange={handleBodyChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                <MenuItem value="">All</MenuItem>
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
            <CardHeader title="Fuel Types" titleTypographyProps={{variant:'h5', fontWeight:'bold' }}></CardHeader>
            <CardContent>
              <div>
                <FormGroup >
                  {
                    props.fuelTypes.map((item) => (
                      <FormControlLabel
                        control={<Checkbox />}
                        label={item}
                        onChange={handleFuelChange}
                        name={item}
                      />
                    ))
                  }
                </FormGroup>
              </div>
            </CardContent>
          </Card>
        </Box>
        <Button variant="contained" onClick={applyFilters} startIcon={<FilterAlt />}>Apply Filters</Button><br/>
        <Button variant="contained" onClick={onClearFilter} startIcon={<ClearIcon />} className="mt-2">Clear Filters</Button>
      </div>
    </>
  );
};

export default Filters;
