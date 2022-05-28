
/**
 * @description Use this for Filters we know id's upfront [stack, location, company]
 */
export interface IFilter {
   filter: string
   id: number
   type :'location' | 'company' | 'stack' | 'jobtype'
}

export type Filter = string[];
export type FilterContextType = {
   filter: string[];
   // updateFilters: (filter: Filter) => void;
   updateFilter:(e: any, v: string[], reason: string) =>void
   /**
    *This Returns search Results >Hits 
    */
   search:() =>void //for now only console log hits :)
};
