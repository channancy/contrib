import * as _ from "lodash";
import { Components } from "formiojs";

const DatagridComponent = Components.components.datagrid;

export default class CustomDatagridComponent extends DatagridComponent {

    static editForm() {
        return Components.components.datagrid.editForm();
    }

    static schema() {
        return DatagridComponent.schema({
            type: 'customDatagrid',
        });
    }
    
    static get builderInfo() {
        return {
            title: 'Custom DataGrid',
            group: 'data',
            icon: 'fa fa-table',
            weight: 70,
            schema: CustomDatagridComponent.schema(),
        };
    }

    init() {
        super.init();
    }
}