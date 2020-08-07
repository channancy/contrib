declare const DatagridComponent: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/nested/nestedComponent").NestedComponent>;
export default class CustomDatagridComponent extends DatagridComponent {
    static editForm(): {
        components: import("formiojs").ExtendedComponentSchema<any>[];
    };
    static schema(): import("formiojs").ExtendedComponentSchema<any>;
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        weight: number;
        schema: import("formiojs").ExtendedComponentSchema<any>;
    };
    init(): void;
}
export {};
