declare var ProceduresOperativos: {
    action: string;
    parameters: {
        name: string;
        typeName: string;
        references: string;
    }[];
    coreFunction: (context: any, parameters: {
        operativo: string;
        origen: string;
    }) => Promise<any>;
}[];
export = ProceduresOperativos;
