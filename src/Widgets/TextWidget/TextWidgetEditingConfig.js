import * as Scrivito from "scrivito";
import textWidgetIcon from "../../assets/images/text_widget.svg";

Scrivito.provideEditingConfig("TextWidget", {
  title: "Text",
  thumbnail: textWidgetIcon,
  attributes: {
    binary: {
      title: "Binary",
    },
    date: {
      title: "Date",
    },
    enum: {
      title: "Enum",
    },
    link: {
      title: "Link",
    },
    linklist: {
      title: "Linklist",
    },
    multienum: {
      title: "multienum",
    },
    reference: {
      title: "Reference",
    },
    referencelist: {
      title: "Referencelist",
    },
    string: {
      title: "String",
    },
    stringlist: {
      title: "Stringlist",
    },
    float: {
      title: "Float",
    },
    html: {
      title: "HTML",
    },
    integer: {
      title: "integer",
    },
    widgetlist: {
      title: "Widgetlist",
    },
  },
  properties: [
    "binary",
    "date",
    "enum",
    "link",
    "linklist",
    "multienum",
    "reference",
    "referencelist",
    "string",
    "stringlist",
    "float",
    "html",
    "integer",
    "widgetlist",
  ],
  validations: [
    [
      "binary",
      binary => {
        if (binary === null) {
          return "Binary Error!";
        }
      },
    ],
    [
      "date",
      date => {
        if (date !== null) {
          return "Date attribute error! I'm the second line and description of this error";
        }
      },
    ],
    [
      "enum",
      enumm => {
        return "Enum attribute error!";
      },
    ],

    [
      "link",
      link => {
        return "link attribute error";
      },
    ],
    [
      "linklist",
      linklist => {
        return "linklist attribute error";
      },
    ],
    [
      "multienum",
      multienum => {
        return "Multienum attribute error";
      },
    ],
    [
      "reference",
      reference => {
        return "Reference attribute error";
      },
    ],
    [
      "referencelist",
      referencelist => {
        return "Referencelist attribute error";
      },
    ],
    [
      "string",
      string => {
        return "String attribute error";
      },
    ],
    [
      "stringlist",
      stringlist => {
        return "Stringlist attribute error";
      },
    ],
    [
      "float",
      float => {
        return "Float attribute error";
      },
    ],
    [
      "html",
      html => {
        return "HTML attribute error";
      },
    ],
    [
      "integer",
      integer => {
        return "Integer attribute error";
      },
    ],
    [
      "widgetlist",
      widgetlist => {
        return "Widgetlist attribute error";
      },
    ],
  ],
});
