import { Components } from 'formiojs';
export default class CustomEditgrid extends Components.components.editgrid {
    constructor(component: any, options: any, data: any);
    static schema(): import("formiojs").ExtendedComponentSchema<any>;
    static editForm(): {
        components: import("formiojs").ExtendedComponentSchema<any>[];
    };
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        weight: number;
        schema: import("formiojs").ExtendedComponentSchema<any>;
    };
}
