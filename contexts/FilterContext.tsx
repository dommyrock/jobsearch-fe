import { createContext, Dispatch, SetStateAction, useContext, useReducer, useState } from "react";
//https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
//https://beta.reactjs.org/apis/usecontext


// TODO FIGURE FIGURE OUT HOW TO DO THIS IN TYPESCRIPT
export const ThemeContext = createContext<any>(null);
export const FilterContext = createContext<FreeTagInputFilters | null>(null);
interface FreeTagInputFilters {
  freeTagInput: string[];
  setFreeTagInput: Dispatch<SetStateAction<string[]>>;
}

export default function FilterContextProvider({ children, theme, setTheme }: any) {
  //V1 from SearchContainer
  const [freeTagInput, setFreeTagInput] = useState<string[]>([]);

  const ahhh: FreeTagInputFilters = {
    freeTagInput,
    setFreeTagInput,
  };

  //MUI Event docs > https://mui.com/material-ui/api/autocomplete/#:~:text=provided%20translations.-,onChange,-func
  // function updateFreeTagInput(e: any, v: string[], reason: string) {
  //   setFreeTagInputValue([...v]);
  // }

  return (
    <ThemeContext.Provider value={theme}>
      <FilterContext.Provider value={ahhh}>{children}</FilterContext.Provider>
    </ThemeContext.Provider>
  );
}
const initialFilters = {};

//REDUCER PTTERN IS not fun
// const [filters, dispatch] = useReducer<any>(filterInputs, initialFilters);

// function filterInputs(input: string[], action: any) {
//   debugger;

//   switch (action) {
//     case "free-input":
//       break;
//     case "company-input":
//       break;
//     case "stack-input":
//       break;
//     case "location-input":
//       break;
//     default:
//       throw Error("Unknown Input type.");
//       break;
//   }
//   debugger;
//   //returns dispatcher result to above useReducer -> filters
//   return [...input, "new"];
// }
