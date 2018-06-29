(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("underscore"), require("react"), require("urijs"), require("react-dom"), require("prop-types"), require("tcomb-validation"), require("speakingurl"));
	else if(typeof define === 'function' && define.amd)
		define(["underscore", "react", "urijs", "react-dom", "prop-types", "tcomb-validation", "speakingurl"], factory);
	else if(typeof exports === 'object')
		exports["scrivito"] = factory(require("underscore"), require("react"), require("urijs"), require("react-dom"), require("prop-types"), require("tcomb-validation"), require("speakingurl"));
	else
		root["scrivito"] = factory(root["underscore"], root["react"], root["urijs"], root["react-dom"], root["prop-types"], root["tcomb-validation"], root["speakingurl"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_121__, __WEBPACK_EXTERNAL_MODULE_132__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessDeniedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArgumentError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ClientError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return InternalError; });
/* unused harmony export InterpolationError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CurrentPageNotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NavigateToEmptyBinaryError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ResourceNotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RequestFailedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ScrivitoError; });
/* unused harmony export TransformationSourceInvalidError */
/* unused harmony export TransformationSourceTooLargeError */
/* unused harmony export TranslationError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UnauthorizedError; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TRANSFORM_SOURCE_ERROR_PREFIX = 'binary.unprocessable.image.transform.source.';
var TRANSFORM_SOURCE_TOO_LARGE = 'binary.unprocessable.image.transform.source.too_large';
var ScrivitoError = /** @class */ (function (_super) {
    __extends(ScrivitoError, _super);
    function ScrivitoError(message, captureStackTrace) {
        var _newTarget = this.constructor;
        if (captureStackTrace === void 0) { captureStackTrace = true; }
        var _this = 
        // 'Error' breaks prototype chain here
        _super.call(this, message) || this;
        // restore prototype chain
        // see: https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        var correctPrototype = _newTarget.prototype;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_this, correctPrototype);
        }
        else {
            _this.__proto__ = correctPrototype;
        }
        // message should be set before capturing stacktrace
        // since it is featured in the stacktrace in some environments.
        _this._captureStackTrace = captureStackTrace;
        if (captureStackTrace) {
            if (Error.captureStackTrace) {
                Error.captureStackTrace(_this, _this.constructor);
            }
            else {
                var stack = void 0;
                try {
                    throw new Error();
                }
                catch (error) {
                    stack = error.stack;
                }
                Object.defineProperty(_this, 'stack', { value: stack });
            }
        }
        return _this;
    }
    Object.defineProperty(ScrivitoError.prototype, "name", {
        get: function () {
            return this.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrivitoError.prototype, "captureStackTrace", {
        // For test purpose only.
        get: function () {
            return !!this._captureStackTrace;
        },
        enumerable: true,
        configurable: true
    });
    return ScrivitoError;
}(Error));
var ClientError = /** @class */ (function (_super) {
    __extends(ClientError, _super);
    function ClientError(message, httpCode, backendCode) {
        var _this = _super.call(this, message) || this;
        _this.httpCode = httpCode;
        _this.backendCode = backendCode;
        return _this;
    }
    ClientError.for = function (message, httpCode, backendCode) {
        if (backendCode === TRANSFORM_SOURCE_TOO_LARGE) {
            return new TransformationSourceTooLargeError(message, httpCode, backendCode);
        }
        if (backendCode && backendCode.indexOf(TRANSFORM_SOURCE_ERROR_PREFIX) !== -1) {
            return new TransformationSourceInvalidError(message, httpCode, backendCode);
        }
        return new ClientError(message, httpCode, backendCode);
    };
    return ClientError;
}(ScrivitoError));
var AccessDeniedError = /** @class */ (function (_super) {
    __extends(AccessDeniedError, _super);
    function AccessDeniedError(message, httpCode, backendCode) {
        return _super.call(this, message, httpCode, backendCode) || this;
    }
    return AccessDeniedError;
}(ClientError));
var ArgumentError = /** @class */ (function (_super) {
    __extends(ArgumentError, _super);
    function ArgumentError(message) {
        return _super.call(this, message) || this;
    }
    return ArgumentError;
}(ScrivitoError));
var InternalError = /** @class */ (function (_super) {
    __extends(InternalError, _super);
    function InternalError(message) {
        return _super.call(this, message) || this;
    }
    return InternalError;
}(ScrivitoError));
var RequestFailedError = /** @class */ (function (_super) {
    __extends(RequestFailedError, _super);
    function RequestFailedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RequestFailedError;
}(ScrivitoError));
// public API
var ResourceNotFoundError = /** @class */ (function (_super) {
    __extends(ResourceNotFoundError, _super);
    function ResourceNotFoundError(message) {
        return _super.call(this, message) || this;
    }
    return ResourceNotFoundError;
}(ScrivitoError));
var UnauthorizedError = /** @class */ (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(message, httpCode, backendCode, details) {
        var _this = _super.call(this, message, httpCode, backendCode) || this;
        _this.details = details || {};
        return _this;
    }
    return UnauthorizedError;
}(ClientError));
var TransformationSourceTooLargeError = /** @class */ (function (_super) {
    __extends(TransformationSourceTooLargeError, _super);
    function TransformationSourceTooLargeError(message, httpCode, backendCode) {
        return _super.call(this, message, httpCode, backendCode) || this;
    }
    return TransformationSourceTooLargeError;
}(ClientError));
var TransformationSourceInvalidError = /** @class */ (function (_super) {
    __extends(TransformationSourceInvalidError, _super);
    function TransformationSourceInvalidError(message, httpCode, backendCode) {
        return _super.call(this, message, httpCode, backendCode) || this;
    }
    return TransformationSourceInvalidError;
}(ClientError));
var TranslationError = /** @class */ (function (_super) {
    __extends(TranslationError, _super);
    function TranslationError(message) {
        return _super.call(this, message) || this;
    }
    return TranslationError;
}(InternalError));
var NavigateToEmptyBinaryError = /** @class */ (function (_super) {
    __extends(NavigateToEmptyBinaryError, _super);
    function NavigateToEmptyBinaryError(message) {
        return _super.call(this, message) || this;
    }
    return NavigateToEmptyBinaryError;
}(InternalError));
var CurrentPageNotFoundError = /** @class */ (function (_super) {
    __extends(CurrentPageNotFoundError, _super);
    function CurrentPageNotFoundError(message) {
        return _super.call(this, message) || this;
    }
    return CurrentPageNotFoundError;
}(InternalError));
var InterpolationError = /** @class */ (function (_super) {
    __extends(InterpolationError, _super);
    function InterpolationError(message) {
        return _super.call(this, message) || this;
    }
    return InterpolationError;
}(TranslationError));



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_find_widget_placement__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_convert_to_slug__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_types__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_obj_data_store__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_attribute_serializer__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_models_basic_widget__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_models_basic_obj_search__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_models_basic_attribute_content__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_models_metadata_collection__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_client_models_future_binary__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_client_random__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_scrivito_sdk_client_obj_json__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_scrivito_sdk_client_attribute_inflection__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_scrivito_sdk_client_global_state__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


















var SYSTEM_ATTRIBUTES = {
    _id: 'id',
    _obj_class: 'objClass',
    _path: 'path',
    _permalink: 'permalink',
    _created_at: 'createdAt',
    _created_by: 'createdBy',
    _last_changed: 'lastChanged',
    _last_changed_by: 'lastChangedBy',
};
var BasicObj = /** @class */ (function (_super) {
    __extends(BasicObj, _super);
    function BasicObj(objData) {
        var _this = _super.call(this) || this;
        _this.objData = objData;
        return _this;
    }
    BasicObj.get = function (id) {
        var obj = this.getIncludingDeleted(id);
        if (!obj || obj.isDeleted()) {
            return;
        }
        return obj;
    };
    BasicObj.getIncludingDeleted = function (id) {
        var objData = __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_obj_data_store__["b" /* get */](id);
        if (!objData) {
            return;
        }
        var obj = new BasicObj(objData);
        if (obj.isFinallyDeleted()) {
            return;
        }
        return obj;
    };
    BasicObj.create = function (attributes) {
        var normalizedAttributes = scrivito.typeInfo.normalizeAttrs(attributes);
        assertObjClassExists(normalizedAttributes._objClass);
        if (!normalizedAttributes._id) {
            normalizedAttributes._id = [this.generateId()];
        }
        var serializedAttributes = {
            _id: normalizedAttributes._id, _obj_class: normalizedAttributes._objClass,
        };
        return this.createWithSerializedAttributes(scrivito.typeInfo.unwrapAttributes(serializedAttributes), __WEBPACK_IMPORTED_MODULE_0_underscore__["omit"](attributes, '_objClass', '_id'));
    };
    BasicObj.addChildWithSerializedAttributes = function (parentPath, serializedAttributes) {
        var objId = BasicObj.generateId();
        return this.createWithSerializedAttributes(__WEBPACK_IMPORTED_MODULE_0_underscore__["extend"]({}, serializedAttributes, {
            _id: objId,
            _path: parentPath + "/" + objId,
        }));
    };
    BasicObj.createWithSerializedAttributes = function (serializedAttributes, attributeDict) {
        if (!attributeDict) {
            var _a = extractAttributeDict(serializedAttributes), a = _a[0], b = _a[1];
            return this.createWithSerializedAttributes(a, b);
        }
        var objData = __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_obj_data_store__["a" /* createObjData */](serializedAttributes._id);
        objData.update(serializedAttributes);
        var obj = new BasicObj(objData);
        obj.update(attributeDict);
        return obj;
    };
    BasicObj.generateId = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_client_random__["b" /* randomId */])();
    };
    BasicObj.all = function () {
        return new __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_models_basic_obj_search__["b" /* default */]().batchSize(1000);
    };
    BasicObj.root = function () {
        return BasicObj.getByPath('/');
    };
    BasicObj.where = function (fields, operator, value, boost) {
        return new __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_models_basic_obj_search__["b" /* default */]().and(fields, operator, value, boost);
    };
    BasicObj.getByPath = function (path) {
        var obj = this.where('_path', 'equals', path).first();
        if (obj) {
            return obj;
        }
    };
    BasicObj.getByPermalink = function (permalink) {
        var obj = this.where('_permalink', 'equals', permalink).first();
        if (obj) {
            return obj;
        }
    };
    BasicObj.prototype.id = function () {
        return this.getAttributeData('_id');
    };
    BasicObj.prototype.objClass = function () {
        return this.getAttributeData('_obj_class');
    };
    BasicObj.prototype.obj = function () {
        return this;
    };
    BasicObj.prototype.createdAt = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_types__["g" /* parseStringToDate */])(this.getAttributeData('_created_at'));
    };
    BasicObj.prototype.createdBy = function () {
        return this.getAttributeData('_created_by');
    };
    BasicObj.prototype.lastChanged = function () {
        var data = this.getAttributeData('_last_changed');
        if (!data) {
            return null;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_types__["g" /* parseStringToDate */])(data);
    };
    BasicObj.prototype.lastChangedBy = function () {
        return this.getAttributeData('_last_changed_by') || null;
    };
    BasicObj.prototype.version = function () {
        return this.getAttributeData('_version');
    };
    BasicObj.prototype.path = function () {
        return this.getAttributeData('_path') || null;
    };
    BasicObj.prototype.permalink = function () {
        return this.getAttributeData('_permalink') || null;
    };
    BasicObj.prototype.parentPath = function () {
        var path = this.path();
        if (path && path !== '/') {
            return computeParentPath(path);
        }
    };
    BasicObj.prototype.parent = function () {
        var parentPath = this.parentPath();
        if (parentPath) {
            return BasicObj.getByPath(parentPath);
        }
    };
    BasicObj.prototype.hasConflicts = function () {
        return !!this.getAttributeData('_conflicts');
    };
    BasicObj.prototype.modification = function () {
        if (this.isFinallyDeleted() || this.getAttributeData('_marked_deleted')) {
            return 'deleted';
        }
        return this.getAttributeData('_modification') || null;
    };
    BasicObj.prototype.isModified = function () {
        return !!this.modification();
    };
    BasicObj.prototype.isNew = function () {
        return this.modification() === 'new';
    };
    BasicObj.prototype.isEdited = function () {
        return this.modification() === 'edited';
    };
    BasicObj.prototype.isDeleted = function () {
        return this.modification() === 'deleted';
    };
    BasicObj.prototype.isFinallyDeleted = function () {
        return this.objData.isNonExistent();
    };
    BasicObj.prototype.contentLength = function () {
        var raw = this.rawBlob();
        if (!raw) {
            return 0;
        }
        return raw.contentLength();
    };
    BasicObj.prototype.contentType = function () {
        var raw = this.rawBlob();
        if (!raw) {
            return '';
        }
        return raw.contentType();
    };
    BasicObj.prototype.contentUrl = function () {
        var raw = this.rawBlob();
        if (!raw) {
            return '';
        }
        return raw.url();
    };
    BasicObj.prototype.metadata = function () {
        var raw = this.rawBlob();
        if (!raw) {
            return new __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_models_metadata_collection__["a" /* default */]();
        }
        return raw.metadata();
    };
    BasicObj.prototype.children = function () {
        var path = this.path();
        if (!path) {
            return [];
        }
        return searchAllChildren(path).take();
    };
    BasicObj.prototype.hasChildren = function () {
        var path = this.path();
        if (!path) {
            return false;
        }
        var search = searchAllChildren(path).batchSize(0);
        return search.count() > 0;
    };
    BasicObj.prototype.orderedChildren = function () {
        var children = this.children();
        var childOrder = this.get('childOrder', 'referencelist');
        if (__WEBPACK_IMPORTED_MODULE_0_underscore__["isArray"](childOrder)) {
            return __WEBPACK_IMPORTED_MODULE_0_underscore__["sortBy"](children, function (child) {
                var childOrderIds = __WEBPACK_IMPORTED_MODULE_0_underscore__["invoke"](childOrder, 'id');
                var childIndex = childOrderIds.indexOf(child.id());
                if (childIndex === -1) {
                    return childOrder.length;
                }
                return childIndex;
            });
        }
        return children;
    };
    BasicObj.prototype.backlinks = function () {
        return BasicObj.where('*', 'linksTo', this).take();
    };
    BasicObj.prototype.ancestors = function () {
        var parentPath = this.parentPath();
        if (!parentPath) {
            return [];
        }
        return computeAncestorPaths(parentPath).map(function (ancestorPath) { return BasicObj.getByPath(ancestorPath); });
    };
    BasicObj.prototype.update = function (attributes) {
        var _this = this;
        var normalizedAttributes = scrivito.typeInfo.normalizeAttrs(attributes);
        Object(__WEBPACK_IMPORTED_MODULE_15_scrivito_sdk_client_global_state__["h" /* withBatchedUpdates */])(function () {
            _this._persistWidgets(_this, normalizedAttributes);
            var patch = __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_attribute_serializer__["a" /* serialize */](normalizedAttributes);
            _this.objData.update(patch);
        });
        this.startLinkResolution();
    };
    BasicObj.prototype.destroy = function () {
        this.update({ _markedDeleted: [true] });
    };
    BasicObj.prototype.insertWidget = function (widget, anchor) {
        var id = widgetIdFromWidgetInsertionAnchor(anchor);
        var placement = this._widgetPlacementFor(id);
        if (placement) {
            var attributeValue = placement.attributeValue, attributeName = placement.attributeName, container = placement.container, index = placement.index;
            var newIndex = anchor.before ? index : index + 1;
            var newAttributeValue = attributeValue.slice(0, newIndex).concat([
                widget
            ], attributeValue.slice(newIndex));
            container.update((_a = {}, _a[attributeName] = [newAttributeValue, 'widgetlist'], _a));
        }
        var _a;
    };
    BasicObj.prototype.removeWidget = function (widget) {
        var field = this.fieldContainingWidget(widget);
        if (field) {
            var value = field.get();
            var newValue = __WEBPACK_IMPORTED_MODULE_0_underscore__["reject"](value, function (curWidget) { return curWidget.equals(widget); });
            field.update(newValue);
        }
    };
    BasicObj.prototype.copyAsync = function (copyOptions) {
        if (copyOptions === void 0) { copyOptions = {}; }
        assertValidCopyOptions(copyOptions);
        return this._copyAttributes().then(function (copiedAttributes) {
            var serializedAttributes = __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"](copiedAttributes, copyOptions);
            var obj = BasicObj.createWithSerializedAttributes(serializedAttributes);
            return obj.objData.finishSaving().then(function () { return obj; });
        });
    };
    BasicObj.prototype.moveToAsync = function (parentPath) {
        this.update({ _path: [parentPath + "/" + this.id()] });
        return this.finishSaving();
    };
    BasicObj.prototype.markResolvedAsync = function () {
        this.update({ _conflicts: [null] });
        return this.finishSaving();
    };
    BasicObj.prototype.finishSaving = function () {
        var _this = this;
        return this.finishLinkResolution().then(function () { return _this.objData.finishSaving(); });
    };
    BasicObj.prototype.equals = function (otherObj) {
        if (!(otherObj instanceof BasicObj)) {
            return false;
        }
        return this.id() === otherObj.id();
    };
    BasicObj.prototype.widget = function (id) {
        if (this.getWidgetAttribute(id, '_obj_class')) {
            return __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_models_basic_widget__["a" /* default */].build(id, this);
        }
        return null;
    };
    BasicObj.prototype.getWidgetAttribute = function (id, attributeName) {
        return this.objData.getWidgetAttribute(id, attributeName);
    };
    BasicObj.prototype.widgets = function () {
        var _this = this;
        var data = this.getData();
        if (!isDataOfExistingObj(data)) {
            return;
        }
        var widgetPool = data._widget_pool || {};
        var widgets = [];
        Object.keys(widgetPool).forEach(function (id) {
            var widget = _this.widget(id);
            if (widget) {
                widgets.push(widget);
            }
        });
        return widgets;
    };
    BasicObj.prototype.fieldContainingWidget = function (widget) {
        var widgetId = widget.id();
        var placement = this._widgetPlacementFor(widgetId);
        if (placement) {
            var container = placement.container, attributeName = placement.attributeName;
            return container.field(attributeName, 'widgetlist');
        }
    };
    BasicObj.prototype.generateWidgetId = function () {
        for (var i = 0; i < 10; i++) {
            var id = Object(__WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_client_random__["a" /* randomHex */])();
            if (!this.widget(id)) {
                return id;
            }
        }
        throw new __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_errors__["e" /* InternalError */]('Could not generate a new unused widget id.');
    };
    BasicObj.prototype.serializeAttributes = function () {
        var serializedAttributes = _super.prototype.serializeAttributes.call(this);
        delete serializedAttributes._conflicts;
        delete serializedAttributes._modification;
        delete serializedAttributes._created_at;
        delete serializedAttributes._created_by;
        delete serializedAttributes._last_changed;
        delete serializedAttributes._last_changed_by;
        return serializedAttributes;
    };
    BasicObj.prototype.slug = function () {
        var title = this.get('title', 'string');
        return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_convert_to_slug__["a" /* default */])(title);
    };
    Object.defineProperty(BasicObj.prototype, "_systemAttributes", {
        get: function () {
            return SYSTEM_ATTRIBUTES;
        },
        enumerable: true,
        configurable: true
    });
    BasicObj.prototype.getAttributeData = function (attributeName) {
        return this.objData.getAttribute(attributeName);
    };
    BasicObj.prototype.getData = function () {
        return this.objData.get();
    };
    BasicObj.prototype.getWidgetData = function (id) {
        return this.objData.getWidget(id);
    };
    BasicObj.prototype.startLinkResolution = function () {
        presentUiAdapter().startLinkResolutionFor(scrivito.currentWorkspaceId(), this.id());
    };
    BasicObj.prototype.finishLinkResolution = function () {
        return presentUiAdapter().finishLinkResolutionFor(scrivito.currentWorkspaceId(), this.id());
    };
    BasicObj.prototype.toPrettyPrint = function () {
        return "[object " + this.objClass() + " id=\"" + this.id() + "\"]";
    };
    BasicObj.prototype.rawBlob = function () {
        var blob = this.get('blob', 'binary');
        return blob && blob.raw();
    };
    BasicObj.prototype._copyAttributes = function () {
        var objId = BasicObj.generateId();
        var serializedAttributes = this.serializeAttributes();
        var uploadPromises = [];
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](serializedAttributes, function (typeAndValue, name) {
            if (name[0] === '_') {
                delete serializedAttributes[name];
                return;
            }
            if (isBinaryTypeAndValue(typeAndValue)) {
                var value = typeAndValue[1];
                var futureBinary = new __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_client_models_future_binary__["a" /* default */]({ idToCopy: value.id });
                var promise = futureBinary.intoId(objId).then(function (binary) { return ({ name: name, binary: binary }); });
                uploadPromises.push(promise);
            }
        });
        serializedAttributes._id = objId;
        serializedAttributes._obj_class = this.objClass();
        if (this.path()) {
            serializedAttributes._path = this.parentPath() + "/" + objId;
        }
        return scrivito.Promise.all(uploadPromises).then(function (binaries) {
            __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](binaries, function (_a) {
                var name = _a.name, binary = _a.binary;
                var binaryValue = { id: binary.id() };
                serializedAttributes[name] = ['binary', binaryValue];
            });
            return serializedAttributes;
        });
    };
    BasicObj.prototype._widgetPlacementFor = function (widgetId) {
        var data = this.getData();
        if (!isDataOfExistingObj(data)) {
            return;
        }
        var placement = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_find_widget_placement__["a" /* default */])(data, widgetId);
        if (!placement) {
            return;
        }
        var attributeName = Object(__WEBPACK_IMPORTED_MODULE_14_scrivito_sdk_client_attribute_inflection__["a" /* camelCase */])(placement.attributeName);
        var parentWidgetId = placement.parentWidgetId;
        var container;
        if (parentWidgetId) {
            container = this.widget(parentWidgetId);
            if (!container) {
                return;
            }
        }
        else {
            container = this;
        }
        return {
            container: container,
            attributeName: attributeName,
            attributeValue: container.get(attributeName, 'widgetlist'),
            index: placement.index,
            parentWidgetId: parentWidgetId,
        };
    };
    return BasicObj;
}(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_models_basic_attribute_content__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (BasicObj);
function assertObjClassExists(attrInfoAndValue) {
    if (!attrInfoAndValue) {
        throw new __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Please provide an obj class as the "_objClass" property.');
    }
}
function extractAttributeDict(attributes) {
    var serializedAttributes = {};
    var attributeDict = {};
    __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](attributes, function (serializedValue, name) {
        if (isSerializedWidgetlistValue(serializedValue)) {
            var widgets = __WEBPACK_IMPORTED_MODULE_0_underscore__["map"](serializedValue[1], createWidget);
            var attrName = Object(__WEBPACK_IMPORTED_MODULE_14_scrivito_sdk_client_attribute_inflection__["a" /* camelCase */])(name);
            attributeDict[attrName] = [widgets, ['widgetlist']];
        }
        else {
            serializedAttributes[name] = serializedValue;
        }
    });
    if (!serializedAttributes._id) {
        serializedAttributes._id = BasicObj.generateId();
    }
    return [serializedAttributes, attributeDict];
}
function createWidget(serializedWidgetAttributes) {
    return __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_models_basic_widget__["a" /* default */].newWithSerializedAttributes(serializedWidgetAttributes);
}
function searchAllChildren(path) {
    return BasicObj.all().and('_parentPath', 'equals', path);
}
function computeAncestorPaths(path) {
    var ancestorPaths = ['/'];
    if (path === '/') {
        return ancestorPaths;
    }
    var components = path.split('/').slice(1);
    var ancestorPath = '';
    components.forEach(function (component) {
        ancestorPath = ancestorPath + "/" + component;
        ancestorPaths.push(ancestorPath);
    });
    return ancestorPaths;
}
function computeParentPath(path) {
    var pathComponents = path.split('/');
    pathComponents.pop();
    if (pathComponents.length === 1) {
        return '/';
    }
    return pathComponents.join('/');
}
function assertValidCopyOptions(copyOptions) {
    var validCopyOptions = ['_path'];
    if (__WEBPACK_IMPORTED_MODULE_0_underscore__["difference"](__WEBPACK_IMPORTED_MODULE_0_underscore__["keys"](copyOptions), validCopyOptions).length) {
        throw new __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Currently only "_path" copy option is supported.');
    }
}
function presentUiAdapter() {
    if (!__WEBPACK_IMPORTED_MODULE_16_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */]) {
        throw new Error('LinkResolution is not expected to be called without UI');
    }
    return __WEBPACK_IMPORTED_MODULE_16_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */];
}
function widgetIdFromWidgetInsertionAnchor(anchor) {
    if (isWidgetInsertionBefore(anchor)) {
        return anchor.before.id();
    }
    return anchor.after.id();
}
function isWidgetInsertionBefore(anchor) {
    return !!anchor.before;
}
function isDataOfExistingObj(data) {
    if (!data) {
        return false;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_13_scrivito_sdk_client_obj_json__["a" /* isExistentObjJson */])(data);
}
function isSerializedWidgetlistValue(value) {
    return __WEBPACK_IMPORTED_MODULE_0_underscore__["isArray"](value) && __WEBPACK_IMPORTED_MODULE_0_underscore__["first"](value) === 'widgetlist';
}
function isBinaryTypeAndValue(typeAndValue) {
    return typeAndValue[0] === 'binary' && !!typeAndValue[1];
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cmsState; });
/* unused harmony export uiState */
/* harmony export (immutable) */ __webpack_exports__["e"] = initializeGlobalState;
/* unused harmony export createAppState */
/* harmony export (immutable) */ __webpack_exports__["h"] = withBatchedUpdates;
/* harmony export (immutable) */ __webpack_exports__["f"] = subscribe;
/* harmony export (immutable) */ __webpack_exports__["g"] = trackChanges;
/* harmony export (immutable) */ __webpack_exports__["i"] = withFrozenState;
/* harmony export (immutable) */ __webpack_exports__["c"] = failIfFrozen;
/* harmony export (immutable) */ __webpack_exports__["d"] = failIfTracking;
/* unused harmony export listenerCount */
/* unused harmony export reset */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_state_tree__ = __webpack_require__(95);
/* tslint:disable:no-empty-interface */


var globalState;
var stateController;
var appState;
var cmsState;
var uiState;
function initializeGlobalState(ui) {
    if (!ui) {
        // we are the top-level window, so we own the globalState.
        globalState = new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_state_tree__["a" /* default */]();
        stateController = globalState;
        appState = createAppState();
        cmsState = globalState.subState('cms');
        uiState = globalState.subState('ui');
    }
    else {
        // we are inside an iFrame, so we don't own the globalState,
        // but rely on the UI instead.
        globalState = undefined;
        stateController = ui.stateController();
        appState = ui.createAppState();
        cmsState = ui.cmsState();
    }
}
var appStateCounter = 0;
function createAppState() {
    if (!globalState) {
        // createAppState should never be called inside an iFrame
        throw new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["e" /* InternalError */]();
    }
    var id = (appStateCounter++).toString();
    var apps = globalState.subState('apps');
    return apps.subState(id);
}
function withBatchedUpdates(fn) {
    return stateController.withBatchedUpdates(fn);
}
function subscribe(fn) {
    return stateController.subscribe(fn);
}
function trackChanges(fn) {
    return stateController.trackChanges(fn);
}
function withFrozenState(context, fn) {
    return stateController.withFrozenState(context, fn);
}
function failIfFrozen(operationName) {
    return stateController.failIfFrozen(operationName);
}
function failIfTracking(message) {
    return stateController.failIfTracking(message);
}
// for test purposes only
function listenerCount() {
    if (!globalState) {
        throw new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["e" /* InternalError */]();
    }
    return globalState.listenerCount();
}
// for test purposes only
function reset() {
    if (!globalState) {
        throw new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["e" /* InternalError */]();
    }
    globalState.clearListeners();
    globalState.clear();
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_loadable_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_loading_monitor__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_display_name_from_component__ = __webpack_require__(82);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







function connect(component) {
    if (typeof component !== 'function') {
        throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Scrivito.connect expects either a plain function or a subclass of React.Component');
    }
    if (isConnectedComponent(component)) {
        return component;
    }
    if (isClassComponent(component)) {
        return connectClassComponent(component);
    }
    return connectClassComponent(wrapInClassComponent(component));
}
function connectClassComponent(classComponent) {
    var connectedComponent = (_a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(props) {
                var _this = _super.call(this, props) || this;
                _this._scrivitoPrivateConnector = new ComponentConnector(_this);
                return _this;
            }
            class_1.prototype.componentDidMount = function () {
                this._scrivitoPrivateConnector.componentDidMount();
                if (_super.prototype.componentDidMount) {
                    _super.prototype.componentDidMount.call(this);
                }
            };
            class_1.prototype.componentWillUnmount = function () {
                this._scrivitoPrivateConnector.componentWillUnmount();
                if (_super.prototype.componentWillUnmount) {
                    _super.prototype.componentWillUnmount.call(this);
                }
            };
            class_1.prototype.render = function () {
                var _this = this;
                return this._scrivitoPrivateConnector.render(function () { return _super.prototype.render.call(_this); });
            };
            return class_1;
        }(classComponent)),
        _a._isScrivitoConnectedComponent = true,
        _a);
    connectedComponent.displayName = Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_display_name_from_component__["a" /* default */])(classComponent);
    return connectedComponent;
    var _a;
}
function wrapInClassComponent(functionalComponent) {
    var classComponent = /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.render = function () {
            return functionalComponent(this.props);
        };
        return class_2;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
    classComponent.displayName = Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_display_name_from_component__["a" /* default */])(functionalComponent);
    return classComponent;
}
function isClassComponent(component) {
    return (typeof component === 'function' &&
        component.prototype &&
        component.prototype.isReactComponent);
}
function isConnectedComponent(component) {
    return (component
        ._isScrivitoConnectedComponent === true);
}
var ComponentConnector = /** @class */ (function () {
    function ComponentConnector(component) {
        this.component = component;
        this.isMounted = false;
    }
    ComponentConnector.prototype.componentDidMount = function () {
        var _this = this;
        this.isMounted = true;
        if (this.onMount) {
            var onMount = this.onMount.bind(this);
            delete this.onMount;
            onMount();
        }
        this.updateIfNecessary();
        this.unsubscribeModelState = Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__["f" /* subscribe */])(function () {
            _this.updateIfNecessary();
        });
    };
    ComponentConnector.prototype.componentWillUnmount = function () {
        this.unregisterLoadingActivity();
        if (this.unsubscribeModelState) {
            this.unsubscribeModelState();
        }
        this.isMounted = false;
    };
    ComponentConnector.prototype.render = function (originalRender) {
        var _this = this;
        var reactElement;
        this.isStateChangeDetected = Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__["g" /* trackChanges */])(function () {
            reactElement = _this.renderLoadingAware(originalRender);
        });
        return reactElement;
    };
    ComponentConnector.prototype.renderLoadingAware = function (originalRender) {
        var _this = this;
        var run;
        var captured;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_loadable_data__["c" /* isCurrentlyCapturing */])()) {
            // we are inside a capture - no need to load anything ourselves
            // (this usually means the caller is prerendering, e.g. renderToString)
            run = runWithFrozenState(originalRender);
        }
        else {
            captured = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_loadable_data__["a" /* capture */])(function () { return runWithFrozenState(originalRender); });
            run = captured.result;
        }
        if (run.allDataLoaded) {
            this.whenMounted(function () {
                if (captured) {
                    captured.loadRequiredData();
                }
                _this.unregisterLoadingActivity();
            });
            if (!run.success) {
                // if all data was loaded, the run must have been successful
                // so this should never happen.
                throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["e" /* InternalError */]();
            }
            return run.result;
        }
        else {
            this.whenMounted(function () {
                if (captured) {
                    captured.loadRequiredData();
                }
                if (!_this.unregisterLoadingActivityCallback) {
                    _this.unregisterLoadingActivityCallback = Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_loading_monitor__["c" /* registerLoadingActivity */])();
                }
            });
            var preliminaryResult = run.success ? run.result : null;
            return this.handleLoading(preliminaryResult);
        }
    };
    ComponentConnector.prototype.whenMounted = function (fn) {
        if (this.isMounted) {
            fn();
        }
        else {
            this.onMount = fn;
        }
    };
    ComponentConnector.prototype.handleLoading = function (preliminaryResult) {
        if (hasRenderWhileLoadingCallback(this.component)) {
            return this.component._scrivitoRenderWhileLoading();
        }
        return preliminaryResult;
    };
    ComponentConnector.prototype.unregisterLoadingActivity = function () {
        var unregister = this.unregisterLoadingActivityCallback;
        if (unregister) {
            delete this.unregisterLoadingActivityCallback;
            unregister();
        }
    };
    ComponentConnector.prototype.updateIfNecessary = function () {
        if (this.isStateChangeDetected && this.isStateChangeDetected()) {
            this.component.forceUpdate();
        }
    };
    return ComponentConnector;
}());
function hasRenderWhileLoadingCallback(component) {
    return !!component
        ._scrivitoRenderWhileLoading;
}
function runWithFrozenState(originalRender) {
    return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_loadable_data__["b" /* default */].run(function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__["i" /* withFrozenState */])({
            contextName: 'React.Component#render',
            message: 'Use one of the React lifecycle hooks.',
        }, originalRender);
    });
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return uiAdapter; });
/* harmony export (immutable) */ __webpack_exports__["a"] = setUiAdapter;
var uiAdapter;
// For test purpose only.
// => allow undefined
function setUiAdapter(newUiAdapter) {
    uiAdapter = newUiAdapter;
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = wrapInAppClass;
/* harmony export (immutable) */ __webpack_exports__["a"] = buildAppClassInstance;
/* harmony export (immutable) */ __webpack_exports__["d"] = unwrapAppClassValues;
/* harmony export (immutable) */ __webpack_exports__["c"] = unwrapAppClassValue;
/* harmony export (immutable) */ __webpack_exports__["b"] = unwrapAppAttributes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_is_system_attribute__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_basic_widget__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_link__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__ = __webpack_require__(1);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }








function wrapInAppClass(registry, internalValue) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isArray"])(internalValue)) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["map"])(internalValue, function (value) {
      return wrapInAppClass(registry, value);
    });
  }

  if (_instanceof(internalValue, __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_obj__["a" /* default */])) {
    return buildAppClassInstance(internalValue, registry.objClassFor(internalValue.objClass()));
  }

  if (_instanceof(internalValue, __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_basic_widget__["a" /* default */])) {
    var objClassName = internalValue.objClass();
    var appClass = registry.widgetClassFor(objClassName);
    return buildAppClassInstance(internalValue, appClass);
  }

  if (_instanceof(internalValue, __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_link__["a" /* default */])) {
    var link = Object.create(registry.defaultClassForLinks.prototype);
    link._scrivitoPrivateContent = internalValue;
    return link;
  }

  return internalValue;
}
function buildAppClassInstance(internalValue, appClass) {
  var externalValue = Object.create(appClass.prototype);
  externalValue._scrivitoPrivateContent = internalValue;
  return externalValue;
}
function unwrapAppClassValues(values) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isArray"])(values)) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["map"])(values, unwrapAppClassValue);
  }

  return unwrapAppClassValue(values);
}
function unwrapAppClassValue(value) {
  if (value && value._scrivitoPrivateContent) {
    return value._scrivitoPrivateContent;
  }

  return value;
}
function unwrapAppAttributes(appAttributes, schema, appClassName) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["mapObject"])(appAttributes, function (value, name) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_is_system_attribute__["a" /* default */])(name)) {
      return [value];
    }

    var typeInfo = schema.attributes[name];

    if (!typeInfo) {
      throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["b" /* ArgumentError */]("Attribute \"".concat(name, "\" is not defined for CMS object ") + "class \"".concat(appClassName, "\"."));
    }

    var unwrappedValue = unwrapAppClassValues(value);
    return [unwrappedValue, typeInfo];
  });
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tcomb_validation__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tcomb_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tcomb_validation__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_tcomb_validation__; });

__WEBPACK_IMPORTED_MODULE_0_tcomb_validation__["struct"].strict = true;
__WEBPACK_IMPORTED_MODULE_0_tcomb_validation__["interface"].strict = true;

__WEBPACK_IMPORTED_MODULE_0_tcomb_validation__["fail"] = function (message) {
  // original displays `[tcomb] ${message}`
  throw new TypeError(message);
};



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nextTick;
/* harmony export (immutable) */ __webpack_exports__["b"] = throwNextTick;
/* unused harmony export simulateNextTicks */
/* unused harmony export enableNextTickCapture */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

var capturedDelayedFunctions = [];
var captureEnabled;
function nextTick(delayedFunction) {
  if (captureEnabled) {
    capturedDelayedFunctions.push(delayedFunction);
  } else {
    setTimeout(delayedFunction, 0);
  }
}
function throwNextTick(error) {
  nextTick(function () {
    throw error;
  });
} // For test purpose only.

function simulateNextTicks() {
  if (!captureEnabled) {
    return;
  }

  var exceptions = [];

  while (capturedDelayedFunctions.length) {
    var currentFunctions = __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.shuffle(capturedDelayedFunctions);

    capturedDelayedFunctions = [];

    __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.each(currentFunctions, function (delayedFunction) {
      try {
        delayedFunction();
      } catch (e) {
        exceptions.push(e);
      }
    });
  }

  if (exceptions.length > 0) {
    throw exceptions[0];
  }
} // For test purpose only.

function enableNextTickCapture() {
  captureEnabled = true;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkArgumentsFor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_pretty_print__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_next_tick__ = __webpack_require__(9);





function checkArgumentsFor(functionName, argumentsDefinitions, _a) {
    var docPermalink = _a.docPermalink;
    return function () {
        var givenArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            givenArguments[_i] = arguments[_i];
        }
        var errorMessage;
        try {
            errorMessage = errorMessageForArguments(givenArguments, argumentsDefinitions);
        }
        catch (e) {
            // if the type checker crashes (e.g. due to a bug in the SDK),
            // we don't want to crash the application because of this!
            Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_next_tick__["b" /* throwNextTick */])(e);
        }
        if (errorMessage) {
            var moreInfo = "Visit https://scrivito.com/" + docPermalink + " for more information.";
            throw new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__["b" /* ArgumentError */]("Invalid arguments for '" + functionName + "': " + errorMessage + " " + moreInfo);
        }
    };
}
function errorMessageForArguments(givenArguments, argumentsDefinitions) {
    var numExpected = argumentsDefinitions.length;
    var numGiven = givenArguments.length;
    if (numGiven > numExpected) {
        return "Expected " + numExpected + " arguments, got " + numGiven;
    }
    var errors = __WEBPACK_IMPORTED_MODULE_2_underscore__["flatten"](argumentsDefinitions.map(function (_a, index) {
        var argumentName = _a[0], argumentType = _a[1];
        var givenArgument = givenArguments[index];
        var validation = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].validate(givenArgument, argumentType);
        return validation.errors.map(function (error) {
            return messageForError(argumentName, error);
        });
    }));
    if (errors.length > 0) {
        return errors.join(' ');
    }
}
function messageForError(argumentName, error) {
    var subjectDescription = subjectDescriptionForError(argumentName, error);
    if (error.actual === undefined) {
        return "Missing required " + subjectDescription + ".";
    }
    if (error.expected === __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Nil) {
        return "Unexpected " + subjectDescription + ".";
    }
    var typeName = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].getTypeName(error.expected);
    var message = "got " + Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_pretty_print__["a" /* default */])(error.actual) + ", expected type " + typeName + ".";
    return "Unexpected value for " + subjectDescription + ": " + message;
}
function subjectDescriptionForError(argumentName, error) {
    var argumentDescription = "argument '" + argumentName + "'";
    if (error.path.length === 0) {
        return argumentDescription;
    }
    return "key '" + error.path.join('/') + "' in " + argumentDescription;
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

var Schema = /** @class */ (function () {
    function Schema(definition, parent) {
        var attributes = {};
        if (parent._scrivitoPrivateSchema) {
            __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"](attributes, parent._scrivitoPrivateSchema.attributes);
        }
        if (definition.attributes) {
            __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](definition.attributes, function (attrDefinition, name) {
                var normalized = scrivito.typeInfo.normalize(attrDefinition);
                if (isSingleAttributeType(normalized)) {
                    var emptyOptions = {};
                    attributes[name] = [normalized[0], emptyOptions];
                }
                else {
                    attributes[name] = normalized;
                }
            });
        }
        this.definition = __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"]({}, definition, { attributes: attributes });
    }
    Schema.forInstance = function (model) {
        return this.forClass(model.constructor);
    };
    Schema.forClass = function (klass) {
        return klass._scrivitoPrivateSchema;
    };
    Schema.basicFieldFor = function (model, attributeName) {
        var schema = Schema.forInstance(model);
        if (!schema) {
            return;
        }
        var typeInfo = schema.attributes[attributeName];
        if (!typeInfo) {
            return;
        }
        return model._scrivitoPrivateContent.field(attributeName, typeInfo);
    };
    Object.defineProperty(Schema.prototype, "attributes", {
        get: function () {
            return this.definition.attributes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "name", {
        get: function () {
            return this.definition.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "onlyInside", {
        get: function () {
            return this.definition.onlyInside;
        },
        enumerable: true,
        configurable: true
    });
    Schema.prototype.isBinary = function () {
        var blobDefinition = this.definition.attributes.blob;
        if (!blobDefinition) {
            return false;
        }
        return blobDefinition[0] === 'binary';
    };
    return Schema;
}());
/* harmony default export */ __webpack_exports__["a"] = (Schema);
function isSingleAttributeType(normalized) {
    return normalized.length < 2;
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_urijs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_future_binary__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_loadable_loadable_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_metadata_collection__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_input_types__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_type_checker__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_cms_retrieval__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_global_state__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_tcomb__ = __webpack_require__(8);











// this is a small, 1x1 pixel, fully transparent GIF image
var FALLBACK_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
var FALLBACK_BINARY_DATA = {
    public_access: { get: { url: FALLBACK_URL } },
    private_access: { get: { url: FALLBACK_URL } },
};
var Binary = /** @class */ (function () {
    function Binary(binaryId, isPublic, transformation) {
        this._id = binaryId;
        this._isPublic = !!isPublic;
        this._transformation = transformation;
        this._loadableData = new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_loadable_loadable_data__["b" /* default */]({
            state: state(binaryId, transformation),
            loader: loader(binaryId, transformation),
        });
    }
    // public API
    Binary.upload = function (source, options) {
        checkUpload(source, options);
        if (!__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_input_types__["b" /* FileType */].is(source)) {
            if (!(options && options.filename)) {
                throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Expected a filename to be passed with Blob as the source.');
            }
        }
        return new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_future_binary__["a" /* default */]({ source: source }, options);
    };
    // For test purpose only.
    Binary.store = function (binaryId, options, response) {
        var transformation = options.transformation;
        var loadableData = new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_loadable_loadable_data__["b" /* default */]({
            state: state(binaryId, transformation),
            loader: loader(binaryId, transformation),
        });
        loadableData.set(response);
        var raw = new Binary(binaryId);
        if (transformation) {
            return raw.optimizeFor(transformation);
        }
        return raw;
    };
    // For test purpose only.
    Binary.storeMetadata = function (binaryId, response) {
        __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_metadata_collection__["a" /* default */].store(binaryId, response);
    };
    Binary.prototype.id = function () {
        return this._id;
    };
    // public API
    Binary.prototype.copy = function (options) {
        return new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_future_binary__["a" /* default */]({ idToCopy: this._id }, options);
    };
    // public API
    Binary.prototype.isPrivate = function () {
        return !this._isPublic;
    };
    // public API
    Binary.prototype.optimizeFor = function (transformation) {
        return new Binary(this._id, this._isPublic, Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["extend"])({}, this._transformation, transformation));
    };
    // public API
    Binary.prototype.original = function () {
        return new Binary(this._id, this._isPublic, {});
    };
    // public API
    Binary.prototype.raw = function () {
        return new Binary(this._id, this._isPublic);
    };
    Binary.prototype.isExplicitlyTransformed = function () {
        return this._isTransformed() && !Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["isEmpty"])(this._transformation);
    };
    Binary.prototype.isRaw = function () {
        return !this._isTransformed();
    };
    // public API
    Binary.prototype.url = function () {
        var accessData = this._urlData()[this._accessType()];
        if (!accessData) {
            throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["e" /* InternalError */]("Missing key " + this._accessType + " in binary data");
        }
        return accessData.get.url;
    };
    // public API
    Binary.prototype.filename = function () {
        var url = this.url();
        if (!url || url.match(/^data:/)) {
            return '';
        }
        return __WEBPACK_IMPORTED_MODULE_0_urijs__(url).path().split('/').pop() || '';
    };
    // public API
    Binary.prototype.metadata = function () {
        this._assertNotTransformed('Metadata');
        return new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_metadata_collection__["a" /* default */](this._id);
    };
    // public API
    Binary.prototype.contentType = function () {
        this._assertNotTransformed('Content type');
        var type = this.metadata().get('contentType');
        if (typeof type !== 'string') {
            return '';
        }
        return type;
    };
    // public API
    Binary.prototype.contentLength = function () {
        this._assertNotTransformed('Content length');
        var length = this.metadata().get('contentLength');
        if (typeof length !== 'number') {
            return 0;
        }
        return length;
    };
    Binary.prototype.extname = function () {
        if (this.raw().filename().indexOf('.') > -1) {
            var matches = /[^.\\]*$/.exec(this.raw().filename());
            if (matches) {
                return matches[0].toLowerCase();
            }
        }
        return '';
    };
    Binary.prototype.equals = function (binary) {
        return binary instanceof Binary
            && binary.id() === this.id()
            && binary.isPrivate() === this.isPrivate()
            && Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["isEqual"])(binary.definition(), this.definition());
    };
    Binary.prototype.isImage = function () {
        var contentType = this.raw().contentType();
        if (contentType) {
            return contentType.split('/')[0] === 'image';
        }
        return false;
    };
    // For test purpose only.
    Binary.prototype.definition = function () {
        return this._transformation || null;
    };
    Binary.prototype._accessType = function () {
        if (this.isPrivate()) {
            return 'private_access';
        }
        return 'public_access';
    };
    Binary.prototype._urlData = function () {
        return this._loadableData.get() || FALLBACK_BINARY_DATA;
    };
    Binary.prototype._assertNotTransformed = function (fieldName) {
        if (this._isTransformed()) {
            throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["i" /* ScrivitoError */]("\"" + fieldName + "\" is not available for transformed images." +
                ' Use "Scrivito.Binary#raw" to access the untransformed version of the image.');
        }
    };
    Binary.prototype._isTransformed = function () {
        return !!this._transformation;
    };
    return Binary;
}());
/* harmony default export */ __webpack_exports__["a"] = (Binary);
function state(binaryId, transformation) {
    var subStateKey = scrivito.computeCacheKey([binaryId, transformation]);
    return __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_global_state__["b" /* cmsState */].subState('binary').subState(subStateKey);
}
function loader(binaryId, transformation) {
    return function () { return __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_cms_retrieval__["a" /* cmsRetrieval */].retrieveBinaryUrls(binaryId, transformation); };
}
var BinaryOptionsType = __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_tcomb__["a" /* tcomb */].struct({
    contentType: __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
    filename: __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
});
var SourceType = __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_tcomb__["a" /* tcomb */].refinement(__WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_tcomb__["a" /* tcomb */].Object, function (value) { return __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_input_types__["a" /* BlobType */].is(value) || __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_input_types__["b" /* FileType */].is(value); }, 'Blob or File');
var checkUpload = Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('Binary.upload', [
    ['source', SourceType],
    ['options', __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(BinaryOptionsType)],
], {
    docPermalink: 'js-sdk/Binary-static-upload',
});


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_load_handler__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_loadable_loadable_value__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_context_container__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_loadable_loading_registry__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__load_handler__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__load_handler__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__load_handler__["b"]; });
/* unused harmony reexport CaptureReport */






var captureNotLoadedStackTrace = new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_context_container__["a" /* default */]();
var runContextContainer = new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_context_container__["a" /* default */]();
function noticeDataNotLoaded() {
    var context = runContextContainer.current();
    if (context) {
        context.allDataLoaded = false;
    }
}
var LoadableData = /** @class */ (function () {
    // state is the stateContainer where the LoadableData should store its state.
    function LoadableData(_a) {
        var state = _a.state, loader = _a.loader, invalidation = _a.invalidation, throwNotLoaded = _a.throwNotLoaded;
        if (!state) {
            throw new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["e" /* InternalError */]('LoadableData needs state');
        }
        this.value = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_loadable_loadable_value__["a" /* default */](state);
        this.loader = loader;
        this.invalidation = invalidation;
        this.throwNotLoaded = throwNotLoaded || false;
        this.id = state.id();
    }
    LoadableData.throwNotLoaded = function () {
        noticeDataNotLoaded();
        throw new scrivito.NotLoadedError(captureNotLoadedStackTrace.current());
    };
    LoadableData.run = function (loadableFunction) {
        var context = { allDataLoaded: true };
        try {
            var result = runContextContainer.runWith(context, function () {
                return withoutNotLoadedStackTrace(loadableFunction);
            });
            return {
                success: true,
                result: result,
                allDataLoaded: context.allDataLoaded,
            };
        }
        catch (error) {
            if (context.allDataLoaded) {
                throw error;
            }
            return {
                success: false,
                allDataLoaded: false,
            };
        }
    };
    // Access the LoadableData synchronously, assuming it is available.
    // If the LoadableData is an error, the error is thrown.
    // If the LoadableData is missing or loading, undefined will be returned.
    // if `throwNotLoaded` has been configured, a NotLoadedError is thrown instead.
    LoadableData.prototype.ensureAvailable = function () {
        var _this = this;
        if (this.isAvailable()) {
            this.reloadIfOutdated();
            return true;
        }
        if (this.isError()) {
            this.reloadIfOutdated();
            throw this.value.error();
        }
        noticeDataNotLoaded();
        __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_load_handler__["c" /* notifyMissingData */](function () { return _this.progressLoading(); });
        if (this.throwNotLoaded) {
            LoadableData.throwNotLoaded();
        }
        return false;
    };
    LoadableData.prototype.get = function () {
        if (this.ensureAvailable()) {
            return this.value.value();
        }
    };
    LoadableData.prototype.reader = function () {
        return this.value.reader();
    };
    // set the data to a value. this makes the value available.
    LoadableData.prototype.set = function (value) {
        this.value.transitionToAvailable(value, this.currentVersion());
        Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_loadable_loading_registry__["c" /* stopLoading */])(this.id);
    };
    // set the data to an error.
    LoadableData.prototype.setError = function (error) {
        this.transitionToError(error);
        Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_loadable_loading_registry__["c" /* stopLoading */])(this.id);
    };
    // transition back to missing, removes any value or errors.
    LoadableData.prototype.reset = function () {
        this.value.transitionToMissing();
        Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_loadable_loading_registry__["c" /* stopLoading */])(this.id);
    };
    // returns true iff the value is missing
    LoadableData.prototype.isMissing = function () {
        return this.value.status() === 'MISSING';
    };
    // returns true iff the value not available and not an error, but
    // has started loading.
    LoadableData.prototype.isLoading = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_loadable_loading_registry__["a" /* isLoading */])(this.id);
    };
    // return true iff value is available.
    LoadableData.prototype.isAvailable = function () {
        return this.value.status() === 'AVAILABLE';
    };
    // return true iff an error was set.
    LoadableData.prototype.isError = function () {
        return this.value.status() === 'ERROR';
    };
    // trigger loading the data. does nothing if the data is already loading.
    LoadableData.prototype.triggerLoading = function () {
        var _this = this;
        var versionWhenLoadingStarted = this.currentVersion();
        Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_loadable_loading_registry__["b" /* startLoading */])(this.id, function (_a) {
            var wasCancelled = _a.wasCancelled, push = _a.push;
            return _this.loader({
                push: push,
                isReload: function () { return _this.hasBeenInvalidated(); },
                wasCancelled: wasCancelled,
            });
        }, function (result) {
            _this.value.transitionToAvailable(result, versionWhenLoadingStarted);
        }, function (error) {
            _this.transitionToError(error, versionWhenLoadingStarted);
        });
    };
    LoadableData.prototype.transitionToError = function (error, version) {
        if (version === void 0) { version = this.currentVersion(); }
        this.value.transitionToError(error, version);
    };
    LoadableData.prototype.reloadIfOutdated = function () {
        var _this = this;
        if (this.hasBeenInvalidated()) {
            __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_load_handler__["d" /* notifyOutdatedData */](function () { return _this.progressLoading(); });
        }
    };
    LoadableData.prototype.progressLoading = function () {
        if (this.hasBeenInvalidated() || this.isMissing()) {
            this.triggerLoading();
        }
    };
    LoadableData.prototype.hasBeenInvalidated = function () {
        if (!this.invalidation) {
            return false;
        }
        if (this.isMissing()) {
            return false;
        }
        return this.currentVersion() !== this.value.version();
    };
    LoadableData.prototype.currentVersion = function () {
        var callback = this.invalidation;
        if (!callback) {
            return;
        }
        var version = callback();
        // protect against "crazy" objects like NaN
        if (typeof version === 'number' && isNaN(version)) {
            var message = "invalidation callback returned unsuitable version " + version;
            throw new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["e" /* InternalError */](message);
        }
        return version;
    };
    return LoadableData;
}());
/* harmony default export */ __webpack_exports__["b"] = (LoadableData);
function withoutNotLoadedStackTrace(fn) {
    return captureNotLoadedStackTrace.runWith(false, fn);
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_parse_query__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);



var BasicLink = /** @class */ (function () {
    function BasicLink(attributes) {
        this._hash = attributes.hash || null;
        this._query = attributes.query || null;
        this._target = attributes.target || null;
        this._title = attributes.title || null;
        this._url = attributes.url || null;
        this._objId = attributes.objId || null;
    }
    BasicLink.prototype.title = function () {
        return this._title;
    };
    BasicLink.prototype.query = function () {
        return this._query;
    };
    BasicLink.prototype.hash = function () {
        return this._hash;
    };
    BasicLink.prototype.target = function () {
        return this._target;
    };
    BasicLink.prototype.url = function () {
        return this._url;
    };
    BasicLink.prototype.objId = function () {
        return this._objId;
    };
    BasicLink.prototype.obj = function () {
        var objId = this.objId();
        if (!objId) {
            return null;
        }
        return __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_obj__["a" /* default */].get(objId) || null;
    };
    BasicLink.prototype.queryParameters = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_parse_query__["a" /* default */])(this.query() || '');
    };
    BasicLink.prototype.isExternal = function () {
        return !!this.url();
    };
    BasicLink.prototype.isInternal = function () {
        return !this.isExternal();
    };
    BasicLink.prototype.equals = function (otherLink) {
        if (!(otherLink instanceof BasicLink)) {
            return false;
        }
        if (this.isExternal()) {
            return (this.hash() === otherLink.hash() &&
                this.query() === otherLink.query() &&
                this.target() === otherLink.target() &&
                this.title() === otherLink.title() &&
                this.url() === otherLink.url());
        }
        return (this.objId() === otherLink.objId() && this.title() === otherLink.title());
    };
    BasicLink.prototype.copy = function (attributes) {
        return new BasicLink(__WEBPACK_IMPORTED_MODULE_1_underscore__["extend"]({
            hash: this._hash,
            query: this._query,
            target: this._target,
            title: this._title,
            url: this._url,
            objId: this._objId,
        }, attributes));
    };
    BasicLink.prototype.isBroken = function () {
        if (this.isExternal()) {
            return false;
        }
        return !this.obj();
    };
    BasicLink.prototype.toPrettyPrint = function () {
        if (this.isInternal()) {
            return "[object Link objId=\"" + this.objId() + "\"]";
        }
        return "[object Link url=\"" + this.url() + "\"]";
    };
    return BasicLink;
}());
/* harmony default export */ __webpack_exports__["a"] = (BasicLink);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cmsRestApi; });
/* unused harmony export reset */
/* unused harmony export disableRetries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_urijs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_urijs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_urijs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_deferred__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_fetch__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_wait__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_auth_failure_counter__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_public_authentication__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_window_proxy__ = __webpack_require__(26);









var limitedRetries;
var retriesAreDisabled;
var CmsRestApi = /** @class */ (function () {
    function CmsRestApi() {
        this.initDeferred = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_deferred__["a" /* default */]();
        this.authHeaderValueProvider = __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_public_authentication__;
    }
    CmsRestApi.prototype.init = function (endpoint, tenant, authorizationProvider) {
        if (tenant) {
            this.tenant = tenant;
            this.endpoint = endpoint;
            this.url = __WEBPACK_IMPORTED_MODULE_1_urijs__(endpoint + "/tenants/" + tenant + "/perform").scheme('https').toString();
            this.initDeferred.resolve(undefined);
        }
        if (authorizationProvider) {
            this.authHeaderValueProvider = authorizationProvider;
        }
    };
    CmsRestApi.prototype.get = function (path, requestParams) {
        return this._perform('GET', path, requestParams);
    };
    CmsRestApi.prototype.put = function (path, requestParams) {
        return this._perform('PUT', path, requestParams);
    };
    CmsRestApi.prototype.post = function (path, requestParams) {
        return this._perform('POST', path, requestParams);
    };
    CmsRestApi.prototype.delete = function (path, requestParams) {
        return this._perform('DELETE', path, requestParams);
    };
    CmsRestApi.prototype.requestBuiltInUserSession = function (sessionId) {
        var _this = this;
        return this._ensureInitialized()
            .then(function () { return _this._ajax('PUT', "sessions/" + sessionId); })
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_auth_failure_counter__["a" /* default */].reset();
            return response;
        });
    };
    // For test purpose only.
    CmsRestApi.prototype.enableForceVerification = function () {
        this.forceVerification = true;
    };
    // For test purpose only.
    CmsRestApi.prototype.currentPublicAuthorizationState = function () {
        if (this.authHeaderValueProvider) {
            if (this.authHeaderValueProvider.currentState) {
                return "[API] " + this.authHeaderValueProvider.currentState();
            }
            return '[API]: authorization provider without currentState()';
        }
        return '[API]: no authorization provider';
    };
    CmsRestApi.prototype._ensureInitialized = function () {
        return this.initDeferred.promise;
    };
    CmsRestApi.prototype._perform = function (method, path, requestParams) {
        var _this = this;
        return this._ensureInitialized().then(function () {
            return _this._send(method, path, requestParams).then(function (result) {
                if (isTask(result)) {
                    return _this._handleTask(result.task);
                }
                return result;
            });
        });
    };
    CmsRestApi.prototype._send = function (method, path, requestParams) {
        var _this = this;
        return this.authHeaderValueProvider.perform(function (authorization) { return _this._ajax(method, path, requestParams, authorization); });
    };
    CmsRestApi.prototype._ajax = function (method, path, requestParams, authorization) {
        var url = this.url;
        var forceVerification = this.forceVerification;
        var params = {
            path: path,
            verb: method,
            params: requestParams || {},
        };
        var options = { params: params, authorization: authorization, forceVerification: forceVerification };
        function performRequest() {
            return retryOnRateLimit(function () { return Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_fetch__["a" /* fetch */])(method, url, options); })
                .then(handleAjaxResponse);
        }
        if (method === 'POST') {
            return performRequest();
        }
        return retryOnError(performRequest);
    };
    CmsRestApi.prototype._handleTask = function (task) {
        var myself = this;
        switch (task.status) {
            case 'success':
                return task.result;
            case 'error':
                throw __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["c" /* ClientError */].for(task.message, 412, task.code);
            case 'open':
                return Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_wait__["a" /* wait */])(2)
                    .then(function () { return myself.get("tasks/" + task.id)
                    .then(function (result) { return myself._handleTask(result); }); });
            default:
                throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["g" /* RequestFailedError */]('Invalid task response (unknown status)');
        }
    };
    return CmsRestApi;
}());
function retryOnError(requestCallback, retryCount) {
    if (retryCount === void 0) { retryCount = 0; }
    if (retriesAreDisabled) {
        return new scrivito.Promise(function (resolve) { return resolve(requestCallback()); });
    }
    return requestCallback().catch(function (error) {
        if (error instanceof __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["g" /* RequestFailedError */]) {
            if (limitedRetries && retryCount > 5) {
                throw error;
            }
            var retryDelay = calculateDelay(retryCount);
            return Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_wait__["b" /* waitMs */])(retryDelay).then(function () { return retryOnError(requestCallback, retryCount + 1); });
        }
        throw error;
    });
}
function retryOnRateLimit(requestCallback, retryCount) {
    if (retryCount === void 0) { retryCount = 0; }
    if (retriesAreDisabled) {
        return new scrivito.Promise(function (resolve) { return resolve(requestCallback()); });
    }
    return requestCallback().then(function (response) {
        if (response.status !== 429) {
            return response;
        }
        // The value for the retry count limit should be high enough to show that the integer overflow
        // protection of the calculated timeout (currently: exponent limited to 16) is working.
        if (limitedRetries && retryCount > 19) {
            throw new Error('Maximum number of rate limit retries reached');
        }
        var retryAfter = Number(response.getResponseHeader('Retry-After')) || 0;
        var retryDelay = Math.max(retryAfter * 1000, calculateDelay(retryCount));
        return Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_wait__["b" /* waitMs */])(retryDelay).then(function () { return retryOnRateLimit(requestCallback, retryCount + 1); });
    });
}
function calculateDelay(retryCount) {
    return Math.pow(2, Math.min(retryCount, 16)) * 500;
}
function handleAjaxResponse(request) {
    var httpStatus = request.status;
    var responseData;
    try {
        responseData = JSON.parse(request.responseText);
    }
    catch (error) {
        throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["g" /* RequestFailedError */](request.responseText);
    }
    if (httpStatus >= 200 && httpStatus < 300) {
        return responseData;
    }
    if (responseData.code === 'auth_missing') {
        var details = responseData.details;
        if (details && isJSONObject(details)) {
            var visit = details.visit;
            if (typeof visit === 'string') {
                Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_window_proxy__["e" /* redirectTo */])(authenticationUrlFor(visit));
                return {};
            }
        }
    }
    throw errorForResponse(httpStatus, responseData, request.responseText);
}
function authenticationUrlFor(visit) {
    var returnTo = __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_auth_failure_counter__["a" /* default */].augmentedRedirectUrl(Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_window_proxy__["c" /* location */])());
    return visit
        .replace('retry=RETRY', "retry=" + __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_auth_failure_counter__["a" /* default */].currentFailureCount())
        .replace(/\$RETURN_TO/, encodeURIComponent(returnTo));
}
function errorForResponse(httpStatus, responseData, responseText) {
    if (httpStatus === 401) {
        var errorData = asErrorResponseData(responseData);
        return new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["j" /* UnauthorizedError */](errorData.error, httpStatus, errorData.code, errorData.details);
    }
    if (httpStatus === 403) {
        var errorData = asErrorResponseData(responseData);
        var code = errorData.code;
        if (!code || !isString(code)) {
            throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["g" /* RequestFailedError */]('Authentication failure response no string value for code');
        }
        return new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["a" /* AccessDeniedError */](errorData.error, httpStatus, code);
    }
    if (responseData.error && httpStatus.toString()[0] === '4') {
        var errorData = asErrorResponseData(responseData);
        return __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["c" /* ClientError */].for(errorData.error, httpStatus, errorData.code);
    }
    if (httpStatus === 500) {
        if (isString(responseData.error)) {
            return new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["g" /* RequestFailedError */](responseData.error);
        }
        return new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["g" /* RequestFailedError */](responseText);
    }
    return new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["g" /* RequestFailedError */](responseText);
}
function isJSONObject(o) {
    return typeof o === 'object' && !Array.isArray(o);
}
function isString(x) {
    return typeof x === 'string';
}
function isTask(result) {
    return !!result && !!result.task && Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["size"])(result) === 1;
}
function asErrorResponseData(responseData) {
    var error = responseData.error;
    if (typeof error !== 'string') {
        throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["g" /* RequestFailedError */]('Malformed error response (key error is not a string)');
    }
    var code = responseData.code;
    if (code !== undefined && !isString(code)) {
        throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["g" /* RequestFailedError */]('Malformed error response (optional key code is not a string)');
    }
    var details = responseData.details;
    if (details !== undefined && !isJSONObject(details)) {
        throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["g" /* RequestFailedError */]('Malformed error response (optional key details is not an object');
    }
    return { code: code, error: error, details: details };
}
var cmsRestApi = new CmsRestApi();
// For test purpose only.
function reset() {
    cmsRestApi = new CmsRestApi();
    limitedRetries = true;
    retriesAreDisabled = undefined;
}
function disableRetries() {
    retriesAreDisabled = true;
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_attribute_serializer__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_attribute_content__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_attribute_inflection__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_global_state__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var SYSTEM_ATTRIBUTES = {
  _id: 'id',
  _obj_class: 'objClass'
};

var BasicWidget =
/*#__PURE__*/
function (_BasicAttributeConten) {
  _inherits(BasicWidget, _BasicAttributeConten);

  _createClass(BasicWidget, null, [{
    key: "build",
    value: function build(id, obj) {
      var instance = Object.create(BasicWidget.prototype);
      instance._obj = obj;
      instance._id = id;
      return instance;
    }
  }, {
    key: "newWithSerializedAttributes",
    value: function newWithSerializedAttributes(attributes) {
      var unserializedAttributes = {};
      var serializedAttributes = {};

      __WEBPACK_IMPORTED_MODULE_2_underscore___default.a.each(attributes, function (value, name) {
        if (name === '_obj_class') {
          unserializedAttributes._objClass = [value];
          return;
        }

        if (__WEBPACK_IMPORTED_MODULE_2_underscore___default.a.isArray(value) && __WEBPACK_IMPORTED_MODULE_2_underscore___default.a.first(value) === 'widgetlist') {
          var newWidgets = __WEBPACK_IMPORTED_MODULE_2_underscore___default.a.map(__WEBPACK_IMPORTED_MODULE_2_underscore___default.a.last(value), function (serializedWidget) {
            return BasicWidget.newWithSerializedAttributes(serializedWidget);
          });

          var attrName = Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_attribute_inflection__["a" /* camelCase */])(name);
          unserializedAttributes[attrName] = [newWidgets, ['widgetlist']];
          return;
        }

        serializedAttributes[name] = value;
      });

      var widget = new BasicWidget(unserializedAttributes);
      widget.preserializedAttributes = serializedAttributes;
      return widget;
    }
  }]);

  function BasicWidget(attributes) {
    var _this;

    _classCallCheck(this, BasicWidget);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BasicWidget).call(this));
    _this._attributesToBeSaved = scrivito.typeInfo.normalizeAttrs(attributes);
    assertWidgetClassExists(attributes._objClass);
    return _this;
  }

  _createClass(BasicWidget, [{
    key: "id",
    value: function id() {
      this._failIfNotPersisted();

      return this._id;
    }
  }, {
    key: "objClass",
    value: function objClass() {
      if (this.isPersisted()) {
        return this.getAttributeData('_obj_class');
      }

      return this._attributesToBeSaved._objClass[0];
    }
  }, {
    key: "obj",
    value: function obj() {
      this._failIfNotPersisted();

      return this._obj;
    }
  }, {
    key: "widget",
    value: function widget(id) {
      return this.obj().widget(id);
    }
  }, {
    key: "update",
    value: function update(attributes) {
      var _this2 = this;

      var normalizedAttributes = scrivito.typeInfo.normalizeAttrs(attributes);
      Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_global_state__["h" /* withBatchedUpdates */])(function () {
        _this2._persistWidgets(_this2.obj(), normalizedAttributes);

        var patch = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_attribute_serializer__["a" /* serialize */](normalizedAttributes);

        _this2._updateSelf(patch);
      });
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(widget) {
      widget.obj().insertWidget(this, {
        before: widget
      });
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(widget) {
      widget.obj().insertWidget(this, {
        after: widget
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      this.obj().removeWidget(this);
    }
  }, {
    key: "copy",
    value: function copy() {
      if (this.isPersisted()) {
        return this._copyPersisted();
      }

      return this._copyUnpersisted();
    }
  }, {
    key: "persistInObj",
    value: function persistInObj(obj) {
      this._persistWidgets(obj, this._attributesToBeSaved);

      var patch = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_attribute_serializer__["a" /* serialize */](this._attributesToBeSaved);

      __WEBPACK_IMPORTED_MODULE_2_underscore___default.a.extend(patch, this.preserializedAttributes || {});

      this._obj = obj;
      this._id = obj.generateWidgetId();

      this._updateSelf(patch);

      this._executeDidPersistCallback();
    }
  }, {
    key: "isPersisted",
    value: function isPersisted() {
      return !!this._obj;
    }
  }, {
    key: "onDidPersist",
    value: function onDidPersist(callback) {
      if (this.isPersisted()) {
        throw new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__["i" /* ScrivitoError */]('Cannot call "onDidPersist" of an already persisted widget');
      }

      this._onDidPersistCallback = callback;
    } // For test purpose only.

  }, {
    key: "hasOnDidPersistCallback",
    value: function hasOnDidPersistCallback() {
      return !!this._onDidPersistCallback;
    }
  }, {
    key: "finishSaving",
    value: function finishSaving() {
      return this.obj().finishSaving();
    }
  }, {
    key: "equals",
    value: function equals(otherWidget) {
      if (!_instanceof(otherWidget, BasicWidget)) {
        return false;
      }

      return this.id() === otherWidget.id() && this.obj().id() === otherWidget.obj().id();
    }
  }, {
    key: "containingField",
    value: function containingField() {
      return this.obj().fieldContainingWidget(this);
    }
  }, {
    key: "toPrettyPrint",
    value: function toPrettyPrint() {
      return "[object ".concat(this.objClass(), " id=\"").concat(this.id(), "\" objId=\"").concat(this.obj().id(), "\"]");
    }
  }, {
    key: "getAttributeData",
    value: function getAttributeData(attributeName) {
      return this.obj().getWidgetAttribute(this.id(), attributeName);
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.obj().getWidgetData(this.id());
    }
  }, {
    key: "_failIfNotPersisted",
    value: function _failIfNotPersisted() {
      if (!this.isPersisted()) {
        throw new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__["i" /* ScrivitoError */]('Can not access a new widget before it has been saved.');
      }
    }
  }, {
    key: "_updateSelf",
    value: function _updateSelf(patch) {
      var widgetPoolPatch = {
        _widgetPool: [_defineProperty({}, this.id(), patch)]
      };
      this.obj().update(widgetPoolPatch);
    }
  }, {
    key: "_executeDidPersistCallback",
    value: function _executeDidPersistCallback() {
      if (this._onDidPersistCallback) {
        this._onDidPersistCallback(this);

        delete this._onDidPersistCallback;
      }
    }
  }, {
    key: "_copyPersisted",
    value: function _copyPersisted() {
      var serializedAttributes = this.serializeAttributes();
      return BasicWidget.newWithSerializedAttributes(serializedAttributes);
    }
  }, {
    key: "_copyUnpersisted",
    value: function _copyUnpersisted() {
      var attributes = __WEBPACK_IMPORTED_MODULE_2_underscore___default.a.mapObject(this._attributesToBeSaved, function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            value = _ref3[0],
            typeInfo = _ref3[1];

        if (typeInfo && typeInfo[0] === 'widgetlist') {
          return [__WEBPACK_IMPORTED_MODULE_2_underscore___default.a.invoke(value, 'copy'), typeInfo];
        }

        return [value, typeInfo];
      });

      var copy = new BasicWidget(attributes);

      if (this._onDidPersistCallback) {
        copy.onDidPersist(this._onDidPersistCallback);
      }

      return copy;
    }
  }, {
    key: "attributesToBeSaved",
    get: function get() {
      return this._attributesToBeSaved;
    }
  }, {
    key: "_systemAttributes",
    get: function get() {
      return SYSTEM_ATTRIBUTES;
    }
  }]);

  return BasicWidget;
}(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_attribute_content__["a" /* default */]);



function assertWidgetClassExists(attrInfoAndValue) {
  if (!attrInfoAndValue) {
    throw new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Please provide a widget class as the "_objClass" property.');
  }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new scrivito.Promise(function (resolveFn, rejectFn) {
            _this.resolve = function (value) {
                _this.settled = true;
                resolveFn(value);
            };
            _this.reject = function (error) {
                _this.settled = true;
                rejectFn(error);
            };
        });
    }
    Deferred.prototype.isPending = function () {
        return !this.settled;
    };
    return Deferred;
}());
/* harmony default export */ __webpack_exports__["a"] = (Deferred);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_deferred__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_loadable_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_global_state__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_type_checker__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_tcomb__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__ = __webpack_require__(1);







function load(loadableFunction) {
    checkLoad(loadableFunction);
    function tryToSettle() {
        var captured = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_loadable_data__["a" /* capture */])(function () {
            try {
                return {
                    errorThrown: false,
                    run: __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_loadable_data__["b" /* default */].run(function () { return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_global_state__["i" /* withFrozenState */])({
                        contextName: 'Scrivito.load',
                        message: 'Use an async callback: Scrivito.load(/* ... */).then(/* ... */).',
                    }, loadableFunction); }),
                };
            }
            catch (e) {
                return { errorThrown: true, error: e };
            }
        });
        if (!captured.isAllDataUpToDate()) {
            captured.loadRequiredData();
            var deferred_1 = new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_deferred__["a" /* default */]();
            var unsubscribe_1 = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_global_state__["f" /* subscribe */])(function () {
                deferred_1.resolve(undefined);
                unsubscribe_1();
            });
            return deferred_1.promise.then(tryToSettle);
        }
        var outcome = captured.result;
        if (outcome.errorThrown) {
            throw outcome.error;
        }
        var run = outcome.run;
        if (!run.success) {
            // If all required data is up-to-date and no error was thrown,
            // the run must have been successful, so this should never happen.
            throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["e" /* InternalError */]();
        }
        return run.result;
    }
    return new scrivito.Promise(function (resolve) { return resolve(tryToSettle()); });
}
var checkLoad = Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('load', [['loadableFunction', __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_tcomb__["a" /* tcomb */].Function]], {
    docPermalink: 'js-sdk/load',
});
/* harmony default export */ __webpack_exports__["a"] = (load);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ObjType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WidgetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LinkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ObjSearchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinaryType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_widget__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_basic_link__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_obj_search__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_models_binary__ = __webpack_require__(12);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }







var ObjType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].irreducible('Obj', function (maybeObj) {
  var privateContent = maybeObj && maybeObj._scrivitoPrivateContent;
  return _instanceof(privateContent, __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */]);
});
var WidgetType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].irreducible('Widget', function (maybeWidget) {
  var privateContent = maybeWidget && maybeWidget._scrivitoPrivateContent;
  return _instanceof(privateContent, __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_widget__["a" /* default */]);
});
var LinkType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].irreducible('Link', function (maybeLink) {
  var privateContent = maybeLink && maybeLink._scrivitoPrivateContent;
  return _instanceof(privateContent, __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_basic_link__["a" /* default */]);
});
var ObjSearchType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].irreducible('ObjSearch', function (maybeSearch) {
  return _instanceof(maybeSearch._scrivitoPrivateContent, __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_obj_search__["b" /* default */]);
});
var BinaryType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].irreducible('Binary', function (maybeBinary) {
  return _instanceof(maybeBinary, __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_models_binary__["a" /* default */]);
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isUnderscore */
/* harmony export (immutable) */ __webpack_exports__["b"] = isCamelCase;
/* harmony export (immutable) */ __webpack_exports__["d"] = underscore;
/* harmony export (immutable) */ __webpack_exports__["a"] = camelCase;
/* unused harmony export classify */
/* harmony export (immutable) */ __webpack_exports__["c"] = sentenceCase;
var CONVERT_TO_CAMELCASE = /(_+)(\w)/g;
var CONVERT_TO_UNDERSCORE = /([A-Z])/g;
var TEST_ABBR_OR_NUMBER = /[A-Z]+|\d+/g;
var TEST_CAMEL_CASE = /^_?(_+[A-Z0-9]|[^_])+$/;
var TEST_SEPARATOR = /[_\s]+/g;
var TEST_TITLE_CASE_WORD = /[A-Z][a-z]+/g;
var TEST_UNDERSCORE = /^[a-z0-9_:]+$/;
function isUnderscore(name) {
  return TEST_UNDERSCORE.test(name);
}
function isCamelCase(name) {
  return TEST_CAMEL_CASE.test(name);
}
function underscore(name) {
  return name.replace(CONVERT_TO_UNDERSCORE, function (_match, group) {
    return "_".concat(group.toLowerCase());
  });
}
function camelCase(name) {
  return name.replace(CONVERT_TO_CAMELCASE, function (match, underscores, nextChar, index) {
    if (!index) {
      return match;
    }

    if (nextChar.toUpperCase() === nextChar) {
      return match;
    }

    return "".concat(underscores.substr(1)).concat(nextChar.toUpperCase());
  });
}
function classify(name) {
  var camelCased = camelCase(name);
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
}
function sentenceCase(name) {
  return name.replace(TEST_SEPARATOR, ' ').replace(TEST_TITLE_CASE_WORD, function (word) {
    return " ".concat(word.toLowerCase());
  }).replace(TEST_ABBR_OR_NUMBER, function (word) {
    return " ".concat(word);
  }).trim().replace(/./, function (c) {
    return c.toUpperCase();
  });
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = currentPage;
/* harmony export (immutable) */ __webpack_exports__["f"] = withCurrentPage;
/* harmony export (immutable) */ __webpack_exports__["c"] = currentPageParams;
/* harmony export (immutable) */ __webpack_exports__["b"] = currentPageError;
/* harmony export (immutable) */ __webpack_exports__["d"] = replaceCurrentPage;
/* harmony export (immutable) */ __webpack_exports__["e"] = setCurrentPage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_context_container__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_schema__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_link__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_loadable_load__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_app_support_loading_monitor__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_window_context__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_browser_location__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_global_state__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_client_next_tick__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }














var nextVersion = 0;
var currentPageContextContainer = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_context_container__["a" /* default */](); // public API

function currentPage() {
  var page = currentPageContextContainer.current();

  if (page) {
    return page;
  }

  return currentPageForState(getState());
}

function currentPageForState(_ref) {
  var objId = _ref.objId;

  if (objId === null) {
    return objId;
  }

  if (!objId) {
    return;
  }

  try {
    return scrivito.loadWithDefault(undefined, function () {
      var appModelAccessor = Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_window_context__["a" /* getWindowContext */])().appModelAccessor;
      var modelClass = Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_window_context__["a" /* getWindowContext */])().Obj;
      var obj = appModelAccessor.getObj(modelClass, objId);

      if (obj) {
        return obj;
      }

      throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["h" /* ResourceNotFoundError */]("Obj with id \"".concat(objId, "\" not found."));
    });
  } catch (error) {
    Object(__WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_client_next_tick__["a" /* default */])(function () {
      return advanceWithError(nextVersion, error);
    });
    return;
  }
}

function withCurrentPage(page, fn) {
  return currentPageContextContainer.runWith(page, fn);
} // public API

function currentPageParams() {
  return getState().queryParameters || {};
}
function currentPageError() {
  return getState().error;
}
function replaceCurrentPage(fn) {
  var beforeSetCallback = function beforeSetCallback(_ref2) {
    var obj = _ref2.obj,
        queryParameters = _ref2.queryParameters,
        hash = _ref2.hash;

    if (obj) {
      Object(__WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_browser_location__["e" /* replaceWith */])({
        obj: obj,
        queryParameters: queryParameters,
        hash: hash
      });
    }
  };

  setCurrentPage(fn, beforeSetCallback);
}
function setCurrentPage(fn, beforeSetCallback) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isFunction"])(fn)) {
    throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Parameter fn needs to be a function.');
  }

  var version = generateNextVersion();
  var setCurrentPagePromise = Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_loadable_load__["a" /* default */])(fn).then(function (target) {
    if (target.obj) {
      return Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_loadable_load__["a" /* default */])(function () {
        return extractRoutingTarget(target.obj, target.queryParameters, target.hash);
      }).then(function (_ref3) {
        var obj = _ref3.obj,
            url = _ref3.url,
            queryParameters = _ref3.queryParameters,
            hash = _ref3.hash;

        if (url) {
          advance(version, function () {
            if (beforeSetCallback) {
              beforeSetCallback({
                obj: obj,
                queryParameters: queryParameters,
                hash: hash
              });
            }

            scrivito.changeLocation(url);
          });
        } else {
          advance(version, function () {
            if (beforeSetCallback) {
              beforeSetCallback({
                obj: obj,
                queryParameters: queryParameters,
                hash: hash
              });
            }

            setStateForTarget({
              obj: obj,
              queryParameters: queryParameters,
              hash: hash
            });
          });
        }
      });
    }

    advanceWithError(version, new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["d" /* CurrentPageNotFoundError */]());
  }).catch(function (error) {
    if (_instanceof(error, __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["f" /* NavigateToEmptyBinaryError */])) {
      return;
    }

    Object(__WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_client_next_tick__["b" /* throwNextTick */])(error);
    advanceWithError(version, error);
  });
  Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_app_support_loading_monitor__["b" /* registerAsLoadingActivity */])(setCurrentPagePromise);
}

function state() {
  return __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_global_state__["a" /* appState */].subState('currentPage');
}

function getState() {
  return state().get() || {};
}

function setState(newState) {
  state().set(newState);
}

function generateNextVersion() {
  nextVersion += 1;
  return nextVersion;
}

function advance(version, changeTheState) {
  if (nextVersion === version) {
    changeTheState();
  }
}

function advanceWithError(version, error) {
  advance(version, function () {
    setState({
      objId: null,
      error: error
    });
    setUiCurrentPage(null);
  });
}

function setStateForTarget(_ref4) {
  var obj = _ref4.obj,
      queryParameters = _ref4.queryParameters,
      hash = _ref4.hash;
  var objId = obj && obj.id() || null;
  setState({
    objId: objId,
    queryParameters: queryParameters,
    hash: hash
  });
  setUiCurrentPage(objId);
}

function setUiCurrentPage(objId) {
  if (__WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */]) {
    __WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].setCurrentPageId(objId);
  }
}

function extractRoutingTarget(objOrLink, queryParameters, hash) {
  assertValidBasicTarget(objOrLink);

  if (objOrLink === null) {
    return {};
  }

  if (_instanceof(objOrLink, __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */])) {
    return extractRoutingTargetForObj(objOrLink, queryParameters, hash);
  }

  if (_instanceof(objOrLink, __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_link__["a" /* default */])) {
    return extractRoutingTargetForLink(objOrLink, queryParameters, hash);
  }
}

function extractRoutingTargetForObj(obj, queryParameters, hash) {
  if (isBinary(obj)) {
    var blob = obj.get('blob', ['binary']);

    if (!blob) {
      throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["f" /* NavigateToEmptyBinaryError */]();
    }

    return {
      url: blob.url()
    };
  }

  return {
    obj: obj,
    queryParameters: queryParameters,
    hash: hash
  };
}

function extractRoutingTargetForLink(link, queryParameters, hash) {
  if (link.isExternal()) {
    return {
      url: link.url()
    };
  }

  var routingTarget = {
    obj: link.obj(),
    queryParameters: link.queryParameters(),
    hash: link.hash()
  };

  if (queryParameters && !Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isEmpty"])(queryParameters)) {
    routingTarget.queryParameters = queryParameters;
  }

  if (hash) {
    routingTarget.hash = hash;
  }

  return extractRoutingTarget(routingTarget.obj, routingTarget.queryParameters, routingTarget.hash);
}

function assertValidBasicTarget(target) {
  if (target === null) {
    return;
  }

  if (_instanceof(target, __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */])) {
    return;
  }

  if (_instanceof(target, __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_link__["a" /* default */])) {
    return;
  }

  if (!target) {
    throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Missing target.');
  }

  throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Target is invalid. Valid targets are instances of Obj or Link.');
}

function isBinary(basicObj) {
  var klass = Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_window_context__["a" /* getWindowContext */])().getClass(basicObj.objClass());

  if (!klass) {
    return false;
  }

  var schema = __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_schema__["a" /* default */].forClass(klass);
  return schema.isBinary();
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWindowContext; });
/* unused harmony export setWindowContext */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_realm_realm__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_initialize_content__ = __webpack_require__(73);
// The iframe context is the `scrivito` object, available top-level in the application iframe and
// used as the public API for the client. Following indirection is used in the specs in order to
// not pollute the global `window` object with the public API properties.


var realmApi = {};
var realm = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_realm_realm__["a" /* default */].init(realmApi);
realm.setInitialContentFor(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_initialize_content__["a" /* initialContentFor */]);

function getWindowContext() {
  return realmApi;
} // For test purpose only.


function setWindowContext(newIframeContext) {
  realmApi = newIframeContext;
}



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWindowRegistry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_window_context__ = __webpack_require__(23);


function getWindowRegistry() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_window_context__["a" /* getWindowContext */])()._privateRealm._registry;
}



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = init;
/* unused harmony export reset */
/* unused harmony export generate */
/* harmony export (immutable) */ __webpack_exports__["b"] = generateUrl;
/* harmony export (immutable) */ __webpack_exports__["a"] = generatePath;
/* harmony export (immutable) */ __webpack_exports__["f"] = recognize;
/* harmony export (immutable) */ __webpack_exports__["g"] = recognizePath;
/* harmony export (immutable) */ __webpack_exports__["e"] = isLocalUrl;
/* harmony export (immutable) */ __webpack_exports__["d"] = isLocalUri;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_urijs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_routing_path__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_window_proxy__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__ = __webpack_require__(1);





var basePath = '';
var isInitialized = false;
function init(_a) {
    var routingBasePath = (_a === void 0 ? {} : _a).routingBasePath;
    isInitialized = true;
    basePath = routingBasePath || '';
}
// For test purpose only.
function reset() {
    basePath = '';
    isInitialized = false;
}
function generate(_a) {
    var obj = _a.obj, queryParameters = _a.queryParameters, hash = _a.hash;
    assertIsInitialized('generate');
    var path = __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_routing_path__["a" /* generate */](obj);
    var uri = generatePathUri({ path: path, queryParameters: queryParameters, hash: hash });
    return uri.origin(currentOrigin()).toString();
}
function generateUrl(_a) {
    var obj = _a.obj, queryParameters = _a.queryParameters, hash = _a.hash, includeOrigin = _a.includeOrigin;
    assertIsInitialized('generateUrl');
    var path = __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_routing_path__["a" /* generate */](obj);
    var uri = generatePathUri({ path: path, queryParameters: queryParameters, hash: hash });
    if (includeOrigin) {
        uri.origin(currentOrigin());
    }
    return uri.toString();
}
function generatePath(_a) {
    var path = _a.path;
    assertIsInitialized('generatePath');
    return generatePathUri({ path: path });
}
function recognize(url) {
    assertIsInitialized('recognize');
    var obj = null;
    var uri = __WEBPACK_IMPORTED_MODULE_0_urijs__(url);
    var path = recognizePath(uri);
    if (Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["isString"])(path)) {
        obj = __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_routing_path__["c" /* recognize */](path);
    }
    // @types/urijs fails and declares that query(true) returns Object
    var queryParameters = uri.query(true);
    var hash = extractHash(uri);
    return { path: path, obj: obj, queryParameters: queryParameters, hash: hash };
}
function recognizePath(uri) {
    if (isLocalUri(uri)) {
        return extractPath(uri);
    }
    return null;
}
function isLocalUrl(url) {
    var uri = __WEBPACK_IMPORTED_MODULE_0_urijs__(url);
    return isLocalUri(uri);
}
function isLocalUri(uri) {
    if (!uri.is('absolute')) {
        return true;
    }
    if (uri.origin() !== currentOrigin()) {
        return false;
    }
    return true;
}
function assertIsInitialized(methodName) {
    if (!isInitialized) {
        scrivito.logError('Error from Scrivito SDK: No application configured, cannot initialize routing.');
        throw new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__["e" /* InternalError */](methodName + " can't be called before init.");
    }
}
function extractPath(uri) {
    var path = uri.path();
    if (path.substring(0, basePath.length) !== basePath) {
        return null;
    }
    return path.substring(basePath.length);
}
function generatePathUri(_a) {
    var path = _a.path, queryParameters = _a.queryParameters, hash = _a.hash;
    var normalizedPath = ("/" + basePath + "/" + path).replace(/\/+/g, '/');
    var uri = __WEBPACK_IMPORTED_MODULE_0_urijs__('').pathname(normalizedPath);
    if (queryParameters) {
        uri.query(queryParameters);
    }
    if (hash) {
        uri.hash(hash);
    }
    return uri;
}
function extractHash(uri) {
    var hash = uri.hash();
    if (hash === '') {
        return null;
    }
    return hash;
}
function currentOrigin() {
    return __WEBPACK_IMPORTED_MODULE_0_urijs__(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_window_proxy__["c" /* location */]()).origin();
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return devicePixelRatio; });
/* unused harmony export history */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return navigator; });
/* unused harmony export onpopstate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return screen; });
/* unused harmony export setOnpopstate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDocument; });
/* unused harmony export proxiedWindow */
function devicePixelRatio() {
  var windowObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  return windowObject.devicePixelRatio || 1;
}

function location() {
  return window.location;
}

function navigator() {
  return window.navigator;
}

function redirectTo(newLocation) {
  window.location.assign(newLocation);
}

function history() {
  return window.history;
}

function onpopstate() {
  return window.onpopstate;
}

function setOnpopstate(value) {
  window.onpopstate = value;
}

function screen() {
  return window.screen;
}

function getDocument() {
  return document;
}

function proxiedWindow() {
  return window;
}



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cmsRetrieval; });
/* harmony export (immutable) */ __webpack_exports__["b"] = replaceCmsRetrieval;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_assert_valid_current_workspace_id__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_binary_metadata_retrieval__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_obj_retrieval__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_obj_query_retrieval__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_facet_query_retrieval__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_binary_urls_retrieval__ = __webpack_require__(120);






var cmsRetrieval = {
    retrieveObj: function (currentWorkspaceId, id) {
        Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_assert_valid_current_workspace_id__["a" /* default */])(currentWorkspaceId);
        return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_obj_retrieval__["a" /* retrieveObj */])(id);
    },
    retrieveObjQuery: function (currentWorkspaceId, params) {
        Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_assert_valid_current_workspace_id__["a" /* default */])(currentWorkspaceId);
        return Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_obj_query_retrieval__["a" /* retrieve */])(params);
    },
    retrieveFacetQuery: function (currentWorkspaceId, params) {
        Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_assert_valid_current_workspace_id__["a" /* default */])(currentWorkspaceId);
        return Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_facet_query_retrieval__["a" /* default */])(currentWorkspaceId, params);
    },
    retrieveBinaryMetadata: function (binaryId) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_binary_metadata_retrieval__["a" /* retrieveBinaryMetadata */])(binaryId);
    },
    retrieveBinaryUrls: function (binaryId, transformation) {
        return Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_binary_urls_retrieval__["a" /* retrieveBinaryUrls */])(binaryId, transformation);
    },
};
function replaceCmsRetrieval(newCmsRetrieval) {
    cmsRetrieval = newCmsRetrieval;
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = prettyPrint;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

function prettyPrint(input) {
  try {
    if (Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isFunction"])(input)) {
      return printFunction(input);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isObject"])(input)) {
      return printObject(input);
    }

    return printTruncated(input);
  } catch (_e) {
    return '';
  }
}

function printObject(object) {
  var basicContent = object._scrivitoPrivateContent;

  if (basicContent && Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isFunction"])(basicContent.toPrettyPrint)) {
    return basicContent.toPrettyPrint();
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isElement"])(object)) {
    return "[object HTMLElement ".concat(printTruncated(object.outerHTML), "]");
  }

  return printTruncated(object);
}

function printFunction(fn) {
  var schema = fn._scrivitoPrivateSchema;

  if (schema) {
    return "[class ".concat(schema.name, "]");
  }

  if (fn.prototype && fn.prototype.isReactComponent) {
    var name = fn.displayName || fn.name;
    return "[class React.Component \"".concat(name, "\"]");
  }

  return truncate(fn.toString());
}

function printTruncated(input) {
  var stringified = JSON.stringify(input);

  if (stringified) {
    return truncate(stringified);
  }

  return stringified;
}

function truncate(string) {
  if (string.length > 100) {
    return "".concat(string.slice(0, 100), "...");
  }

  return string;
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = browseTo;
/* harmony export (immutable) */ __webpack_exports__["d"] = pushWith;
/* harmony export (immutable) */ __webpack_exports__["e"] = replaceWith;
/* harmony export (immutable) */ __webpack_exports__["a"] = activate;
/* harmony export (immutable) */ __webpack_exports__["c"] = deactivate;
/* harmony export (immutable) */ __webpack_exports__["f"] = useHistory;
/* unused harmony export reset */
/* unused harmony export isActive */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_routing__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_current_page__ = __webpack_require__(22);






var history;
var pauseHistoryListening = false;
var unlistenHistory;
var _isActive = false;
function browseTo(resource) {
    history.push(resource);
}
function pushWith(_a) {
    var obj = _a.obj, queryParameters = _a.queryParameters, hash = _a.hash;
    var scrivitoHash = hash || null;
    var state = {
        scrivitoObjId: obj.id(),
        scrivitoQueryParameters: queryParameters,
        scrivitoHash: scrivitoHash,
    };
    var path = Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_routing__["b" /* generateUrl */])({ obj: obj, queryParameters: queryParameters, hash: scrivitoHash });
    var currentState = history.location.state;
    if (isScrivitoLocationState(currentState) &&
        currentState.scrivitoObjId === state.scrivitoObjId &&
        currentState.scrivitoHash === state.scrivitoHash &&
        Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isEqual"])(currentState.scrivitoQueryParameters, state.scrivitoQueryParameters)) {
        // noop;
        return;
    }
    withHistoryListeningPause(function () { return history.push(path, state); });
}
function replaceWith(_a) {
    var obj = _a.obj, queryParameters = _a.queryParameters, hash = _a.hash;
    var scrivitoHash = hash || null;
    var state = {
        scrivitoObjId: obj.id(),
        scrivitoQueryParameters: queryParameters,
        scrivitoHash: scrivitoHash,
    };
    var path = Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_routing__["b" /* generateUrl */])({ obj: obj, queryParameters: queryParameters, hash: scrivitoHash });
    withHistoryListeningPause(function () { return history.replace(path, state); });
}
function updateCurrentPage() {
    Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_current_page__["d" /* replaceCurrentPage */])(function () {
        var _a = recognizeLocation(history.location), obj = _a.obj, queryParameters = _a.queryParameters, hash = _a.hash;
        if (obj) {
            return { obj: obj, queryParameters: queryParameters, hash: hash };
        }
        return { queryParameters: queryParameters, hash: hash };
    });
}
function activate() {
    if (!_isActive) {
        listenToHistory();
        _isActive = true;
    }
}
function deactivate() {
    if (unlistenHistory) {
        unlistenHistory();
    }
    Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_current_page__["e" /* setCurrentPage */])(function () { return ({ obj: null }); });
    _isActive = false;
}
function useHistory(newHistory) {
    if (newHistory.createHref({ pathname: '/' }) !== '/') {
        throw new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Expected a history without a preconfigured basename.' +
            ' For further details, see: https://www.scrivito.com/js-sdk/useHistory');
    }
    history = newHistory;
    if (_isActive) {
        listenToHistory();
    }
}
// for test purposes only
function reset() {
    if (unlistenHistory) {
        unlistenHistory();
    }
    pauseHistoryListening = false;
}
// for test purposes only
function isActive() {
    return _isActive;
}
function listenToHistory() {
    if (unlistenHistory) {
        unlistenHistory();
    }
    ensureHistoryIsAvailable();
    unlistenHistory = history.listen(function (location, action) {
        if (pauseHistoryListening) {
            return;
        }
        if (action === 'POP') {
            var state = location.state;
            onPopState({ state: state });
        }
        if (action === 'REPLACE') {
            Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_current_page__["d" /* replaceCurrentPage */])(function () { return recognizeLocation(location); });
        }
        if (action === 'PUSH') {
            Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_current_page__["d" /* replaceCurrentPage */])(function () { return recognizeLocation(location); });
        }
    });
    updateCurrentPage();
}
function onPopState(_a) {
    var state = _a.state;
    if (!isScrivitoLocationState(state)) {
        updateCurrentPage();
        return;
    }
    var objId = state.scrivitoObjId;
    var hash = state.scrivitoHash;
    var queryParameters = state.scrivitoQueryParameters;
    Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_current_page__["d" /* replaceCurrentPage */])(function () { return ({ obj: __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_obj__["a" /* default */].get(objId), queryParameters: queryParameters, hash: hash }); });
}
function isScrivitoLocationState(state) {
    return state && state.scrivitoObjId !== undefined;
}
function recognizeLocation(location) {
    var pathname = location.pathname, search = location.search, hash = location.hash;
    return Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_routing__["f" /* recognize */])("" + pathname + search + hash);
}
function withHistoryListeningPause(fn) {
    pauseHistoryListening = true;
    fn();
    pauseHistoryListening = false;
}
function ensureHistoryIsAvailable() {
    if (!history) {
        history = Object(__WEBPACK_IMPORTED_MODULE_1_history__["a" /* createBrowserHistory */])();
    }
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEditingMode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);

function isEditingMode() {
  if (__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */]) {
    return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].isEditingMode();
  }

  return false;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSystemAttribute;
function isSystemAttribute(attributeName) {
  return attributeName[0] === '_';
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = deserializeAsInteger;
/* harmony export (immutable) */ __webpack_exports__["f"] = isValidInteger;
/* harmony export (immutable) */ __webpack_exports__["e"] = isValidFloat;
/* harmony export (immutable) */ __webpack_exports__["a"] = deserializeAsDate;
/* harmony export (immutable) */ __webpack_exports__["g"] = parseStringToDate;
/* harmony export (immutable) */ __webpack_exports__["c"] = formatDateToString;
/* harmony export (immutable) */ __webpack_exports__["d"] = isValidDateString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_errors__ = __webpack_require__(1);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var INTEGER_RANGE_START = -9007199254740991;
var INTEGER_RANGE_END = 9007199254740991;
var BACKEND_FORMAT_REGEXP = /^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/;
function deserializeAsInteger(value) {
  if (__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isString(value)) {
    if (value.match(/^-?\d+$/)) {
      return convertToInteger(value);
    }

    return null;
  }

  return convertToInteger(value);
}
function isValidInteger(value) {
  return isInteger(value) && INTEGER_RANGE_START <= value && value <= INTEGER_RANGE_END;
}
function isValidFloat(value) {
  return __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isNumber(value) && __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isFinite(value);
}
function deserializeAsDate(value) {
  if (!__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isString(value)) {
    return null;
  }

  if (!isValidDateString(value)) {
    throw new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_errors__["e" /* InternalError */]("The value is not a valid ISO date time: \"".concat(value, "\""));
  }

  return parseStringToDate(value);
}
function parseStringToDate(dateString) {
  if (!dateString) {
    return;
  }

  var _dateString$match = dateString.match(BACKEND_FORMAT_REGEXP),
      _dateString$match2 = _slicedToArray(_dateString$match, 7),
      _match = _dateString$match2[0],
      year = _dateString$match2[1],
      month = _dateString$match2[2],
      day = _dateString$match2[3],
      hours = _dateString$match2[4],
      minutes = _dateString$match2[5],
      seconds = _dateString$match2[6];

  return new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
}
function formatDateToString(date) {
  var yearMonth = "".concat(date.getUTCFullYear()).concat(pad(date.getUTCMonth() + 1));
  var dateHours = "".concat(pad(date.getUTCDate())).concat(pad(date.getUTCHours()));
  var minutesSeconds = "".concat(pad(date.getUTCMinutes())).concat(pad(date.getUTCSeconds()));
  return "".concat(yearMonth).concat(dateHours).concat(minutesSeconds);
}
function isValidDateString(dateString) {
  return __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isString(dateString) && dateString.match(/^\d{14}$/);
}

function pad(number) {
  return number < 10 ? "0".concat(number) : number;
}

function isInteger(value) {
  return __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isNumber(value) && __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isFinite(value) && Math.floor(value) === value;
}

function convertToInteger(valueFromBackend) {
  var intValue = parseInt(valueFromBackend, 10);

  if (intValue === 0) {
    return 0; // otherwise -0 could be returned.
  } else if (isValidInteger(intValue)) {
    return intValue;
  }

  return null;
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPERATORS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_types__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_obj_query_store__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_facet_query__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_attribute_inflection__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_pretty_print__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_iterable__ = __webpack_require__(141);









var OPERATORS = [
    'contains',
    'containsPrefix',
    'equals',
    'startsWith',
    'isGreaterThan',
    'isLessThan',
    'linksTo',
    'refersTo',
];
var NEGATABLE_OPERATORS = ['equals', 'startsWith', 'isGreaterThan', 'isLessThan'];
var BOOSTABLE_OPERATORS = ['contains', 'containsPrefix'];
var DEFAULT_BATCH_SIZE = 100;
var DEFAULT_PARAMS = { query: [] };
var BasicObjSearch = /** @class */ (function () {
    function BasicObjSearch(params) {
        if (params === void 0) { params = DEFAULT_PARAMS; }
        var query = [];
        this._query = query.concat(params.query);
        this._batchSize = params.batchSize;
        this._offset = params.offset;
        this._sortBy = params.sortBy;
        this._sortDirection = params.sortDirection;
        this._includeDeleted = params.includeDeleted;
    }
    BasicObjSearch.prototype.and = function (attributeOrSearch, operator, value, boost) {
        if (attributeOrSearch instanceof BasicObjSearch) {
            this._query = this._query.concat(attributeOrSearch._query);
        }
        else {
            if (operator === undefined) {
                throw new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Missing operator to search with');
            }
            if (value === undefined) {
                throw new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Missing value to search (specify "null" for missing)');
            }
            var field = attributeOrSearch;
            var subQuery = buildSubQuery(field, operator, value);
            if (boost) {
                assertBoostableOperator(operator);
                subQuery.boost = underscoreBoostAttributes(boost);
            }
            this._query.push(subQuery);
        }
        return this;
    };
    BasicObjSearch.prototype.andNot = function (attribute, operator, value) {
        var subQuery = buildSubQuery(attribute, operator, value);
        assertNegatableOperator(operator);
        subQuery.negate = true;
        this._query.push(subQuery);
        return this;
    };
    BasicObjSearch.prototype.offset = function (offset) {
        this._offset = offset;
        return this;
    };
    BasicObjSearch.prototype.order = function (attribute, direction) {
        if (direction === void 0) { direction = 'asc'; }
        this._sortBy = underscoreAttribute(attribute);
        this._sortDirection = direction;
        return this;
    };
    BasicObjSearch.prototype.batchSize = function (batchSize) {
        this._batchSize = batchSize;
        return this;
    };
    BasicObjSearch.prototype.includeDeleted = function () {
        this._includeDeleted = true;
        return this;
    };
    BasicObjSearch.prototype.count = function () {
        return this.getObjDataQuery().count();
    };
    BasicObjSearch.prototype.first = function () {
        return this.take(1)[0] || null;
    };
    BasicObjSearch.prototype.take = function (count) {
        var oldBatchSize = this._batchSize;
        try {
            this._batchSize = count === undefined ? 1000 : count;
            return Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_iterable__["a" /* arrayFromIterable */])(this, count);
        }
        finally {
            this._batchSize = oldBatchSize;
        }
    };
    BasicObjSearch.prototype.iterator = function () {
        var queryIterator = this.getObjDataQuery().iterator();
        return {
            next: function () {
                var _a = queryIterator.next(), done = _a.done, value = _a.value;
                if (done) {
                    return { done: true };
                }
                return { done: false, value: new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__["a" /* default */](value) };
            },
        };
    };
    BasicObjSearch.prototype.getObjDataQuery = function () {
        return __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_obj_query_store__["b" /* get */](this.params(), this.getBatchSize());
    };
    BasicObjSearch.prototype.getBatchSize = function () {
        return this._batchSize || DEFAULT_BATCH_SIZE;
    };
    BasicObjSearch.prototype.facet = function (attribute, options) {
        var facetOptions;
        if (options === undefined) {
            facetOptions = {};
        }
        else {
            facetOptions = assertValidFacetOptions(options);
        }
        var facetQuery = new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_facet_query__["a" /* default */](underscoreAttribute(attribute), facetOptions, this._query);
        return facetQuery.result();
    };
    BasicObjSearch.prototype.store = function (objIds, total) {
        __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_obj_query_store__["d" /* store */](this.params(), objIds, total);
    };
    BasicObjSearch.prototype.params = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_4_underscore__["omit"])({
            query: this._query,
            offset: this._offset,
            sortBy: this._sortBy,
            sortDirection: this._sortDirection,
            includeDeleted: this._includeDeleted,
            batchSize: this._batchSize,
        }, __WEBPACK_IMPORTED_MODULE_4_underscore__["isUndefined"]);
    };
    return BasicObjSearch;
}());
/* harmony default export */ __webpack_exports__["b"] = (BasicObjSearch);
function buildSubQuery(fieldInput, operatorInput, valueInput) {
    var field = convertAttribute(fieldInput);
    var operator = convertOperator(operatorInput);
    var value = convertValue(valueInput);
    return { field: field, operator: operator, value: value };
}
function assertBoostableOperator(operator) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_4_underscore__["contains"])(BOOSTABLE_OPERATORS, operator)) {
        throw new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__["b" /* ArgumentError */]("Boosting operator \"" + operator + "\" is invalid.");
    }
}
function assertNegatableOperator(operator) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_4_underscore__["contains"])(NEGATABLE_OPERATORS, operator)) {
        throw new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__["b" /* ArgumentError */]("Negating operator \"" + operator + "\" is invalid.");
    }
}
function convertValue(value) {
    if (Object(__WEBPACK_IMPORTED_MODULE_4_underscore__["isArray"])(value)) {
        return Object(__WEBPACK_IMPORTED_MODULE_4_underscore__["map"])(value, convertSingleValue);
    }
    return convertSingleValue(value);
}
function convertSingleValue(value) {
    if (Object(__WEBPACK_IMPORTED_MODULE_4_underscore__["isDate"])(value)) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_types__["c" /* formatDateToString */])(value);
    }
    if (value instanceof __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__["a" /* default */]) {
        return value.id();
    }
    return value;
}
function convertOperator(operator) {
    if (!isValidOperator(operator)) {
        throw new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__["b" /* ArgumentError */]("Operator \"" + operator + "\" is invalid.");
    }
    return Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_attribute_inflection__["d" /* underscore */])(operator);
}
function isValidOperator(operator) {
    return Object(__WEBPACK_IMPORTED_MODULE_4_underscore__["contains"])(OPERATORS, operator);
}
function convertAttribute(attribute) {
    if (Object(__WEBPACK_IMPORTED_MODULE_4_underscore__["isArray"])(attribute)) {
        return Object(__WEBPACK_IMPORTED_MODULE_4_underscore__["map"])(attribute, underscoreAttribute);
    }
    return underscoreAttribute(attribute);
}
function underscoreBoostAttributes(boost) {
    var boostWithUnderscoreAttributes = {};
    Object(__WEBPACK_IMPORTED_MODULE_4_underscore__["each"])(boost, function (value, attributeName) {
        var underscoredAttributeName = underscoreAttribute(attributeName);
        boostWithUnderscoreAttributes[underscoredAttributeName] = value;
    });
    return boostWithUnderscoreAttributes;
}
function underscoreAttribute(attributeName) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_attribute_inflection__["b" /* isCamelCase */])(attributeName)) {
        throw new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__["b" /* ArgumentError */]("Attribute name \"" + attributeName + "\" is not camel case.");
    }
    return Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_attribute_inflection__["d" /* underscore */])(attributeName);
}
var VALID_FACET_OPTIONS = ['limit', 'includeObjs'];
function assertValidFacetOptions(options) {
    var invalidOptions = __WEBPACK_IMPORTED_MODULE_4_underscore__["without"].apply(void 0, [Object.keys(options)].concat(VALID_FACET_OPTIONS));
    if (invalidOptions.length) {
        throw new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Invalid facet options: ' +
            (Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_pretty_print__["a" /* default */])(invalidOptions) + ". Valid options: " + VALID_FACET_OPTIONS));
    }
    return options;
}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return provideEditingConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEditingConfigFor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_type_checker__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_model_types_js__ = __webpack_require__(20);



var editingConfigForClass = {};
function getEditingConfigFor(className, propertyName) {
    var config = editingConfigForClass[className];
    if (!config) {
        return;
    }
    return config[propertyName];
}
var EnumValueLocalizationType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].struct({
    value: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String,
    title: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String,
});
var AttributesConfigType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].dict(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String, __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].struct({
    title: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
    description: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
    values: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(EnumValueLocalizationType)),
}));
var PropertiesGroupsType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].struct({
    title: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String,
    component: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
    properties: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String)),
}));
var InitialContentType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].dict(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String, __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([
    __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_model_types_js__["b" /* LinkType */],
    __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Date,
    __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Function,
    __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Nil,
    __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Number,
    __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String,
    __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_model_types_js__["b" /* LinkType */]),
    __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_model_types_js__["e" /* WidgetType */]),
    __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
]));
var EditingConfigType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].struct({
    attributes: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(AttributesConfigType),
    propertiesGroups: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(PropertiesGroupsType),
    title: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
    description: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
    thumbnail: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
    titleForContent: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Function),
    descriptionForContent: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Function),
    hideInSelectionDialogs: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Boolean),
    properties: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String)),
    initialContent: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(InitialContentType),
});
var checkProvideEditingConfig = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('provideEditingConfig', [
    ['className', __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String],
    ['editingConfig', EditingConfigType],
], { docPermalink: 'js-sdk/provideEditingConfig' });
function provideEditingConfig(className, editingConfig) {
    checkProvideEditingConfig(className, editingConfig);
    editingConfigForClass[className] = editingConfig;
}



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};
var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};
var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};
var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};
var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};
var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};
var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;
  return path;
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clearComponentRegistry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getComponentForAppClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getComponentForId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return registerComponentForAppClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return registerComponentForId; });
var registry = {};

function registerComponentForId(componentId, componentClass) {
  registry[componentId] = componentClass;
}

function getComponentForId(componentId) {
  return registry[componentId] || null;
}

function registerComponentForAppClass(className, componentClass) {
  registerComponentForId(appClassId(className), componentClass);
}

function getComponentForAppClass(className) {
  return getComponentForId(appClassId(className));
}

function appClassId(className) {
  return "appClass-".concat(className);
} // For test purpose only.


function clearComponentRegistry() {
  registry = {};
}



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ContextContainer = /** @class */ (function () {
    function ContextContainer() {
    }
    ContextContainer.prototype.current = function () {
        return this.currentContext;
    };
    ContextContainer.prototype.runWith = function (valueForFunction, fn) {
        var before = this.currentContext;
        try {
            this.currentContext = valueForFunction;
            return fn();
        }
        finally {
            this.currentContext = before;
        }
    };
    return ContextContainer;
}());
/* harmony default export */ __webpack_exports__["a"] = (ContextContainer);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return objReplicationPool; });
/* harmony export (immutable) */ __webpack_exports__["b"] = replaceObjReplicationPool;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_replication__ = __webpack_require__(56);


var ObjReplicationPool = /** @class */ (function () {
    function ObjReplicationPool() {
        this._replicationCache = {};
        this._disabled = false;
        this._writeWriteCallbacks = {};
        this._subscriptionToken = 0;
    }
    ObjReplicationPool.prototype.get = function (id) {
        if (!this._replicationCache[id]) {
            this._replicationCache[id] = new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_replication__["a" /* default */](id);
        }
        return this._replicationCache[id];
    };
    ObjReplicationPool.prototype.subscribeWrites = function (callback) {
        this._subscriptionToken += 1;
        this._writeWriteCallbacks[this._subscriptionToken] = callback;
        return this._subscriptionToken;
    };
    ObjReplicationPool.prototype.unsubscribeWrites = function (token) {
        delete this._writeWriteCallbacks[token];
    };
    ObjReplicationPool.prototype.isDisabled = function () {
        return this._disabled;
    };
    ObjReplicationPool.prototype.writeStarted = function (promise) {
        Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["each"])(this._writeWriteCallbacks, function (callback) {
            callback(promise);
        });
    };
    // For test purpose only.
    ObjReplicationPool.prototype.disableReplication = function () {
        this._disabled = true;
    };
    // For test purpose only.
    ObjReplicationPool.prototype.enableReplication = function () {
        this._disabled = false;
    };
    // For test purpose only.
    ObjReplicationPool.prototype.clearWriteCallbacks = function () {
        this._writeWriteCallbacks = {};
    };
    // For test purpose only.
    ObjReplicationPool.prototype.clearCache = function () {
        this._replicationCache = {};
    };
    return ObjReplicationPool;
}());
var objReplicationPool = new ObjReplicationPool();
function replaceObjReplicationPool(newObjReplicationPool) {
    objReplicationPool = newObjReplicationPool;
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = preload;
/* harmony export (immutable) */ __webpack_exports__["a"] = createObjData;
/* harmony export (immutable) */ __webpack_exports__["e"] = store;
/* unused harmony export setNonexistent */
/* harmony export (immutable) */ __webpack_exports__["d"] = set;
/* unused harmony export setError */
/* harmony export (immutable) */ __webpack_exports__["b"] = get;
/* unused harmony export clearCache */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_data__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_replication_pool__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_loadable_load__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__ = __webpack_require__(3);




function preload(id) {
  Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_loadable_load__["a" /* default */])(function () {
    return get(id);
  });
}
function createObjData(id) {
  var objData = objDataFor(id);
  objData.set(null);
  __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_replication_pool__["a" /* objReplicationPool */].get(id).notifyBackendState(null);
  return objData;
}
function store(primitiveObj) {
  var id = primitiveObj._id;

  if (!objDataFor(id).isAvailable()) {
    set(id, primitiveObj);
  }

  __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_replication_pool__["a" /* objReplicationPool */].get(id).notifyBackendState(primitiveObj);
} // For test purpose only.

function setNonexistent(id) {
  set(id, {
    _deleted: true
  });
}
function set(id, primitiveObj) {
  objDataFor(id).set(primitiveObj);
} // For test purpose only.

function setError(id, error) {
  objDataFor(id).setError(error);
}
function get(id) {
  var objData = objDataFor(id);

  if (!objData.ensureAvailable()) {
    return;
  }

  return objData;
}
function clearCache() {
  cacheStore().clear();
}

function cacheStore() {
  return __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__["b" /* cmsState */].subState('objData');
}

function objDataFor(id) {
  return new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_data__["a" /* default */](id, cacheStore().subState(id));
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = finishLoading;
/* harmony export (immutable) */ __webpack_exports__["c"] = registerLoadingActivity;
/* harmony export (immutable) */ __webpack_exports__["b"] = registerAsLoadingActivity;
/* unused harmony export reset */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_deferred__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_next_tick__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_promise_helper__ = __webpack_require__(61);




var loadingCount = 0;
var deferred;
function finishLoading() {
    if (!deferred) {
        deferred = new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_deferred__["a" /* default */]();
        Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_next_tick__["a" /* default */])(updateLoadingState);
    }
    return deferred.promise;
}
function registerLoadingActivity() {
    loadingCount += 1;
    return createUnregister();
}
function registerAsLoadingActivity(promise) {
    var unregister = registerLoadingActivity();
    return __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_promise_helper__["a" /* finally */](promise, unregister);
}
// For test purpose only.
function reset() {
    deferred = undefined;
    loadingCount = 0;
}
function createUnregister() {
    var unregisterHasBeenCalled = false;
    return function unregister() {
        if (unregisterHasBeenCalled) {
            throw new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_errors__["e" /* InternalError */]('Unregister must not be called twice');
        }
        loadingCount -= 1;
        unregisterHasBeenCalled = true;
        if (loadingCount === 0) {
            Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_next_tick__["a" /* default */])(updateLoadingState);
        }
    };
}
function updateLoadingState() {
    if (deferred && loadingCount === 0) {
        deferred.resolve(undefined);
        deferred = undefined;
    }
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function () {};

if (Object({"SCRIVITO_VERSION":"1.2.0-rc1-500-g882b9cad69"}).NODE_ENV !== 'production') {
  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsAreEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resolve_pathname__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_value_equal__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PathUtils__ = __webpack_require__(35);
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};




var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = Object(__WEBPACK_IMPORTED_MODULE_2__PathUtils__["d" /* parsePath */])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(__WEBPACK_IMPORTED_MODULE_0_resolve_pathname__["a" /* default */])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};
var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(__WEBPACK_IMPORTED_MODULE_1_value_equal__["a" /* default */])(a.state, b.state);
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = basicUrlWithOriginFor;
/* harmony export (immutable) */ __webpack_exports__["a"] = basicUrlFor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_link__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_binary__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_is_binary_obj__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_routing__ = __webpack_require__(25);






function basicUrlWithOriginFor(target) {
    assertValidTarget(target);
    return urlFor(target, true);
}
function basicUrlFor(target) {
    assertValidTarget(target);
    return urlFor(target, false);
}
function urlFor(target, includeOrigin) {
    if (target instanceof __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_link__["a" /* default */]) {
        return urlForLink(target, includeOrigin);
    }
    if (target instanceof __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_binary__["a" /* default */]) {
        return urlForBinary(target);
    }
    return urlForObj(target, includeOrigin);
}
function urlForObj(obj, includeOrigin) {
    if (Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_is_binary_obj__["a" /* default */])(obj)) {
        return urlForBinaryObj(obj, includeOrigin);
    }
    return urlForNonBinaryObj(obj, includeOrigin);
}
function assertValidTarget(target) {
    if (!target) {
        throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Missing target.');
    }
    if (target instanceof __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_link__["a" /* default */]) {
        return;
    }
    if (target instanceof __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__["a" /* default */]) {
        return;
    }
    if (target instanceof __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_binary__["a" /* default */]) {
        return;
    }
    throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Target is invalid. Valid targets are instances of Obj or Link.');
}
function urlForBinary(binary) {
    return binary.url();
}
function urlForBinaryObj(obj, includeOrigin) {
    var blob = obj.get('blob', ['binary']);
    if (blob) {
        return urlForBinary(blob);
    }
    return urlForNonBinaryObj(obj, includeOrigin);
}
function urlForLink(link, includeOrigin) {
    if (link.isExternal()) {
        return link.url();
    }
    var obj = link.obj();
    if (!obj) {
        throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Missing link target.');
    }
    return urlForObj(obj, includeOrigin);
}
function urlForNonBinaryObj(obj, includeOrigin) {
    return Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_routing__["b" /* generateUrl */])({ obj: obj, includeOrigin: includeOrigin });
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = navigateTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_scroll_window_to_top__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_model_types__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_global_state__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_type_checker__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_current_page__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_browser_location__ = __webpack_require__(29);









function navigateTo(target, options) {
  Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_global_state__["c" /* failIfFrozen */])('navigateTo');
  checkNavigateTo(target, options);
  var queryParameters;
  var hash;

  if (options) {
    queryParameters = options.params || {};
    hash = options.hash;
    var convenienceParams = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["omit"])(options, 'hash', 'params');
    checkNavigateToConvenience(target, convenienceParams);
    queryParameters = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["extend"])(convenienceParams, queryParameters);
  }

  Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_current_page__["e" /* setCurrentPage */])(function () {
    return {
      obj: Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_realm_wrap_in_app_class__["c" /* unwrapAppClassValue */])(Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isFunction"])(target) ? target() : target),
      queryParameters: queryParameters,
      hash: hash
    };
  }, onBeforeSet);
}

function onBeforeSet(_ref) {
  var obj = _ref.obj,
      queryParameters = _ref.queryParameters,
      hash = _ref.hash;

  if (obj) {
    Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_scroll_window_to_top__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_browser_location__["d" /* pushWith */])({
      obj: obj,
      queryParameters: queryParameters,
      hash: hash
    });
  }
}

var TargetType = __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].Function, __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].irreducible('null', function (x) {
  return x === null;
}), __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_model_types__["d" /* ObjType */], __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_model_types__["b" /* LinkType */]]);
var ParamsValueType = __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].dict(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].String, __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].String));
var checkNavigateTo = Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('navigateTo', [['target', TargetType], ['options', __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].struct({
  hash: __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
  params: __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(ParamsValueType)
}, {
  strict: false
}))]], {
  docPermalink: 'js-sdk/navigateTo'
});
var checkNavigateToConvenience = Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('navigateTo', [['target', TargetType], ['options', __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(ParamsValueType)]], {
  docPermalink: 'js-sdk/navigateTo'
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_binary__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_type_checker__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_model_types__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var FutureBinary =
/*#__PURE__*/
function () {
  function FutureBinary(sourceSpec) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, FutureBinary);

    var filename;

    if (sourceSpec.idToCopy) {
      this.idToCopy = sourceSpec.idToCopy;
      this.contentType = options.contentType;
      filename = options.filename;
    } else {
      var source = sourceSpec.source;
      this.source = source;
      this.contentType = options.contentType || source.type;
      filename = options.filename || source.name;
    }

    if (filename) {
      this.filename = filename.replace(/[^\w\-_\.$]/g, '-');
    }
  } // public API


  _createClass(FutureBinary, [{
    key: "into",
    value: function into(target) {
      checkInto(target);
      Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__["c" /* failIfFrozen */])('Changing CMS content');
      return this.intoId(target.id());
    }
  }, {
    key: "intoId",
    value: function intoId(targetId) {
      var binaryPromise;

      if (this.idToCopy) {
        binaryPromise = __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].copyBinary(this.idToCopy, targetId, this.filename, this.contentType);
      } else {
        binaryPromise = __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].uploadBinary(targetId, this.source, this.filename, this.contentType);
      }

      return binaryPromise.then(function (_ref) {
        var id = _ref.id;
        return new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_binary__["a" /* default */](id, false);
      });
    }
  }]);

  return FutureBinary;
}();

var checkInto = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('FutureBinary#into', [['target', __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_model_types__["d" /* ObjType */]]], {
  docPermalink: 'js-sdk/FutureBinary-into'
});
/* harmony default export */ __webpack_exports__["a"] = (FutureBinary);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_loadable_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_attribute_inflection__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_cms_retrieval__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_global_state__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_types__ = __webpack_require__(32);








var BackendBinaryMetadataType;
(function (BackendBinaryMetadataType) {
    BackendBinaryMetadataType["Date"] = "date";
    BackendBinaryMetadataType["Number"] = "number";
    BackendBinaryMetadataType["String"] = "string";
    BackendBinaryMetadataType["Stringlist"] = "stringlist";
})(BackendBinaryMetadataType || (BackendBinaryMetadataType = {}));
// public API
var MetadataCollection = /** @class */ (function () {
    function MetadataCollection(binaryId) {
        this._binaryId = binaryId;
        if (binaryId) {
            this._loadableData = new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_loadable_data__["b" /* default */]({
                state: state(binaryId),
                loader: loader(binaryId),
            });
        }
    }
    MetadataCollection.store = function (binaryId, response) {
        var loadableData = new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_loadable_loadable_data__["b" /* default */]({
            state: state(binaryId),
            loader: loader(binaryId),
        });
        // deserialize once, as a sanity check
        deserializeMetadata(response);
        loadableData.set(response);
    };
    // public API
    MetadataCollection.prototype.get = function (key) {
        assertCamelCase(key);
        var data = this._getData();
        if (data) {
            return data[Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_attribute_inflection__["d" /* underscore */])(key)] || null;
        }
        return null;
    };
    MetadataCollection.prototype.keys = function () {
        var data = this._getData();
        if (data) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["map"])(Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["keys"])(data), __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_attribute_inflection__["a" /* camelCase */]);
        }
        return [];
    };
    Object.defineProperty(MetadataCollection.prototype, "binaryId", {
        // For test purpose only.
        get: function () {
            return this._binaryId;
        },
        enumerable: true,
        configurable: true
    });
    MetadataCollection.prototype._getData = function () {
        if (this._loadableData) {
            var metadata = this._loadableData.get();
            if (metadata) {
                return deserializeMetadata(metadata);
            }
        }
    };
    return MetadataCollection;
}());
/* harmony default export */ __webpack_exports__["a"] = (MetadataCollection);
function loader(binaryId) {
    return function () { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_cms_retrieval__["a" /* cmsRetrieval */].retrieveBinaryMetadata(binaryId); };
}
function state(binaryId) {
    return __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_global_state__["b" /* cmsState */].subState('metadataCollection').subState(binaryId);
}
function deserializeMetadata(response) {
    var backendMetadata = response.meta_data;
    var metadata = {};
    for (var _i = 0, _a = Object.keys(backendMetadata); _i < _a.length; _i++) {
        var key = _a[_i];
        var _b = backendMetadata[key], backendType = _b[0], backendValue = _b[1];
        if (backendValue === null || backendValue === undefined) {
            throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["e" /* InternalError */]("Invalid backend value \"null\" or \"undefined\" for metadata \"" + key + "\"");
        }
        var value = void 0;
        if (backendType === BackendBinaryMetadataType.Date) {
            if (typeof backendValue === 'string') {
                value = Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_types__["a" /* deserializeAsDate */])(backendValue);
            }
            else {
                throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["e" /* InternalError */]("Invalid non-string backend value for a date metadata \"" + key + "\"");
            }
        }
        else {
            value = backendValue;
        }
        metadata[key] = value;
    }
    return metadata;
}
function assertCamelCase(key) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_attribute_inflection__["b" /* isCamelCase */])(key)) {
        throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["b" /* ArgumentError */]("Metadata key \"" + key + "\" is not in camel case.");
    }
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModelAccessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_schema__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var AppModelAccessor =
/*#__PURE__*/
function () {
  function AppModelAccessor(registry) {
    _classCallCheck(this, AppModelAccessor);

    this._registry = registry;
  }

  _createClass(AppModelAccessor, [{
    key: "getObj",
    value: function getObj(modelClass, id) {
      var instance = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__["a" /* default */].get(id);
      return this._checkObjClassAndWrapInAppClass(modelClass, instance);
    }
  }, {
    key: "getObjIncludingDeleted",
    value: function getObjIncludingDeleted(modelClass, id) {
      var instance = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__["a" /* default */].getIncludingDeleted(id);
      return this._checkObjClassAndWrapInAppClass(modelClass, instance);
    }
  }, {
    key: "read",
    value: function read(model, attributeName) {
      var basicField = __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_schema__["a" /* default */].basicFieldFor(model, attributeName);

      if (!basicField) {
        return;
      }

      var internalValue = basicField.get();
      return Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(this._registry, internalValue);
    }
  }, {
    key: "update",
    value: function update(model, attributes) {
      var appClassName = this._registry.objClassNameFor(model.constructor);

      if (!appClassName) {
        var baseClass;

        if (model.constructor === this._registry.defaultClassForObjs) {
          baseClass = 'Obj';
        } else {
          baseClass = 'Widget';
        }

        throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["b" /* ArgumentError */]("Updating is not supported on the base class \"".concat(baseClass, "\"."));
      }

      if (attributes.constructor !== Object) {
        throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["b" /* ArgumentError */]('The provided attributes are invalid. They have ' + 'to be an Object with valid Scrivito attribute values.');
      }

      var schema = __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_schema__["a" /* default */].forInstance(model);
      var attributesWithTypeInfo = Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_realm_wrap_in_app_class__["b" /* unwrapAppAttributes */])(attributes, schema, appClassName);

      model._scrivitoPrivateContent.update(attributesWithTypeInfo);
    }
  }, {
    key: "wrapInAppClass",
    value: function wrapInAppClass(instance) {
      return Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(this._registry, instance);
    }
  }, {
    key: "_checkObjClassAndWrapInAppClass",
    value: function _checkObjClassAndWrapInAppClass(modelClass, instance) {
      var objClassName = this._registry.objClassNameFor(modelClass);

      if (objClassName && objClassName !== instance.objClass()) {
        throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["h" /* ResourceNotFoundError */]("Obj with id \"".concat(instance.id(), "\" is not of type \"").concat(objClassName, "\"."));
      }

      return this.wrapInAppClass(instance);
    }
  }]);

  return AppModelAccessor;
}();



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(prompt == null, 'A history supports only one prompt at a time');
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["a"] = (createTransitionManager);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = replaceInternalLinks;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_urijs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_uri_for_obj_id__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_routing__ = __webpack_require__(25);



var REG_EXP = /\bobjid:([a-f0-9]{16})\b([^"']*)/g;
function replaceInternalLinks(htmlString) {
    return htmlString.replace(REG_EXP, function (backendUrl, objId) {
        var uri = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_uri_for_obj_id__["a" /* default */])(objId);
        var path = __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_routing__["g" /* recognizePath */](uri);
        if (path && __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_routing__["e" /* isLocalUrl */](path)) {
            var backendUri = __WEBPACK_IMPORTED_MODULE_0_urijs__(backendUrl);
            return uri.query(backendUri.query()).hash(backendUri.hash()).toString();
        }
        return uri.toString();
    });
}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getContentBrowserConfiguration;
/* unused harmony export resetContentBrowserConfiguration */
/* harmony export (immutable) */ __webpack_exports__["a"] = configureContentBrowser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_ui_adapter_compatible_value__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_type_checker__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_model_types__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_models_basic_obj_search__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);








var _filters;

function getContentBrowserConfiguration() {
  if (_filters) {
    return {
      filters: _filters
    };
  }
}
function resetContentBrowserConfiguration() {
  _filters = undefined;
} // public API

function configureContentBrowser(configuration) {
  if (!__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */]) {
    return;
  }

  checkConfigure(configuration);

  if (configuration.filters) {
    _filters = configuration.filters;
  }

  var baseFilter = configuration.baseFilter;

  if (baseFilter) {
    var baseQuery = baseFilter.query;

    if (baseQuery) {
      __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].configureContentBrowser(Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_ui_adapter_compatible_value__["a" /* default */])({
        baseQuery: baseQuery
      }));
    }
  }
}
var SearchFieldType = __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].String, __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].String)]);
var SearchOperatorType = __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].enums.of(Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["intersection"])(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_models_basic_obj_search__["a" /* OPERATORS */], ['contains', 'containsPrefix', 'equals', 'startsWith', 'isGreaterThan', 'isLessThan']));
var SearchValueType = __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].String, __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Date, __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Nil, __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Number, __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].String, __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Nil])), __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Date, __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Nil])), __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Number, __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Nil]))], 'SearchValue');
var FilterNodeType = __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].struct({
  title: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].String)
});
var FilterCollectionNodeType = FilterNodeType.extend({
  field: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(SearchFieldType),
  operator: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(SearchOperatorType),
  expanded: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Boolean)
});
var RadioOptionType = FilterNodeType.extend({
  value: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(SearchValueType),
  query: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_model_types__["c" /* ObjSearchType */]),
  selected: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Boolean)
});
var RadioFilterType = FilterCollectionNodeType.extend({
  type: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].enums.of(['radioButton']),
  options: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].dict(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].String, RadioOptionType)
}, 'RadioFilterDefinition');
var CheckboxOptionType = FilterNodeType.extend({
  value: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(SearchValueType),
  selected: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Boolean)
});
var CheckboxFilterType = FilterCollectionNodeType.extend({
  type: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].enums.of(['checkbox']),
  options: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].dict(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].String, CheckboxOptionType)
}, 'CheckboxFilterDefinition');
var TreeFilterType = __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].declare('TreeFilterDefinition');
TreeFilterType.define(FilterNodeType.extend({
  type: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].enums.of('tree')),
  icon: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
  query: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_model_types__["c" /* ObjSearchType */]),
  expanded: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Boolean),
  value: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(SearchValueType),
  field: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(SearchFieldType),
  operator: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(SearchOperatorType),
  selected: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].Boolean),
  options: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].dict(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].String, TreeFilterType))
}));
var FilterDefinitionType = __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([TreeFilterType, CheckboxFilterType, RadioFilterType]);

FilterDefinitionType.dispatch = function (definition) {
  switch (definition.type || 'tree') {
    case 'tree':
      return TreeFilterType;

    case 'radioButton':
      return RadioFilterType;

    case 'checkbox':
      return CheckboxFilterType;
  }
};

var FiltersType = __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].dict(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].String, FilterDefinitionType);
var BaseFilterType = __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].struct({
  query: __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_model_types__["c" /* ObjSearchType */]
});
var ConfigurationType = __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].struct({
  filters: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(FiltersType),
  baseFilter: __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(BaseFilterType)
}, 'Configuration');
var checkConfigure = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('configureContentBrowser', [['configuration', ConfigurationType]], {
  docPermalink: 'js-sdk/configureContentBrowser'
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uiAdapterCompatibleValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj_search__ = __webpack_require__(33);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Supported types must not exceed the supported types mentioned here:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm

 // (inner) values translated to undefined are removed from arrays and objects they are referred from

function uiAdapterCompatibleValue(value) {
  if (!value) {
    return value;
  }

  switch (_typeof(value)) {
    case 'string':
    case 'number':
    case 'boolean':
      return value;

    case 'object':
      if (_instanceof(value._scrivitoPrivateContent, __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj_search__["b" /* default */])) {
        return uiAdapterCompatibleValue(value._scrivitoPrivateContent.params());
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isDate"])(value)) {
        return value;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isArray"])(value)) {
        return uiCompatibleArrayValue(value);
      }

      return uiCompatibleObjectValue(value);
  }
}

function uiCompatibleArrayValue(array) {
  var copy = [];
  array.forEach(function (item) {
    var compatibleItem = uiAdapterCompatibleValue(item);

    if (compatibleItem !== undefined) {
      copy.push(compatibleItem);
    }
  });
  return copy;
}

function uiCompatibleObjectValue(object) {
  var copy = {};
  Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["each"])(object, function (value, key) {
    var compatibleValueForKey = uiAdapterCompatibleValue(value);

    if (compatibleValueForKey !== undefined) {
      copy[key] = compatibleValueForKey;
    }
  });
  return copy;
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WIDGET_TAG_CONTEXT_KEY; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_react_components_content_tag_menu_marker__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_components_option_marker__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_schema__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_react_extract_ids_from_content__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_is_editing_mode__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_app_support_window_registry__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_client_always_show_option_markers__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();














var WIDGET_TAG_CONTEXT_KEY = '_scrivitoWidget';
var WidgetTag = /** @class */ (function (_super) {
    __extends(WidgetTag, _super);
    function WidgetTag(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasFocus: false,
            isDragging: false,
            isFocusFadedOut: true,
        };
        _this.onMouseOver = _this.onMouseOver.bind(_this);
        _this.onMouseOut = _this.onMouseOut.bind(_this);
        _this.onWidgetFocus = _this.onWidgetFocus.bind(_this);
        _this.onWidgetBlur = _this.onWidgetBlur.bind(_this);
        _this.lockFocus = _this.lockFocus.bind(_this);
        _this.unlockFocus = _this.unlockFocus.bind(_this);
        _this.setDragState = _this.setDragState.bind(_this);
        return _this;
    }
    WidgetTag.prototype.componentDidMount = function () {
        this.registerDropZone();
        this.focusToken = scrivito.WidgetFocus.subscribe({
            onFocus: this.onWidgetFocus,
            onBlur: this.onWidgetBlur,
        });
    };
    WidgetTag.prototype.componentDidUpdate = function () {
        if (this.widgetRef !== this.dropZoneWidgetRef) {
            this.registerDropZone();
        }
    };
    WidgetTag.prototype.componentWillUnmount = function () {
        scrivito.WidgetFocus.unsubscribe(this.focusToken);
    };
    // Cleanup the context, so it is not visible to underlying application components.
    WidgetTag.prototype.getChildContext = function () {
        return _a = {},
            _a[WIDGET_TAG_CONTEXT_KEY] = null,
            _a;
        var _a;
    };
    WidgetTag.prototype.render = function () {
        var _this = this;
        var widget = this.context[WIDGET_TAG_CONTEXT_KEY];
        if (!widget) {
            throw new __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_errors__["i" /* ScrivitoError */]('Detected inappropriate placing of Scrivito.WidgetTag: ' +
                'It is intended to be used exclusively as top-level element inside a Widget component.');
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_is_editing_mode__["a" /* default */])()) {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](this.props.tag, Object(__WEBPACK_IMPORTED_MODULE_3_underscore__["omit"])(this.props, 'tag'));
        }
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](this.props.tag, Object(__WEBPACK_IMPORTED_MODULE_3_underscore__["extend"])(Object(__WEBPACK_IMPORTED_MODULE_3_underscore__["omit"])(this.props, 'tag', 'className', 'style'), {
            ref: function (widgetDomElement) {
                return (_this.widgetRef = widgetDomElement);
            },
            className: this.className(),
            style: this.style(),
            onMouseOver: this.onMouseOver,
            onMouseOut: this.onMouseOut,
            children: [
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_react_components_content_tag_menu_marker__["a" /* default */], { key: "menuMarker", widget: widget, setDragState: this.setDragState, onMouseOver: this.lockFocus, onMouseOut: this.unlockFocus })
            ].concat(__WEBPACK_IMPORTED_MODULE_1_react__["Children"].toArray(this.props.children), [
                this.renderOptionMarker('top'),
                this.renderOptionMarker('bottom'),
            ]),
        }, this.dataProps()));
    };
    WidgetTag.prototype.setDragState = function (isDragging) {
        this.setState({ isDragging: isDragging });
    };
    WidgetTag.prototype.className = function () {
        if (this.hasVisibleFocus()) {
            if (this.props.className) {
                return this.props.className + " scrivito_active scrivito_entered";
            }
            return 'scrivito_active scrivito_entered';
        }
        return this.props.className;
    };
    WidgetTag.prototype.hasVisibleFocus = function () {
        return this.state.hasFocus && !this.state.isFocusFadedOut;
    };
    WidgetTag.prototype.dataProps = function () {
        var dataProps = {
            'data-scrivito-private-widget': 'true',
            'data-scrivito-private-dropzone': 'true',
        };
        if (this.isStructureMarker()) {
            dataProps['data-scrivito-private-structure-widget'] = 'true';
        }
        if (this.state.isDragging) {
            dataProps['data-scrivito-private-dropback'] = 'true';
        }
        return dataProps;
    };
    WidgetTag.prototype.style = function () {
        if (this.state.isDragging) {
            if (this.props.style) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_underscore__["extend"])(this.props.style, { opacity: 0.5 });
            }
            return { opacity: 0.5 };
        }
        return this.props.style;
    };
    WidgetTag.prototype.isStructureMarker = function () {
        var registry = Object(__WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_app_support_window_registry__["a" /* getWindowRegistry */])();
        var appClass = registry.widgetClassFor(this.context[WIDGET_TAG_CONTEXT_KEY].objClass());
        var schema = __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_schema__["a" /* default */].forClass(appClass);
        if (schema) {
            return Object(__WEBPACK_IMPORTED_MODULE_3_underscore__["some"])(schema.attributes, function (definition, _) {
                return definition[0] === 'widgetlist';
            });
        }
        return false;
    };
    WidgetTag.prototype.onMouseOver = function (e) {
        e.stopPropagation();
        scrivito.WidgetFocus.notifyFocus(this.focusToken);
    };
    WidgetTag.prototype.onMouseOut = function (e) {
        e.stopPropagation();
        scrivito.WidgetFocus.notifyBlur(this.focusToken);
    };
    WidgetTag.prototype.onWidgetFocus = function () {
        var _this = this;
        this.setState({
            hasFocus: true,
            isFocusFadedOut: false,
        });
        if (this.fadeOutFocusTimeout) {
            window.clearTimeout(this.fadeOutFocusTimeout);
        }
        if (!this.isStructureMarker()) {
            this.fadeOutFocusTimeout = window.setTimeout(function () { return _this.fadeOutFocus(); }, 1000);
        }
    };
    WidgetTag.prototype.fadeOutFocus = function () {
        if (!this.state.isFocusFadedOut && !this.isFocusLocked) {
            this.setState({ isFocusFadedOut: true });
        }
    };
    WidgetTag.prototype.lockFocus = function () {
        this.isFocusLocked = true;
    };
    WidgetTag.prototype.unlockFocus = function () {
        this.isFocusLocked = false;
    };
    WidgetTag.prototype.onWidgetBlur = function () {
        this.setState({ hasFocus: false });
    };
    WidgetTag.prototype.renderOptionMarker = function (position) {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_components_option_marker__["a" /* default */], { key: "optionMarker-" + position, position: position, widget: this.context[WIDGET_TAG_CONTEXT_KEY], insertWidget: insertWidget, isAlwaysShown: __WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_client_always_show_option_markers__["b" /* shouldAlwaysShowOptionMarkers */], onMouseOver: this.lockFocus, onMouseOut: this.unlockFocus }));
    };
    WidgetTag.prototype.registerDropZone = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_is_editing_mode__["a" /* default */])() && this.widgetRef) {
            var _a = Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_react_extract_ids_from_content__["a" /* default */])(this.context[WIDGET_TAG_CONTEXT_KEY]), objId = _a.objId, widgetId = _a.widgetId;
            var domNode = __WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"](this.widgetRef);
            __WEBPACK_IMPORTED_MODULE_13_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].registerWidgetDropZoneInDom(domNode, objId, widgetId);
            this.dropZoneWidgetRef = this.widgetRef;
        }
    };
    WidgetTag.displayName = 'Scrivito.WidgetTag';
    WidgetTag.defaultProps = {
        tag: 'div',
    };
    WidgetTag.contextTypes = (_a = {},
        _a[WIDGET_TAG_CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"],
        _a);
    WidgetTag.childContextTypes = (_b = {},
        _b[WIDGET_TAG_CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"],
        _b);
    return WidgetTag;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
function insertWidget(widget, position) {
    var _a = Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_react_extract_ids_from_content__["a" /* default */])(widget), objId = _a.objId, widgetId = _a.widgetId;
    __WEBPACK_IMPORTED_MODULE_13_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].insertWidget(objId, widgetId, position);
}
/* harmony default export */ __webpack_exports__["b"] = (Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_connect__["a" /* default */])(WidgetTag));
var _a, _b;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extractIdsFromContent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }


function extractIdsFromContent(basicContent) {
  if (_instanceof(basicContent, __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__["a" /* default */])) {
    return {
      objId: basicContent.id()
    };
  }

  return {
    objId: basicContent.obj().id(),
    widgetId: basicContent.id()
  };
}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

if (!window.scrivito) {
  window.scrivito = {};
}

window.scrivito.client = {};

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjReplication; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_cms_rest_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_obj_data_store__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_obj_patch__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_obj_replication_pool__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_deferred__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_next_tick__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_errors__ = __webpack_require__(1);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var ObjReplication =
/*#__PURE__*/
function () {
  function ObjReplication(id) {
    var _this = this;

    _classCallCheck(this, ObjReplication);

    this._id = id;
    this._replicationActive = false;
    this._scheduledReplication = false;
    this._currentRequestDeferred = null;
    this._nextRequestDeferred = null;
    this._performThrottledReplication = scrivito.throttle(function () {
      return _this._performReplication();
    }, 1000);
  }

  _createClass(ObjReplication, [{
    key: "notifyLocalState",
    value: function notifyLocalState(localState) {
      if (__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_obj_replication_pool__["a" /* objReplicationPool */].isDisabled()) {
        return;
      }

      if (this._backendState === undefined) {
        throw new __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_errors__["e" /* InternalError */]('Can not set local state before backend state.');
      }

      if (this._backendState && this._backendState._deleted) {
        throw new __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_errors__["e" /* InternalError */]('Can not update a fully deleted obj.');
      }

      this._localState = localState;

      this._startReplication();
    }
  }, {
    key: "notifyBackendState",
    value: function notifyBackendState(newBackendState) {
      if (this._backendState === undefined) {
        this._backendState = newBackendState;

        this._updateLocalState(newBackendState);

        return;
      }

      var newestKnownBackendState = this._bufferedBackendState || this._backendState;

      if (compareStates(newBackendState, newestKnownBackendState) > 0) {
        if (this._replicationActive) {
          this._bufferedBackendState = newBackendState;
        } else {
          if (newBackendState._deleted) {
            this._updateLocalState(null);
          } else {
            var patch = diff(this._backendState, newBackendState);

            this._updateLocalState(apply(this.localState, patch));
          }

          this._backendState = newBackendState;
        }
      }
    }
  }, {
    key: "finishSaving",
    value: function finishSaving() {
      var finishSavingPromise;

      if (this._nextRequestDeferred) {
        finishSavingPromise = this._nextRequestDeferred.promise;
      } else if (this._currentRequestDeferred) {
        finishSavingPromise = this._currentRequestDeferred.promise;
      } else {
        return scrivito.Promise.resolve();
      }

      return finishSavingPromise.catch(function () {
        return scrivito.Promise.reject();
      });
    }
  }, {
    key: "_startReplication",
    value: function _startReplication() {
      var _this2 = this;

      if (!__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isEmpty(diff(this._backendState, this._localState))) {
        if (!this._replicationActive) {
          if (!this._scheduledReplication) {
            this._scheduledReplication = true;

            this._initDeferredForRequest();

            __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_obj_replication_pool__["a" /* objReplicationPool */].writeStarted(this._currentRequestDeferred.promise);
            Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_next_tick__["a" /* default */])(function () {
              return _this2._performThrottledReplication();
            });
          }
        } else {
          if (!this._nextRequestDeferred) {
            this._nextRequestDeferred = new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_deferred__["a" /* default */]();
          }
        }
      } else {
        if (this._nextRequestDeferred) {
          this._nextRequestDeferred.resolve();

          this._nextRequestDeferred = null;
        }
      }
    }
  }, {
    key: "_performReplication",
    value: function _performReplication() {
      var _this3 = this;

      var localState = this._localState;
      var patch = diff(this._backendState, this._localState);
      this._scheduledReplication = false;
      this._replicationActive = true;

      this._replicatePatchToBackend(patch).then(function (backendState) {
        _this3._handleBackendUpdate(localState, backendState);

        _this3._currentRequestDeferred.resolve(_this3._id);

        _this3._currentRequestDeferred = null;
        _this3._replicationActive = false;

        _this3._startReplication();
      }, function (error) {
        _this3._currentRequestDeferred.reject(error);

        _this3._currentRequestDeferred = null;
        _this3._replicationActive = false;
      });
    }
  }, {
    key: "_replicatePatchToBackend",
    value: function _replicatePatchToBackend(patch) {
      if (__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isEmpty(patch)) {
        return scrivito.Promise.resolve(this._backendState);
      }

      var workspaceId = scrivito.currentWorkspaceId();
      var path = "workspaces/".concat(workspaceId, "/objs/").concat(this._id);
      return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_cms_rest_api__["a" /* cmsRestApi */].put(path, {
        obj: patch
      });
    }
  }, {
    key: "_initDeferredForRequest",
    value: function _initDeferredForRequest() {
      if (this._nextRequestDeferred) {
        var currentDeferred = this._nextRequestDeferred;
        this._nextRequestDeferred = null;
        this._currentRequestDeferred = currentDeferred;
      } else {
        this._currentRequestDeferred = new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_deferred__["a" /* default */]();
      }
    }
  }, {
    key: "_handleBackendUpdate",
    value: function _handleBackendUpdate(replicatedState, backendState) {
      var bufferedLocalChanges = diff(replicatedState, this._localState);
      this._backendState = newerState(backendState, this._bufferedBackendState);
      this._bufferedBackendState = undefined;

      this._updateLocalState(apply(this._backendState, bufferedLocalChanges));
    }
  }, {
    key: "_updateLocalState",
    value: function _updateLocalState(localState) {
      this._localState = localState;
      __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_obj_data_store__["d" /* set */](this._id, this._localState);
    } // For test purpose only.

  }, {
    key: "isNotStoredInBackend",
    // For test purpose only.
    value: function isNotStoredInBackend() {
      return this._backendState === null;
    } // For test purpose only.

  }, {
    key: "isRequestInFlight",
    value: function isRequestInFlight() {
      return this._replicationActive;
    }
  }, {
    key: "backendState",
    get: function get() {
      return this._backendState;
    } // For test purpose only.

  }, {
    key: "localState",
    get: function get() {
      return this._localState;
    }
  }]);

  return ObjReplication;
}();



function diff(stateA, stateB) {
  return __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_obj_patch__["b" /* diff */](stateA, stateB);
}

function apply(stateA, patch) {
  return __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_obj_patch__["a" /* apply */](stateA, patch);
}

function newerState(stateA, stateB) {
  if (compareStates(stateA, stateB) > 0) {
    return stateA;
  }

  return stateB;
}

function compareStates(stateA, stateB) {
  if (!stateA) {
    return -1;
  }

  if (!stateB) {
    return 1;
  }

  return strCompare(stateA._version, stateB._version);
}

function strCompare(str1, str2) {
  if (str1 > str2) {
    return 1;
  }

  if (str2 > str1) {
    return -1;
  }

  return 0;
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isFetchingActive;
/* unused harmony export disableFetching */
/* unused harmony export enableFetching */
/* harmony export (immutable) */ __webpack_exports__["a"] = fetch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_errors__ = __webpack_require__(1);


var isDisabled = false;
var connectionCounter = 0;
// For test purpose only
function isFetchingActive() {
    return connectionCounter > 0;
}
// For test purpose only
function disableFetching() {
    isDisabled = true;
}
// For test purpose only
function enableFetching() {
    isDisabled = false;
}
function fetch(method, url, _a) {
    var params = _a.params, authorization = _a.authorization, forceVerification = _a.forceVerification;
    if (isDisabled) {
        return scrivito.Promise.resolve(new XMLHttpRequest());
    }
    connectionCounter += 1;
    return new scrivito.Promise(function (resolve, reject) {
        var request = createRequestObj(method, url, resolve, reject);
        if (authorization) {
            request.setRequestHeader('Authorization', authorization);
        }
        request.setRequestHeader('Scrivito-Client', "jssdk/" + "1.2.0-rc1-500-g882b9cad69");
        if (forceVerification) {
            request.setRequestHeader('Scrivito-Force-Verification', 'true');
        }
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(JSON.stringify(params));
    });
}
function createRequestObj(method, url, resolve, reject) {
    var request = new XMLHttpRequest();
    request.open(method === 'POST' ? 'POST' : 'PUT', url);
    request.timeout = 15000;
    request.withCredentials = true;
    request.onload = function () { return onAjaxLoad(request, resolve, reject); };
    function handleError(message) {
        onAjaxError(new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_errors__["g" /* RequestFailedError */](message), reject);
    }
    request.onerror = function () { return handleError('XMLHttpRequest Error'); };
    request.ontimeout = function () { return handleError('XMLHttpRequest Timeout'); };
    request.onabort = function () { return handleError('XMLHttpRequest Aborted'); };
    return request;
}
function onAjaxLoad(request, resolve, reject) {
    connectionCounter -= 1;
    var status = request.status;
    if (!status || !Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isNumber"])(status)) {
        var message = "Unexpected response status: " + status + ";" +
            (" body: " + (status === 0 ? request.statusText : request.responseText));
        reject(new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_errors__["g" /* RequestFailedError */](message));
    }
    resolve(request);
}
function onAjaxError(error, reject) {
    connectionCounter -= 1;
    reject(error);
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise_polyfill__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_promise_polyfill__);
 // Scrivito uses the browser's native `Promise` implementation by default (or a polyfill).
//
// The promise implementation can be switched for unit testing purposes,
// see: `enableSyncPromiseSettlement`.

scrivito.Promise = window.Promise || __WEBPACK_IMPORTED_MODULE_0_promise_polyfill___default.a;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = loadJs;
function loadCss(url) {
  var targetDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;
  var link = targetDocument.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  targetDocument.head.appendChild(link);
}
function loadJs(url) {
  var targetDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;
  var script = targetDocument.createElement('script');
  script.src = url;
  targetDocument.head.appendChild(script);
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return theFinally; });
// cannot name a function 'finally'
function theFinally(promise, handler) {
    return promise.then(function (value) {
        handler();
        return value;
    }, function (error) {
        handler();
        throw error;
    });
}



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = apply;
/* harmony export (immutable) */ __webpack_exports__["b"] = diff;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function apply(primitiveObj, patch) {
  if (!primitiveObj) {
    return patch;
  }

  if (!patch) {
    return null;
  }

  var updatedPrimitiveObj = {};
  eachKeyFrom(primitiveObj, patch, function (attribute, objValue, patchValue) {
    if (attribute === '_widget_pool') {
      updatedPrimitiveObj._widget_pool = buildUpdatedWidgetPool(objValue, patchValue);
    } else if (patch.hasOwnProperty(attribute)) {
      if (patchValue) {
        updatedPrimitiveObj[attribute] = patchValue;
      }
    } else {
      updatedPrimitiveObj[attribute] = primitiveObj[attribute];
    }
  });
  return updatedPrimitiveObj;
}
function diff(primitiveObjA, primitiveObjB) {
  if (!primitiveObjA) {
    return primitiveObjB;
  }

  if (!primitiveObjB) {
    return null;
  }

  var patch = {};
  eachKeyFrom(primitiveObjA, primitiveObjB, function (attribute, valueInA, valueInB) {
    if (attribute === '_widget_pool') {
      var widgetPoolPatch = buildWidgetPoolPatch(valueInA, valueInB);

      if (!__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isEmpty(widgetPoolPatch)) {
        patch._widget_pool = widgetPoolPatch;
      }
    } else {
      var patchValue = buildPatchEntry(valueInA, valueInB, function () {
        if (!__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isEqual(valueInA, valueInB)) {
          return valueInB;
        }
      });

      if (patchValue !== undefined) {
        patch[attribute] = patchValue;
      }
    }
  });
  return patch;
}

function eachKeyFrom(objectA, objectB, handler) {
  __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.union(__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.keys(objectA), __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.keys(objectB)).forEach(function (key) {
    return handler(key, workspaceAwareObject(objectA[key]), workspaceAwareObject(objectB[key]));
  });
}

function workspaceAwareObject(object) {
  if (__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isArray(object)) {
    var _object = _slicedToArray(object, 2),
        type = _object[0],
        value = _object[1]; // Ignore binary URLs, since they are different across workspaces.
    // However, a binary ID identifies a binary unambiguously.


    if (type === 'binary' && value) {
      return [type, __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.omit(value, 'url')];
    }

    return object;
  }

  return object;
}

function buildUpdatedWidgetPool(widgetPool, widgetPoolPatch) {
  if (!widgetPoolPatch || __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isEmpty(widgetPoolPatch)) {
    return widgetPool;
  }

  var updatedWidgetPool = {};
  eachKeyFrom(widgetPool || {}, widgetPoolPatch || {}, function (id, widget, widgetPatch) {
    if (widgetPoolPatch.hasOwnProperty(id)) {
      if (widgetPatch && !widget) {
        updatedWidgetPool[id] = widgetPatch;
      } else if (widgetPatch) {
        updatedWidgetPool[id] = apply(widget, widgetPatch);
      }
    } else {
      updatedWidgetPool[id] = widget;
    }
  });
  return updatedWidgetPool;
}

function buildPatchEntry(valueA, valueB, fnHandleBoth) {
  if (!valueA && valueB) {
    return valueB;
  }

  if (valueA && !valueB) {
    return null;
  }

  if (valueA && valueB) {
    return fnHandleBoth();
  }
}

function buildWidgetPoolPatch(widgetPoolA, widgetPoolB) {
  if (widgetPoolA === widgetPoolB) {
    return {};
  }

  var patch = {};
  eachKeyFrom(widgetPoolA, widgetPoolB, function (widgetId, widgetA, widgetB) {
    var widgetValue = buildPatchEntry(widgetA, widgetB, function () {
      var widgetPatch = diff(widgetA, widgetB);

      if (!__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isEmpty(widgetPatch)) {
        return widgetPatch;
      }
    });

    if (widgetValue !== undefined) {
      patch[widgetId] = widgetValue;
    }
  });
  return patch;
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = capture;
/* harmony export (immutable) */ __webpack_exports__["b"] = isCurrentlyCapturing;
/* harmony export (immutable) */ __webpack_exports__["c"] = notifyMissingData;
/* harmony export (immutable) */ __webpack_exports__["d"] = notifyOutdatedData;
/* unused harmony export CaptureReport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_context_container__ = __webpack_require__(38);
/* this module is package-private, i.e. do not import from outside of loadable. */



var captureContextContainer = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_context_container__["a" /* default */]();
var currentCaptureList = function () { return captureContextContainer.current(); };
function capture(fn) {
    var captureList = [];
    var result = captureContextContainer.runWith(captureList, fn);
    return new CaptureReport(captureList, result);
}
function isCurrentlyCapturing() {
    return captureContextContainer.current() !== undefined;
}
function notifyMissingData(loader) {
    var captureList = currentCaptureList();
    if (captureList) {
        captureList.push({ reason: 'missing', loader: loader });
    }
    else {
        loader();
        throw new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_errors__["i" /* ScrivitoError */]('Content not yet loaded. ' +
            'Forgot to use Scrivito.load or Scrivito.connect? ' +
            'See https://scrivito.com/content-not-yet-loaded-error');
    }
}
function notifyOutdatedData(loader) {
    var captureList = currentCaptureList();
    if (captureList) {
        captureList.push({ reason: 'outdated', loader: loader });
    }
}
var CaptureReport = /** @class */ (function () {
    function CaptureReport(captureList, result) {
        this.captureList = captureList;
        this.result = result;
    }
    /* returns true iff no data is missing, doesn't care about outdated  */
    CaptureReport.prototype.isAllDataLoaded = function () {
        return !Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"])(this.captureList, { reason: 'missing' });
    };
    /* returns true iff no data is missing or outdated */
    CaptureReport.prototype.isAllDataUpToDate = function () {
        return this.captureList.length === 0;
    };
    /* triggers (re-)loading of all missing or outdated data that was captured */
    CaptureReport.prototype.loadRequiredData = function () {
        this.captureList.forEach(function (captured) { return captured.loader(); });
    };
    return CaptureReport;
}());



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_schema__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_navigate_to__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_invoke_editing_config_callback__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_window_context__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_window_registry__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_mount_custom_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_resolve_url__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_window_proxy__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_app_support_replace_internal_links__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_app_support_configure_content_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_app_support_ui_adapter_compatible_value__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_scrivito_sdk_app_support_initialize_content__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_scrivito_sdk_app_support_title_for_widget__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_scrivito_sdk_app_support_basic_url_for__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_scrivito_sdk_client_loadable_load__ = __webpack_require__(19);



















/* The AppAdapter is provided to the UI by the App.
 * The UI uses it as a communication channel to the App.
 * It is the counterpart of the UiAdapter.
 *
 * Communication should use only built-in datatypes,
 * i.e. communicate using `string` and `array`, not `BasicObj`.
 */
var AppAdapter = /** @class */ (function () {
    function AppAdapter() {
    }
    AppAdapter.prototype.contentBrowserConfiguration = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_app_support_ui_adapter_compatible_value__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_app_support_configure_content_browser__["b" /* getContentBrowserConfiguration */])());
    };
    AppAdapter.prototype.titleForObj = function (objId) {
        return invokeUiConfigCallbackForObjId('titleForContent', objId);
    };
    AppAdapter.prototype.descriptionForObj = function (objId) {
        return invokeUiConfigCallbackForObjId('descriptionForContent', objId);
    };
    AppAdapter.prototype.titleForWidget = function (objId, widgetId) {
        return Object(__WEBPACK_IMPORTED_MODULE_16_scrivito_sdk_app_support_title_for_widget__["a" /* default */])(objId, widgetId);
    };
    AppAdapter.prototype.initializeContentForObj = function (objId) {
        Object(__WEBPACK_IMPORTED_MODULE_13_scrivito_sdk_app_support_initialize_content__["b" /* initializeContentForObj */])(objId);
    };
    AppAdapter.prototype.initializeContentForWidget = function (objId, widgetId) {
        Object(__WEBPACK_IMPORTED_MODULE_13_scrivito_sdk_app_support_initialize_content__["c" /* initializeContentForWidget */])(objId, widgetId);
    };
    AppAdapter.prototype.getClasses = function () {
        var realm = Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_window_context__["a" /* getWindowContext */])();
        var classDatas = [];
        Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["each"])(realm.allObjClasses(), function (modelClass, name) {
            return classDatas.push(buildObjClassData(name, modelClass));
        });
        Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["each"])(realm.allWidgetClasses(), function (modelClass, name) {
            return classDatas.push(buildWidgetClassData(name, modelClass));
        });
        return classDatas;
    };
    AppAdapter.prototype.navigateTo = function (objId) {
        Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_navigate_to__["a" /* default */])(function () {
            var basicObj = __WEBPACK_IMPORTED_MODULE_15_scrivito_sdk_client_models_basic_obj__["a" /* default */].get(objId);
            if (!basicObj) {
                return undefined;
            }
            return Object(__WEBPACK_IMPORTED_MODULE_14_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_window_registry__["a" /* getWindowRegistry */])(), basicObj);
        });
    };
    AppAdapter.prototype.mountComponent = function (componentId, props) {
        Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_mount_custom_component__["a" /* mountComponent */])(componentId, props);
    };
    AppAdapter.prototype.urlFor = function (objId) {
        return Object(__WEBPACK_IMPORTED_MODULE_18_scrivito_sdk_client_loadable_load__["a" /* default */])(function () {
            var basicObj = __WEBPACK_IMPORTED_MODULE_15_scrivito_sdk_client_models_basic_obj__["a" /* default */].getIncludingDeleted(objId);
            if (basicObj) {
                return Object(__WEBPACK_IMPORTED_MODULE_17_scrivito_sdk_app_support_basic_url_for__["b" /* basicUrlWithOriginFor */])(basicObj);
            }
            return null;
        });
    };
    AppAdapter.prototype.resolveUrl = function (url) {
        return Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_resolve_url__["a" /* default */])(url).then(function (resolvedUrl) {
            if (!resolvedUrl || !resolvedUrl.obj) {
                return null;
            }
            var obj = resolvedUrl.obj;
            var fragment = resolvedUrl.url.fragment();
            var search = resolvedUrl.url.search();
            var recognizedUrl = { obj_id: obj.id() };
            if (fragment) {
                recognizedUrl.fragment = fragment;
            }
            if (search) {
                recognizedUrl.query = search;
            }
            return recognizedUrl;
        });
    };
    AppAdapter.prototype.getDocumentHeight = function () {
        var html = Object(__WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_window_proxy__["b" /* getDocument */])().querySelector('html');
        return html.getBoundingClientRect().height;
    };
    AppAdapter.prototype.replaceInternalLinks = function (htmlString) {
        return Object(__WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_app_support_replace_internal_links__["a" /* default */])(htmlString);
    };
    return AppAdapter;
}());
/* harmony default export */ __webpack_exports__["a"] = (AppAdapter);
function buildObjClassData(name, modelClass) {
    var schema = __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_schema__["a" /* default */].forClass(modelClass);
    return Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["pick"])({
        name: name,
        type: 'Obj',
        attributes: buildAttributesData(schema.attributes, Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'attributes')),
        description: Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'description'),
        hideInSelectionDialogs: Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'hideInSelectionDialogs'),
        properties: Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'properties'),
        propertiesGroups: Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'propertiesGroups'),
        thumbnail: Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'thumbnail'),
        title: Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'title'),
    }, __WEBPACK_IMPORTED_MODULE_0_underscore__["identity"]);
}
function buildAttributesData(attributes, attributeEditConfigs) {
    var attributesData = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["map"])(attributes, function (definition, name) {
        var type = definition[0], options = definition[1];
        var attributeData = { name: name, type: type };
        if (options.only) {
            attributeData.only = options.only;
        }
        if (options.values) {
            attributeData.values = options.values;
        }
        return attributeData;
    });
    if (attributeEditConfigs) {
        Object.keys(attributeEditConfigs).forEach(function (name) {
            var attributeDefinition = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"])(attributesData, { name: name });
            if (attributeDefinition) {
                var _a = attributeEditConfigs[name], title = _a.title, description = _a.description, valuesLocalization = _a.values;
                if (valuesLocalization) {
                    Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["extend"])(attributeDefinition, { title: title, description: description, valuesLocalization: valuesLocalization });
                }
                else {
                    Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["extend"])(attributeDefinition, { title: title, description: description });
                }
            }
        });
    }
    return attributesData;
}
function buildWidgetClassData(name, modelClass) {
    var schema = __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_schema__["a" /* default */].forClass(modelClass);
    return Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["pick"])({
        name: name,
        type: 'Widget',
        attributes: buildAttributesData(schema.attributes, Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'attributes')),
        onlyInside: schema.onlyInside,
        description: Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'description'),
        hideInSelectionDialogs: Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'hideInSelectionDialogs'),
        properties: Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'properties'),
        propertiesGroups: Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'propertiesGroups'),
        thumbnail: Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'thumbnail'),
        title: Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(name, 'title'),
    }, __WEBPACK_IMPORTED_MODULE_0_underscore__["identity"]);
}
function invokeUiConfigCallbackForObjId(callbackName, objId) {
    var basicObj = __WEBPACK_IMPORTED_MODULE_15_scrivito_sdk_client_models_basic_obj__["a" /* default */].getIncludingDeleted(objId);
    if (!basicObj) {
        return undefined;
    }
    var appObj = Object(__WEBPACK_IMPORTED_MODULE_14_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_window_registry__["a" /* getWindowRegistry */])(), basicObj);
    return Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_invoke_editing_config_callback__["a" /* default */])(basicObj.objClass(), callbackName, appObj);
}


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = serialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_is_system_attribute__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_types__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_basic_widget__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_link__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_pretty_print__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_attribute_inflection__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_models_binary__ = __webpack_require__(12);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function serialize(attributes) {
  var serializedAttributes = {};

  __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.each(attributes, function (_ref, name) {
    var _ref2 = _slicedToArray(_ref, 2),
        value = _ref2[0],
        attrInfo = _ref2[1];

    var serializedName = convertCamelCasedAttributeName(name);

    if (Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_is_system_attribute__["a" /* default */])(serializedName)) {
      serializedAttributes[serializedName] = value;
    } else {
      var _attrInfo = _slicedToArray(attrInfo, 2),
          attrType = _attrInfo[0],
          attrOptions = _attrInfo[1];

      serializedAttributes[serializedName] = [serializeAttributeType(attrType, name), valueOrNull(serializeAttributeValue(attrType, attrOptions, value, name))];
    }
  });

  return serializedAttributes;
}

function convertCamelCasedAttributeName(name) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_attribute_inflection__["b" /* isCamelCase */])(name)) {
    throw new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Attribute names have to be in camel case.');
  }

  return Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_attribute_inflection__["d" /* underscore */])(name);
}

function serializeAttributeType(type, name) {
  switch (type) {
    case 'enum':
      return 'string';

    case 'float':
    case 'integer':
      return 'number';

    case 'multienum':
      return 'stringlist';

    case 'binary':
    case 'date':
    case 'html':
    case 'link':
    case 'linklist':
    case 'reference':
    case 'referencelist':
    case 'string':
    case 'stringlist':
    case 'widgetlist':
      return type;

    default:
      throw new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__["b" /* ArgumentError */]("Attribute \"".concat(name, "\" is of unsupported type \"").concat(type, "\"."));
  }
}

function serializeAttributeValue(type, options, value, name) {
  if (value === null) {
    return value;
  }

  switch (type) {
    case 'binary':
      return serializeBinaryAttributeValue(value, name);

    case 'date':
      return serializeDateAttributeValue(value, name);

    case 'enum':
      return serializeEnumAttributeValue(options, value, name);

    case 'float':
      return serializeFloatAttributeValue(value, name);

    case 'html':
      return serializeHtmlAttributeValue(value, name);

    case 'integer':
      return serializeIntegerAttributeValue(value, name);

    case 'link':
      return serializeLinkAttributeValue(value, name);

    case 'linklist':
      return serializeLinklistAttributeValue(value, name);

    case 'multienum':
      return serializeMultienumAttributeValue(options, value, name);

    case 'reference':
      return serializeReferenceAttributeValue(value, name);

    case 'referencelist':
      return serializeReferencelistAttributeValue(value, name);

    case 'string':
      return serializeStringAttributeValue(value, name);

    case 'stringlist':
      return serializeStringlistAttributeValue(value, name);

    case 'widgetlist':
      return serializeWidgetlistAttributeValue(value, name);

    default:
      throw new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__["e" /* InternalError */]("serializeAttributeValue is not implemented for \"".concat(type, "\"."));
  }
}

function valueOrNull(value) {
  if ((__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isString(value) || __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isArray(value)) && __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isEmpty(value)) {
    return null;
  }

  return value;
}

function throwInvalidAttributeValue(value, name, expected) {
  throw new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__["b" /* ArgumentError */]("Unexpected value ".concat(Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_pretty_print__["a" /* default */])(value), " for") + " attribute \"".concat(name, "\". Expected: ").concat(expected));
}

function serializeBinaryAttributeValue(value, name) {
  if (_instanceof(value, __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_models_binary__["a" /* default */])) {
    return {
      id: value.id()
    };
  }

  throwInvalidAttributeValue(value, name, 'A Binary.');
}

function serializeDateAttributeValue(value, name) {
  if (__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isDate(value)) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_types__["c" /* formatDateToString */])(value);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_types__["d" /* isValidDateString */])(value)) {
    return value;
  }

  throwInvalidAttributeValue(value, name, 'A Date.');
}

function serializeEnumAttributeValue(_ref3, value, name) {
  var values = _ref3.values;

  if (__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.contains(values, value)) {
    return value;
  }

  var e = "Valid attribute values are contained in its \"values\" array [".concat(values, "].");
  throwInvalidAttributeValue(value, name, e);
}

function serializeFloatAttributeValue(value, name) {
  if (Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_types__["e" /* isValidFloat */])(value)) {
    return value;
  }

  var invalidValue = value;

  if (__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isNumber(value)) {
    invalidValue = String(value);
  }

  throwInvalidAttributeValue(invalidValue, name, 'A Number, that is #isFinite().');
}

function serializeHtmlAttributeValue(value, name) {
  if (__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isString(value)) {
    return value;
  }

  throwInvalidAttributeValue(value, name, 'A String.');
}

function serializeIntegerAttributeValue(value, name) {
  if (Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_types__["f" /* isValidInteger */])(value)) {
    return value;
  }

  throwInvalidAttributeValue(value, name, 'A Number, that is #isSafeInteger().');
}

function serializeLinkAttributeValue(value, name) {
  if (validLinkObject(value)) {
    return convertLinkToCmsApi(value);
  }

  throwInvalidAttributeValue(value, name, 'A Link instance.');
}

function serializeLinklistAttributeValue(value, name) {
  if (__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isArray(value) && __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.every(value, validLinkObject)) {
    return __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.map(value, convertLinkToCmsApi);
  }

  throwInvalidAttributeValue(value, name, 'An array of Link instances.');
}

function validLinkObject(value) {
  if (_instanceof(value, __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_link__["a" /* default */])) {
    return true;
  } // check if value is backend compatible


  if (!__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isObject(value)) {
    return false;
  }

  var invalidKeys = __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.without(__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.keys(value), 'hash', 'obj_id', 'query', 'target', 'title', 'url');

  return __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isEmpty(invalidKeys);
}

function convertLinkToCmsApi(value) {
  var backendLink = {
    fragment: typeof value.hash === 'function' ? value.hash() : value.hash,
    query: typeof value.query === 'function' ? value.query() : value.query,
    target: typeof value.target === 'function' ? value.target() : value.target,
    title: typeof value.title === 'function' ? value.title() : value.title,
    url: typeof value.url === 'function' ? value.url() : value.url
  };
  backendLink.obj_id = typeof value.objId === 'function' ? value.objId() : value.obj_id;
  return __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.mapObject(backendLink, function (v) {
    return v || null;
  });
}

function serializeMultienumAttributeValue(_ref4, value, name) {
  var values = _ref4.values;
  var errorMessage = "An array with values from ".concat(Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_pretty_print__["a" /* default */])(values), ".");

  if (!__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isArray(value) || !__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.every(value, __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isString)) {
    throwInvalidAttributeValue(value, name, errorMessage);
  }

  var forbiddenValues = __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.difference(value, values);

  if (forbiddenValues.length) {
    var e = "".concat(errorMessage, " Forbidden values: ").concat(Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_pretty_print__["a" /* default */])(forbiddenValues), ".");
    throwInvalidAttributeValue(value, name, e);
  }

  return value;
}

function serializeReferenceAttributeValue(value, name) {
  if (isValidReference(value)) {
    return serializeSingleReferenceValue(value);
  }

  throwInvalidAttributeValue(value, name, 'A BasicObj or a String ID.');
}

function serializeReferencelistAttributeValue(value, name) {
  if (isValidReferencelistValue(value)) {
    return __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.map(value, serializeSingleReferenceValue);
  }

  throwInvalidAttributeValue(value, name, 'An array with BasicObjs or String IDs.');
}

function serializeSingleReferenceValue(value) {
  if (_instanceof(value, __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__["a" /* default */])) {
    return value.id();
  }

  return value;
}

function isValidReference(value) {
  return __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isString(value) || _instanceof(value, __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__["a" /* default */]);
}

function isValidReferencelistValue(value) {
  return __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isArray(value) && __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.every(value, function (v) {
    return isValidReference(v);
  });
}

function serializeStringAttributeValue(value, name) {
  if (isValidString(value)) {
    return value.toString();
  }

  throwInvalidAttributeValue(value, name, 'A String.');
}

function serializeStringlistAttributeValue(value, name) {
  if (__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isArray(value) && __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.every(value, function (v) {
    return isValidString(v);
  })) {
    return __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.invoke(value, 'toString');
  }

  throwInvalidAttributeValue(value, name, 'An array of strings.');
}

function isValidString(value) {
  return __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isString(value) || __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isNumber(value);
}

function serializeWidgetlistAttributeValue(value, name) {
  if (__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.isArray(value) && __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.every(value, function (v) {
    return _instanceof(v, __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_basic_widget__["a" /* default */]);
  })) {
    return __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.invoke(value, 'id');
  }

  throwInvalidAttributeValue(value, name, 'An array of BasicWidget instances.');
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicAttributeContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_attribute_deserializer__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_is_system_attribute__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_field__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_attribute_inflection__ = __webpack_require__(21);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var BasicAttributeContent =
/*#__PURE__*/
function () {
  function BasicAttributeContent() {
    _classCallCheck(this, BasicAttributeContent);
  }

  _createClass(BasicAttributeContent, [{
    key: "get",
    value: function get(attributeName, typeInfo) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_attribute_inflection__["b" /* isCamelCase */])(attributeName)) {
        throw new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Attribute names have to be in camel case.');
      }

      var internalAttributeName = Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_attribute_inflection__["d" /* underscore */])(attributeName);

      if (Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_is_system_attribute__["a" /* default */])(internalAttributeName)) {
        if (__WEBPACK_IMPORTED_MODULE_3_underscore___default.a.has(this._systemAttributes, internalAttributeName)) {
          var attribute = this._systemAttributes[internalAttributeName];
          return typeof this[attribute] === 'function' ? this[attribute]() : this[attribute];
        }

        return;
      }

      var _scrivito$typeInfo$no = scrivito.typeInfo.normalize(typeInfo),
          _scrivito$typeInfo$no2 = _slicedToArray(_scrivito$typeInfo$no, 2),
          type = _scrivito$typeInfo$no2[0],
          options = _scrivito$typeInfo$no2[1];

      var rawValue = this.getAttributeData(internalAttributeName);

      if (!rawValue || !__WEBPACK_IMPORTED_MODULE_3_underscore___default.a.isArray(rawValue)) {
        rawValue = [];
      }

      return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_attribute_deserializer__["a" /* deserialize */](this, rawValue, type, options);
    }
  }, {
    key: "field",
    value: function field(attributeName, typeInfo) {
      return new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_field__["a" /* default */]({
        container: this,
        attributeName: attributeName,
        typeInfo: scrivito.typeInfo.normalize(typeInfo)
      });
    }
  }, {
    key: "widget",
    value: function widget(_id) {
      throw new TypeError('Override in subclass.');
    }
  }, {
    key: "serializeAttributes",
    value: function serializeAttributes() {
      var _this = this;

      var serializedAttrs = {};

      __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.each(this.getData(), function (value, name) {
        if (__WEBPACK_IMPORTED_MODULE_3_underscore___default.a.isArray(value) && __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.first(value) === 'widgetlist') {
          var publicAttrName = Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_attribute_inflection__["a" /* camelCase */])(name);

          var serializedAttributes = __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.invoke(_this.get(publicAttrName, ['widgetlist']), 'serializeAttributes');

          serializedAttrs[name] = ['widgetlist', serializedAttributes];
          return;
        }

        serializedAttrs[name] = value;
      });

      return serializedAttrs;
    }
  }, {
    key: "_persistWidgets",
    value: function _persistWidgets(obj, attributes) {
      __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.each(attributes, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            widgets = _ref2[0],
            typeInfo = _ref2[1];

        if (typeInfo && typeInfo[0] === 'widgetlist') {
          __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.each(widgets, function (widget) {
            if (!widget.isPersisted()) {
              widget.persistInObj(obj);
            }
          });
        }
      });
    }
  }, {
    key: "getAttributeData",
    value: function getAttributeData() {
      throw new TypeError('Override in subclass.');
    }
  }, {
    key: "getData",
    value: function getData() {
      throw new TypeError('Override in subclass.');
    }
  }, {
    key: "_objClass",
    get: function get() {
      throw new TypeError('Override in subclass.');
    }
  }]);

  return BasicAttributeContent;
}();



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = store;
/* harmony export (immutable) */ __webpack_exports__["a"] = computeCacheKey;
/* harmony export (immutable) */ __webpack_exports__["b"] = get;
/* harmony export (immutable) */ __webpack_exports__["c"] = stateContainer;
/* unused harmony export clearCache */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_id_query__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_data_query__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_global_state__ = __webpack_require__(3);



function store(params, objIds, total) {
    __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_id_query__["a" /* default */].store(params, objIds, total);
}
function computeCacheKey(obj) {
    return scrivito.computeCacheKey(obj);
}
function get(params, batchSize) {
    return new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_data_query__["a" /* default */](params, batchSize);
}
function stateContainer() {
    return __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_global_state__["b" /* cmsState */].subState('objQuery');
}
function clearCache() {
    stateContainer().clear();
}


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjIdQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_id_query_batch__ = __webpack_require__(137);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ObjIdQuery =
/*#__PURE__*/
function () {
  _createClass(ObjIdQuery, null, [{
    key: "store",
    value: function store(params, objIds, total) {
      __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_id_query_batch__["a" /* default */].store(params, objIds, total);
    }
  }, {
    key: "count",
    value: function count(params) {
      return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_id_query_batch__["a" /* default */].countFor(params);
    }
  }]);

  function ObjIdQuery(params, batchSize) {
    _classCallCheck(this, ObjIdQuery);

    this._params = params;
    this._batchSize = batchSize;
  }

  _createClass(ObjIdQuery, [{
    key: "iterator",
    value: function iterator() {
      var priorObjIds = {};
      var currentBatch = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_id_query_batch__["a" /* default */].firstBatchFor(this._params, this._batchSize);
      var currentIndex = 0;

      function next() {
        if (!currentBatch) {
          return {
            done: true
          };
        }

        var currentObjIds = currentBatch.objIds();

        if (currentIndex < currentObjIds.length) {
          var objId = currentObjIds[currentIndex];
          currentIndex++;

          if (priorObjIds[objId]) {
            return next();
          }

          priorObjIds[objId] = true;
          return {
            value: objId,
            done: false
          };
        }

        currentBatch = currentBatch.nextBatch();
        currentIndex = 0;
        return next();
      }

      return {
        next: next
      };
    }
  }]);

  return ObjIdQuery;
}();



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getContentStateId;
/* unused harmony export setContentStateId */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_global_state__ = __webpack_require__(3);

function getContentStateId() {
    return getState().get();
}
function setContentStateId(value) {
    getState().set(value);
}
function getState() {
    return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_global_state__["b" /* cmsState */].subState('contentStateId');
}


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AttributeContentFactory;
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function AttributeContentFactory(appModelAccessor) {
  var AttributeContent =
  /*#__PURE__*/
  function () {
    function AttributeContent() {
      _classCallCheck(this, AttributeContent);
    }

    _createClass(AttributeContent, [{
      key: "id",
      // public API
      value: function id() {
        return this._scrivitoPrivateContent.id();
      } // public API

    }, {
      key: "objClass",
      value: function objClass() {
        return this._scrivitoPrivateContent.objClass();
      }
      /**
        * Resolves when all previous updates have been persisted.
        * If an update fails the promise is rejected.
        *
        * @returns {Promise}
        */

    }, {
      key: "finishSaving",
      value: function finishSaving() {
        return this._scrivitoPrivateContent.finishSaving();
      } // public API

    }, {
      key: "get",
      value: function get(attributeName) {
        return appModelAccessor.read(this, attributeName);
      } // public API

    }, {
      key: "update",
      value: function update(attributes) {
        appModelAccessor.update(this, attributes);
      }
    }]);

    return AttributeContent;
  }();

  return AttributeContent;
}

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initialAttributesFor;
function initialAttributesFor(providedAttributes, registry, schema, appClassName) {
  var initialAttributes = {};
  Object.keys(schema.definition.attributes).forEach(function (attributeName) {
    if (!providedAttributes.hasOwnProperty(attributeName)) {
      var initialValue = registry.initialContentFor(appClassName, attributeName);

      if (initialValue !== undefined) {
        initialAttributes[attributeName] = initialValue;
      }
    }
  });
  return initialAttributes;
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);

var ObjFacetValue = /** @class */ (function () {
    function ObjFacetValue(registry, basicObjFacetValue) {
        this._registry = registry;
        this._basicObjFacetValue = basicObjFacetValue;
    }
    // public API
    ObjFacetValue.prototype.name = function () {
        return this._basicObjFacetValue.name();
    };
    // public API
    ObjFacetValue.prototype.count = function () {
        return this._basicObjFacetValue.count();
    };
    // public API
    ObjFacetValue.prototype.includedObjs = function () {
        var response = this._basicObjFacetValue.includedObjs();
        return Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(this._registry, response);
    };
    return ObjFacetValue;
}());
/* harmony default export */ __webpack_exports__["a"] = (ObjFacetValue);


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initialContentFor;
/* harmony export (immutable) */ __webpack_exports__["b"] = initializeContentForObj;
/* harmony export (immutable) */ __webpack_exports__["c"] = initializeContentForWidget;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_widget__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_window_context__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_window_registry__ = __webpack_require__(24);







function initialContentFor(className, attributeName) {
    var initialContent = Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(className, 'initialContent');
    if (initialContent) {
        var attributeContent = initialContent[attributeName];
        if (Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isFunction"])(attributeContent)) {
            return attributeContent();
        }
        if (isWidgetlist(attributeContent)) {
            var registry_1 = Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_window_registry__["a" /* getWindowRegistry */])();
            return attributeContent.map(function (widget) {
                var basicWidget = widget._scrivitoPrivateContent;
                var copy = basicWidget.copy();
                return Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(registry_1, copy);
            });
        }
        return attributeContent;
    }
}
function isWidgetlist(maybeWidgetlist) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isArray"])(maybeWidgetlist) && Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["every"])(maybeWidgetlist, isWidget);
}
function isWidget(maybeWidget) {
    return maybeWidget._scrivitoPrivateContent &&
        maybeWidget._scrivitoPrivateContent instanceof __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_widget__["a" /* default */];
}
function initializeContentForObj(objId) {
    var basicObj = __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */].get(objId);
    initializeContentFor(basicObj);
}
function initializeContentForWidget(objId, widgetId) {
    var basicObj = __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */].get(objId);
    var basicWidget = basicObj.widget(widgetId);
    initializeContentFor(basicWidget);
}
function initializeContentFor(basicContent) {
    var objClassName = basicContent.objClass();
    var schema = Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_window_context__["a" /* getWindowContext */])().getClass(objClassName)._scrivitoPrivateSchema;
    var initialAttributes = {};
    Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["each"])(schema.attributes, function (typeInfo, attributeName) {
        var currentValue = basicContent.get(attributeName, typeInfo);
        if (Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isEmpty"])(currentValue)) {
            var initialValue = initialContentFor(objClassName, attributeName);
            if (initialValue) {
                initialAttributes[attributeName] = initialValue;
            }
        }
    });
    var attributesWithTypeInfo = Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_realm_wrap_in_app_class__["b" /* unwrapAppAttributes */])(initialAttributes, schema, objClassName);
    basicContent.update(attributesWithTypeInfo);
}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (Object({"SCRIVITO_VERSION":"1.2.0-rc1-500-g882b9cad69"}).NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};
var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};
var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
};
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = init;
/* harmony export (immutable) */ __webpack_exports__["a"] = generate;
/* harmony export (immutable) */ __webpack_exports__["c"] = recognize;
/* unused harmony export getHomepageCallback */
/* unused harmony export resetHomepageCallback */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_window_registry__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }






var homepageCallback;
function init(callback) {
  homepageCallback = callback;
}
function generate(obj) {
  assertObjIsBasicObj(obj);

  if (isHomepage(obj)) {
    return '/';
  }

  if (obj.permalink()) {
    return "/".concat(obj.permalink());
  }

  var slug = generateSlug(obj);

  if (slug) {
    return "/".concat(slug, "-").concat(obj.id());
  }

  return "/".concat(obj.id());
}
function recognize(pathToRecognize) {
  assertPathIsString(pathToRecognize);
  var path = pathToRecognize.replace(new RegExp('^/+|/+$', 'g'), '');

  if (path === '') {
    return Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_realm_wrap_in_app_class__["c" /* unwrapAppClassValue */])(homepageCallback());
  }

  var obj = __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */].getByPermalink(path);

  if (obj) {
    return obj;
  }

  return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */].get(extractObjIdFromPath(path));
} // For test purpose only.

function getHomepageCallback() {
  return homepageCallback;
} // For test purpose only.

function resetHomepageCallback() {
  homepageCallback = undefined;
}

function isHomepage(obj) {
  if (!homepageCallback) {
    return false;
  }

  var homepage = scrivito.loadableWithDefault(null, homepageCallback);

  if (!homepage) {
    return false;
  }

  return homepage.id() === obj.id();
}

function assertObjIsBasicObj(obj) {
  if (!_instanceof(obj, __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */])) {
    throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Parameter obj needs to be a BasicObj.');
  }
}

function assertPathIsString(input) {
  if (!__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isString(input)) {
    throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Parameter path needs to be a String.');
  }
}

function generateSlug(basicObj) {
  var registry = Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_window_registry__["a" /* getWindowRegistry */])();
  var appObj = Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(registry, basicObj);
  return appObj.slug();
}

function extractObjIdFromPath(input) {
  var last = __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.last(input.split('-'));

  return __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.last(last.split('/'));
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = invokeEditingConfigCallback;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_provide_editing_config__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_next_tick__ = __webpack_require__(9);



function invokeEditingConfigCallback(className, callbackName) {
  var callback = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(className, callbackName);

  if (Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isFunction"])(callback)) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      return callback.apply(null, args);
    } catch (error) {
      Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_next_tick__["b" /* throwNextTick */])(error);
    }
  }
}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isConfigured; });
/* unused harmony export resetIsConfigured */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_cms_rest_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_type_checker__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_routing__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_routing_path__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);







var _isConfigured = false;
var AllowedConfiguration = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].struct({
    tenant: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String,
    endpoint: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
    homepage: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Function),
    routingBasePath: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
    unstable: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Object),
});
var checkConfigure = Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('configure', [['configuration', AllowedConfiguration]], {
    docPermalink: 'js-sdk/configure',
});
function configure(configuration) {
    checkConfigure(configuration);
    var tenant = configuration.tenant, homepage = configuration.homepage, routingBasePath = configuration.routingBasePath, unstable = configuration.unstable;
    var endpoint = configuration.endpoint || 'api.scrivito.com';
    if (__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */]) {
        var tenantConfiguration = { tenant: tenant, endpoint: endpoint };
        if (unstable && unstable.useRailsAuth) {
            tenantConfiguration.useRailsAuth = unstable.useRailsAuth;
        }
        __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].configureTenant(tenantConfiguration);
    }
    else {
        __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_cms_rest_api__["a" /* cmsRestApi */].init(endpoint, tenant);
    }
    Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_routing_path__["b" /* init */])(homepage || (function () { return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */].root(); }));
    Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_routing__["c" /* init */])({ routingBasePath: routingBasePath });
    _isConfigured = true;
}
function isConfigured() {
    return _isConfigured;
}
// for test purpose only
function resetIsConfigured() {
    _isConfigured = false;
}



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isBinaryObj;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_schema__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_window_context__ = __webpack_require__(23);


function isBinaryObj(obj) {
  if (!obj) {
    return false;
  }

  var objClassName = obj.objClass();

  if (!objClassName) {
    return false;
  }

  var objClass = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_window_context__["a" /* getWindowContext */])().getClass(objClassName);

  if (!objClass) {
    return false;
  }

  var schema = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_schema__["a" /* default */].forClass(objClass);
  return schema.isBinary();
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = titleForWidget;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_invoke_editing_config_callback__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_provide_editing_config__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_window_registry__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_attribute_inflection__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);






function titleForWidget(objId, widgetId) {
  var basicObj = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__["a" /* default */].getIncludingDeleted(objId);
  var basicWidget = basicObj.widget(widgetId);
  return titleForContent(basicWidget) || titleForClass(basicWidget.objClass());
}

function titleForContent(basicWidget) {
  var appWidget = Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_window_registry__["a" /* getWindowRegistry */])(), basicWidget);
  var className = basicWidget.objClass();
  return Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_invoke_editing_config_callback__["a" /* default */])(className, 'titleForContent', appWidget);
}

function titleForClass(className) {
  return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_provide_editing_config__["a" /* getEditingConfigFor */])(className, 'title') || Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_attribute_inflection__["c" /* sentenceCase */])(className);
}

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clearEditorRegistry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editorRegistrationFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return registerEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_global_state__ = __webpack_require__(3);


var currentId = 0;
var registry = {};
function generateId() {
    currentId++;
    return currentId;
}
function registerEditor(editorClass) {
    var id = generateId();
    registry[id] = editorClass;
    var state = getState();
    var ids = state.get() || [];
    state.set(ids.concat([id]));
}
function editorRegistrationFor(_a) {
    var type = _a.type, tag = _a.tag;
    var ids = getState().get();
    if (ids) {
        var id = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["find"])(ids, function (i) { return registry[i] && registry[i].canEdit({ type: type, tag: tag }); });
        if (id) {
            var editorClass = registry[id];
            return { id: id, editorClass: editorClass };
        }
    }
}
function getState() {
    return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_global_state__["a" /* appState */].subState('editors');
}
// For test purpose only.
function clearEditorRegistry() {
    currentId = 0;
    registry = {};
    getState().clear();
}



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function displayNameFrom(component) {
  return component.displayName || component.name;
}

/* harmony default export */ __webpack_exports__["a"] = (displayNameFrom);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scaleDownBinary;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_window_proxy__ = __webpack_require__(26);

function scaleDownBinary(binary) {
    if (binary.isRaw() || binary.isExplicitlyTransformed()) {
        return binary;
    }
    // The binary service never scales up, so we transform all images, regardless of their width.
    return binary.optimizeFor({ width: Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_window_proxy__["f" /* screen */])().width * Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_window_proxy__["a" /* devicePixelRatio */])() });
}


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_basic_link__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_models_binary__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_navigate_to__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_is_modifier_click__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_basic_url_for__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_react_tcomb__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_client_model_types__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};













// public API
var LinkTag = /** @class */ (function (_super) {
    __extends(LinkTag, _super);
    function LinkTag(props) {
        var _this = _super.call(this, props) || this;
        _this._onClick = _this._onClick.bind(_this);
        return _this;
    }
    LinkTag.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", __assign({}, this._linkProps()), this.props.children));
    };
    LinkTag.prototype._linkProps = function () {
        var linkProps = Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["omit"])(this.props, 'to');
        linkProps.href = this._href();
        linkProps.onClick = this._onClick;
        linkProps.target = this._target();
        return linkProps;
    };
    LinkTag.prototype._href = function () {
        return this._to() || '#';
    };
    LinkTag.prototype._onClick = function (e) {
        e.preventDefault();
        if (!this.props.to) {
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["isString"])(this.props.to)) {
            scrivito.openInNewWindow(this.props.to);
            return;
        }
        var to = this._to();
        if (!to) {
            return;
        }
        var target = this._target();
        if (target === '_blank' || Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_is_modifier_click__["a" /* default */])(e)) {
            this._openLinkInNewWindow(to);
        }
        else if (target) {
            scrivito.openLocation(to, target);
        }
        else {
            Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_navigate_to__["a" /* default */])(this.props.to);
        }
    };
    LinkTag.prototype._openLinkInNewWindow = function (url) {
        if (__WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */]) {
            __WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].openInNewWindow(url);
        }
        else {
            scrivito.openInNewWindow(url);
        }
    };
    LinkTag.prototype._target = function () {
        if (this.props.target) {
            return this.props.target;
        }
        var to = this.props.to;
        if (to) {
            var basicTo = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_wrap_in_app_class__["c" /* unwrapAppClassValue */])(to);
            if (basicTo instanceof __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_basic_link__["a" /* default */]) {
                return basicTo.target();
            }
        }
    };
    LinkTag.prototype._to = function () {
        if (this.props.to) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["isString"])(this.props.to)) {
                return this.props.to;
            }
            var unwrappedToValue = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_wrap_in_app_class__["c" /* unwrapAppClassValue */])(this.props.to);
            if (unwrappedToValue instanceof __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_basic_link__["a" /* default */] ||
                unwrappedToValue instanceof __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_obj__["a" /* default */] ||
                unwrappedToValue instanceof __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_models_binary__["a" /* default */]) {
                return Object(__WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_basic_url_for__["a" /* basicUrlFor */])(unwrappedToValue);
            }
        }
    };
    LinkTag.displayName = 'Scrivito.LinkTag';
    LinkTag.propTypes = Object(__WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_react_tcomb__["a" /* propTypes */])({
        to: __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_react_tcomb__["b" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_react_tcomb__["b" /* tcomb */].union([__WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_client_model_types__["d" /* ObjType */], __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_client_model_types__["b" /* LinkType */], __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_client_model_types__["a" /* BinaryType */], __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_react_tcomb__["b" /* tcomb */].String])),
    }, { strict: false });
    return LinkTag;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_connect__["a" /* default */])(LinkTag));


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isModifierClick;
// IE11 is the only browser triggering a click event on middle click, so we must take care of it.
// Chrome, FF, Edge handle the middle click without triggering an event.
var IE11_MIDDLE_MOUSE_BUTTON = 2;
function isModifierClick(event) {
  return event.ctrlKey || event.metaKey || event.shiftKey || event.which === IE11_MIDDLE_MOUSE_BUTTON;
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_components_content_tag_attribute_value__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_components_content_tag_editor__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_schema__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_is_editing_mode__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_key_for_basic_content__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_editor_registry__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_next_tick__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();












var ContentTag = /** @class */ (function (_super) {
    __extends(ContentTag, _super);
    function ContentTag(props) {
        return _super.call(this, props) || this;
    }
    ContentTag.prototype.render = function () {
        if (!this.props.content) {
            return null;
        }
        var field = __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_schema__["a" /* default */].basicFieldFor(this.props.content, this.props.attribute);
        if (!field) {
            var attributeName = this.props.attribute;
            Object(__WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_next_tick__["b" /* throwNextTick */])(new __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Component "Scrivito.ContentTag" received prop "attribute" with invalid value: ' +
                ("Attribute \"" + attributeName + "\" is not defined for content specified in prop \"content\".")));
            return null;
        }
        var editorId;
        var editorClass;
        var editorRegistration = Object(__WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_editor_registry__["a" /* editorRegistrationFor */])({
            type: field.type(),
            tag: this.props.tag,
        });
        if (editorRegistration) {
            editorId = editorRegistration.id;
            editorClass = editorRegistration.editorClass;
            if (Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_is_editing_mode__["a" /* default */])()) {
                return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_components_content_tag_editor__["a" /* default */], { key: this.editorKey(editorId), field: field, editorClass: editorClass, tag: this.props.tag, customProps: this.customProps(), content: this.props.content }, this.props.children));
            }
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_components_content_tag_attribute_value__["a" /* default */], { field: field, tag: this.props.tag, customProps: this.customProps() }, this.props.children));
    };
    ContentTag.prototype.customProps = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["omit"])(this.props, 'content', 'attribute', 'tag');
    };
    ContentTag.prototype.editorKey = function (editorId) {
        var content = Object(__WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_realm_wrap_in_app_class__["c" /* unwrapAppClassValue */])(this.props.content);
        return [
            this.props.tag,
            Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_key_for_basic_content__["a" /* default */])(content),
            this.props.attribute,
            editorId,
        ].join('|');
    };
    ContentTag.displayName = 'Scrivito.ContentTag';
    ContentTag.defaultProps = { tag: 'div' };
    return ContentTag;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_connect__["a" /* default */])(ContentTag));


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_is_editing_mode__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_replace_internal_links__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_browser_location__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_app_support_find_click_target__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_react_components_content_tag_widget_content__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_react_components_content_tag_widgetlist_placeholder__ = __webpack_require__(186);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var AttributeValue =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AttributeValue, _React$Component);

  function AttributeValue(props) {
    var _this;

    _classCallCheck(this, AttributeValue);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AttributeValue).call(this, props));
    _this._onClick = _this._onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(AttributeValue, [{
    key: "render",
    value: function render() {
      switch (this.props.field.type()) {
        case 'html':
          return this._renderHtml();

        case 'float':
        case 'integer':
        case 'string':
          return this._renderAsString();

        case 'widgetlist':
          return this._renderWidgetlist();

        default:
          return this._renderContent({
            children: this.props.children
          });
      }
    }
  }, {
    key: "_renderHtml",
    value: function _renderHtml() {
      if (this.props.children) {
        return this._renderContent({
          children: this.props.children
        });
      }

      var html = Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_replace_internal_links__["a" /* default */])(this._attributeValue());
      var props = {
        dangerouslySetInnerHTML: {
          __html: html
        },
        onClick: this._onClick
      };
      return this._renderContent({
        props: props
      });
    }
  }, {
    key: "_onClick",
    value: function _onClick(e) {
      var linkTarget = Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_app_support_find_click_target__["a" /* default */])(e);

      if (!linkTarget) {
        return;
      }

      if (linkTarget.openInNewWindow) {
        this._openInNewWindow(e, linkTarget);
      } else {
        this._openInCurrentWindow(e, linkTarget);
      }
    }
  }, {
    key: "_openInNewWindow",
    value: function _openInNewWindow(e, _ref) {
      var url = _ref.openInNewWindow;

      if (__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */]) {
        e.preventDefault();
        e.stopPropagation();
        __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].openInNewWindow(url);
      }
    }
  }, {
    key: "_openInCurrentWindow",
    value: function _openInCurrentWindow(e, _ref2) {
      var resource = _ref2.openInCurrentWindow;
      e.preventDefault();
      e.stopPropagation();
      Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_browser_location__["b" /* browseTo */])(resource);
    }
  }, {
    key: "_renderAsString",
    value: function _renderAsString() {
      var children = this.props.children || this._attributeValue();

      return this._renderContent({
        children: children
      });
    }
  }, {
    key: "_renderWidgetlist",
    value: function _renderWidgetlist() {
      var children;

      var widgets = this._attributeValue();

      if (widgets.length) {
        children = widgets.map(function (widget) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_react_components_content_tag_widget_content__["a" /* default */], {
            key: widget.id(),
            widget: widget
          });
        });
      } else if (Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_is_editing_mode__["a" /* default */])()) {
        children = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_react_components_content_tag_widgetlist_placeholder__["a" /* default */], {
          field: this.props.field
        });
      }

      return this._renderContent({
        children: children
      });
    }
  }, {
    key: "_renderContent",
    value: function _renderContent(_ref3) {
      var props = _ref3.props,
          children = _ref3.children;
      var contentProps = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["extend"])({}, this.props.customProps, props, this._editingProps());
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(this.props.tag, contentProps, children);
    }
  }, {
    key: "_editingProps",
    value: function _editingProps() {
      if (this.props.onClick) {
        return {
          onClick: this.props.onClick,
          'data-scrivito-is-clickable': true
        };
      }

      return {};
    }
  }, {
    key: "_attributeValue",
    value: function _attributeValue() {
      return this.props.field.get();
    }
  }]);

  return AttributeValue;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

AttributeValue.displayName = 'Scrivito.ContentTag.AttributeValue';
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_connect__["a" /* default */])(AttributeValue));

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return shouldAlwaysShowOptionMarkers; });
/* harmony export (immutable) */ __webpack_exports__["a"] = alwaysShowOptionMarkers;
// For test purpose only.
var shouldAlwaysShowOptionMarkers = false;
function alwaysShowOptionMarkers() {
  shouldAlwaysShowOptionMarkers = true;
}

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_connect_to_ui__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scrivito_sdk___ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_load_editing_assets__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__ = __webpack_require__(170);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Binary", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FutureBinary", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ObjFacetValue", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "load", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ArgumentError", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ScrivitoError", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "configureContentBrowser", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "currentPage", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "currentPageParams", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "renderPage", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "finishLoading", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isInPlaceEditingActive", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "provideEditingConfig", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "urlFor", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BackgroundImageTag", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ChildListTag", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ContentTag", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CurrentPage", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ImageTag", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LinkTag", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NotFoundErrorPage", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WidgetTag", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "provideComponent", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "registerComponent", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Obj", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ObjSearch", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createObjClass", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createWidgetClass", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getClass", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "provideObjClass", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "provideWidgetClass", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "_internal", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_public_api__["r"]; });
/*
 * This is the webpack entry file used by the NPM module
 */





var ui = Object(__WEBPACK_IMPORTED_MODULE_0__init_connect_to_ui__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_1__scrivito_sdk___["a" /* initializeSdk */])(ui);

if (ui) {
  Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_load_editing_assets__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].assetUrlBase());
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectToUi;
// checks whether the UI is present
// if so, returns an instance of UiConnection
function connectToUi() {
    // check if there's a parent frame
    if (window.parent === window) {
        return;
    }
    var connectAppDocument;
    // try to access the parent frame
    try {
        connectAppDocument = window.parent.connectAppDocument;
    }
    catch (_a) {
        // if not possible, then it's not the UI
    }
    if (connectAppDocument) {
        return connectAppDocument(window.document);
    }
}


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initializeSdk;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_realm__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_deferred__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_loading_monitor__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_open_content_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_app_support_editor_registry__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_app_adapter__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_cms_retrieval__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_app_support_on_dom_content_loaded__ = __webpack_require__(168);













if (!window.scrivito) {
  window.scrivito = {};
}

window.scrivito.registerEditor = __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_app_support_editor_registry__["b" /* registerEditor */];
window.scrivito.openContentBrowser = __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_open_content_browser__["a" /* default */];
function initializeSdk(ui) {
  if (ui) {
    ui.setAppAdapter("1.2.0-rc1-500-g882b9cad69", new __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_app_adapter__["a" /* default */]());
    var uiAdapter = ui.uiAdapter();
    Object(__WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_ui_adapter__["a" /* setUiAdapter */])(uiAdapter);
    Object(__WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_cms_retrieval__["b" /* replaceCmsRetrieval */])(uiAdapter);
  }

  scrivito.client.init({
    ui: ui
  });
  var deferred = new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_deferred__["a" /* default */]();
  Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_loading_monitor__["b" /* registerAsLoadingActivity */])(deferred.promise);
  Object(__WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_app_support_on_dom_content_loaded__["a" /* default */])(document, deferred.resolve);
}

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_global_namespace__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_global_namespace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_global_namespace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_batched_state_updater__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_compute_cache_key__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_current_workspace__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_error_logging__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_error_logging___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_error_logging__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_initialization__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_loadable_loadable_with_default__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_loadable_not_loaded_error__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_obj_replication__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_promise__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_client_throttle__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_client_type_info__ = __webpack_require__(125);
 // import all sources that are not (yet) modules













/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_next_tick__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_global_state__ = __webpack_require__(3);



(function () {
  var bufferedUpdates = [];

  var isUpdateScheduled = function isUpdateScheduled() {
    return bufferedUpdates.length;
  };

  function add(callback) {
    if (!isUpdateScheduled()) {
      Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_next_tick__["a" /* default */])(function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_global_state__["h" /* withBatchedUpdates */])(function () {
          return performUpdate(bufferedUpdates);
        });
      });
    }

    bufferedUpdates.push(callback);
  }

  function performUpdate(callbacks) {
    bufferedUpdates = [];

    try {
      callbacks.forEach(function (callback) {
        return callback();
      });
    } finally {
      if (isUpdateScheduled()) {
        performUpdate(bufferedUpdates);
      }
    }
  }

  scrivito.batchedStateUpdater = {
    add: add
  };
})();

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StateChangePreventedError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_context_container__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_listener_collection__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_tree_conservative_update__ = __webpack_require__(97);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var treeIdCounter = 0;
// use native assign where available, since it's faster
var assign = Object.assign || __WEBPACK_IMPORTED_MODULE_1_underscore__["extend"];
// abstract interface for managing state
var AbstractStateStore = /** @class */ (function () {
    function AbstractStateStore() {
    }
    // return current state
    AbstractStateStore.prototype.get = function () {
        var _this = this;
        var valueWhenAccessed = this.untrackedGet();
        this.recordDetector(function () { return valueWhenAccessed !== _this.untrackedGet(); });
        return valueWhenAccessed;
    };
    AbstractStateStore.prototype.recordDetector = function (detector) {
        this.getTree().recordDetector(detector);
    };
    AbstractStateStore.prototype.set = function (newState) {
        var currentState = this.untrackedGet();
        var updatedState = Object(__WEBPACK_IMPORTED_MODULE_4__state_tree_conservative_update__["a" /* default */])(currentState, newState);
        if (updatedState === currentState) {
            return;
        }
        this.uncheckedSet(updatedState);
    };
    // reset the state back to undefined
    AbstractStateStore.prototype.clear = function () {
        this.set(undefined);
    };
    // this method may only be called when StateType is fully partial,
    // i.e. all properties defined by StateType are optional.
    AbstractStateStore.prototype.subState = function (key) {
        return new StateTreeNode(this, key);
    };
    AbstractStateStore.prototype.reader = function () {
        // identical implementation, different type
        return this;
    };
    // this method may only be called when StateType is fully partial,
    // i.e. all properties defined by StateType are optional (= may be undefined).
    AbstractStateStore.prototype.setSubState = function (key, newSubState) {
        var priorState = this.untrackedGet();
        if (priorState === undefined) {
            var newState = Object.freeze((_a = {}, _a[key] = newSubState, _a));
            // Since StateType is fully partial, newState is a valid StateType.
            // No way to tell TypeScript this, though, therefore using `any`.
            // tslint:disable-next-line
            this.uncheckedSet(newState);
        }
        else {
            var duplicate = assign({}, priorState);
            // Since StateType is fully partial, this is true:
            // (StateType[K] | undefined) == StateType[K]
            duplicate[key] = newSubState;
            this.uncheckedSet(Object.freeze(duplicate));
        }
        var _a;
    };
    AbstractStateStore.prototype.getSubState = function (key) {
        var state = this.untrackedGet();
        if (state) {
            return state[key];
        }
    };
    return AbstractStateStore;
}());
// a state tree, which can be used to store state.
// this is the root of the tree, which keeps the state of the entire tree.
var StateTree = /** @class */ (function (_super) {
    __extends(StateTree, _super);
    function StateTree() {
        var _this = _super.call(this) || this;
        _this.treeId = (treeIdCounter++).toString();
        _this.listeners = new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_listener_collection__["a" /* default */]();
        _this.detectorRecording = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_context_container__["a" /* default */]();
        _this.batchUpdates = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_context_container__["a" /* default */]();
        _this.version = 0;
        _this.frozenContextContainer = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_context_container__["a" /* default */]();
        return _this;
    }
    StateTree.prototype.untrackedGet = function () {
        return this.state;
    };
    StateTree.prototype.withFrozenState = function (frozenContext, fn) {
        return this.frozenContextContainer.runWith(frozenContext, fn);
    };
    StateTree.prototype.failIfTracking = function (message) {
        if (this.detectorRecording.current()) {
            throw new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["e" /* InternalError */](message);
        }
    };
    StateTree.prototype.failIfFrozen = function (operationName) {
        var frozenContext = this.frozenContextContainer.current();
        if (frozenContext) {
            var message = operationName + " is not permitted " +
                ("inside '" + frozenContext.contextName + "'. ") +
                (frozenContext.message || '');
            throw new StateChangePreventedError(message);
        }
    };
    StateTree.prototype.uncheckedSet = function (newState) {
        this.failIfFrozen('Changing state');
        this.state = newState;
        this.version++;
        if (!this.insideBatchUpdate()) {
            this.notifyListeners();
        }
    };
    /* Executes the given function and tracks read access to this tree.
      * All substates that are accessed while the function runs are considered "relevant".
      *
      * Returns a change detector function. The detector function returns:
      * - truthy if any relevant state has changed in the meantime
      * - falsey if all relevant state is still as it was
      *
      * The detector function can be used for cache invalidation:
      * If the detector returns false, then running the function again
      * will yield the same result - provided that all relevant data is stored inside this tree.
      */
    StateTree.prototype.trackChanges = function (fn) {
        var _this = this;
        var versionBefore = this.version;
        var individualDetectors = this.recordDetectors(fn);
        // checking the version first, to avoid running all detectors
        // when the tree is unchanged
        var overallDetector = function () {
            return _this.version !== versionBefore &&
                !!Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["find"])(individualDetectors, function (detector) { return detector(); });
        };
        return overallDetector;
    };
    StateTree.prototype.recordDetector = function (detector) {
        var recording = this.detectorRecording.current();
        if (recording !== undefined) {
            recording.push(detector);
        }
    };
    StateTree.prototype.getTree = function () {
        return this;
    };
    StateTree.prototype.id = function () {
        return this.treeId;
    };
    StateTree.prototype.subscribe = function (listener) {
        return this.listeners.subscribe(listener);
    };
    StateTree.prototype.withBatchedUpdates = function (fn) {
        var stateBefore = this.state;
        try {
            this.batchUpdates.runWith(true, fn);
        }
        finally {
            if (!this.insideBatchUpdate() && stateBefore !== this.state) {
                this.notifyListeners();
            }
        }
    };
    // For test purpose only.
    StateTree.prototype.listenerCount = function () {
        return this.listeners.count();
    };
    // public for test purpose only.
    StateTree.prototype.clearListeners = function () {
        this.listeners.clear();
    };
    StateTree.prototype.recordDetectors = function (fn) {
        if (this.detectorRecording.current() !== undefined) {
            throw new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["e" /* InternalError */]('no nested detector recording!');
        }
        var detectors = [];
        this.detectorRecording.runWith(detectors, fn);
        return detectors;
    };
    StateTree.prototype.notifyListeners = function () {
        var _this = this;
        // listeners should not change state, at least not synchronously,
        // since that would create chaos, e.g. race condition between listeners,
        // breaking the one-way-flow of a reactive application, stack overflow etc.
        // you may use nextTick to make a state change asynchronously, though.
        this.withFrozenState({ contextName: 'state listeners' }, function () {
            _this.listeners.notify();
        });
    };
    StateTree.prototype.insideBatchUpdate = function () {
        return !!this.batchUpdates.current();
    };
    return StateTree;
}(AbstractStateStore));
/* harmony default export */ __webpack_exports__["a"] = (StateTree);
var StateChangePreventedError = /** @class */ (function (_super) {
    __extends(StateChangePreventedError, _super);
    function StateChangePreventedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StateChangePreventedError;
}(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["i" /* ScrivitoError */]));

// a node of a state tree.
// does not actually keep state, but provides
// access scoped to a subtree of a StateTree.
var StateTreeNode = /** @class */ (function (_super) {
    __extends(StateTreeNode, _super);
    function StateTreeNode(parentState, key) {
        var _this = _super.call(this) || this;
        _this.parentState = parentState;
        _this.key = key;
        // cache tree locally (performance)
        _this.tree = parentState.getTree();
        return _this;
    }
    StateTreeNode.prototype.getTree = function () {
        return this.tree;
    };
    StateTreeNode.prototype.untrackedGet = function () {
        return this.parentState.getSubState(this.key);
    };
    StateTreeNode.prototype.uncheckedSet = function (newState) {
        this.parentState.setSubState(this.key, newState);
    };
    StateTreeNode.prototype.id = function () {
        // first convert backslash to double-backslash
        // then convert slash to backslash-slash
        var escapedKey = this.key.replace(/\\/g, '\\\\').replace(/\//g, '\\/');
        return this.parentState.id() + "/" + escapedKey;
    };
    return StateTreeNode;
}(AbstractStateStore));


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ListenerCollection = /** @class */ (function () {
    function ListenerCollection() {
        this.listeners = [];
    }
    ListenerCollection.prototype.subscribe = function (listener) {
        var _this = this;
        var active = true;
        var guardedListener = function () {
            if (active) {
                listener();
            }
        };
        this.ensureCanMutateListeners();
        this.listeners.push(guardedListener);
        return function () {
            active = false;
            var index = _this.listeners.indexOf(guardedListener);
            _this.ensureCanMutateListeners();
            _this.listeners.splice(index, 1);
        };
    };
    ListenerCollection.prototype.count = function () {
        return this.listeners.length;
    };
    ListenerCollection.prototype.clear = function () {
        this.listeners = [];
    };
    ListenerCollection.prototype.notify = function () {
        this.listenersToNotify = this.listeners;
        this.listenersToNotify.forEach(function (listener) { return listener(); });
    };
    ListenerCollection.prototype.ensureCanMutateListeners = function () {
        if (this.listenersToNotify === this.listeners) {
            // make shallow copy to avoid messing up a running notification loop
            this.listeners = this.listeners.slice();
        }
    };
    return ListenerCollection;
}());
/* harmony default export */ __webpack_exports__["a"] = (ListenerCollection);


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conservativeUpdate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_primitive_value__ = __webpack_require__(98);

// Given a primitive value `current` and a primitive value `next`,
// this method produces a result primitive value, which is
// * equal to next
// * independent from `next`
//   -> it does not reuse any Objects or Arrays from `next`
// * as identical to `current` as possible
//   -> it reuses as many Objects and Arrays of `current` as possible
//   -> but it mutates neither `current` nor `next`
// * frozen (as in Object.freeze)
//   -> Any newly created Objects and Arrays are frozen, so the result is deep-frozen,
//      assuming that all Objects and Arrays inside `current` are frozen already.
function conservativeUpdate(current, next) {
    // this method works on the assumption that you pass in primitive data, i.e.
    // * plain Objects, not instances of classes
    // * plain Arrays, not some crazy subtypes of Array
    //
    // TS, however, cannot express that effectively,
    // therefore using `any` to turn off type check.
    // tslint:disable-next-line
    return updateValue(current, next);
}
function updateValue(current, next) {
    if (current === next) {
        // performance optimization, avoid deep comparison
        return next;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_primitive_value__["a" /* isPrimitiveObject */])(next)) {
        return updateObject(Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_primitive_value__["a" /* isPrimitiveObject */])(current) ? current : undefined, next);
    }
    if (Array.isArray(next)) {
        return updateArray(Array.isArray(current) ? current : undefined, next);
    }
    return next;
}
function updateObject(current, next) {
    var updated = {};
    var foundDiff = false;
    if (current === undefined) {
        foundDiff = true;
    }
    var nextKeys = Object.keys(next);
    var currentKeys = new Set();
    if (current) {
        Object.keys(current).forEach(function (key) { return currentKeys.add(key); });
    }
    if (currentKeys.size !== nextKeys.length) {
        foundDiff = true;
    }
    nextKeys.forEach(function (key) {
        if (!currentKeys.has(key)) {
            foundDiff = true;
        }
        var currentValue = current ? current[key] : undefined;
        var updatedValue = updateValue(currentValue, next[key]);
        if (updatedValue !== currentValue) {
            foundDiff = true;
        }
        updated[key] = updatedValue;
    });
    var result = foundDiff ? Object.freeze(updated) : current;
    // since result has every key in next, it is now T, not just Partial<T>
    // (assuming that T is a primitive Object, not some subtype of Object)
    return result;
}
function updateArray(current, next) {
    var foundDiff = false;
    if (current === undefined || current.length !== next.length) {
        foundDiff = true;
    }
    var updated = next.map(function (nextValue, index) {
        var currentValue = current ? current[index] : undefined;
        var updatedValue = updateValue(currentValue, nextValue);
        if (updatedValue !== currentValue) {
            foundDiff = true;
        }
        return updatedValue;
    });
    var result = foundDiff ? Object.freeze(updated) : current;
    // since result now has the same content as `next`, it is T
    // (assuming that T is a primitive Array, not some subtype of Array)
    return result;
}


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isPrimitiveObject;
function isPrimitiveObject(value) {
    return (value !== null &&
        typeof value === 'object' &&
        !Array.isArray(value) &&
        !instanceOfClass(value));
}
function instanceOfClass(object) {
    // Instances of class have a prototype chain of length 2 or more, e.g.
    // Instance --> SomeClass --> Object
    //
    // A primitive object has a prototype chain of length 1:
    // Instance --> Object
    //
    // Note that it would be unwise to hardcode a check for `Object`, as there are
    // multiple `Object` classes, one for each iFrame.
    var proto = Object.getPrototypeOf(object);
    if (proto === null) {
        // no prototype chain? does not happen usually, but who knows...
        return false;
    }
    // if prototype chain has length 1,
    // we assume that it's a direct instance of Object and not from some class.
    return Object.getPrototypeOf(proto) !== null;
}


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);


(function () {
  scrivito.computeCacheKey = function (data) {
    var normalizedData = normalizeData(data);
    return JSON.stringify(normalizedData);
  };

  function normalizeData(data) {
    if (__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isArray(data)) {
      return __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.map(data, normalizeData);
    }

    if (__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isObject(data)) {
      return __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.chain(data).mapObject(normalizeData).pairs().sortBy(__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.first);
    }

    return data;
  }
})();

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);


(function () {
  var PUBLISHED_WORKSPACE_ID = 'published';

  scrivito.currentWorkspaceId = function () {
    if (__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */]) {
      return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].currentWorkspaceId();
    }

    return PUBLISHED_WORKSPACE_ID;
  };
})();

/***/ }),
/* 101 */
/***/ (function(module, exports) {

(function () {
  var consoleErrorIsDisabled = false;

  function logError() {
    if (window && window.console && !consoleErrorIsDisabled) {
      var _window$console;

      (_window$console = window.console).error.apply(_window$console, arguments);
    }
  }

  function disableConsoleError() {
    consoleErrorIsDisabled = true;
  }

  scrivito.logError = logError;
  scrivito.disableConsoleError = disableConsoleError;
})();

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_global_state__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_replication_pool__ = __webpack_require__(39);



(function () {
  function connectModulesToUi(ui) {
    var uiModules = ui.clientModulesForExport();
    Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_replication_pool__["b" /* replaceObjReplicationPool */])(uiModules.objReplicationPool);
  }

  function modulesForExport() {
    return {
      objReplicationPool: __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_replication_pool__["a" /* objReplicationPool */]
    };
  }

  function init() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        ui = _ref.ui;

    if (ui) {
      connectModulesToUi(ui);
    }

    Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_global_state__["e" /* initializeGlobalState */])(ui);
  } // export


  scrivito.client.init = init;
  scrivito.client.modulesForExport = modulesForExport;
})();

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wait;
/* harmony export (immutable) */ __webpack_exports__["b"] = waitMs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_promise__ = __webpack_require__(58);

function wait(seconds) {
    return waitMs(seconds * 1000);
}
function waitMs(milliseconds) {
    return new scrivito.Promise(function (resolve) {
        setTimeout(resolve, milliseconds);
    });
}


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) { // Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())

var setTimeoutFunc = setTimeout;

function noop() {} // Polyfill for Function.prototype.bind


function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];
  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }

  if (self._state === 0) {
    self._deferreds.push(deferred);

    return;
  }

  self._handled = true;

  Promise._immediateFn(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }

    var ret;

    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }

    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');

    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;

      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }

    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function () {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }

  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}
/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */


function doResolve(fn, self) {
  var done = false;

  try {
    fn(function (value) {
      if (done) return;
      done = true;
      resolve(self, value);
    }, function (reason) {
      if (done) return;
      done = true;
      reject(self, reason);
    });
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function (onFulfilled, onRejected) {
  var prom = new this.constructor(noop);
  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = function (callback) {
  var constructor = this.constructor;
  return this.then(function (value) {
    return constructor.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    return constructor.resolve(callback()).then(function () {
      return constructor.reject(reason);
    });
  });
};

Promise.all = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;

          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }

        args[i] = val;

        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function (value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function (resolve) {
    resolve(value);
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
}; // Use polyfill for setImmediate for performance gains


Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
  setImmediate(fn);
} || function (fn) {
  setTimeoutFunc(fn, 0);
};

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

module.exports = Promise;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(105).setImmediate))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(106); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59), __webpack_require__(107)))

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var FRAGMENT_VALUE_LOCATOR = '&scrivito.authFailedCount=';
var failureCount;

function init(addressWindow) {
  reset();
  var location = addressWindow.location;
  var fragment = location.hash;
  var offset = fragment.indexOf(FRAGMENT_VALUE_LOCATOR);

  if (offset < 0) {
    return;
  }

  var countAsString = fragment.substr(offset + FRAGMENT_VALUE_LOCATOR.length, 3);
  var remainingFragment = fragment.substring(0, offset);

  if (remainingFragment === '#') {
    remainingFragment = '';
  }

  var newLocation = location.href.toString().replace(fragment, remainingFragment);
  failureCount = parseInt(countAsString, 10) || 0;
  addressWindow.history.replaceState({}, '', newLocation);
}

function reset() {
  failureCount = 0;
}

function augmentedRedirectUrl(currentLocation) {
  var returnTo = currentLocation.toString();

  if (!currentLocation.hash) {
    returnTo = "".concat(returnTo, "#");
  }

  return "".concat(returnTo).concat(FRAGMENT_VALUE_LOCATOR).concat(failureCount + 1);
}

function currentFailureCount() {
  return failureCount;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  augmentedRedirectUrl: augmentedRedirectUrl,
  reset: reset,
  currentFailureCount: currentFailureCount
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_CODE_CLIENT_VERIFICATION_REQUIRED", function() { return ERROR_CODE_CLIENT_VERIFICATION_REQUIRED; });
/* harmony export (immutable) */ __webpack_exports__["perform"] = perform;
/* harmony export (immutable) */ __webpack_exports__["reset"] = reset;
/* harmony export (immutable) */ __webpack_exports__["currentState"] = currentState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_verificator_functions__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_promise_helper__ = __webpack_require__(61);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ERROR_CODE_CLIENT_VERIFICATION_REQUIRED = 'client_verification_required';
var VerificationRequiredError = /** @class */ (function (_super) {
    __extends(VerificationRequiredError, _super);
    function VerificationRequiredError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VerificationRequiredError;
}(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["j" /* UnauthorizedError */]));
var computation;
var verification;
function perform(sendRequest) {
    function handleError(error) {
        if (!isVerificationRequiredError(error)) {
            throw error;
        }
        return computeVerification(error.details).then(sendRequest);
    }
    return sendRequest(currentAuthorization()).catch(handleError);
}
function computeVerification(challenge) {
    if (!computation) {
        // note that further request's challenges are ignored (intentionally)
        var verificator = challenge.verificator, data_1 = challenge.data;
        var promise = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_verificator_functions__["a" /* fetch */])(verificator.id, verificator.url)
            .then(function (compute) { return new scrivito.Promise(function (resolve) {
            function captureVerification(computedVerification) {
                verification = computedVerification;
                resolve(verification.authorization);
            }
            compute(data_1, captureVerification);
        }); });
        computation = {
            challenge: { verificator: verificator, data: data_1 },
            promise: __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_promise_helper__["a" /* finally */](promise, function () { computation = undefined; }),
        };
    }
    return computation.promise;
}
function reset() {
    computation = undefined;
    verification = undefined;
}
function currentAuthorization() {
    if (!verification) {
        return;
    }
    if (verification.expiresAfter < new Date()) {
        verification = undefined;
        return;
    }
    return verification.authorization;
}
function isVerificationRequiredError(error) {
    return error instanceof __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["j" /* UnauthorizedError */] &&
        error.backendCode === ERROR_CODE_CLIENT_VERIFICATION_REQUIRED;
}
// integration test support
function currentState() {
    var authorization = currentAuthorization();
    if (authorization) {
        return "Authorization: " + authorization;
    }
    if (computation) {
        var challenge = computation.challenge;
        return "Pending computation: " + challenge.verificator.id + " with " + challenge.data;
    }
    return null;
}


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reset */
/* harmony export (immutable) */ __webpack_exports__["a"] = fetch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_deferred__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_asset_loading__ = __webpack_require__(60);


var registry;
function reset() {
  registry = {};
}
function fetch(verificatorId, verificatorUrl) {
  var deferred = registry[verificatorId];

  if (!deferred) {
    deferred = new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_deferred__["a" /* default */]();
    registry[verificatorId] = deferred;
    Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_asset_loading__["b" /* loadJs */])(verificatorUrl);
  }

  return deferred.promise;
}
reset();

window._scrivitoRegisterVerificator = function (verificatorId, verificatorFunction) {
  registry[verificatorId].resolve(verificatorFunction);
};

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_patch__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_replication_pool__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_loadable_loadable_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_cms_retrieval__ = __webpack_require__(27);






var ObjData = /** @class */ (function () {
    function ObjData(id, state) {
        var _this = this;
        this._loadableData = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_loadable_loadable_data__["b" /* default */]({
            state: state,
            loader: function (_a) {
                var push = _a.push;
                return __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_cms_retrieval__["a" /* cmsRetrieval */].retrieveObj(scrivito.currentWorkspaceId(), _this._id).then(function (data) {
                    push(function () { return _this._replication().notifyBackendState(data); });
                    return data;
                });
            },
        });
        this._id = id;
    }
    ObjData.prototype.get = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__["d" /* failIfTracking */])('for performance reasons, avoid this method when rendering');
        return this._loadableData.get();
    };
    ObjData.prototype.getWidget = function (id) {
        Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__["d" /* failIfTracking */])('for performance reasons, avoid this method when rendering');
        return this.getWidgetState(id).get();
    };
    ObjData.prototype.getAttribute = function (key) {
        if (key === '_widget_pool') {
            throw new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__["e" /* InternalError */]('_widget_pool is not an attribute, use getWidget or getWidgetAttribute');
        }
        return this.getSubReader(key).get();
    };
    ObjData.prototype.getWidgetAttribute = function (id, key) {
        return this.getWidgetState(id)
            .subState(key)
            .get();
    };
    ObjData.prototype.isNonExistent = function () {
        return (!!this.getSubReader('_deleted').get() || !this.getSubReader('_id').get());
    };
    ObjData.prototype.set = function (newState) {
        Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__["c" /* failIfFrozen */])('Changing CMS content');
        this._loadableData.set(newState);
    };
    ObjData.prototype.setError = function (error) {
        this._loadableData.setError(error);
    };
    ObjData.prototype.ensureAvailable = function () {
        return this._loadableData.ensureAvailable();
    };
    ObjData.prototype.isAvailable = function () {
        return this._loadableData.isAvailable();
    };
    ObjData.prototype.update = function (objPatch) {
        var newState = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_patch__["a" /* apply */](this.get(), objPatch);
        this.set(newState);
        this._replication().notifyLocalState(newState);
    };
    ObjData.prototype.finishSaving = function () {
        return this._replication().finishSaving();
    };
    ObjData.prototype._replication = function () {
        return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_replication_pool__["a" /* objReplicationPool */].get(this._id);
    };
    ObjData.prototype.getWidgetState = function (id) {
        var widgetPoolState = this.getSubReader('_widget_pool');
        // subState takes care of `undefined` but TS cannot yet express that
        return widgetPoolState.subState(id);
    };
    ObjData.prototype.getSubReader = function (key) {
        var reader = this._loadableData.reader();
        // subState takes care of `null` and `undefined` but TS cannot yet express that
        return reader.subState(key);
    };
    return ObjData;
}());
/* harmony default export */ __webpack_exports__["a"] = (ObjData);


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// A wrapper around a value that is retrieved asynchronously.
// This class is stateless and (almost) pure:
// * it does not perform any I/O
// * the only side-effect it has is changing the provided state container
// * it does not keep any state itself
// * state is replaced, not mutated
// * it does not use Promises
var LoadableValue = /** @class */ (function () {
    // stateContainer is where the LoadableValue should store its state.
    function LoadableValue(stateContainer) {
        this.container = stateContainer;
    }
    LoadableValue.prototype.reader = function () {
        // subState takes care of `undefined`, TS cannot (yet) express that though
        return this.container.reader().subState('value');
    };
    LoadableValue.prototype.status = function () {
        return this.getStateKey('status') || 'MISSING';
    };
    LoadableValue.prototype.value = function () {
        return this.getStateKey('value');
    };
    LoadableValue.prototype.error = function () {
        return this.getStateKey('error');
    };
    LoadableValue.prototype.version = function () {
        return this.getStateKey('version');
    };
    LoadableValue.prototype.transitionToMissing = function () {
        this.setState({ status: undefined });
    };
    LoadableValue.prototype.transitionToAvailable = function (value, version) {
        this.setState({ status: 'AVAILABLE', value: value, version: version });
    };
    LoadableValue.prototype.transitionToError = function (error, version) {
        this.setState({ status: 'ERROR', error: error, version: version });
    };
    LoadableValue.prototype.setState = function (state) {
        this.container.set(state);
    };
    LoadableValue.prototype.getStateKey = function (key) {
        return this.container.subState(key).get();
    };
    return LoadableValue;
}());
/* harmony default export */ __webpack_exports__["a"] = (LoadableValue);


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reset */
/* harmony export (immutable) */ __webpack_exports__["a"] = isLoading;
/* harmony export (immutable) */ __webpack_exports__["c"] = stopLoading;
/* harmony export (immutable) */ __webpack_exports__["b"] = startLoading;
var loadingState = {};
var loadIdCounter = 0;
function reset() {
    loadingState = {};
}
function isLoading(dataId) {
    return loadingState[dataId] !== undefined;
}
function stopLoading(dataId) {
    delete loadingState[dataId];
}
function startLoading(dataId, loader, onSuccess, onError) {
    if (isLoading(dataId)) {
        return;
    }
    var loadId = loadIdCounter++;
    var isUnchanged = function () { return loadingState[dataId] === loadId; };
    function ifUnchanged(fn) {
        if (isUnchanged()) {
            fn();
        }
    }
    var pushCallbacks = [];
    var addPushCallback = function (callback) {
        return pushCallbacks.push(callback);
    };
    var runPushCallbacks = function () { return pushCallbacks.forEach(function (callback) { return callback(); }); };
    loader({ push: addPushCallback, wasCancelled: function () { return !isUnchanged(); } }).then(function (result) {
        return ifUnchanged(function () {
            return scrivito.batchedStateUpdater.add(function () {
                stopLoading(dataId);
                onSuccess(result);
                runPushCallbacks();
            });
        });
    }, function (error) {
        return ifUnchanged(function () {
            return scrivito.batchedStateUpdater.add(function () {
                stopLoading(dataId);
                onError(error);
                runPushCallbacks();
            });
        });
    });
    loadingState[dataId] = loadId;
}


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assertValidCurrentWorkspaceId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__ = __webpack_require__(1);

function assertValidCurrentWorkspaceId(expectedCurrentWorkspaceId) {
    var actualCurrentWorkspaceId = scrivito.currentWorkspaceId();
    // This should never happen!
    if (expectedCurrentWorkspaceId !== actualCurrentWorkspaceId) {
        throw new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["e" /* InternalError */]('Requested and the actual current workspace differ! ' +
            ("Expected " + actualCurrentWorkspaceId + ", but saw " + expectedCurrentWorkspaceId + "."));
    }
}


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retrieveBinaryMetadata;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_cms_rest_api__ = __webpack_require__(15);

function retrieveBinaryMetadata(binaryId) {
    return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_cms_rest_api__["a" /* cmsRestApi */].get("blobs/" + encodeURIComponent(binaryId || '') + "/meta_data");
}


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retrieveObj;
/* unused harmony export reset */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_cms_rest_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_batch_retrieval__ = __webpack_require__(117);


function mget(ids) {
    var workspaceId = scrivito.currentWorkspaceId();
    return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_cms_rest_api__["a" /* cmsRestApi */].get("workspaces/" + workspaceId + "/objs/mget", {
        ids: ids, include_deleted: true,
    }).then(function (response) { return response.results; });
}
// Question: Why the magic batchSize: 17?
// Answer: Retrieval of up to 100 Objs is a common use-case (see ObjSearch)
// With a batchSize of 17, this leads to 6 concurrent requests, which is
// the concurrent request limit in many browsers for HTTP/1.
// This ensures maximum parallel loading.
var batchRetrieval = new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_batch_retrieval__["a" /* default */](mget, { batchSize: 17 });
function retrieveObj(id) {
    return batchRetrieval.retrieve(id).then(function (value) {
        if (value) {
            return value;
        }
        return { _deleted: id };
    });
}
// For test purpose only.
function reset() {
    batchRetrieval.reset();
}


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_deferred__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_next_tick__ = __webpack_require__(9);



var BatchRetrieval = /** @class */ (function () {
    function BatchRetrieval(mget, _a) {
        var batchSize = (_a === void 0 ? {} : _a).batchSize;
        this.mget = mget;
        this.batchSize = batchSize || 100;
        this.deferreds = {};
    }
    BatchRetrieval.prototype.retrieve = function (id) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isEmpty"])(this.deferreds)) {
            Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_next_tick__["a" /* default */])(function () { return _this.performRetrieval(); });
        }
        if (!this.deferreds[id]) {
            var deferred = new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_deferred__["a" /* default */]();
            this.deferreds[id] = deferred;
        }
        return this.deferreds[id].promise;
    };
    // For test purpose only.
    BatchRetrieval.prototype.reset = function () {
        this.deferreds = {};
    };
    BatchRetrieval.prototype.performRetrieval = function () {
        var _this = this;
        var ids = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["keys"])(this.deferreds).slice(0, this.batchSize);
        if (ids.length === 0) {
            return;
        }
        var currentRequestDeferreds = {};
        ids.forEach(function (id) {
            currentRequestDeferreds[id] = _this.deferreds[id];
            delete _this.deferreds[id];
        });
        this.mget(ids).then(function (results) {
            ids.forEach(function (id, index) {
                var deferred = currentRequestDeferreds[id];
                var result = results[index];
                if (index < results.length) {
                    deferred.resolve(result);
                }
                else {
                    _this.retrieve(id).then(deferred.resolve, deferred.reject);
                }
            });
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["each"])(currentRequestDeferreds, function (deferred) { return deferred.reject(error); });
        });
        this.performRetrieval();
    };
    return BatchRetrieval;
}());
/* harmony default export */ __webpack_exports__["a"] = (BatchRetrieval);


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retrieve;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_cms_rest_api__ = __webpack_require__(15);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function retrieve(params) {
    var workspaceId = scrivito.currentWorkspaceId();
    var consistentParams = __assign({ consistent: true }, params);
    return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_cms_rest_api__["a" /* cmsRestApi */].get("workspaces/" + workspaceId + "/objs/search", consistentParams).then(function (backendResponse) {
        var response = asBackendQueryResponse(backendResponse);
        return {
            results: response.results.map(function (result) { return result.id; }),
            continuation: response.continuation,
            total: response.total,
            objs: response.objs,
        };
    });
}
function asBackendQueryResponse(backendResponse) {
    var queryResponse = {
        results: backendResponse.results,
        total: backendResponse.total,
    };
    var continuation = backendResponse.continuation;
    if (continuation !== undefined) {
        queryResponse.continuation = continuation;
    }
    var objs = backendResponse.objs;
    if (objs !== undefined) {
        queryResponse.objs = objs;
    }
    return queryResponse;
}


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retrieveFacetQuery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_cms_rest_api__ = __webpack_require__(15);

function retrieveFacetQuery(currentWorkspaceId, params) {
    return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_cms_rest_api__["a" /* cmsRestApi */].get("workspaces/" + currentWorkspaceId + "/objs/search", params).then(function (response) {
        var facets = response.facets;
        return { facets: facets.map(function (facetArray) {
                return facetArray.map(function (facet) {
                    return {
                        total: facet.total,
                        value: facet.value,
                        results: facet.results,
                    };
                });
            }) };
    });
}


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retrieveBinaryUrls;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_cms_rest_api__ = __webpack_require__(15);


function retrieveBinaryUrls(binaryId, transformation) {
    var path = "blobs/" + encodeURIComponent(binaryId);
    var params;
    if (transformation) {
        path = path + "/optimize";
        params = { transformation: transformation };
    }
    return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_cms_rest_api__["a" /* cmsRestApi */].get(path, params).then(function (response) { return parseBackendResponse(binaryId, response); });
}
function parseBackendResponse(binaryId, response) {
    var publicAccessData = response.public_access;
    var getPublicAccessData = publicAccessData.get;
    if (!getPublicAccessData.url) {
        throw new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["e" /* InternalError */]("Missing public access URL for binary \"" + binaryId + "\"");
    }
    var binaryData = {
        public_access: {
            get: {
                url: getPublicAccessData.url,
            },
        },
    };
    var privateAccessData = response.private_access;
    if (privateAccessData) {
        var getPrivateAccessData = privateAccessData.get;
        if (getPrivateAccessData.url) {
            binaryData.private_access = {
                get: {
                    url: getPrivateAccessData.url,
                },
            };
        }
    }
    return binaryData;
}


/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_121__;

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_loadable_loadable_data__ = __webpack_require__(13);


(function () {
  function loadableWithDefault(theDefault, loadableFunction) {
    var run = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_loadable_loadable_data__["b" /* default */].run(loadableFunction);
    return run.allDataLoaded ? run.result : theDefault;
  } // export


  scrivito.loadableWithDefault = loadableWithDefault; // legacy, keeping this for now to avoid conflicts.

  scrivito.loadWithDefault = loadableWithDefault;
})();

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__ = __webpack_require__(1);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



(function () {
  /**
    * A `NotLoadedError` is thrown when data is accessed in a synchronous fashion but is not yet
    * available locally.
    */
  var NotLoadedError =
  /*#__PURE__*/
  function (_ScrivitoError) {
    _inherits(NotLoadedError, _ScrivitoError);

    function NotLoadedError(captureStackTrace) {
      _classCallCheck(this, NotLoadedError);

      return _possibleConstructorReturn(this, _getPrototypeOf(NotLoadedError).call(this, 'Data is not yet loaded.', captureStackTrace));
    }

    return NotLoadedError;
  }(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_errors__["i" /* ScrivitoError */]); // export


  scrivito.NotLoadedError = NotLoadedError;
})();

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);


(function () {
  var shouldBypassThrottle = false;

  function throttle(fn, ms, options) {
    return shouldBypassThrottle ? fn : __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.throttle(fn, ms, options);
  }

  function bypassThrottle() {
    shouldBypassThrottle = true;
  }

  scrivito.throttle = throttle;
  scrivito.bypassThrottle = bypassThrottle;
})();

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_is_system_attribute__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__ = __webpack_require__(1);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





(function () {
  scrivito.typeInfo = {
    normalize: function normalize(typeInfo) {
      if (__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isString(typeInfo)) {
        return [typeInfo];
      }

      if (__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isArray(typeInfo)) {
        return typeInfo;
      }

      throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["e" /* InternalError */]('Type Info needs to be a string or an array containing a string and optionally a hash');
    },
    normalizeAttrs: function normalizeAttrs(attributes) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.mapObject(attributes, function (attributeValue, name) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_is_system_attribute__["a" /* default */])(name)) {
          if (__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isArray(attributeValue)) {
            return attributeValue;
          }

          return [attributeValue];
        }

        if (!__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isArray(attributeValue)) {
          throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["e" /* InternalError */]("Value for ".concat(name, " should be a tuple: [value, typeInfo]"));
        }

        var _attributeValue = _slicedToArray(attributeValue, 2),
            value = _attributeValue[0],
            typeInfo = _attributeValue[1];

        return [value, _this.normalize(typeInfo)];
      });
    },
    unwrapAttributes: function unwrapAttributes(attributes) {
      return __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.mapObject(attributes, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            value = _ref2[0];

        return value;
      });
    }
  };
})();

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_global_namespace__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_global_namespace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_global_namespace__);


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_global_namespace__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_global_namespace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_global_namespace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_app_adapter__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_browser_location__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_change_location__ = __webpack_require__(163);
 // import all sources that are not (yet) modules





/***/ }),
/* 128 */
/***/ (function(module, exports) {

if (!window.scrivito) {
  window.scrivito = {};
}

window.scrivito.AppSupport = {};

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scrollWindowToTop;
function scrollWindowToTop() {
  window.scrollTo(0, 0);
} // For test purpose only.

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findWidgetPlacement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_is_system_attribute__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);


function findWidgetPlacement(objData, widgetId) {
    var placement = findWidgetPlacementIn(objData, widgetId);
    if (placement) {
        return placement;
    }
    var widgetPool = objData._widget_pool;
    if (widgetPool) {
        __WEBPACK_IMPORTED_MODULE_1_underscore__["find"](widgetPool, function (parentWidgetData, parentWidgetId) {
            if (parentWidgetData) {
                placement = findWidgetPlacementIn(parentWidgetData, widgetId);
                if (placement) {
                    placement.parentWidgetId = parentWidgetId;
                    return true;
                }
            }
        });
    }
    return placement;
}
function findWidgetPlacementIn(objOrWidgetData, widgetId) {
    var placement;
    __WEBPACK_IMPORTED_MODULE_1_underscore__["find"](objOrWidgetData, function (attributeDict, attributeName) {
        if (!attributeDict) {
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_is_system_attribute__["a" /* default */])(attributeName)) {
            return;
        }
        var _a = attributeDict, attributeType = _a[0], attributeValue = _a[1];
        if (attributeValue && attributeType === 'widgetlist') {
            var widgetlistValue = attributeValue;
            var index = widgetlistValue.indexOf(widgetId);
            if (index !== -1) {
                placement = { attributeName: attributeName, index: index };
                return true;
            }
        }
    });
    return placement;
}


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertToSlug;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_speakingurl__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_speakingurl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_speakingurl__);

function convertToSlug(input) {
  return __WEBPACK_IMPORTED_MODULE_0_speakingurl___default()(input);
}

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_132__;

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deserialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_types__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_link__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_binary__ = __webpack_require__(12);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function deserialize(model, rawValue, type, options) {
  var _rawValue = _slicedToArray(rawValue, 2),
      typeFromBackend = _rawValue[0],
      valueFromBackend = _rawValue[1];

  switch (type) {
    case 'binary':
      return deserializeBinaryValue(typeFromBackend, valueFromBackend);

    case 'date':
      return deserializeDateValue(typeFromBackend, valueFromBackend);

    case 'float':
      return deserializeFloatValue(typeFromBackend, valueFromBackend);

    case 'enum':
      return deserializeEnumValue(typeFromBackend, valueFromBackend, options);

    case 'html':
      return deserializeHtmlValue(typeFromBackend, valueFromBackend);

    case 'integer':
      return deserializeIntegerValue(typeFromBackend, valueFromBackend);

    case 'link':
      return deserializeLinkValue(typeFromBackend, valueFromBackend);

    case 'linklist':
      return deserializeLinklistValue(typeFromBackend, valueFromBackend);

    case 'multienum':
      return deserializeMultienumValue(typeFromBackend, valueFromBackend, options);

    case 'reference':
      return deserializeReferenceValue(typeFromBackend, valueFromBackend);

    case 'referencelist':
      return deserializeReferencelistValue(typeFromBackend, valueFromBackend);

    case 'string':
      return deserializeStringValue(typeFromBackend, valueFromBackend);

    case 'stringlist':
      return deserializeStringlistValue(typeFromBackend, valueFromBackend);

    case 'widgetlist':
      return deserializeWidgetlistValue(typeFromBackend, valueFromBackend, model);
  }
}

function deserializeBinaryValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend === 'binary' && valueFromBackend) {
    var binaryId = valueFromBackend.id;
    var isPublic = scrivito.currentWorkspaceId() === 'published';
    return new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_binary__["a" /* default */](binaryId, isPublic).optimizeFor({});
  }

  return null;
}

function deserializeDateValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend !== 'date') {
    return null;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_types__["a" /* deserializeAsDate */])(valueFromBackend);
}

function deserializeHtmlValue(typeFromBackend, valueFromBackend) {
  if (__WEBPACK_IMPORTED_MODULE_3_underscore___default.a.contains(['html', 'string'], typeFromBackend) && __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.isString(valueFromBackend)) {
    return valueFromBackend;
  }

  return '';
}

function deserializeEnumValue(typeFromBackend, valueFromBackend, _ref) {
  var values = _ref.values;

  if (typeFromBackend === 'string' && __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.contains(values, valueFromBackend)) {
    return valueFromBackend;
  }

  return null;
}

function deserializeMultienumValue(typeFromBackend, valueFromBackend, _ref2) {
  var values = _ref2.values;

  if (typeFromBackend !== 'stringlist' || !Array.isArray(valueFromBackend)) {
    return [];
  }

  return __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.intersection(valueFromBackend, values);
}

function deserializeFloatValue(typeFromBackend, valueFromBackend) {
  switch (typeFromBackend) {
    case 'string':
      if (valueFromBackend.match(/^-?\d+(\.\d+)?$/)) {
        return convertToFloat(valueFromBackend);
      }

      return null;

    case 'number':
      return convertToFloat(valueFromBackend);

    default:
      return null;
  }
}

function convertToFloat(valueFromBackend) {
  var floatValue = parseFloat(valueFromBackend);

  if (Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_types__["e" /* isValidFloat */])(floatValue)) {
    return floatValue;
  }

  return null;
}

function deserializeIntegerValue(typeFromBackend, valueFromBackend) {
  switch (typeFromBackend) {
    case 'string':
    case 'number':
      return Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_types__["b" /* deserializeAsInteger */])(valueFromBackend);

    default:
      return null;
  }
}

function deserializeLinkValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend !== 'link' || !__WEBPACK_IMPORTED_MODULE_3_underscore___default.a.isObject(valueFromBackend)) {
    return null;
  }

  return convertToLink(valueFromBackend);
}

function deserializeLinklistValue(_typeFromBackend, valueFromBackend) {
  if (!__WEBPACK_IMPORTED_MODULE_3_underscore___default.a.isArray(valueFromBackend)) {
    return [];
  }

  return __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.compact(valueFromBackend.map(convertToLink));
}

function convertToLink(valueFromBackend) {
  var linkParams = __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.pick(valueFromBackend, 'title', 'query', 'fragment', 'target', 'url');

  linkParams.hash = linkParams.fragment;
  delete linkParams.fragment;
  linkParams.objId = valueFromBackend.obj_id;
  var link = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_link__["a" /* default */](linkParams);

  if (link.isBroken()) {
    return null;
  }

  return link;
}

function convertReferenceToBasicObj(valueFromBackend) {
  var obj = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__["a" /* default */].get(valueFromBackend);

  if (obj) {
    return obj;
  }

  return null;
}

function deserializeReferenceValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend === 'reference' && valueFromBackend) {
    return convertReferenceToBasicObj(valueFromBackend);
  }

  return null;
}

function deserializeReferencelistValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend !== 'referencelist') {
    return [];
  }

  if (!valueFromBackend) {
    return [];
  }

  var objs = valueFromBackend.map(convertReferenceToBasicObj);
  return __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.compact(objs);
}

function deserializeStringValue(typeFromBackend, valueFromBackend) {
  if (__WEBPACK_IMPORTED_MODULE_3_underscore___default.a.contains(['html', 'string'], typeFromBackend) && __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.isString(valueFromBackend)) {
    return valueFromBackend;
  }

  return '';
}

function deserializeStringlistValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend !== 'stringlist' || !Array.isArray(valueFromBackend)) {
    return [];
  }

  return valueFromBackend;
}

function deserializeWidgetlistValue(typeFromBackend, valueFromBackend, model) {
  if (typeFromBackend !== 'widgetlist') {
    return [];
  }

  return __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.map(valueFromBackend, function (widgetId) {
    return model.widget(widgetId);
  });
}

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseQuery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_urijs__);

function parseQuery(query) {
    // @types/urijs declares return value to be `Object` - unusable
    return __WEBPACK_IMPORTED_MODULE_0_urijs__["parseQuery"](query);
}


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlobType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FileType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__ = __webpack_require__(8);

var BlobType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].interface({
  size: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Number,
  type: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String
}, {
  name: 'Blob',
  strict: false
});
var FileType = BlobType.extend({
  name: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String
}, {
  name: 'File',
  strict: false
});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__ = __webpack_require__(1);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var BasicField =
/*#__PURE__*/
function () {
  function BasicField(_ref) {
    var container = _ref.container,
        attributeName = _ref.attributeName,
        typeInfo = _ref.typeInfo;

    _classCallCheck(this, BasicField);

    this._container = container;
    this._attributeName = attributeName;
    this._typeInfo = typeInfo;
  }

  _createClass(BasicField, [{
    key: "get",
    value: function get() {
      return this._container.get(this.name(), this._typeInfo);
    }
  }, {
    key: "update",
    value: function update(newValue) {
      this._container.update(_defineProperty({}, this.name(), [newValue, this._typeInfo]));
    }
  }, {
    key: "container",
    value: function container() {
      return this._container;
    }
  }, {
    key: "obj",
    value: function obj() {
      return this.container().obj();
    }
  }, {
    key: "name",
    value: function name() {
      return this._attributeName;
    }
  }, {
    key: "type",
    value: function type() {
      return this._typeInfo[0];
    }
  }, {
    key: "typeOptions",
    value: function typeOptions() {
      return this._typeInfo[1] || {};
    }
  }, {
    key: "equals",
    value: function equals(other) {
      if (!_instanceof(other, BasicField)) {
        return false;
      }

      return this.container().equals(other.container()) && this.name() === other.name();
    }
  }, {
    key: "values",
    value: function values() {
      this._assertValidTypes(['enum', 'multienum'], 'Only enum and multienum attributes can have values');

      return this._sortValuesByLocalization(this.typeOptions().values);
    }
  }, {
    key: "titleForValue",
    value: function titleForValue(value) {
      this._assertValidTypes(['enum', 'multienum'], 'Only enum and multienum attributes can have localized values');

      var localization = Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["findWhere"])(this.typeOptions().valuesLocalization, {
        value: value
      });
      return localization && localization.title || value;
    }
  }, {
    key: "toString",
    value: function toString() {
      var _this$_dataForId = this._dataForId(),
          name = _this$_dataForId.name,
          objId = _this$_dataForId.objId,
          widgetId = _this$_dataForId.widgetId;

      var stringRepresentation = "<BasicField name=".concat(name, " objId=").concat(objId);

      if (widgetId) {
        stringRepresentation += " widgetId=".concat(widgetId, ">");
      } else {
        stringRepresentation += '>';
      }

      return stringRepresentation;
    }
  }, {
    key: "id",
    value: function id() {
      var _this$_dataForId2 = this._dataForId(),
          name = _this$_dataForId2.name,
          objId = _this$_dataForId2.objId,
          widgetId = _this$_dataForId2.widgetId;

      var id = "".concat(name, "|").concat(objId);

      if (widgetId) {
        id += "|".concat(widgetId);
      }

      return id;
    }
  }, {
    key: "_assertValidTypes",
    value: function _assertValidTypes(validTypes, errorMessage) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["include"])(validTypes, this.type())) {
        throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["e" /* InternalError */](errorMessage);
      }
    }
  }, {
    key: "_dataForId",
    value: function _dataForId() {
      var jsonHash = {
        name: this.name()
      };
      var container = this.container();

      if (_instanceof(container, __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__["a" /* default */])) {
        jsonHash.objId = container.id();
      } else {
        jsonHash.objId = container.obj().id();
        jsonHash.widgetId = container.id();
      }

      return jsonHash;
    }
  }, {
    key: "_sortValuesByLocalization",
    value: function _sortValuesByLocalization(values) {
      var _this = this;

      if (values) {
        if (this.typeOptions().valuesLocalization) {
          return Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["sortBy"])(values, function (value) {
            var index = Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["findIndex"])(_this.typeOptions().valuesLocalization, {
              value: value
            });

            if (index === -1) {
              return values.length;
            }

            return index;
          });
        }

        return values;
      }

      return [];
    }
  }]);

  return BasicField;
}();



/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_query_store__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_data_store__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_loadable_load__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_loadable_loadable_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_content_state_id__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_cms_retrieval__ = __webpack_require__(27);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};








var FALLBACK_RESPONSE = {
    results: [],
    total: 0,
};
var ObjIdQueryBatch = /** @class */ (function () {
    // the constructor should only be called internally,
    // i.e. by ObjIdQueryBatch itself
    function ObjIdQueryBatch(params, batchSize, previousBatch) {
        this._params = params;
        this._batchSize = batchSize;
        if (previousBatch) {
            this._index = previousBatch.index + 1;
            this._continuation = previousBatch.continuationForNextBatch();
            this._previousBatch = previousBatch;
        }
        else {
            // First batch
            this._index = 0;
        }
    }
    ObjIdQueryBatch.store = function (params, objIds, total) {
        if (total === void 0) { total = objIds.length; }
        var state = stateContainer(backendOrderedHitsParams(params), 0);
        var invalidation = invalidationFn(undefined);
        var loadableData = new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_loadable_loadable_data__["b" /* default */]({
            state: state,
            invalidation: invalidation,
            loader: function () {
                throw new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_errors__["e" /* InternalError */]('this should never be called');
            },
        });
        loadableData.set({ results: objIds, total: total });
    };
    ObjIdQueryBatch.firstBatchFor = function (params, batchSize) {
        return new ObjIdQueryBatch(backendOrderedHitsParams(params), batchSize);
    };
    ObjIdQueryBatch.countFor = function (params) {
        return this.firstBatchFor(params, 0).count();
    };
    ObjIdQueryBatch.prototype.objIds = function () {
        return this._response().results;
    };
    ObjIdQueryBatch.prototype.count = function () {
        return this._response().total || 0;
    };
    // returns the next batch or undefined if this is the last batch
    // throws NotLoadedError if not available
    ObjIdQueryBatch.prototype.nextBatch = function () {
        if (this.continuationForNextBatch()) {
            return new ObjIdQueryBatch(this._params, this._batchSize, this);
        }
    };
    Object.defineProperty(ObjIdQueryBatch.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    ObjIdQueryBatch.prototype.continuationForNextBatch = function () {
        return this._response().continuation;
    };
    ObjIdQueryBatch.prototype._response = function () {
        return this._data().get() || FALLBACK_RESPONSE;
    };
    ObjIdQueryBatch.prototype._data = function () {
        return new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_loadable_loadable_data__["b" /* default */]({
            state: stateContainer(this._params, this._index),
            loader: this._load.bind(this),
            invalidation: invalidationFn(this._continuation),
        });
    };
    ObjIdQueryBatch.prototype._load = function (_a) {
        var _this = this;
        var push = _a.push, isReload = _a.isReload, wasCancelled = _a.wasCancelled;
        return this._fetchContinuation().then(function (continuation) {
            if (wasCancelled()) {
                // if the load was cancelled, this error will never surface anywhere
                throw new Error();
            }
            var batchSpecificParams = {
                size: _this._batchSize,
                continuation: continuation,
                include_objs: !isReload(),
            };
            var requestParams = __assign({}, _this._params, batchSpecificParams);
            return __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_cms_retrieval__["a" /* cmsRetrieval */].retrieveObjQuery(scrivito.currentWorkspaceId(), requestParams)
                .then(function (response) {
                var objs = response.objs;
                if (objs) {
                    push(function () { return objs.forEach(function (objJson) { return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_data_store__["e" /* store */](objJson); }); });
                }
                preloadObjData(response.results);
                return response;
            });
        });
    };
    ObjIdQueryBatch.prototype._fetchContinuation = function () {
        var previousBatch = this._previousBatch;
        if (previousBatch) {
            return Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_loadable_load__["a" /* default */])(function () { return previousBatch.continuationForNextBatch(); });
        }
        return scrivito.Promise.resolve();
    };
    return ObjIdQueryBatch;
}());
/* harmony default export */ __webpack_exports__["a"] = (ObjIdQueryBatch);
function preloadObjData(ids) {
    ids.forEach(function (id) { return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_data_store__["c" /* preload */](id); });
}
function stateContainer(params, index) {
    var paramsWithIndex = __assign({}, params, { index: index });
    var key = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_query_store__["a" /* computeCacheKey */](paramsWithIndex);
    return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_query_store__["c" /* stateContainer */]().subState(key);
}
function invalidationFn(continuation) {
    return function () { return continuation + "|" + Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_content_state_id__["a" /* getContentStateId */])(); };
}
function backendOrderedHitsParams(params) {
    var backendParams = Object(__WEBPACK_IMPORTED_MODULE_2_underscore__["omit"])({
        query: params.query,
        offset: params.offset,
        sort_by: params.sortBy,
        sort_order: params.sortDirection,
    }, __WEBPACK_IMPORTED_MODULE_2_underscore__["isUndefined"]);
    if (params.includeDeleted) {
        backendParams.options = { include_deleted: true };
    }
    return backendParams;
}


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjDataQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_data_store__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_id_query__ = __webpack_require__(68);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ObjDataQuery =
/*#__PURE__*/
function () {
  function ObjDataQuery(params, batchSize) {
    _classCallCheck(this, ObjDataQuery);

    this._params = params;
    this._batchSize = batchSize;
  }

  _createClass(ObjDataQuery, [{
    key: "count",
    value: function count() {
      return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_id_query__["a" /* default */].count(this._params);
    }
  }, {
    key: "iterator",
    value: function iterator() {
      return new ObjDataQueryIterator(this._params, this._batchSize);
    }
  }]);

  return ObjDataQuery;
}();



var ObjDataQueryIterator =
/*#__PURE__*/
function () {
  function ObjDataQueryIterator(params, batchSize) {
    _classCallCheck(this, ObjDataQueryIterator);

    this._iterator = new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_obj_id_query__["a" /* default */](params, batchSize).iterator();
  }

  _createClass(ObjDataQueryIterator, [{
    key: "next",
    value: function next() {
      if (!this._iterator) {
        return {
          done: true
        };
      }

      var id = this._iterator.next().value;

      if (!id) {
        return {
          done: true
        };
      }

      var objData = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_obj_data_store__["b" /* get */](id);

      if (objData === undefined) {
        this._iterator = undefined;
        return {
          done: true
        };
      }

      if (objData.isNonExistent()) {
        return this.next();
      }

      return {
        value: objData,
        done: false
      };
    }
  }]);

  return ObjDataQueryIterator;
}();

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj_facet_value__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_loadable_loadable_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_content_state_id__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_cms_retrieval__ = __webpack_require__(27);






var FacetQuery = /** @class */ (function () {
    function FacetQuery(attribute, options, query) {
        this._requestParams = buildRequestParams(attribute, options, query);
        this._loadableData = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_loadable_loadable_data__["b" /* default */]({
            state: state(this._requestParams),
            loader: loader(this._requestParams),
            invalidation: invalidation,
        });
    }
    // For test purpose only.
    FacetQuery.store = function (attribute, options, query, response) {
        var requestParams = buildRequestParams(attribute, options, query);
        var loadableData = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_loadable_loadable_data__["b" /* default */]({
            state: state(requestParams),
            loader: loader(requestParams),
            invalidation: invalidation,
            throwNotLoaded: true,
        });
        loadableData.set(response);
    };
    FacetQuery.prototype.result = function () {
        var response = this._loadableData.get();
        if (!response) {
            return [];
        }
        return response.facets[0].map(function (facet) {
            var name = facet.value;
            var count = facet.total;
            var includedObjs = facet.results.map(function (result) { return result.id; });
            return new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj_facet_value__["a" /* default */](name, count, includedObjs);
        });
    };
    return FacetQuery;
}());
/* harmony default export */ __webpack_exports__["a"] = (FacetQuery);
function state(params) {
    var subStateKey = scrivito.computeCacheKey(params);
    return __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_global_state__["b" /* cmsState */].subState('facetQuery').subState(subStateKey);
}
function loader(params) {
    return function () { return __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_cms_retrieval__["a" /* cmsRetrieval */].retrieveFacetQuery(scrivito.currentWorkspaceId(), params); };
}
function invalidation() {
    return Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_content_state_id__["a" /* getContentStateId */])() || '';
}
function buildRequestParams(attribute, options, query) {
    var params = {
        facets: [
            {
                attribute: attribute,
                limit: options.limit || 10,
                include_objs: options.includeObjs || 0,
            },
        ],
        size: 0,
    };
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isEmpty"])(query)) {
        params.query = query;
    }
    return params;
}


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);


var BasicObjFacetValue = /** @class */ (function () {
    function BasicObjFacetValue(name, count, includedObjIds) {
        this._name = name;
        this._count = count;
        this._includedObjIds = includedObjIds;
    }
    BasicObjFacetValue.prototype.name = function () {
        return this._name;
    };
    BasicObjFacetValue.prototype.count = function () {
        return this._count;
    };
    BasicObjFacetValue.prototype.includedObjs = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["compact"])(this._includedObjIds.map(function (id) { return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */].get(id); }));
    };
    return BasicObjFacetValue;
}());
/* harmony default export */ __webpack_exports__["a"] = (BasicObjFacetValue);


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayFromIterable;
function arrayFromIterable(iterable, size) {
    var iterator = iterable.iterator();
    var result = [];
    while (result.length !== size) {
        var next = iterator.next();
        if (next.done) {
            return result;
        }
        result.push(next.value);
    }
    return result;
}


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return randomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return randomHex; });
function randomHex() {
  var hex = Math.floor(Math.random() * Math.pow(16, 8)).toString(16);

  while (hex.length < 8) {
    hex = "0".concat(hex);
  }

  return hex;
}

function randomId() {
  return randomHex() + randomHex();
}



/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isExistentObjJson;
function isExistentObjJson(data) {
    return !data._deleted;
}


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Realm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_realm_registry__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_realm_app_model_accessor__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_app_class_api__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_realm_app_class_api_check__ = __webpack_require__(151);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Realm =
/*#__PURE__*/
function () {
  _createClass(Realm, null, [{
    key: "init",
    value: function init(context) {
      var realm = new Realm();
      context.Obj = realm.Obj;
      context.Widget = realm.Widget;
      context.Link = realm.Link;
      context.ObjSearch = realm.ObjSearch;
      context.appModelAccessor = realm.appModelAccessor;

      context.provideObjClass = function () {
        return realm.provideObjClass.apply(realm, arguments);
      };

      context.provideWidgetClass = function () {
        return realm.provideWidgetClass.apply(realm, arguments);
      };

      context.createObjClass = function () {
        return realm.createObjClass.apply(realm, arguments);
      };

      context.createWidgetClass = function () {
        return realm.createWidgetClass.apply(realm, arguments);
      };

      context.getClass = function () {
        return realm.getClass.apply(realm, arguments);
      };

      context.allObjClasses = function () {
        return realm.allObjClasses();
      };

      context.allWidgetClasses = function () {
        return realm.allWidgetClasses();
      };

      context._privateRealm = realm;
      return realm;
    }
  }]);

  function Realm() {
    _classCallCheck(this, Realm);

    this._registry = new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_realm_registry__["a" /* default */]();
    this.appModelAccessor = new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_realm_app_model_accessor__["a" /* default */](this._registry);
  }

  _createClass(Realm, [{
    key: "provideObjClass",
    // public API
    value: function provideObjClass(name, definition) {
      Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_realm_app_class_api_check__["c" /* checkProvideObjClass */])(name, definition);
      return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_app_class_api__["c" /* provideObjClass */])(this._registry, name, definition);
    } // public API

  }, {
    key: "provideWidgetClass",
    value: function provideWidgetClass(name, definition) {
      Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_realm_app_class_api_check__["d" /* checkProvideWidgetClass */])(name, definition);
      return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_app_class_api__["d" /* provideWidgetClass */])(this._registry, name, definition);
    } // public API

  }, {
    key: "createObjClass",
    value: function createObjClass(definition) {
      Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_realm_app_class_api_check__["a" /* checkCreateObjClass */])(definition);
      return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_app_class_api__["a" /* createObjClass */])(this._registry, definition);
    } // public API

  }, {
    key: "createWidgetClass",
    value: function createWidgetClass(definition) {
      Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_realm_app_class_api_check__["b" /* checkCreateWidgetClass */])(definition);
      return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_app_class_api__["b" /* createWidgetClass */])(this._registry, definition);
    } // public API

  }, {
    key: "getClass",
    value: function getClass(name) {
      return this._registry.getClass(name);
    }
  }, {
    key: "allObjClasses",
    value: function allObjClasses() {
      return this._registry.allObjClasses();
    }
  }, {
    key: "allWidgetClasses",
    value: function allWidgetClasses() {
      return this._registry.allWidgetClasses();
    }
  }, {
    key: "setInitialContentFor",
    value: function setInitialContentFor(initialContentFor) {
      this._registry.setInitialContentFor(initialContentFor);
    }
  }, {
    key: "Obj",
    get: function get() {
      return this._registry.defaultClassForObjs;
    }
  }, {
    key: "Widget",
    get: function get() {
      return this._registry.defaultClassForWidgets;
    }
  }, {
    key: "Link",
    get: function get() {
      return this._registry.defaultClassForLinks;
    }
  }, {
    key: "ObjSearch",
    get: function get() {
      return this._registry.ObjSearch;
    }
  }]);

  return Realm;
}();



/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_realm_link_factory__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_obj_factory__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_realm_obj_search_factory__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_realm_widget_factory__ = __webpack_require__(149);





var Registry = /** @class */ (function () {
    function Registry() {
        this.mapping = {};
        this.defaultClassForObjs = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_obj_factory__["a" /* default */])(this);
        this.defaultClassForWidgets = Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_realm_widget_factory__["a" /* default */])(this);
        this.defaultClassForLinks = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_realm_link_factory__["a" /* default */])(this);
        this.ObjSearch = Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_realm_obj_search_factory__["a" /* default */])(this);
    }
    Registry.prototype.register = function (name, klass) {
        this.mapping[name] = klass;
    };
    Registry.prototype.getClass = function (name) {
        return this.mapping[name];
    };
    Registry.prototype.allObjClasses = function () {
        return this.allForBaseClass(this.defaultClassForObjs);
    };
    Registry.prototype.allWidgetClasses = function () {
        return this.allForBaseClass(this.defaultClassForWidgets);
    };
    Registry.prototype.objClassFor = function (name) {
        return this.appClassFor(name, this.defaultClassForObjs);
    };
    Registry.prototype.widgetClassFor = function (name) {
        return this.appClassFor(name, this.defaultClassForWidgets);
    };
    Registry.prototype.objClassNameFor = function (modelClass) {
        return __WEBPACK_IMPORTED_MODULE_0_underscore__["findKey"](this.mapping, function (klass) { return klass === modelClass; });
    };
    Registry.prototype.setInitialContentFor = function (initialContentFor) {
        this.initialContentForFunction = initialContentFor;
    };
    Registry.prototype.initialContentFor = function (className, attributeName) {
        if (this.initialContentForFunction) {
            return this.initialContentForFunction(className, attributeName);
        }
    };
    Registry.prototype.appClassFor = function (name, baseClass) {
        var appClass = this.getClass(name);
        if (appClass && baseClass.isPrototypeOf(appClass)) {
            return appClass;
        }
        return baseClass;
    };
    Registry.prototype.allForBaseClass = function (baseClass) {
        return __WEBPACK_IMPORTED_MODULE_0_underscore__["pick"](this.mapping, function (modelClass) { return baseClass.isPrototypeOf(modelClass); });
    };
    return Registry;
}());
/* harmony default export */ __webpack_exports__["a"] = (Registry);


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LinkFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_link__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_pretty_print__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__ = __webpack_require__(1);





function LinkFactory(registry) {
    // public API
    var Link = /** @class */ (function () {
        // public API
        function Link(attributes) {
            var basicAttributes = toBasicAttributes(attributes);
            this._scrivitoPrivateContent = new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_link__["a" /* default */](basicAttributes);
        }
        // public API
        Link.prototype.title = function () {
            return this._scrivitoPrivateContent.title();
        };
        // public API
        Link.prototype.query = function () {
            return this._scrivitoPrivateContent.query();
        };
        // public API
        Link.prototype.hash = function () {
            return this._scrivitoPrivateContent.hash();
        };
        // public API
        Link.prototype.target = function () {
            return this._scrivitoPrivateContent.target();
        };
        // public API
        Link.prototype.url = function () {
            return this._scrivitoPrivateContent.url();
        };
        // public API
        Link.prototype.obj = function () {
            var obj = this._scrivitoPrivateContent.obj();
            if (!obj) {
                return null;
            }
            return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(registry, obj);
        };
        // public API
        Link.prototype.queryParameters = function () {
            return this._scrivitoPrivateContent.queryParameters();
        };
        // public API
        Link.prototype.copy = function (attributes) {
            var basicLink = this._scrivitoPrivateContent.copy(toBasicAttributes(attributes));
            var link = Object.create(registry.defaultClassForLinks.prototype);
            link._scrivitoPrivateContent = basicLink;
            return link;
        };
        // public API
        Link.prototype.isExternal = function () {
            return this._scrivitoPrivateContent.isExternal();
        };
        // public API
        Link.prototype.isInternal = function () {
            return this._scrivitoPrivateContent.isInternal();
        };
        return Link;
    }());
    return Link;
}
var ALLOWED_ATTRIBUTES = [
    'hash',
    'obj',
    'query',
    'target',
    'title',
    'url',
];
function assertValidPublicAttributes(attributes) {
    var unknownAttrs = __WEBPACK_IMPORTED_MODULE_0_underscore__["without"].apply(__WEBPACK_IMPORTED_MODULE_0_underscore__, [__WEBPACK_IMPORTED_MODULE_0_underscore__["keys"](attributes)].concat(ALLOWED_ATTRIBUTES));
    if (!__WEBPACK_IMPORTED_MODULE_0_underscore__["isEmpty"](unknownAttrs)) {
        throw new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__["b" /* ArgumentError */]("Unexpected attributes " + Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_pretty_print__["a" /* default */])(unknownAttrs) + "." +
            (" Available attributes: " + Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_pretty_print__["a" /* default */])(ALLOWED_ATTRIBUTES)));
    }
}
function toBasicAttributes(attributes) {
    assertValidPublicAttributes(attributes);
    if (__WEBPACK_IMPORTED_MODULE_0_underscore__["has"](attributes, 'obj')) {
        return __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"]({}, attributes, { objId: objIdFromObjValue(attributes.obj) });
    }
    return attributes;
}
function objIdFromObjValue(obj) {
    if (!obj) {
        return null;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_wrap_in_app_class__["c" /* unwrapAppClassValue */])(obj).id();
}


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ObjFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_schema__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_realm_app_model_accessor__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_models_metadata_collection__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_realm_attribute_content_factory__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_realm_initial_attributes_for__ = __webpack_require__(71);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










function ObjFactory(registry) {
  var appModelAccessor = new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_realm_app_model_accessor__["a" /* default */](registry);

  function buildObjSearch(objClassName, batchSize) {
    var search = new registry.ObjSearch();

    if (objClassName) {
      search.and('_objClass', 'equals', objClassName);
    }

    if (batchSize) {
      search._scrivitoPrivateContent.batchSize(batchSize);
    }

    return search;
  }

  function wrap(response) {
    return Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(registry, response);
  } // public API


  var Obj =
  /*#__PURE__*/
  function (_AttributeContentFact) {
    _inherits(Obj, _AttributeContentFact);

    function Obj() {
      _classCallCheck(this, Obj);

      return _possibleConstructorReturn(this, _getPrototypeOf(Obj).apply(this, arguments));
    }

    _createClass(Obj, [{
      key: "lastChanged",
      // public API
      value: function lastChanged() {
        return this._scrivitoPrivateContent.lastChanged();
      } // public API

    }, {
      key: "path",
      value: function path() {
        return this._scrivitoPrivateContent.path();
      } // public API

    }, {
      key: "parent",
      value: function parent() {
        return wrap(this._scrivitoPrivateContent.parent());
      } // public API

    }, {
      key: "ancestors",
      value: function ancestors() {
        return wrap(this._scrivitoPrivateContent.ancestors());
      } // public API

    }, {
      key: "backlinks",
      value: function backlinks() {
        return wrap(this._scrivitoPrivateContent.backlinks());
      } // public API

    }, {
      key: "children",
      value: function children() {
        return wrap(this._scrivitoPrivateContent.children());
      }
    }, {
      key: "orderedChildren",
      value: function orderedChildren() {
        return wrap(this._scrivitoPrivateContent.orderedChildren());
      } // public API

    }, {
      key: "permalink",
      value: function permalink() {
        return this._scrivitoPrivateContent.permalink();
      } // public API

    }, {
      key: "slug",
      value: function slug() {
        return this._scrivitoPrivateContent.slug();
      } // public API

    }, {
      key: "isBinary",
      value: function isBinary() {
        var schema = __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_schema__["a" /* default */].forInstance(this);

        if (!schema) {
          return false;
        }

        return schema.isBinary();
      } // public API

    }, {
      key: "contentLength",
      value: function contentLength() {
        if (this.isBinary()) {
          return this._scrivitoPrivateContent.contentLength();
        }

        return 0;
      } // public API

    }, {
      key: "contentType",
      value: function contentType() {
        if (this.isBinary()) {
          return this._scrivitoPrivateContent.contentType();
        }

        return '';
      } // public API

    }, {
      key: "contentUrl",
      value: function contentUrl() {
        if (this.isBinary()) {
          return this._scrivitoPrivateContent.contentUrl();
        }

        return '';
      } // public API

    }, {
      key: "metadata",
      value: function metadata() {
        if (this.isBinary()) {
          return this._scrivitoPrivateContent.metadata();
        }

        return new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_models_metadata_collection__["a" /* default */]();
      } // public API

    }, {
      key: "destroy",
      value: function destroy() {
        this._scrivitoPrivateContent.destroy();
      } // public API

    }, {
      key: "widget",
      value: function widget(id) {
        return wrap(this._scrivitoPrivateContent.widget(id));
      } // public API

    }, {
      key: "widgets",
      value: function widgets() {
        return wrap(this._scrivitoPrivateContent.widgets());
      }
    }], [{
      key: "get",
      // public API
      value: function get(id) {
        return appModelAccessor.getObj(this, id);
      } // public API

    }, {
      key: "getIncludingDeleted",
      value: function getIncludingDeleted(id) {
        return appModelAccessor.getObjIncludingDeleted(this, id);
      } // public API

    }, {
      key: "getByPath",
      value: function getByPath(path) {
        return wrap(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */].getByPath(path));
      } // public API

    }, {
      key: "getByPermalink",
      value: function getByPermalink(permalink) {
        return wrap(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */].getByPermalink(permalink));
      } // public API

    }, {
      key: "all",
      value: function all() {
        var objClassName = registry.objClassNameFor(this);
        return buildObjSearch(objClassName, 1000);
      } // public API

    }, {
      key: "root",
      value: function root() {
        return wrap(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */].root());
      } // public API

    }, {
      key: "where",
      value: function where(attribute, operator, value) {
        var boost = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var objClassName = registry.objClassNameFor(this);
        return buildObjSearch(objClassName).and(attribute, operator, value, boost);
      } // public API

    }, {
      key: "create",
      value: function create(attributes) {
        var attributesForCreate = this._prepareAttributesForCreate(attributes);

        var basicObj = __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */].create(attributesForCreate);
        return wrap(basicObj);
      }
    }, {
      key: "_prepareAttributesForCreate",
      value: function _prepareAttributesForCreate(appAttributes) {
        var appClassName = registry.objClassNameFor(this);
        var schema = __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_schema__["a" /* default */].forClass(this);
        assertValidCreateAttributes(appAttributes, appClassName);
        var initialAttributes = Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_realm_initial_attributes_for__["a" /* default */])(appAttributes, registry, schema, appClassName);
        var systemAttributes = {
          _objClass: appClassName
        };
        var createAttributes = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["extend"])({}, appAttributes, initialAttributes, systemAttributes);
        return Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_realm_wrap_in_app_class__["b" /* unwrapAppAttributes */])(createAttributes, schema, appClassName);
      }
    }]);

    return Obj;
  }(Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_realm_attribute_content_factory__["a" /* default */])(appModelAccessor));

  return Obj;
}

function assertValidCreateAttributes(attributes, appClassName) {
  if (!appClassName) {
    throw new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Creating CMS objects is not supported for the class Obj or abstract classes.');
  }

  if (attributes.constructor !== Object) {
    throw new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__["b" /* ArgumentError */]('The provided attributes are invalid. They have ' + 'to be an Object with valid Scrivito attribute values.');
  }

  if (attributes._objClass) {
    throw new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Invalid attribute "_objClass". ' + "\"".concat(attributes._objClass, ".create\" will automatically set the CMS object class ") + 'correctly.');
  }
}

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ObjSearchFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj_search__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_realm_obj_facet_value__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





function ObjSearchFactory(registry) {
  // public API
  var ObjSearch =
  /*#__PURE__*/
  function () {
    function ObjSearch() {
      _classCallCheck(this, ObjSearch);

      this._scrivitoPrivateContent = new __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj_search__["b" /* default */]();
    } // public API


    _createClass(ObjSearch, [{
      key: "and",
      value: function and(attributeOrSearch, operator, value) {
        var boost = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        if (_instanceof(attributeOrSearch, ObjSearch)) {
          this._scrivitoPrivateContent.and(attributeOrSearch._scrivitoPrivateContent);
        } else {
          var unwrappedValue = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_wrap_in_app_class__["d" /* unwrapAppClassValues */])(value);

          this._scrivitoPrivateContent.and(attributeOrSearch, operator, unwrappedValue, boost);
        }

        return this;
      } // public API

    }, {
      key: "andNot",
      value: function andNot(attribute, operator, value) {
        var unwrappedValue = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_wrap_in_app_class__["d" /* unwrapAppClassValues */])(value);

        this._scrivitoPrivateContent.andNot(attribute, operator, unwrappedValue);

        return this;
      } // public API

    }, {
      key: "facet",
      value: function facet(attribute) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var result = this._scrivitoPrivateContent.facet(attribute, options);

        return __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.map(result, function (facetValue) {
          return new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_realm_obj_facet_value__["a" /* default */](registry, facetValue);
        });
      } // public API

    }, {
      key: "first",
      value: function first() {
        var basicObj = this._scrivitoPrivateContent.first();

        if (!basicObj) {
          return null;
        }

        return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(registry, basicObj);
      } // public API

    }, {
      key: "take",
      value: function take(count) {
        var basicObjs = this._scrivitoPrivateContent.take(count);

        return basicObjs.map(function (obj) {
          return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(registry, obj);
        });
      } // public API

    }, {
      key: "offset",
      value: function offset(_offset) {
        this._scrivitoPrivateContent.offset(_offset);

        return this;
      } // public API

    }, {
      key: "order",
      value: function order(attribute, direction) {
        this._scrivitoPrivateContent.order(attribute, direction);

        return this;
      } // public API

    }, {
      key: "count",
      value: function count() {
        return this._scrivitoPrivateContent.count();
      }
    }]);

    return ObjSearch;
  }(); // check if the environment supports ES6 iterables
  // (either native or through some kind of polyfill)
  // if yes, make ObjSearch an ES6 iterable.


  if (typeof window.Symbol === 'function') {
    var iteratorSymbol = window.Symbol.iterator;

    if (iteratorSymbol) {
      var proto = ObjSearch.prototype; // public API

      proto[iteratorSymbol] = function iterator() {
        var basicObjsIterator = this._scrivitoPrivateContent.iterator();

        return {
          next: function next() {
            var _basicObjsIterator$ne = basicObjsIterator.next(),
                done = _basicObjsIterator$ne.done,
                value = _basicObjsIterator$ne.value;

            if (done) {
              return {
                done: done
              };
            }

            return {
              done: done,
              value: Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(registry, value)
            };
          }
        };
      };
    }
  }

  return ObjSearch;
}

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = WidgetFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_schema__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_widget__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_realm_app_model_accessor__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_realm_attribute_content_factory__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_realm_initial_attributes_for__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









function WidgetFactory(registry) {
  var appModelAccessor = new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_realm_app_model_accessor__["a" /* default */](registry); // public API

  var Widget =
  /*#__PURE__*/
  function (_AttributeContentFact) {
    _inherits(Widget, _AttributeContentFact);

    // public API
    function Widget(attributes) {
      var _this;

      _classCallCheck(this, Widget);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Widget).call(this));
      var schema = __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_schema__["a" /* default */].forInstance(_assertThisInitialized(_assertThisInitialized(_this)));
      var appClassName = registry.objClassNameFor(_this.constructor);

      var attributesForConstructor = _this._prepareAttributesForConstructor(attributes, schema, appClassName);

      var basicWidget = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_widget__["a" /* default */](attributesForConstructor);
      basicWidget.onDidPersist(function (copiedWidget) {
        var appWidget = Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(registry, copiedWidget);
        var initialAttributes = Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_realm_initial_attributes_for__["a" /* default */])(attributesForConstructor, registry, schema, appClassName);
        appWidget.update(initialAttributes);
      });
      _this._scrivitoPrivateContent = basicWidget;
      return _this;
    } // public API


    _createClass(Widget, [{
      key: "obj",
      value: function obj() {
        var basicObj = this._scrivitoPrivateContent.obj();

        return Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(registry, basicObj);
      } // public API

    }, {
      key: "copy",
      value: function copy() {
        var appClass = registry.widgetClassFor(this.objClass());

        var basicWidget = this._scrivitoPrivateContent.copy();

        return Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_realm_wrap_in_app_class__["a" /* buildAppClassInstance */])(basicWidget, appClass);
      }
    }, {
      key: "_prepareAttributesForConstructor",
      value: function _prepareAttributesForConstructor(appAttributes, schema, appClassName) {
        assertValidConstructorAttributes(appClassName, appAttributes);
        var systemAttributes = {
          _objClass: appClassName
        };
        var constructorAttributes = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["extend"])({}, appAttributes, systemAttributes);
        return Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_realm_wrap_in_app_class__["b" /* unwrapAppAttributes */])(constructorAttributes, schema, appClassName);
      }
    }]);

    return Widget;
  }(Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_realm_attribute_content_factory__["a" /* default */])(appModelAccessor));

  return Widget;
}

function assertValidConstructorAttributes(appClassName, attributes) {
  if (!appClassName) {
    throw new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Creating widgets is not supported for the class Widget or abstract classes.');
  }

  if (attributes.constructor !== Object) {
    throw new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__["b" /* ArgumentError */]('The provided attributes are invalid. They have ' + 'to be an Object with valid Scrivito attribute values.');
  }

  if (attributes._objClass) {
    throw new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Invalid attribute "_objClass". ' + "\"new ".concat(attributes._objClass, "\" will automatically set the CMS object class correctly."));
  }
}

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createObjClass;
/* harmony export (immutable) */ __webpack_exports__["b"] = createWidgetClass;
/* harmony export (immutable) */ __webpack_exports__["c"] = provideObjClass;
/* harmony export (immutable) */ __webpack_exports__["d"] = provideWidgetClass;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_schema__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



function createObjClass(registry, definition) {
    if (definition.extend && !isOrExtends(definition.extend, registry.defaultClassForObjs)) {
        throw new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Invalid value for "extend": not a Scrivito Obj class');
    }
    var baseClass = definition.extend || registry.defaultClassForObjs;
    var schema = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_schema__["a" /* default */](definition, baseClass);
    // we can only use the non-specific names `Obj` or `Widget` for AppClasses.
    // it's not possible to dynamically name a class in ES5 (or anything transpiled to ES5)
    // compare: // https://stackoverflow.com/questions/5871040
    return /** @class */ (function (_super) {
        __extends(Obj, _super);
        function Obj() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Obj, "_scrivitoPrivateSchema", {
            get: function () {
                return schema;
            },
            enumerable: true,
            configurable: true
        });
        return Obj;
    }(baseClass));
}
function createWidgetClass(registry, definition) {
    if (definition.extend && !isOrExtends(definition.extend, registry.defaultClassForWidgets)) {
        throw new __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Invalid value for "extend": not a Scrivito Widget class');
    }
    var baseClass = definition.extend || registry.defaultClassForWidgets;
    var schema = new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_schema__["a" /* default */](definition, baseClass);
    return /** @class */ (function (_super) {
        __extends(Widget, _super);
        function Widget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Widget, "_scrivitoPrivateSchema", {
            get: function () {
                return schema;
            },
            enumerable: true,
            configurable: true
        });
        return Widget;
    }(baseClass));
}
function provideObjClass(registry, name, appClassOrDefinition) {
    var appClass = buildObjClassFrom(registry, name, appClassOrDefinition);
    registry.register(name, appClass);
    return appClass;
}
function buildObjClassFrom(registry, name, appClassOrDefinition) {
    if (isAppClass(appClassOrDefinition)) {
        return appClassOrDefinition;
    }
    var definition = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["extend"])({}, appClassOrDefinition, { name: name });
    return createObjClass(registry, definition);
}
function provideWidgetClass(registry, name, appClassOrDefinition) {
    var appClass = buildWidgetClassFrom(registry, name, appClassOrDefinition);
    registry.register(name, appClass);
    return appClass;
}
function buildWidgetClassFrom(registry, name, appClassOrDefinition) {
    if (isAppClass(appClassOrDefinition)) {
        return appClassOrDefinition;
    }
    var definition = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["extend"])({}, appClassOrDefinition, { name: name });
    return createWidgetClass(registry, definition);
}
function isAppClass(object) {
    return !!(object && object._scrivitoPrivateSchema);
}
function isOrExtends(maybeClass, klass) {
    if (!maybeClass) {
        return false;
    }
    if (maybeClass === klass) {
        return true;
    }
    return maybeClass.prototype instanceof klass;
}


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkCreateObjClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkCreateWidgetClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkProvideObjClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return checkProvideWidgetClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_type_checker__ = __webpack_require__(10);


var ObjClassType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].refinement(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Function, isDerivedAppClass, 'ObjClass');
var ObjClassDefinitionType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].interface({
  attributes: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].dict(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].refinement(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String, isCustomAttributeName, 'String (alphanumeric, starting with a lower-case character)'), __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].enums.of(['binary', 'date', 'float', 'html', 'integer', 'link', 'linklist', 'reference', 'referencelist', 'string', 'stringlist', 'widgetlist']), __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].tuple([__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].enums.of(['enum', 'multienum']), __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].interface({
    values: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String)
  })]), __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].tuple([__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].enums.of(['widgetlist']), __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].interface({
    only: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String, __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].list(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String)])
  })])])]), 'Attributes Specification')),
  extend: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(ObjClassType)
});
var ObjClassAttributesValueType = ObjClassDefinitionType.meta.props.attributes;
var WidgetClassType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].refinement(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Function, isDerivedAppClass, 'WidgetClass');
var WidgetClassDefinitionType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].interface({
  attributes: ObjClassAttributesValueType,
  extend: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(WidgetClassType),
  onlyInside: __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String)
});
var checkCreateObjClass = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('createObjClass', [['options', ObjClassDefinitionType]], {
  docPermalink: 'js-sdk/createObjClass'
});
var checkCreateWidgetClass = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('createWidgetClass', [['options', WidgetClassDefinitionType]], {
  docPermalink: 'js-sdk/createWidgetClass'
});
var ObjClassOrDefinitionType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([ObjClassDefinitionType, ObjClassType]);
var checkProvideObjClass = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('provideObjClass', [['name', __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String], ['objClassOrDefinition', ObjClassOrDefinitionType]], {
  docPermalink: 'js-sdk/provideObjClass'
});
var WidgetClassOrDefinitionType = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([WidgetClassDefinitionType, WidgetClassType]);
var checkProvideWidgetClass = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('provideWidgetClass', [['name', __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].String], ['widgetClassOrDefinition', WidgetClassOrDefinitionType]], {
  docPermalink: 'js-sdk/provideWidgetClass'
});

function isCustomAttributeName(name) {
  return /^[a-z](_+[A-Z0-9]|[A-Za-z0-9])*$/.test(name);
}

function isDerivedAppClass(candidate) {
  return candidate && candidate._scrivitoPrivateSchema;
}

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__ = __webpack_require__(153);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createHashHistory__ = __webpack_require__(156);
/* unused harmony reexport createHashHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__(157);
/* unused harmony reexport createMemoryHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocationUtils__ = __webpack_require__(43);
/* unused harmony reexport createLocation */
/* unused harmony reexport locationsAreEqual */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PathUtils__ = __webpack_require__(35);
/* unused harmony reexport parsePath */
/* unused harmony reexport createPath */









/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(75);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Browser history needs a DOM');
  var globalHistory = window.history;
  var canUseHistory = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["g" /* supportsHistory */])();
  var needsHashChangeListener = !Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["h" /* supportsPopStateOnHashChange */])();
  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);
    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* isExtraneousPopstateEvent */])(event)) return;
    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  var createHref = function createHref(location) {
    return basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, PopStateEvent, handlePopState);
      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, PopStateEvent, handlePopState);
      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
};

/* harmony default export */ __webpack_exports__["a"] = (createBrowserHistory);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
} // About 1.5x faster than the two-arg version of Array#splice()


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
} // This implementation is based heavily on node's url.parse


function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';
  var hasTrailingSlash = void 0;

  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;

  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }
  if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
  var result = fromParts.join('/');
  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (resolvePathname);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function valueEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);
  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();
    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (valueEqual);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(75);
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







var HashChangeEvent = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  },
  slash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Hash history needs a DOM');
  var globalHistory = window.history;
  var canGoWithoutReload = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["f" /* supportsGoWithoutReloadUsingHash */])();
  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;
  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);
    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["b" /* locationsAreEqual */])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }; // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(initialLocation)]; // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location));
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot push state; it is ignored');
    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot replace state; it is ignored');
    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  };

  var go = function go(n) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createHashHistory);

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathUtils__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__(49);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};
/**
 * Creates a history object that stores locations in memory.
 */


var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_3__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, createKey()) : Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = __WEBPACK_IMPORTED_MODULE_1__PathUtils__["b" /* createPath */];

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createMemoryHistory);

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mountComponent; });
/* unused harmony export reset */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_on_element_resize__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_component_registry__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_window_proxy__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_app_support_window_registry__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);










var _isComponentMounted = false;

function mountComponent(componentId, props) {
  if (_isComponentMounted) {
    return;
  }

  var component = Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_component_registry__["b" /* getComponentForId */])(componentId);

  if (!component) {
    throw new __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__["b" /* ArgumentError */]("Component with ID \"".concat(componentId, "\" not found. ") + 'Please make sure you registered it using "Scrivito.registerComponent".');
  }

  var obj;
  var widget;
  var basicObj = __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_obj__["a" /* default */].get(props.objId);

  if (props.widgetId) {
    var basicWidget = basicObj.widget(props.widgetId);
    widget = Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_app_support_window_registry__["a" /* getWindowRegistry */])(), basicWidget);
  } else {
    obj = Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_app_support_window_registry__["a" /* getWindowRegistry */])(), basicObj);
  }

  _isComponentMounted = true;
  var element = appendComponentToDOM(Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_window_proxy__["b" /* getDocument */])(), component, {
    obj: obj,
    page: obj,
    widget: widget
  });
  Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_on_element_resize__["a" /* default */])(element, function () {
    return __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].notifyDocumentResize();
  });
  __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].notifyDocumentResize();
}

function reset() {
  _isComponentMounted = false;
}

function appendComponentToDOM(doc, component, props) {
  var element = doc.createElement('div');
  doc.body.innerHTML = '';
  doc.body.appendChild(element);
  Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(component, props), element);
  return element;
}



/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onElementResize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_react_is_ie__ = __webpack_require__(160);

function onElementResize(element, fn) {
  if (!element._scrivitoResizeListeners) {
    element._scrivitoResizeListeners = []; // The element has to have relative position, otherwise the object won't span the whole height.
    //
    // Unfortunately Firefox cannot compute styles of elements inside an iframe with `display:none`
    // and it reports such elements to have no styles even _after_ the iframe became visible. So we
    // cannot set position to `relative` only if it was previously `static`.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=548397.
    //
    // We always have to enforce the relative position, regardless of the previous position.

    element.style.position = 'relative';
    var object = createObject();
    object.resizeElement = element;
    element._scrivitoResizeTrigger = object;

    if (Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_react_is_ie__["a" /* default */])()) {
      element.appendChild(object);
    }

    object.data = 'about:blank';

    if (!Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_react_is_ie__["a" /* default */])()) {
      element.appendChild(object);
    }
  }

  element._scrivitoResizeListeners.push(fn);
}

function createObject() {
  var object = document.createElement('object');
  object.type = 'text/html';
  object.onload = onObjectLoad;
  object.style.display = 'block';
  object.style.position = 'absolute';
  object.style.top = 0;
  object.style.left = 0;
  object.style.height = '100%';
  object.style.width = '100%';
  object.style.overflow = 'hidden';
  object.style.pointerEvents = 'none';
  object.style.zIndex = -1;
  return object;
}

function onObjectLoad() {
  this.contentDocument.defaultView._scrivitoResizeTrigger = this.resizeElement;
  this.contentDocument.defaultView.addEventListener('resize', onResize);
}

function onResize(e) {
  var targetWindow = e.target || e.srcElement;
  var trigger = targetWindow._scrivitoResizeTrigger;

  trigger._scrivitoResizeListeners.forEach(function (fn) {
    return fn(trigger, e);
  });
}

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isIE;
function isIE() {
  var userAgent = window.navigator.userAgent;
  return userAgent.indexOf('MSIE') >= 0 || userAgent.indexOf('Trident') >= 0;
}

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_urijs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_loadable_load__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_configure__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_routing__ = __webpack_require__(25);






function resolveUrl(url) {
  var parsedUrlToResolve = __WEBPACK_IMPORTED_MODULE_0_urijs___default()(url);

  if (!Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_configure__["b" /* isConfigured */])()) {
    return scrivito.Promise.resolve(null);
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_loadable_load__["a" /* default */])(function () {
    return Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_routing__["f" /* recognize */])(url);
  }).then(function (target) {
    if (!target.path) {
      return null;
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["include"])(['/', ''], target.path)) {
      return null;
    }

    return {
      obj: target.obj,
      url: parsedUrlToResolve
    };
  });
}

/* harmony default export */ __webpack_exports__["a"] = (resolveUrl);

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uriForObjId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_urijs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_basic_url_for__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_routing__ = __webpack_require__(25);




function uriForObjId(objId) {
    var obj = __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_obj__["a" /* default */].get(objId);
    if (obj) {
        return __WEBPACK_IMPORTED_MODULE_0_urijs__(Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_basic_url_for__["a" /* basicUrlFor */])(obj));
    }
    return Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_routing__["a" /* generatePath */])({ path: objId });
}


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);


(function () {
  function changeLocation(newLocation) {
    if (__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */]) {
      // change the location of the parent, to avoid CSP errors.
      __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].navigateToExternalUrl(newLocation);
    } else {
      scrivito.setWindowLocation(newLocation);
    }
  }

  function setWindowLocation(newLocation) {
    window.location.assign(newLocation);
  }

  function openLocation(newLocation, target) {
    window.open(newLocation, target);
  }

  function openInNewWindow(url) {
    openLocation(url, '_blank');
  } // For test purpose only.


  scrivito.setWindowLocation = setWindowLocation;
  scrivito.changeLocation = changeLocation;
  scrivito.openLocation = openLocation;
  scrivito.openInNewWindow = openInNewWindow;
})();

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_react_global_namespace__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_react_global_namespace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_react_global_namespace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_react_widget_focus__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_react_widget_focus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_react_widget_focus__);
 // import all sources that are not (yet) modules



/***/ }),
/* 165 */
/***/ (function(module, exports) {

if (!window.scrivito) {
  window.scrivito = {};
}

/***/ }),
/* 166 */
/***/ (function(module, exports) {

(function () {
  var currentFocus;
  var currentToken = 0;
  var handlers = {};
  var WidgetFocus = {
    subscribe: function subscribe(_ref) {
      var onFocus = _ref.onFocus,
          onBlur = _ref.onBlur;
      var token = currentToken;
      handlers[token] = {
        onFocus: onFocus,
        onBlur: onBlur
      };
      currentToken += 1;
      return token;
    },
    unsubscribe: function unsubscribe(token) {
      delete handlers[token];
    },
    notifyFocus: function notifyFocus(token) {
      currentFocus = token;
      handlers[currentFocus].onFocus();
    },
    notifyBlur: function notifyBlur(token) {
      // Performance optimization: Only re-render the widget, which lost the focus.
      if (token === currentFocus) {
        handlers[token].onBlur();
      }
    },

    // For test purpose only.
    get handlers() {
      return handlers;
    },

    // For test purpose only.
    reset: function reset() {
      currentFocus = undefined;
      currentToken = 0;
      handlers = {};
    }
  };
  scrivito.WidgetFocus = WidgetFocus;
})();

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = openContentBrowser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_ui_adapter_compatible_value__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_configure_content_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);




function openContentBrowser(options) {
    if (!__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */]) {
        throw new Error('Cannot open ContentBrowser without UI present');
    }
    return __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].openContentBrowser(Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_ui_adapter_compatible_value__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["extend"])({}, Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_configure_content_browser__["b" /* getContentBrowserConfiguration */])(), Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["pick"])(options, 'selection', 'selectionMode'))));
}


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onDomContentLoaded;
function onDomContentLoaded(doc, callback) {
    if (doc.readyState === 'interactive' || doc.readyState === 'complete') {
        callback();
    }
    else {
        doc.addEventListener('DOMContentLoaded', callback);
    }
}


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadEditingAssets;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_asset_loading__ = __webpack_require__(60);

function loadEditingAssets(assetUrlBase, targetDocument) {
  Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_asset_loading__["a" /* loadCss */])("".concat(assetUrlBase, "/scrivito_editing.css"), targetDocument);
  Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_asset_loading__["b" /* loadJs */])("".concat(assetUrlBase, "/scrivito_editing.js"), targetDocument);
}

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Obj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ObjSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return Widget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return createObjClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return createWidgetClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return getClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return provideObjClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return provideWidgetClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_binary__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_binary__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_future_binary__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_future_binary__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_obj_facet_value__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_realm_obj_facet_value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_loadable_load__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_loadable_load__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_errors__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_configure__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_app_support_configure__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_configure_content_browser__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_app_support_configure_content_browser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_app_support_current_page__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_app_support_current_page__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_app_support_current_page__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_render_page__ = __webpack_require__(171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_render_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_loading_monitor__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_loading_monitor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_app_support_is_in_place_editing_active__ = __webpack_require__(172);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_10_scrivito_sdk_app_support_is_in_place_editing_active__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_app_support_navigate_to__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_11_scrivito_sdk_app_support_navigate_to__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_app_support_provide_editing_config__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_12_scrivito_sdk_app_support_provide_editing_config__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_scrivito_sdk_app_support_url_for__ = __webpack_require__(173);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_13_scrivito_sdk_app_support_url_for__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_scrivito_sdk_app_support_browser_location__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_14_scrivito_sdk_app_support_browser_location__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_scrivito_sdk_react_components_background_image_tag__ = __webpack_require__(174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_15_scrivito_sdk_react_components_background_image_tag__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_scrivito_sdk_react_components_child_list_tag__ = __webpack_require__(175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_16_scrivito_sdk_react_components_child_list_tag__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_scrivito_sdk_react_components_content_tag__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_17_scrivito_sdk_react_components_content_tag__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_scrivito_sdk_react_components_current_page__ = __webpack_require__(191);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_18_scrivito_sdk_react_components_current_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_scrivito_sdk_react_components_image_tag__ = __webpack_require__(193);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_19_scrivito_sdk_react_components_image_tag__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_scrivito_sdk_react_components_link_tag__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_20_scrivito_sdk_react_components_link_tag__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_scrivito_sdk_react_components_not_found_error_page__ = __webpack_require__(195);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_21_scrivito_sdk_react_components_not_found_error_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_scrivito_sdk_react_components_widget_tag__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_22_scrivito_sdk_react_components_widget_tag__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_23_scrivito_sdk_react_connect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_scrivito_sdk_react_provide_component__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_24_scrivito_sdk_react_provide_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_scrivito_sdk_react_register_component__ = __webpack_require__(197);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_25_scrivito_sdk_react_register_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_scrivito_sdk_app_support_window_context__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_scrivito_sdk_client_infopark_integration_test_support__ = __webpack_require__(198);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_27_scrivito_sdk_client_infopark_integration_test_support__; });
// If imported, this file provides a namespace object for the public API, e.g.:
//
//   import * as Scrivito from 'scrivito_sdk/public_api';
//
//   Scrivito.configure({ ... });
//   Scrivito.provideComponent({ ... });
// Client




 // App support










 // React













var realmApi = Object(__WEBPACK_IMPORTED_MODULE_26_scrivito_sdk_app_support_window_context__["a" /* getWindowContext */])();
var Link = realmApi.Link;
var Obj = realmApi.Obj;
var ObjSearch = realmApi.ObjSearch;
var Widget = realmApi.Widget;
var createObjClass = realmApi.createObjClass;
var createWidgetClass = realmApi.createWidgetClass;
var getClass = realmApi.getClass;
var provideObjClass = realmApi.provideObjClass;
var provideWidgetClass = realmApi.provideWidgetClass; // public for tests




/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderPage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_loadable_load__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_current_page__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_tcomb__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_model_types__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_type_checker__ = __webpack_require__(10);





function renderPage(page, render) {
    checkRenderPage(page, render);
    return Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_loadable_load__["a" /* default */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_current_page__["f" /* withCurrentPage */])(page, render); })
        .then(function (rendered) { return ({ result: rendered }); });
}
var checkRenderPage = Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('renderPage', [
    ['page', __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_model_types__["d" /* ObjType */]],
    ['render', __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_tcomb__["a" /* tcomb */].Function],
], {
    docPermalink: 'js-sdk/renderPage',
});


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isInPlaceEditingActive;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_is_editing_mode__ = __webpack_require__(30);
 // public API

function isInPlaceEditingActive() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_is_editing_mode__["a" /* default */])() && scrivito.currentWorkspaceId() !== 'published';
}

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = urlFor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_basic_url_for__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_tcomb__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_type_checker__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_model_types__ = __webpack_require__(20);





// public API
function urlFor(target, options) {
    checkUrlFor(target, options);
    var query = options && options.query;
    var fragment = options && options.fragment;
    var basicTarget = Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_realm_wrap_in_app_class__["c" /* unwrapAppClassValue */])(target);
    var queryString = query ? "?" + query : '';
    var fragmentString = fragment ? "#" + fragment : '';
    return Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_basic_url_for__["b" /* basicUrlWithOriginFor */])(basicTarget).concat(queryString).concat(fragmentString);
}
var TargetType = __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_tcomb__["a" /* tcomb */].union([
    __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_model_types__["d" /* ObjType */],
    __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_model_types__["b" /* LinkType */],
    __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_model_types__["a" /* BinaryType */],
]);
var OptionsType = __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_tcomb__["a" /* tcomb */].struct({
    query: __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
    fragment: __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_tcomb__["a" /* tcomb */].String),
});
var checkUrlFor = Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_type_checker__["a" /* checkArgumentsFor */])('urlFor', [
    ['target', TargetType],
    ['options', __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_tcomb__["a" /* tcomb */].maybe(OptionsType)],
], {
    docPermalink: 'js-sdk/urlFor',
});


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_binary__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_is_binary_obj__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_scale_down_binary__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







// public API
var BackgroundImageTag = /** @class */ (function (_super) {
    __extends(BackgroundImageTag, _super);
    function BackgroundImageTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundImageTag.prototype.render = function () {
        var style = this.props.style;
        var Tag = this.props.tag || 'div';
        var passThroughProps = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["omit"])(this.props, 'style', 'tag');
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Tag, __assign({}, passThroughProps, { style: backgroundImageTagStyle(style) })));
    };
    BackgroundImageTag.displayName = 'Scrivito.BackgroundImageTag';
    return BackgroundImageTag;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_connect__["a" /* default */])(BackgroundImageTag));
function backgroundImageTagStyle(style) {
    var _a = partitionStyleProperties(style), backgrounds = _a.backgrounds, passThroughStyle = _a.passThroughStyle;
    var backgroundStyle = backgroundStyleForBackgrounds(backgrounds);
    return Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["extend"])(backgroundStyle, passThroughStyle);
}
function partitionStyleProperties(style) {
    var result = {
        backgrounds: [],
        passThroughStyle: {},
    };
    for (var key in style) {
        if (key.indexOf('background') !== 0) {
            result.passThroughStyle[key] = style[key];
        }
        else if (key === 'background') {
            var value = style[key];
            result.backgrounds = Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isArray"])(value) ? value : [value];
        }
    }
    return result;
}
function backgroundStyleForBackgrounds(backgrounds) {
    var backgroundsAsCss = backgrounds.map(backgroundStyleFor);
    return {
        backgroundAttachment: Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["pluck"])(backgroundsAsCss, 'backgroundAttachment').join(', '),
        backgroundImage: Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["pluck"])(backgroundsAsCss, 'backgroundImage').join(', '),
        backgroundOrigin: Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["pluck"])(backgroundsAsCss, 'backgroundOrigin').join(', '),
        backgroundPosition: Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["pluck"])(backgroundsAsCss, 'backgroundPosition').join(', '),
        backgroundRepeat: Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["pluck"])(backgroundsAsCss, 'backgroundRepeat').join(', '),
        backgroundSize: Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["pluck"])(backgroundsAsCss, 'backgroundSize').join(', '),
    };
}
function backgroundStyleFor(background) {
    if (isPlainBackground(background)) {
        return backgroundStyleForPlainImageValue(background.image);
    }
    if (background.image instanceof __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_binary__["a" /* default */]) {
        return backgroundStyleForBinary(background.image);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_is_binary_obj__["a" /* default */])(background.image)) {
        var blob = Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_realm_wrap_in_app_class__["c" /* unwrapAppClassValue */])(background.image).get('blob', 'binary');
        if (blob) {
            return backgroundStyleForBinary(blob);
        }
    }
    return backgroundStyleForPlainImageValue('none');
}
function isPlainBackground(background) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isString"])(background.image);
}
function backgroundStyleForPlainImageValue(backgroundImageValue) {
    return {
        backgroundAttachment: 'scroll',
        backgroundImage: backgroundImageValue,
        backgroundOrigin: 'padding-box',
        backgroundPosition: '0% 0%',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
    };
}
function backgroundStyleForBinary(binary) {
    return {
        backgroundAttachment: 'scroll',
        backgroundImage: "url(" + Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_scale_down_binary__["a" /* default */])(binary).url() + ")",
        backgroundOrigin: 'padding-box',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
}


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_is_editing_mode__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_current_page__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_components_child_list_tag_child_item__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_components_child_list_tag_menu_marker__ = __webpack_require__(179);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var ChildListTag =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChildListTag, _React$Component);

  function ChildListTag(props) {
    var _this;

    _classCallCheck(this, ChildListTag);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChildListTag).call(this, props));
    _this.state = {
      hasFocus: false
    };
    _this._onMouseOver = _this._onMouseOver.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._onMouseOut = _this._onMouseOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ChildListTag, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var parent = this.props.parent || Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_app_support_current_page__["a" /* currentPage */])();

      if (!parent) {
        return null;
      }

      parent = parent._scrivitoPrivateContent;
      var props = Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["omit"])(this.props, 'parent', 'tag', 'renderChild');
      var menuMarker;

      if (Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_is_editing_mode__["a" /* default */])()) {
        props.onMouseOver = this._onMouseOver;
        props.onMouseOut = this._onMouseOut;
        props['data-scrivito-private-child-list-path'] = true;

        if (this.state.hasFocus) {
          props.className = "scrivito_active scrivito_entered ".concat(props.className);
        }

        menuMarker = __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_components_child_list_tag_menu_marker__["a" /* default */], {
          key: "menuMarker",
          parent: parent
        });
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(this.props.tag, props, [menuMarker].concat(_toConsumableArray(parent.orderedChildren().map(function (child) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_components_child_list_tag_child_item__["a" /* default */], {
          key: child.id(),
          child: child,
          renderChild: _this2.props.renderChild
        });
      }))));
    }
  }, {
    key: "_onMouseOver",
    value: function _onMouseOver(e) {
      e.stopPropagation();
      this.setState({
        hasFocus: true
      });
    }
  }, {
    key: "_onMouseOut",
    value: function _onMouseOut(e) {
      e.stopPropagation();
      this.setState({
        hasFocus: false
      });
    }
  }]);

  return ChildListTag;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

ChildListTag.displayName = 'Scrivito.ChildListTag';
ChildListTag.defaultProps = {
  tag: 'ul'
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_react_connect__["a" /* default */])(ChildListTag));

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_window_context__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_components_link_tag__ = __webpack_require__(84);





function ChildItem(_ref) {
  var basicObj = _ref.child,
      renderChild = _ref.renderChild;
  var appObj = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_window_context__["a" /* getWindowContext */])().appModelAccessor.wrapInAppClass(basicObj);

  if (renderChild) {
    return renderChild(appObj);
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_components_link_tag__["a" /* default */], {
    to: appObj
  }, basicObj.get('title', 'string')));
}

ChildItem.displayName = 'Scrivito.ChildListTag.ChildItem';
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_connect__["a" /* default */])(ChildItem));

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tcomb_react__ = __webpack_require__(178);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__tcomb_react__["a"]; });




/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return propTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__ = __webpack_require__(8);
 // original contains more newlines

function getMessage(errors, what, displayName, type) {
  var intro = ["Invalid ".concat(what, " supplied to ").concat(displayName, ", should be a ").concat(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].getTypeName(type), "."), "Detected errors (".concat(errors.length, "):")];
  return intro.concat(errors.map(function (e, i) {
    return " ".concat(i + 1, ". ").concat(e.message);
  })).join('\n');
}

function typeFromInputType(type) {
  if (__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].Object.is(type)) {
    return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].struct(type);
  }

  return type;
} // original contains NODE_ENV conditions, which disables the propType check
// effectively already at package build time.


function getPropTypes(inputType, options) {
  var type = typeFromInputType(inputType);
  var isSubtype = type.meta.kind === 'subtype';
  __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].assert(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].isType(type), 'Invalid argument type supplied to propTypes()');
  var propTypes = {};
  var innerType = isSubtype ? type.meta.type : type;

  if (innerType.meta.kind === 'struct' || innerType.meta.kind === 'interface') {
    var props = innerType.meta.props;
    Object.keys(props).forEach(function (k) {
      var propType = props[k];

      var checkPropType = function checkPropType(values, prop, displayName) {
        var value = values[prop];
        var validationResult = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].validate(value, propType);

        if (!validationResult.isValid()) {
          var message = getMessage(validationResult.errors, "prop ".concat(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].stringify(prop)), displayName, propType);
          checkPropType.displayName = message;
          __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].fail(message);
        }
      };

      checkPropType.tcomb = propType;
      propTypes[k] = checkPropType;
    });

    if (!(options && options.strict === false)) {
      propTypes.__strict__ = function (values, _, displayName) {
        var extra = [];

        for (var k in values) {
          if (k !== '__strict__' && k !== '__subtype__' && values.hasOwnProperty(k) && !props.hasOwnProperty(k)) {
            extra.push(k);
          }
        }

        if (extra.length > 0) {
          var names = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].stringify(extra);
          __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].fail("Invalid additional prop(s):\n\n".concat(names, "\n\nsupplied to ").concat(displayName, "."));
        }
      };
    }
  } else {
    propTypes.__generictype__ = function (values, _, displayName) {
      var validationResult = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].validate(values, innerType);

      if (!validationResult.isValid()) {
        __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].fail(getMessage(validationResult.errors, 'props', displayName, innerType));
      }
    };
  }

  if (isSubtype) {
    propTypes.__subtype__ = function (values, _, displayName) {
      if (!type.meta.predicate(values)) {
        __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].fail("Invalid props:\n\n ".concat(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].stringify(values), "\n\nsupplied to ").concat(displayName) + ", should be a ".concat(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_tcomb__["a" /* tcomb */].getTypeName(type), "."));
      }
    };

    propTypes.__subtype__.predicate = type.meta.predicate;
  }

  return propTypes;
}

var propTypes = getPropTypes;

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var MenuMarker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuMarker, _React$Component);

  function MenuMarker(props) {
    var _this;

    _classCallCheck(this, MenuMarker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuMarker).call(this, props));
    _this._onClick = _this._onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MenuMarker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        ref: function ref(menuMarker) {
          return _this2._menuMarker = menuMarker;
        },
        className: "scrivito_editing_marker",
        onClick: this._onClick
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "scrivito_icon"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "scrivito_editing_marker_title"
      }, this.props.parent.objClass()));
    }
  }, {
    key: "_onClick",
    value: function _onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      if (this._menuMarker) {
        __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].showChildListMenu(Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this._menuMarker), this.props.parent.id());
      }
    }
  }]);

  return MenuMarker;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

MenuMarker.displayName = 'Scrivito.ChildListTag.MenuMarker';
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_connect__["a" /* default */])(MenuMarker));

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findClickTarget;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urijs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_urijs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_routing__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_is_modifier_click__ = __webpack_require__(85);



function findClickTarget(e) {
    var innermostNode = e.target;
    var outermostNode = e.currentTarget;
    var isModifier = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_is_modifier_click__["a" /* default */])(e);
    return findLinkTarget(innermostNode, outermostNode, isModifier);
}
function findLinkTarget(currentNode, outermostNode, isModifier) {
    if (currentNode === outermostNode) {
        return null;
    }
    if (isHTMLAnchorElement(currentNode)) {
        var url = currentNode.href;
        var uri = __WEBPACK_IMPORTED_MODULE_0_urijs__(url);
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_routing__["d" /* isLocalUri */])(uri)) {
            return null;
        }
        if (isModifier || currentNode.getAttribute('target') === '_blank') {
            return { openInNewWindow: url };
        }
        return { openInCurrentWindow: uri.resource() };
    }
    if (!currentNode.parentNode) {
        return null;
    }
    return findLinkTarget(currentNode.parentNode, outermostNode, isModifier);
}
function isHTMLAnchorElement(node) {
    return node.nodeName === 'A';
}


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_components_widget_tag__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_is_editing_mode__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_next_tick__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_component_registry__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_window_registry__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_realm_wrap_in_app_class__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var WidgetContent = /** @class */ (function (_super) {
    __extends(WidgetContent, _super);
    function WidgetContent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasError: false,
        };
        return _this;
    }
    WidgetContent.prototype.componentDidCatch = function (e) {
        Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_client_next_tick__["b" /* throwNextTick */])(e);
        this.setState({ hasError: true });
    };
    WidgetContent.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.widget.equals(nextProps.widget);
    };
    WidgetContent.prototype.getChildContext = function () {
        return _a = {},
            _a[__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_components_widget_tag__["a" /* WIDGET_TAG_CONTEXT_KEY */]] = this.props.widget,
            _a;
        var _a;
    };
    WidgetContent.prototype.render = function () {
        if (this.state.hasError) {
            if (Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_is_editing_mode__["a" /* default */])()) {
                return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_components_widget_tag__["b" /* default */], null,
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "content_error" }, "Widget could not be rendered due to application error.")));
            }
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_components_widget_tag__["b" /* default */], null);
        }
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](AppWidget, { widget: this.props.widget });
    };
    WidgetContent.displayName = 'Scrivito.ContentTag.WidgetContent';
    WidgetContent.childContextTypes = (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_components_widget_tag__["a" /* WIDGET_TAG_CONTEXT_KEY */]] = __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"],
        _a);
    return WidgetContent;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
var AppWidget = /** @class */ (function (_super) {
    __extends(AppWidget, _super);
    function AppWidget(props) {
        return _super.call(this, props) || this;
    }
    AppWidget.prototype.render = function () {
        var appWidget = Object(__WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_realm_wrap_in_app_class__["e" /* wrapInAppClass */])(Object(__WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_app_support_window_registry__["a" /* getWindowRegistry */])(), this.props.widget);
        var attributes = { widget: appWidget };
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](this.getAppWidgetComponent(), attributes);
    };
    AppWidget.prototype.getAppWidgetComponent = function () {
        var widgetClass = this.props.widget.objClass();
        var widgetComponent = Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_component_registry__["a" /* getComponentForAppClass */])(widgetClass);
        if (!widgetComponent) {
            throw new __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_errors__["b" /* ArgumentError */]("No component registered for widget class \"" + widgetClass + "\"");
        }
        return widgetComponent;
    };
    return AppWidget;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_connect__["a" /* default */])(WidgetContent));
var _a;


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_extract_ids_from_content__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_setup_dragstart_event__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_title_for_widget__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_is_handheld__ = __webpack_require__(184);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







var MenuMarker = /** @class */ (function (_super) {
    __extends(MenuMarker, _super);
    function MenuMarker(props) {
        var _this = _super.call(this, props) || this;
        _this._onClick = _this._onClick.bind(_this);
        _this._onDragStart = _this._onDragStart.bind(_this);
        _this._onDragEnd = _this._onDragEnd.bind(_this);
        _this._onTouchStart = _this._onTouchStart.bind(_this);
        _this._onTouchEnd = _this._onTouchEnd.bind(_this);
        _this._startDrag = _this._startDrag.bind(_this);
        _this._finishDrag = _this._finishDrag.bind(_this);
        return _this;
    }
    MenuMarker.prototype.render = function () {
        var _this = this;
        var eventHandlerProps = {
            onTouchStart: this._onTouchStart,
            onTouchEnd: this._onTouchEnd,
        };
        if (!Object(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_is_handheld__["a" /* default */])()) {
            eventHandlerProps.onDragStart = this._onDragStart;
            eventHandlerProps.onDragEnd = this._onDragEnd;
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", __assign({ ref: function (menuMarker) { return (_this._menuMarker = menuMarker); }, className: "scrivito_editing_marker", onClick: this._onClick, onMouseOver: this.props.onMouseOver, onMouseOut: this.props.onMouseOut, draggable: true }, eventHandlerProps),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "scrivito_icon" }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "scrivito_editing_marker_title" }, this._title())));
    };
    MenuMarker.prototype._onClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (this._menuMarker) {
            var _a = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_extract_ids_from_content__["a" /* default */])(this.props.widget), objId = _a.objId, widgetId = _a.widgetId;
            presentUiAdapter().showWidgetMenu(this._menuMarker, objId, widgetId);
        }
    };
    MenuMarker.prototype._onDragStart = function (e) {
        Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_setup_dragstart_event__["a" /* default */])(e);
        this._startDrag();
    };
    MenuMarker.prototype._onDragEnd = function () {
        this._finishDrag();
    };
    MenuMarker.prototype._onTouchStart = function () {
        this._startDrag();
    };
    MenuMarker.prototype._onTouchEnd = function (e) {
        e.stopPropagation();
        e.preventDefault();
        this._finishDrag();
    };
    MenuMarker.prototype._title = function () {
        var _a = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_extract_ids_from_content__["a" /* default */])(this.props.widget), objId = _a.objId, widgetId = _a.widgetId;
        return Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_app_support_title_for_widget__["a" /* default */])(objId, widgetId);
    };
    MenuMarker.prototype._startDrag = function () {
        var _a = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_extract_ids_from_content__["a" /* default */])(this.props.widget), objId = _a.objId, widgetId = _a.widgetId;
        presentUiAdapter().onDragStart(objId, widgetId);
        this.props.setDragState(true);
    };
    MenuMarker.prototype._finishDrag = function () {
        presentUiAdapter().onDragEnd();
        this.props.setDragState(false);
    };
    MenuMarker.displayName = 'Scrivito.ContentTag.MenuMarker';
    return MenuMarker;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
function presentUiAdapter() {
    if (!__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */]) {
        throw new Error('MenuMarker is not expected to be rendered without UI');
    }
    return __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */];
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_react_connect__["a" /* default */])(MenuMarker));


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function setupDragstartEvent(e) {
  e.dataTransfer.effectAllowed = 'move'; // Is required in order to dragover event is triggered in FF and Safari.
  // http://stackoverflow.com/questions/21507189/dragenter-dragover-and-drop-events-not-working-in-firefox
  // IE 11 however does not allow to set the data, which results in a security exception.

  try {
    e.dataTransfer.setData('text/plain', e.target.id);
  } catch (error) {// Ignore.
  }
}

/* harmony default export */ __webpack_exports__["a"] = (setupDragstartEvent);

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isHandheld;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_window_proxy__ = __webpack_require__(26);

// https://stackoverflow.com/a/3540295/5887673
function isHandheld() {
    var userAgent = __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_window_proxy__["d" /* navigator */]().userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_react_connect__ = __webpack_require__(5);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var OptionMarker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OptionMarker, _React$Component);

  function OptionMarker(props) {
    var _this;

    _classCallCheck(this, OptionMarker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionMarker).call(this, props));
    _this._onClick = _this._onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(OptionMarker, [{
    key: "render",
    value: function render() {
      var className = "scrivito_option_marker scrivito_".concat(this.props.position);

      if (this.props.isAlwaysShown) {
        className += ' scrivito_visible';
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: className,
        onClick: this._onClick,
        onMouseOver: this.props.onMouseOver,
        onMouseOut: this.props.onMouseOut
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "scrivito_icon scrivito_icon_marker_plus"
      }));
    }
  }, {
    key: "_onClick",
    value: function _onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.insertWidget(this.props.widget, this.props.position);
    }
  }]);

  return OptionMarker;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

OptionMarker.displayName = 'Scrivito.OptionMarker';
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_react_connect__["a" /* default */])(OptionMarker));

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_extract_ids_from_content__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_ui_adapter__ = __webpack_require__(6);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var WidgetlistPlaceholder =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WidgetlistPlaceholder, _React$Component);

  function WidgetlistPlaceholder(props) {
    var _this;

    _classCallCheck(this, WidgetlistPlaceholder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WidgetlistPlaceholder).call(this, props));
    _this._onClick = _this._onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(WidgetlistPlaceholder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._widgetPlaceholder) {
        var domNode = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this._widgetPlaceholder);

        var _extractIdsFromConten = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_extract_ids_from_content__["a" /* default */])(this.props.field.container()),
            objId = _extractIdsFromConten.objId,
            widgetId = _extractIdsFromConten.widgetId;

        var attributeName = this.props.field.name();
        __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].registerEmptyWidgetlistDropZoneInDom({
          domNode: domNode,
          objId: objId,
          widgetId: widgetId,
          attributeName: attributeName
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: function ref(widgetPlaceholder) {
          return _this2._widgetPlaceholder = widgetPlaceholder;
        },
        className: "scrivito_empty_widget_field",
        "data-scrivito-private-dropzone": "true",
        onClick: this._onClick
      });
    }
  }, {
    key: "_onClick",
    value: function _onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      if (this._widgetPlaceholder) {
        var attributeName = this.props.field.name();

        var _extractIdsFromConten2 = Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_react_extract_ids_from_content__["a" /* default */])(this.props.field.container()),
            objId = _extractIdsFromConten2.objId,
            widgetId = _extractIdsFromConten2.widgetId;

        __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_ui_adapter__["b" /* uiAdapter */].showWidgetlistMenu(Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this._widgetPlaceholder), {
          objId: objId,
          widgetId: widgetId,
          attributeName: attributeName,
          mousePosition: {
            x: e.pageX,
            y: e.pageY
          }
        });
      }
    }
  }]);

  return WidgetlistPlaceholder;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

WidgetlistPlaceholder.displayName = 'Scrivito.ContentTag.WidgetlistPlaceholder';
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_connect__["a" /* default */])(WidgetlistPlaceholder));

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_components_content_tag_attribute_value__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_loadable_loadable_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_editor_event__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_models_is_equal_attribute_value__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_global_state__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_replace_internal_links__ = __webpack_require__(50);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};










var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
    function Editor(props) {
        var _this = _super.call(this, props) || this;
        _this._field = _this.props.field;
        _this.state = { domMode: 'None' };
        _this._isPendingUpdate = false;
        _this._getContent = _this._getContent.bind(_this);
        _this._setContent = _this._setContent.bind(_this);
        _this._setDomMode = _this._setDomMode.bind(_this);
        var editorClass = _this.props.editorClass;
        if (editorClass) {
            var controller = {
                getContent: _this._getContent,
                setContent: _this._setContent,
                setDomMode: _this._setDomMode,
            };
            _this._editor = new editorClass({ controller: controller });
        }
        return _this;
    }
    Editor.prototype.componentDidMount = function () {
        var _this = this;
        this._editorWillBeActivated();
        var prevValue = this._getContent();
        this._unsubscribe = __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_global_state__["f" /* subscribe */](function () {
            var nextValue = _this._getContent();
            if (Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_client_models_is_equal_attribute_value__["a" /* default */])(prevValue, nextValue)) {
                return;
            }
            prevValue = nextValue;
            if (_this._isPendingUpdate && _this._pendingUpdateValue === nextValue) {
                _this._isPendingUpdate = false;
                _this._pendingUpdateValue = undefined;
                return;
            }
            _this._contentDidChange();
        });
        if (this.state.domMode === 'Replace') {
            this._editorDomWasMounted();
        }
    };
    Editor.prototype.componentDidUpdate = function (_prevProps, prevState) {
        var prevDomMode = prevState.domMode;
        var curDomMode = this.state.domMode;
        if (prevDomMode !== curDomMode) {
            if (curDomMode === 'Replace') {
                this._editorDomWasMounted();
            }
            else {
                this._editorDomWasUnmounted();
            }
        }
    };
    Editor.prototype.componentWillUnmount = function () {
        this._editorWillBeDeactivated();
        if (this._unsubscribe) {
            this._unsubscribe();
        }
    };
    Editor.prototype.render = function () {
        var _this = this;
        if (this.state.domMode === 'Replace') {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](this.props.tag, __assign({}, Object(__WEBPACK_IMPORTED_MODULE_2_underscore__["omit"])(this.props.customProps, 'children'), { ref: function (editorComponent) {
                    _this._editorComponent = editorComponent;
                } }));
        }
        var onClick;
        var editor = this._editor;
        if (editor && editor.onClick) {
            onClick = function (e) {
                return editor.onClick(new __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_editor_event__["a" /* default */](e));
            };
        }
        var props = {
            ref: function (editorComponent) {
                _this._editorComponent = editorComponent;
            },
            children: this.props.children,
            customProps: this.props.customProps,
            field: this.props.field,
            key: this.state.domMode,
            tag: this.props.tag,
            onClick: onClick,
        };
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_components_content_tag_attribute_value__["a" /* default */], props);
    };
    Editor.prototype._contentDidChange = function () {
        if (this._editor) {
            this._editor.contentDidChange();
        }
    };
    Editor.prototype._editorWillBeActivated = function () {
        if (this._editor) {
            this._editor.editorWillBeActivated();
        }
    };
    Editor.prototype._editorWillBeDeactivated = function () {
        if (this._editor) {
            this._editor.editorWillBeDeactivated();
        }
    };
    Editor.prototype._editorDomWasMounted = function () {
        if (this._editor && this._editorComponent) {
            var element = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this._editorComponent);
            this._editor.editorDomWasMounted(element);
        }
    };
    Editor.prototype._editorDomWasUnmounted = function () {
        if (this._editor) {
            this._editor.editorDomWasUnmounted();
        }
    };
    Editor.prototype._setDomMode = function (domMode) {
        this.setState({ domMode: domMode });
    };
    Editor.prototype._getContent = function () {
        var _this = this;
        return Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_loadable_loadable_data__["a" /* capture */])(function () {
            var value = _this._field.get();
            if (_this._field.type() === 'html') {
                var htmlValue = value;
                value = Object(__WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_app_support_replace_internal_links__["a" /* default */])(htmlValue);
            }
            return value;
        }).result;
    };
    Editor.prototype._setContent = function (val) {
        this._isPendingUpdate = true;
        this._pendingUpdateValue = val;
        this._field.update(val);
    };
    Editor.displayName = 'Scrivito.ContentTag.Editor';
    return Editor;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_connect__["a" /* default */])(Editor));


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EditorEvent = /** @class */ (function () {
    function EditorEvent(internalEvent) {
        this._internalEvent = internalEvent;
    }
    EditorEvent.prototype.preventDefault = function () {
        this._internalEvent.preventDefault();
    };
    EditorEvent.prototype.stopPropagation = function () {
        this._internalEvent.stopPropagation();
    };
    return EditorEvent;
}());
/* harmony default export */ __webpack_exports__["a"] = (EditorEvent);


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEqualAttributeValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_binary__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_basic_link__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_widget__ = __webpack_require__(17);





function isEqualAttributeValue(attr1, attr2) {
    if (isEqualSingleValue(attr1, attr2)) {
        return true;
    }
    if (Array.isArray(attr1) && Array.isArray(attr2)) {
        if (attr1.length !== attr2.length) {
            return false;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["every"])(Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["zip"])(attr1, attr2), function (_a) {
            var value1 = _a[0], value2 = _a[1];
            return isEqualSingleValue(value1, value2);
        });
    }
    return false;
}
function isEqualSingleValue(value1, value2) {
    if (Array.isArray(value1) || Array.isArray(value2)) {
        return false;
    }
    if (value1 instanceof __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_binary__["a" /* default */]) {
        return value1.equals(value2);
    }
    if (value1 instanceof __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_basic_obj__["a" /* default */]) {
        return value1.equals(value2);
    }
    if (value1 instanceof __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_models_basic_widget__["a" /* default */]) {
        return value1.equals(value2);
    }
    if (value1 instanceof __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_models_basic_link__["a" /* default */]) {
        return value1.equals(value2);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0_underscore__["isEqual"])(value1, value2);
}


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = keyForBasicContent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_widget__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_pretty_print__ = __webpack_require__(28);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }





function keyForBasicContent(content) {
  if (_instanceof(content, __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_models_basic_obj__["a" /* default */])) {
    return content.id();
  }

  if (_instanceof(content, __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_models_basic_widget__["a" /* default */])) {
    return "".concat(content.obj().id(), "|").concat(content.id());
  }

  var formattedContent = Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_pretty_print__["a" /* default */])(content).substr(0, 100);
  throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["e" /* InternalError */]("keyForBasicContent called with \"".concat(formattedContent, "\". Expected an instance of") + ' BasicObj or BasicWidget.');
}

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_current_page__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_track_current_page_mounts__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_react_component_registry__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_connect__ = __webpack_require__(5);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var CurrentPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CurrentPage, _React$Component);

  function CurrentPage() {
    _classCallCheck(this, CurrentPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(CurrentPage).apply(this, arguments));
  }

  _createClass(CurrentPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_track_current_page_mounts__["a" /* currentPageMounted */])();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(__WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_app_support_track_current_page_mounts__["b" /* currentPageUnmounted */])();
    }
  }, {
    key: "render",
    value: function render() {
      var page = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_current_page__["a" /* currentPage */])();
      var params = Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_current_page__["c" /* currentPageParams */])();

      if (!page) {
        return null;
      }

      var pageClass = page.objClass();
      var pageComponent = Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_react_component_registry__["a" /* getComponentForAppClass */])(pageClass);

      if (!pageComponent) {
        throw new __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_client_errors__["b" /* ArgumentError */]("No component registered for obj class \"".concat(pageClass, "\""));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(pageComponent, {
        page: page,
        params: params
      });
    }
  }]);

  return CurrentPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CurrentPage.displayName = 'Scrivito.CurrentPage';
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_connect__["a" /* default */])(CurrentPage));

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = currentPageMounted;
/* harmony export (immutable) */ __webpack_exports__["b"] = currentPageUnmounted;
/* unused harmony export reset */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_browser_location__ = __webpack_require__(29);

var count = 0;
function currentPageMounted() {
    count += 1;
    Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_browser_location__["a" /* activate */])();
}
function currentPageUnmounted() {
    if (count === 0) {
        return;
    }
    count -= 1;
    if (count === 0) {
        Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_browser_location__["c" /* deactivate */])();
    }
}
function reset() {
    count = 0;
    Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_app_support_browser_location__["c" /* deactivate */])();
}


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_binary__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_components_content_tag__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_schema__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_image_placeholder__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_scale_down_binary__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_next_tick__ = __webpack_require__(9);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










 // public API

var ImageTag =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageTag, _React$Component);

  function ImageTag() {
    _classCallCheck(this, ImageTag);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageTag).apply(this, arguments));
  }

  _createClass(ImageTag, [{
    key: "render",
    value: function render() {
      if (!this.props.content) {
        return null;
      }

      var htmlOptions = Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["omit"])(this.props, 'content', 'attribute');

      if (_instanceof(this.props.content, __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_models_binary__["a" /* default */])) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", _extends({
          src: Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_scale_down_binary__["a" /* default */])(this.props.content).url()
        }, htmlOptions));
      }

      var binary = this._getBinary();

      if (binary === undefined) {
        return null;
      }

      var src;

      if (binary === null) {
        src = __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_image_placeholder__["a" /* default */];
        htmlOptions['data-scrivito-image-placeholder'] = true;
      } else {
        src = Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_scale_down_binary__["a" /* default */])(binary).url();
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_components_content_tag__["a" /* default */], _extends({
        attribute: this.props.attribute,
        content: this.props.content,
        tag: 'img',
        src: src
      }, htmlOptions));
    }
  }, {
    key: "_getBinary",
    value: function _getBinary() {
      var schema = __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_client_schema__["a" /* default */].forInstance(this.props.content);

      if (!schema) {
        return;
      }

      var definition = schema.attributes[this.props.attribute];

      if (!definition) {
        Object(__WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_next_tick__["b" /* throwNextTick */])(new __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Component "Scrivito.ImageTag" received prop "content"' + " with an object missing attribute \"".concat(this.props.attribute, "\".")));
        return;
      }

      var attributeType = definition[0];

      if (attributeType === 'binary') {
        return this.props.content.get(this.props.attribute);
      }

      if (attributeType === 'reference') {
        return this._getReferencedBinary();
      }

      Object(__WEBPACK_IMPORTED_MODULE_9_scrivito_sdk_client_next_tick__["b" /* throwNextTick */])(new __WEBPACK_IMPORTED_MODULE_8_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Component "Scrivito.ImageTag" received prop "content"' + " with an object, whose attribute \"".concat(this.props.attribute, "\"") + " is of unexpected type \"".concat(attributeType, "\".") + ' Valid attribute types are "binary" and "reference".'));
    }
  }, {
    key: "_getReferencedBinary",
    value: function _getReferencedBinary() {
      var referencedObj = this.props.content.get(this.props.attribute);

      if (referencedObj) {
        var blob = referencedObj.get('blob');

        if (blob) {
          return blob;
        }
      }

      return null;
    }
  }]);

  return ImageTag;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ImageTag.displayName = 'Scrivito.ImageTag';
ImageTag.defaultProps = {
  attribute: 'blob'
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_react_connect__["a" /* default */])(ImageTag));

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint max-len: 0 */

/*
 * This is a base64 placeholder for the image component.
 *
 * The image component is actually styled via CSS in order to provide a scalable placeholder.
 * However, in order to set a background image, the tag must have content. In this case a
 * transparent image of an appropriate size.
 */
/* harmony default export */ __webpack_exports__["a"] = ('data:image/gif;base64,R0lGODlhyADIAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDBEQjBEMDdFODMzMTFFNTg0QzY4MUNBMUVCQUU2MjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDBEQjBEMDhFODMzMTFFNTg0QzY4MUNBMUVCQUU2MjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMERCMEQwNUU4MzMxMUU1ODRDNjgxQ0ExRUJBRTYyNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMERCMEQwNkU4MzMxMUU1ODRDNjgxQ0ExRUJBRTYyNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAADIAMgAAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNBhw7eixTAAA7');

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_current_page__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_connect__ = __webpack_require__(5);




// public API
var NotFoundErrorPage = function (_a) {
    var children = _a.children;
    if (Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_app_support_current_page__["b" /* currentPageError */])() instanceof __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["d" /* CurrentPageNotFoundError */]) {
        if (children) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, children);
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "The page you were looking for doesn't exist."),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "You may have mistyped the address or the page may have moved.")));
    }
    return null;
};
NotFoundErrorPage.displayName = 'Scrivito.NotFoundErrorPage';
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_connect__["a" /* default */])(NotFoundErrorPage));


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = provideComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_component_registry__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_pretty_print__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_components_widget_tag__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_display_name_from_component__ = __webpack_require__(82);
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








 // public API

function provideComponent(className, component) {
  assertValidComponent(component);
  assertNoCustomProps(component);

  if (isComponentMissingName(component)) {
    component.displayName = className;
  }

  var connectedComponent = Object(__WEBPACK_IMPORTED_MODULE_4_scrivito_sdk_react_connect__["a" /* default */])(component);
  var wrappedComponent = ensureWidgetWrappedInWidgetTag(connectedComponent);
  Object(__WEBPACK_IMPORTED_MODULE_3_scrivito_sdk_react_component_registry__["c" /* registerComponentForAppClass */])(className, wrappedComponent);
}

function assertValidComponent(component) {
  if (typeof component !== 'function') {
    throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Scrivito.provideComponent expected a valid React component' + ", but received ".concat(Object(__WEBPACK_IMPORTED_MODULE_5_scrivito_sdk_client_pretty_print__["a" /* default */])(component)));
  }
}

function assertNoCustomProps(component) {
  if (component.propTypes) {
    throw new __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_errors__["b" /* ArgumentError */]('Custom props are not allowed when providing a component.');
  }
}

function ensureWidgetWrappedInWidgetTag(component) {
  var wrappedComponent =
  /*#__PURE__*/
  function (_component) {
    _inherits(wrappedComponent, _component);

    function wrappedComponent() {
      _classCallCheck(this, wrappedComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(wrappedComponent).apply(this, arguments));
    }

    _createClass(wrappedComponent, [{
      key: "render",
      value: function render() {
        if (this.props.widget) {
          var value = _get(_getPrototypeOf(wrappedComponent.prototype), "render", this).call(this);

          if (Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["isArray"])(value) || Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["isBoolean"])(value) || Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["isNumber"])(value) || Object(__WEBPACK_IMPORTED_MODULE_1_underscore__["isString"])(value) || value === null || value && value.type !== __WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_components_widget_tag__["b" /* default */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_scrivito_sdk_react_components_widget_tag__["b" /* default */], {
              children: value
            });
          }

          return value;
        }

        return _get(_getPrototypeOf(wrappedComponent.prototype), "render", this).call(this);
      }
    }]);

    return wrappedComponent;
  }(component);

  wrappedComponent.displayName = Object(__WEBPACK_IMPORTED_MODULE_7_scrivito_sdk_react_display_name_from_component__["a" /* default */])(component);
  return wrappedComponent;
}

function isComponentMissingName(component) {
  // In some browsers functional components are missing the `name` property.
  // In some other browsers they have that property, but the value is meaningless: `_class`.
  return !component.displayName && (!component.name || component.name === '_class');
}

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = registerComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_react_connect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_react_component_registry__ = __webpack_require__(37);


function registerComponent(componentId, component) {
  Object(__WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_react_component_registry__["d" /* registerComponentForId */])(componentId, Object(__WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_react_connect__["a" /* default */])(component));
}

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["enableForceVerification"] = enableForceVerification;
/* harmony export (immutable) */ __webpack_exports__["currentPublicAuthorizationState"] = currentPublicAuthorizationState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_cms_rest_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_always_show_option_markers__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "alwaysShowOptionMarkers", function() { return __WEBPACK_IMPORTED_MODULE_1_scrivito_sdk_client_always_show_option_markers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_fetch__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isFetchingActive", function() { return __WEBPACK_IMPORTED_MODULE_2_scrivito_sdk_client_fetch__["b"]; });



function enableForceVerification() {
  __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_cms_rest_api__["a" /* cmsRestApi */].enableForceVerification();
}
function currentPublicAuthorizationState() {
  return __WEBPACK_IMPORTED_MODULE_0_scrivito_sdk_client_cms_rest_api__["a" /* cmsRestApi */].currentPublicAuthorizationState();
}

/***/ })
/******/ ]);
});