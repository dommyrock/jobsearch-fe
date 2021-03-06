export type FilterContextType = {
   filter: string[];
   /**
    * Indicates if some filters are colapsed or visible.
    */
   collapsed: CollapsedFilters
   rateLimitExceeded:boolean
   updateFilter: (e: any, v: string[], reason: string) => void
   /**
    *This Returns search Results >Hits 
    */
   search: () => void //for now only console log hits :)
   collapseFilters: () => void
   setRLExceededStatus: () => void
};
export type Filter = string[];

/**
 * @description Use this for Filters we know id's upfront [stack, location, company]
 */
export interface IFilter {
   filter: string
   id: number
   type: 'location' | 'company' | 'stack' | 'jobtype'
}


export type CollapsedFilters = {
   visibility: string
   colNumber: number
}