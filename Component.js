jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.m.Image");
jQuery.sap.declare("samples.components.pinky.Component");

sap.ui.core.UIComponent.extend("samples.components.pinky.Component", {});

samples.components.pinky.Component.prototype.createContent = function() {
    return new sap.m.Image({src: "img/pinky.jpg", height:"400px"});
};