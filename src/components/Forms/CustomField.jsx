import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const CustomField = ({ label, name, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => (
          <TextField {...field} fullWidth label={label} required={required} />
        )}
        control={control}
        name={name}
        defaultValue=" "
      />
    </Grid>
  );
};

export default CustomField;
