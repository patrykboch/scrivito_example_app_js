import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TextWidget = Scrivito.provideWidgetClass("TextWidget", {
  attributes: {
    binary: "binary",
    date: "date",
    enum: ["enum", { values: ["left", "center", "right"] }],
    link: "link",
    linklist: "linklist",
    multienum: [
      "multienum",
      {
        values: ["FIRST", "SECOND", "THIRD", "FOURTH"],
      },
    ],
    reference: "reference",
    referencelist: "referencelist",
    string: "string",
    stringlist: "stringlist",
    float: "float",
    html: "html",
    integer: "integer",
    widgetlist: "widgetlist",
  },
});

registerTextExtract("TextWidget", [{ attribute: "text", type: "html" }]);

export default TextWidget;
