// import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const FreeTagInput = () => {
  return (
    <Autocomplete
      multiple
      id="size-small-outlined"
      size="small"
      options={top100Films.map((option) => option.title)}
      defaultValue={[top100Films[0].title]}
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
  customChip?:boolean
}
type SearchOption ={
  name: string;
  id?: number;
}
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
      renderTags= {props.customChip ? (value: readonly any[], getTagProps) =>
        value.map((option: SearchOption, index: number) => (
          // eslint-disable-next-line react/jsx-key
          <Chip
            variant="filled"
            size="small"
            color="secondary"
            label={option.name}
            {...getTagProps({ index })}
          />
        )): undefined
      }
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
};




// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
];
