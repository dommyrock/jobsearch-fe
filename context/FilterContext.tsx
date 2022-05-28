import MeiliSearch from "meilisearch";
import React, { useCallback } from "react";
import { FilterContextType, Filter } from "../@types/filter";
import { Props } from "../Interfaces";

export const FilterContext = React.createContext<FilterContextType | null>(null);

const client = new MeiliSearch({
  //Default to Free Tier endpoint
  host: process.env.NEXT_PUBLIC_FREE_ENDPOINT!,
  //free "https://meilisearchapimdevelopertier.azure-api.net/jobsearch",
  //paid "https://meilisearchapimdevelopertier.azure-api.net/ok",
});

export const FilterContextProvider: React.FC<Props> = ({ children }) => {
  const [filters, setFilter] = React.useState<Filter>([]);

  const updateTagInput = (e: any, values: string[], reason: string) => {
    setFilter([...values]);
  };

  const commitQuery = async () => {
    debugger;
    //construct query params from all input types above in state ^
    let query = "qa";
    //NOTE:
    //DONT FORGET text.toLowerCase(), text.trim() when constructing query

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
    <FilterContext.Provider
      value={{
        filter: filters,
        updateFilter: updateTagInput,
        search: commitQuery,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export default FilterContextProvider;
