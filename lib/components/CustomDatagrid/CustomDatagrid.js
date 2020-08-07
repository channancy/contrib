var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Components } from "formiojs";
var DatagridComponent = Components.components.datagrid;
var CustomDatagridComponent = /** @class */ (function (_super) {
    __extends(CustomDatagridComponent, _super);
    function CustomDatagridComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDatagridComponent.editForm = function () {
        return Components.components.datagrid.editForm();
    };
    CustomDatagridComponent.schema = function () {
        return DatagridComponent.schema({
            type: 'customDatagrid',
        });
    };
    Object.defineProperty(CustomDatagridComponent, "builderInfo", {
        get: function () {
            return {
                title: 'Custom DataGrid',
                group: 'data',
                icon: 'fa fa-table',
                weight: 70,
                schema: CustomDatagridComponent.schema(),
            };
        },
        enumerable: true,
        configurable: true
    });
    CustomDatagridComponent.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    return CustomDatagridComponent;
}(DatagridComponent));
export default CustomDatagridComponent;
