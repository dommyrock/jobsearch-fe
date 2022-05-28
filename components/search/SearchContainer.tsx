import React, { useContext } from "react";
import { FreeTagInput, MultiselectCheckbox, MultiselectInput } from "./MultiselectInputs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "../common/Modal";
import { FilterContext } from "../../context/FilterContext";
import { FilterContextType } from "../../@types/filter";

const SearchContainer = ({ globalTheme }: any) => {
  const { search } = useContext(FilterContext) as FilterContextType;
  return (
    <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
      <div
        id="search-wrapper"
        data-theme={globalTheme}
        className="border border-gray-300 p-4 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg"
      >
        <div className="grid grid-cols-1">
          <ThemeProvider theme={theme}>
            <div id="sc" className="grid grid-cols-4 gap-2 border border-gray-200 p-2 rounded">
              <FreeTagInput />
              <MultiselectInput
                id="multiselect-companies"
                label="Companies"
                options={companies}
                limitTags={3}
                defaultValue={[0, 1]} //commonly searched companies
              />
              {/* </div>
            <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded"> divides search filters 2x*/}
              <MultiselectInput
                id="multiselect-location"
                label="Location"
                options={locations}
                limitTags={2}
                defaultValue={[0]} //all
                customChip={true}
              />
              <MultiselectInput
                id="multiselect-tech-stack"
                label="Tech stack"
                options={langs}
                limitTags={2}
              />
              {/* Add job type filtering when i complate initial search */}
              {/* <MultiselectCheckbox
                id="multi-checkbox"
                label="Job Type"
                options={jobType}
                limitTags={2}
              /> */}
            </div>
          </ThemeProvider>
        </div>
        <div className="flex justify-around">
          <button
            onClick={(e) => search()}
            className="p-2 border w-1/4 rounded-md bg-gray-800 text-white"
          >
            Search
          </button>
          <Modal title="Api key" label="Enter your Api Key" />
        </div>
      </div>
    </div>
  );
};
export default SearchContainer;

//Material UI theme
const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#2c7a7b",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#2c7a7b82",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#fff",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const companies = [
  { name: "Infobip", id: 1 },
  { name: "Uber", id: 2 },
  { name: "Microsoft", id: 3 },
  { name: "Google", id: 4 },
  { name: "FIVE", id: 5 },
];
const locations = [
  { name: "All", id: 1994 },
  { name: "EU", id: 1972 },
  { name: "USA", id: 1974 },
  { name: "Asia", id: 2008 },
  { name: "Remote", id: 2008 },
];
const langs = [
  { name: "C#", id: 12 },
  { name: "GO", id: 2 },
  { name: "Java", id: 1 },
  { name: "javascript", id: 3 },
];
const jobType = [
  { name: "Fulltime", id: 1 },
  { name: "Part time", id: 2 },
  { name: "Contractor", id: 3 },
  { name: "Intern", id: 4 },
];
