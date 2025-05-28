sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.training.activity1.controller.MainView", {


        onClearPress: function () {
            this.byId("inpName").setValue("");
            this.byId("inpStreet").setValue("");
            this.byId("inpStreetNo").setValue("");
            this.byId("inpZipCode").setValue("");
            this.byId("inpCity").setValue("");
            this.byId("selCountry").setValue("");
          },

          
          onInit: function () {
            const oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData("/model/countries.json");
            this.getView().setModel(oModel);
          }
    });
});