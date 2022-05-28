import React from "react";
import { FilterContextType, Filter } from "../@types/filter";
import { Props } from "../Interfaces";

export const FilterContext = React.createContext<FilterContextType | null>(null);

export const FilterContextProvider: React.FC<Props> = ({ children }) => {
  const [filters, setFilter] = React.useState<Filter>([]);

  const updateTagInput = (e: any, values: string[], reason: string) => {
    setFilter([...values]);
  };
  //NOTE:
  //DONT FORGET text.toLowerCase(), text.trim() when constructing query

  return (
    <FilterContext.Provider value={{ filter: filters, updateFilter:updateTagInput }}>
      {children}
    </FilterContext.Provider>
  );
};
export default FilterContextProvider;
