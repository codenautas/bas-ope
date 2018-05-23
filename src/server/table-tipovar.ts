"use strict";

import {TableContext,TableDefinition} from "./types-bas-ope"

export = function(context:TableContext):TableDefinition{
    var admin=context.user.rol==='admin';
    return {
        name:'tipovar',
        title:'tipos de variables',
        elementName:'tipo de variable',
        editable:admin,
        fields:[
            {name:"tipovar"   , typeName:'text'     },
            {name:"html_type" , typeName:'text'     },
            {name:"type_name" , typeName:'text'     },
            {name:"validar"   , typeName:'text'     },
            {name:"radio"     , typeName:'boolean'  },
        ],
        primaryKey:['tipovar']
    };
}
