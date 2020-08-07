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
import { Components } from 'formiojs';
var CustomEditgrid = /** @class */ (function (_super) {
    __extends(CustomEditgrid, _super);
    function CustomEditgrid(component, options, data) {
        return _super.call(this, component, options, data) || this;
    }
    CustomEditgrid.schema = function () {
        return Components.components.editgrid.schema({
            type: 'customEditgrid'
        });
    };
    CustomEditgrid.editForm = function () {
        return Components.components.editgrid.editForm();
    };
    Object.defineProperty(CustomEditgrid, "builderInfo", {
        get: function () {
            return {
                title: 'Custom EditGrid',
                group: 'data',
                icon: 'fa fa-table',
                weight: 70,
                schema: CustomEditgrid.schema(),
            };
        },
        enumerable: true,
        configurable: true
    });
    return CustomEditgrid;
}(Components.components.editgrid));
export default CustomEditgrid;
