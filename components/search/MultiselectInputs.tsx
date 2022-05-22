// import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const FreeTagInput = (props: any) => {
  return (
    <Autocomplete
      multiple
      id="size-small-outlined"
      size="small"
      options={[]}
      style={{ width: "100%" }}
      freeSolo
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => (
          // eslint-disable-next-line react/jsx-key
          <Chip
            variant="outlined"
            size="medium"
            color="primary"
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => <TextField {...params} variant="standard" label="Keyword search" />}
    />
  );
};
interface SearchInputType {
  limitTags?: number;
  id: string;
  label: string;
  options: SearchOption[];
  defaultValue?: any[];
  customChip?: boolean;
}
type SearchOption = {
  name: string;
  id?: number;
};
/**Filter selected Generic multiselect */
export const MultiselectInput = (props: SearchInputType) => {
  return (
    <Autocomplete
      multiple
      limitTags={props.limitTags}
      id={props.id}
      style={{ width: "100%" }}
      size="small"
      options={props.options}
      getOptionLabel={(option) => option.name}
      defaultValue={props.defaultValue?.map((idx) => props.options[idx])}
      filterSelectedOptions
      renderTags={
        props.customChip
          ? (value: readonly any[], getTagProps) =>
              value.map((option: SearchOption, index: number) => (
                // eslint-disable-next-line react/jsx-key
                <Chip
                  variant="filled"
                  size="small"
                  color="secondary"
                  label={option.name}
                  {...getTagProps({ index })}
                />
              ))
          : undefined
      }
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
};
