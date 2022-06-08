import React, { useContext } from "react";
import { FreeTagInput, MultiselectCheckbox, MultiselectInput } from "./MultiselectInputs";
import { createTheme, ThemeProvider as MuiThemePRovider } from "@mui/material/styles";
import ApiKeyModal from "../common/modals/ApiKeyModal";
import { FilterContext } from "../../context/FilterContext";
import { FilterContextType } from "../../@types/filter";

//Animate Colapse of filters (should translate to React)
//https://codepen.io/mbxtr/pen/OJPOYg
//or https://stackoverflow.com/questions/48143381/css-expand-contract-animation-to-show-hide-content

const SearchContainer = ({ globalTheme }: any) => {
  const { search, collapsed, collapseFilters } = useContext(FilterContext) as FilterContextType;
  return (
    <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
      <div
        id="search-wrapper"
        data-theme={globalTheme}
        className="border border-gray-300 p-2 grid grid-cols-1 gap-3 bg-white shadow-lg rounded-lg"
      >
        <div className="grid grid-cols-1">
          <div className="flex justify-around">
            <MuiThemePRovider theme={theme}>
              <div
                id="sc"
                className={`grid grid-cols-${collapsed.colNumber} gap-2 border border-gray-200 p-2 rounded min-w-[420px]`}
              >
                {/* NON COLLAPSABLE FILTERS */}
                <FreeTagInput />
                {/* COLLAPSABLE FILTERS */}
                <div className={`${collapsed.visibility}`}>
                  <MultiselectInput
                    id="multiselect-companies"
                    label="Companies"
                    options={companies}
                    limitTags={3}
                    defaultValue={[0, 1]} //commonly searched companies
                  />
                </div>
                <div className={`${collapsed.visibility}`}>
                  <MultiselectInput
                    id="multiselect-location"
                    label="Location"
                    options={locations}
                    limitTags={2}
                    defaultValue={[0]} //all
                    customChip={true}
                  />
                </div>
                <div className={`${collapsed.visibility}`}>
                  <MultiselectInput
                    id="multiselect-tech-stack"
                    label="Tech stack"
                    options={langs}
                    limitTags={2}
                  />
                </div>
                {/* Add job type filtering when i complate initial search */}
                {/* <MultiselectCheckbox
                id="multi-checkbox"
                label="Job Type"
                options={jobType}
                limitTags={2}
              /> */}
              </div>
            </MuiThemePRovider>
            <button title="More Filters" id="btn-filter-colapse" className="bg-gray-100 outline-none" onClick={collapseFilters}>
              {collapsed.visibility === "hidden" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-around">
          <button
            onClick={(e) => search()}
            className="p-2 border w-1/4 rounded-md bg-gray-800 text-white"
          >
            Search
          </button>
          <ApiKeyModal title="Api key" label="Enter your Api Key" />
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
      main: "#4c49497d",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#376d7ed1",
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
  // MUI component CSS Override
  components:{
    MuiChip:{
      styleOverrides:{
        //PRIMARY OVERRIDE
        deleteIconColorPrimary:{
          // fill: "#8f18536e" //lighter
          fill: "#aa3671b8" //darker
        },
        colorPrimary:{
          color:"#475569",
          border: "1px solid #475569de",
          fontSize: "1rem",
        },
        //SECONDARY OVERRIDE
        deleteIconColorSecondary:{
          fill: "#d84690" 
        },
        colorSecondary:{
          color:"#fff",
          border: "1px solid #fff",
          fontSize: "1rem",
        },
        //VARIANTS OVERRIDE
        filled:{
          color:"#fff",
          backgroundColor:"#47556994",

          border:"none",
        },       
      },
    }
  }
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
