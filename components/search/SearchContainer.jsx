import React from "react";
import {
  CompanyInput,
  FreeTagInput,
  LocationInput,
  MultiselectInput,
  TechStackInput,
} from "./MultiselectInputs";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  { name: "Asia", id: 1994 },
  { name: "EU", id: 1972 },
  { name: "USA", id: 1974 },
  { name: "All", id: 2008 },
  { name: "Remote", id: 2008 },
];
const langs = [
   { name: "C#", id: 12 },
   { name: "GO", id: 2 },
   { name: "Java", id: 1 },
   { name: "javascript", id: 3 },
 ];
const SearchContainer = () => {
  return (
    <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
      <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
        {/* <div className="flex flex-col md:flex-row"> [might reuse flex code only]<------------Top Row filters
            <div className="">
              <select className="border p-2 rounded">
                <option>Round-trip</option>
                <option>Missouri</option>
                <option>texas</option>
              </select>
            </div>
            <div className="pt-6 md:pt-0 md:pl-6">
              <select className="border p-2 rounded">
                <option>4 Passangers</option>
                <option>3 Passangers</option>
                <option>2 Passangers</option>
              </select>
            </div>
            <div className="pt-6 md:pt-0 md:pl-6">
              <select className="border p-2 rounded">
                <option>Economy</option>
              </select>
            </div>
          </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ThemeProvider theme={theme}>
            <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
              <FreeTagInput />
              <MultiselectInput
                id="multiselect-companies"
                label="Companies"
                options={companies}
                limitTags={3}
                defaultValue={[0, 1]}
              />
            </div>
            <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
              <MultiselectInput
                id="multiselect-location"
                label="Location"
                options={locations}
                limitTags={2}
                defaultValue={[0, 1]}
                customChip={true}
              />
              <MultiselectInput
                id="multiselect-tech-stack"
                label="Tech stack"
                options={langs}
                limitTags={2}
                defaultValue={[0, 1]}
              />
            </div>
          </ThemeProvider>
        </div>
        <div className="flex justify-center">
          <button className="p-2 border w-1/4 rounded-md bg-gray-800 text-white">Search</button>
        </div>
      </div>
    </div>
  );
};
export default SearchContainer;
