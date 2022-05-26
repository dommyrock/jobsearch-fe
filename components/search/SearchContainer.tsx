import React, { useEffect } from "react";
import { FreeTagInput, MultiselectCheckbox, MultiselectInput } from "./MultiselectInputs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "../common/Modal";
import MeiliSearch from "meilisearch";

const SearchContainer = () => {
  useEffect(() => {}, []);
  const client = new MeiliSearch({
    //Default to Free Tier endpoint
    host: process.env.NEXT_PUBLIC_FREE_ENDPOINT!, 
    //free "https://meilisearchapimdevelopertier.azure-api.net/jobsearch",
    //paid "https://meilisearchapimdevelopertier.azure-api.net/ok",
  });

  const executeSearch = async () => {
    //construct query params (read from all possible)
    let query = "qa";

    //Re-Validete API key before making request to API
    if (localStorage.getItem("apiKey")) {
      client.config.host = process.env.NEXT_PUBLIC_PAID_ENDPOINT!;

      //Append needed headers
      client.config.headers = {
        ApiKey: localStorage.getItem("apiKey") ?? "",
        "Content-Type": "application/json",
      };
    } else {
      client.config.host = process.env.NEXT_PUBLIC_FREE_ENDPOINT!;
    }

    let data = await client.index("jobs").search(query, { limit: 15 });
    console.log(data);
  };
  return (
    <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
      <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
        {/* <div className="flex flex-col md:flex-row">
          <div className="pt-6 md:pt-0 md:pl-6">
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
                defaultValue={[0, 1]} //commonly searched companies
              />
            </div>
            <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
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
            onClick={(e) => executeSearch()}
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
