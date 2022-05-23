// import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

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


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export const MultiselectCheckbox = (props: SearchInputType) => {
  return (
    <Autocomplete
      multiple
      id={props.id}
      limitTags={props.limitTags}
      options={props.options}
      style={{ width: "100%" }}
      size="small"
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            size="small"
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      // style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label={props.label} />
      )}
    />
  );
}