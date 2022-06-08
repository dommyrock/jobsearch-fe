import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { FilterContext } from "../../context/FilterContext";
import { FilterContextType } from "../../@types/filter";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemeContextType } from "../../@types/theme";
/*MUI Event docs
    https://mui.com/material-ui/api/autocomplete/#:~:text=provided%20translations.-,onChange,-func*/

export const FreeTagInput = () => {
  const { filter, updateFilter } = React.useContext(FilterContext) as FilterContextType;
  const { theme } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <Autocomplete
      multiple
      id="free-tag-input"
      size="small"
      options={filter}
      onChange={(e: any, v: string[], r: string) => updateFilter(e, v, r)}
      style={{ width: "100%" }}
      freeSolo
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => (
          // eslint-disable-next-line react/jsx-key
          <Chip
            variant="outlined"
            size="small"
            color={theme === "light" ? "primary" : "secondary"}
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => <TextField {...params} label="Keyword search" />}
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
  const { theme } = React.useContext(ThemeContext) as ThemeContextType;

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
                  color={theme === "light" ? "primary" : "secondary"}
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
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
};
