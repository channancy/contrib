import { Components } from 'formiojs';

export default class CustomEditgrid extends Components.components.editgrid {
    constructor(component, options, data) {
        super(component, options, data);
    }

    static schema() {
        return Components.components.editgrid.schema({
          type: 'customEditgrid'
        });
    }

    static editForm() {
        return Components.components.editgrid.editForm();
    }
      
    static get builderInfo() {
        return {
            title: 'Custom EditGrid',
            group: 'data',
            icon: 'fa fa-table',
            weight: 70,
            schema: CustomEditgrid.schema(),
        };
    }
}