import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  CssBaseline,
  Button,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import CustomField from "./CustomField";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";

const AddyForm = ({ receipt, next }) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState("");
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState("");

  const methods = useForm();
  const objCountries = Object.entries(countries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const objProvinces = Object.entries(provinces).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const objShipping = options.map((sO) => ({
    id: sO.id,
    label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
  }));

  const getCountries = async (addyToken) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      addyToken
    );
    setCountries(countries);
    setCountry(Object.keys(countries)[0]);
  };
  const getProvinces = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setProvinces(subdivisions);
  };
  const getOptions = async (addyToken, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(addyToken, {
      country,
      region: stateProvince,
    });
    setOptions(options);
    setOption(options[0].id);
  };

  useEffect(() => {
    getCountries(receipt.id);
  }, []);
  useEffect(() => {
    if(country) getProvinces(country);
  }, [country]);
  useEffect(() =>{
    if(province)  getOptions(receipt.id, country, province);
  }, [province])
  
 
  return (
    <>
      <CssBaseline />
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({ ... data, country, province, option })
          )}
        >
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            
            <CustomField required name="firstName" label="First Name" />
            <CustomField required name="lastName" label="Last Name" />
            <CustomField required name="email" label="Email" />
            <CustomField required name="address1" label="Address" />
            <CustomField required name="city" label="City" />
            <CustomField required name="zip" label="Zip-Code" />
            
            <Grid item xs={12} sm={6}>
              <InputLabel>Country</InputLabel>
              <Select
                value={country}
                fullWidth
                required
                onChange={(e) => setCountry(e.target.value)}
              >
                {objCountries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>State</InputLabel>
              <Select
                value={province}
                fullWidth
                required
                onChange={(e) => setProvince(e.target.value)}
              >
                {objProvinces.map((province) => (
                  <MenuItem key={province.id} value={province.id}>
                    {province.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Option</InputLabel>
              <Select
                value={option}
                fullWidth
                required
                onChange={(e) => setOption(e.target.value)}
              >
                {objShipping.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} variant="outlined" to="/cart">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddyForm;
