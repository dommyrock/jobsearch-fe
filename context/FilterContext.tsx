import MeiliSearch from "meilisearch";
import React, { useCallback } from "react";
import { FilterContextType, Filter, CollapsedFilters } from "../@types/filter";
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
  const [isRateLimitExceeded, setRateLimitExceeded] = React.useState<boolean>(false);
  const [collapsed, setColapsed] = React.useState<CollapsedFilters>({
    colNumber: 4,
    visibility: "",
  });

  const updateTagInput = (e: any, values: string[], reason: string) => {
    setFilter([...values]);
  };

  const commitQuery = async () => {
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

    try {
      let data = await client.index("jobs").search(query, { limit: 10 });
      console.log(data);
    } catch (error: any) {
      // HANDLE 229 Exceeded RateLimit /API Key missing error
      if (error.type === "MeiliSearchCommunicationError") {
        setRateLimitExceeded(true);
      }
      console.error(error.message);
    }
  };

  const collapseFilters = () => {
    if (collapsed.visibility === "") {
      return setColapsed({ colNumber: 1, visibility: "hidden" });
    }
    setColapsed({ colNumber: 4, visibility: "" });
  };

  return (
    <FilterContext.Provider
      value={{
        filter: filters,
        collapsed: collapsed,
        rateLimitExceeded: isRateLimitExceeded,
        collapseFilters,
        updateFilter: updateTagInput,
        search: commitQuery,
        setRLExceededStatus: () => setRateLimitExceeded(false),
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export default FilterContextProvider;
