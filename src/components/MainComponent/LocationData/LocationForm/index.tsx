import { useGetCityes } from "../../../../hooks/getCities";
import { useGetCountry } from "../../../../hooks/getCountry";
import { useState } from "react";
import {
  Box,
  Chip,
  FormControl,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import styles from "./LocationForm.module.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export const LocationForm = () => {
  const { getDataCountry } = useGetCountry();
  const { getDataCities } = useGetCityes();

  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string[]>([]);

  const handleChangeCountry = (
    event: SelectChangeEvent<typeof selectedCountry>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedCountry(typeof value === "string" ? value.split(",") : value);
  };
  const handleChangeCity = (event: SelectChangeEvent<typeof selectedCity>) => {
    const {
      target: { value },
    } = event;
    setSelectedCity(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className={styles.form__component}>
      <h1 className={styles.title}>Destinos de Interesse</h1>
      <FormControl className={styles.form__main}>
        <InputLabel id="demo-multiple-chip-label">Países</InputLabel>
        <Select
          multiple
          value={selectedCountry}
          onChange={handleChangeCountry}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {getDataCountry.map((getDataCountry) => (
            <MenuItem
              key={getDataCountry.code}
              value={getDataCountry.name_ptbr}
            >
              {getDataCountry.name_ptbr}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl className={styles.form__main}>
        <InputLabel>Cidades</InputLabel>
        <Select
          multiple
          value={selectedCity}
          onChange={handleChangeCity}
          input={<OutlinedInput label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {getDataCities.map((getDataCities) => (
            <MenuItem key={getDataCities.id} value={getDataCities.name_ptbr}>
              {getDataCities.name_ptbr}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
};
