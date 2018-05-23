import {TableDefinition} from "backend-plus";
import * as backendPlus from "backend-plus";

export interface TableContext extends backendPlus.TableContext{
    puede:object
    superuser?:true
    forDump?:boolean
    user:{
        usuario:string
        rol:string
    }
}

export type TableDefinitionsGetters = {
    [key:string]: (context:TableContext) => TableDefinition
}

