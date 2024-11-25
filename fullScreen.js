(async function() {
        while (!Spicetify.React || !Spicetify.ReactDOM) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }
        var fullScreen = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // external-global-plugin:react-dom
  var require_react_dom = __commonJS({
    "external-global-plugin:react-dom"(exports, module) {
      module.exports = Spicetify.ReactDOM;
    }
  });

  // node_modules/lodash.defaultsdeep/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.defaultsdeep/index.js"(exports, module) {
      var LARGE_ARRAY_SIZE = 200;
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var MAX_SAFE_INTEGER = 9007199254740991;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var asyncTag = "[object AsyncFunction]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var nullTag = "[object Null]";
      var objectTag = "[object Object]";
      var proxyTag = "[object Proxy]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var undefinedTag = "[object Undefined]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      var arrayProto = Array.prototype;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var coreJsData = root["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object);
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var Symbol = root.Symbol;
      var Uint8Array2 = root.Uint8Array;
      var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      var objectCreate = Object.create;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var splice = arrayProto.splice;
      var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var nativeMax = Math.max;
      var nativeNow = Date.now;
      var Map = getNative(root, "Map");
      var nativeCreate = getNative(Object, "create");
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      function assignMergeValue(object, key, value) {
        if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      var baseFor = createBaseFor();
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
            if (newValue === void 0) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
        var isCommon = newValue === void 0;
        if (isCommon) {
          var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
        return result;
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
          if (newValue === void 0) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? void 0 : customizer;
            length = 1;
          }
          object = Object(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
        if (isObject(objValue) && isObject(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, void 0, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag2 = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag2;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
          return eq(object[index], value);
        }
        return false;
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setToString = shortOut(baseSetToString);
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray = Array.isArray;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag2 = baseGetTag(value);
        return tag2 == funcTag || tag2 == genTag || tag2 == asyncTag || tag2 == proxyTag;
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      var defaultsDeep3 = baseRest(function(args) {
        args.push(void 0, customDefaultsMerge);
        return apply(mergeWith, void 0, args);
      });
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      function constant(value) {
        return function() {
          return value;
        };
      }
      function identity(value) {
        return value;
      }
      function stubFalse() {
        return false;
      }
      module.exports = defaultsDeep3;
    }
  });

  // node_modules/semver/internal/debug.js
  var require_debug = __commonJS({
    "node_modules/semver/internal/debug.js"(exports, module) {
      var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
      };
      module.exports = debug;
    }
  });

  // node_modules/semver/internal/constants.js
  var require_constants = __commonJS({
    "node_modules/semver/internal/constants.js"(exports, module) {
      var SEMVER_SPEC_VERSION = "2.0.0";
      var MAX_LENGTH = 256;
      var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
      var MAX_SAFE_COMPONENT_LENGTH = 16;
      var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
      var RELEASE_TYPES = [
        "major",
        "premajor",
        "minor",
        "preminor",
        "patch",
        "prepatch",
        "prerelease"
      ];
      module.exports = {
        MAX_LENGTH,
        MAX_SAFE_COMPONENT_LENGTH,
        MAX_SAFE_BUILD_LENGTH,
        MAX_SAFE_INTEGER,
        RELEASE_TYPES,
        SEMVER_SPEC_VERSION,
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2
      };
    }
  });

  // node_modules/semver/internal/re.js
  var require_re = __commonJS({
    "node_modules/semver/internal/re.js"(exports, module) {
      var {
        MAX_SAFE_COMPONENT_LENGTH,
        MAX_SAFE_BUILD_LENGTH,
        MAX_LENGTH
      } = require_constants();
      var debug = require_debug();
      exports = module.exports = {};
      var re = exports.re = [];
      var safeRe = exports.safeRe = [];
      var src = exports.src = [];
      var t = exports.t = {};
      var R = 0;
      var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
      var safeRegexReplacements = [
        ["\\s", 1],
        ["\\d", MAX_LENGTH],
        [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
      ];
      var makeSafeRegex = (value) => {
        for (const [token, max] of safeRegexReplacements) {
          value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
        }
        return value;
      };
      var createToken = (name, value, isGlobal) => {
        const safe = makeSafeRegex(value);
        const index = R++;
        debug(name, index, value);
        t[name] = index;
        src[index] = value;
        re[index] = new RegExp(value, isGlobal ? "g" : void 0);
        safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
      };
      createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
      createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
      createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
      createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
      createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
      createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
      createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
      createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
      createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
      createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
      createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
      createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
      createToken("FULL", `^${src[t.FULLPLAIN]}$`);
      createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
      createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
      createToken("GTLT", "((?:<|>)?=?)");
      createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
      createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
      createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
      createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
      createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
      createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
      createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
      createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
      createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
      createToken("COERCERTL", src[t.COERCE], true);
      createToken("COERCERTLFULL", src[t.COERCEFULL], true);
      createToken("LONETILDE", "(?:~>?)");
      createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
      exports.tildeTrimReplace = "$1~";
      createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
      createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
      createToken("LONECARET", "(?:\\^)");
      createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
      exports.caretTrimReplace = "$1^";
      createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
      createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
      createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
      createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
      createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
      exports.comparatorTrimReplace = "$1$2$3";
      createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
      createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
      createToken("STAR", "(<|>)?=?\\s*\\*");
      createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
      createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
    }
  });

  // node_modules/semver/internal/parse-options.js
  var require_parse_options = __commonJS({
    "node_modules/semver/internal/parse-options.js"(exports, module) {
      var looseOption = Object.freeze({ loose: true });
      var emptyOpts = Object.freeze({});
      var parseOptions = (options2) => {
        if (!options2) {
          return emptyOpts;
        }
        if (typeof options2 !== "object") {
          return looseOption;
        }
        return options2;
      };
      module.exports = parseOptions;
    }
  });

  // node_modules/semver/internal/identifiers.js
  var require_identifiers = __commonJS({
    "node_modules/semver/internal/identifiers.js"(exports, module) {
      var numeric = /^[0-9]+$/;
      var compareIdentifiers = (a, b) => {
        const anum = numeric.test(a);
        const bnum = numeric.test(b);
        if (anum && bnum) {
          a = +a;
          b = +b;
        }
        return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
      };
      var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
      module.exports = {
        compareIdentifiers,
        rcompareIdentifiers
      };
    }
  });

  // node_modules/semver/classes/semver.js
  var require_semver = __commonJS({
    "node_modules/semver/classes/semver.js"(exports, module) {
      var debug = require_debug();
      var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
      var { safeRe: re, t } = require_re();
      var parseOptions = require_parse_options();
      var { compareIdentifiers } = require_identifiers();
      var SemVer = class {
        constructor(version2, options2) {
          options2 = parseOptions(options2);
          if (version2 instanceof SemVer) {
            if (version2.loose === !!options2.loose && version2.includePrerelease === !!options2.includePrerelease) {
              return version2;
            } else {
              version2 = version2.version;
            }
          } else if (typeof version2 !== "string") {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
          }
          if (version2.length > MAX_LENGTH) {
            throw new TypeError(
              `version is longer than ${MAX_LENGTH} characters`
            );
          }
          debug("SemVer", version2, options2);
          this.options = options2;
          this.loose = !!options2.loose;
          this.includePrerelease = !!options2.includePrerelease;
          const m = version2.trim().match(options2.loose ? re[t.LOOSE] : re[t.FULL]);
          if (!m) {
            throw new TypeError(`Invalid Version: ${version2}`);
          }
          this.raw = version2;
          this.major = +m[1];
          this.minor = +m[2];
          this.patch = +m[3];
          if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError("Invalid major version");
          }
          if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError("Invalid minor version");
          }
          if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError("Invalid patch version");
          }
          if (!m[4]) {
            this.prerelease = [];
          } else {
            this.prerelease = m[4].split(".").map((id) => {
              if (/^[0-9]+$/.test(id)) {
                const num = +id;
                if (num >= 0 && num < MAX_SAFE_INTEGER) {
                  return num;
                }
              }
              return id;
            });
          }
          this.build = m[5] ? m[5].split(".") : [];
          this.format();
        }
        format() {
          this.version = `${this.major}.${this.minor}.${this.patch}`;
          if (this.prerelease.length) {
            this.version += `-${this.prerelease.join(".")}`;
          }
          return this.version;
        }
        toString() {
          return this.version;
        }
        compare(other) {
          debug("SemVer.compare", this.version, this.options, other);
          if (!(other instanceof SemVer)) {
            if (typeof other === "string" && other === this.version) {
              return 0;
            }
            other = new SemVer(other, this.options);
          }
          if (other.version === this.version) {
            return 0;
          }
          return this.compareMain(other) || this.comparePre(other);
        }
        compareMain(other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
        }
        comparePre(other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          if (this.prerelease.length && !other.prerelease.length) {
            return -1;
          } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
          } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
          }
          let i2 = 0;
          do {
            const a = this.prerelease[i2];
            const b = other.prerelease[i2];
            debug("prerelease compare", i2, a, b);
            if (a === void 0 && b === void 0) {
              return 0;
            } else if (b === void 0) {
              return 1;
            } else if (a === void 0) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i2);
        }
        compareBuild(other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          let i2 = 0;
          do {
            const a = this.build[i2];
            const b = other.build[i2];
            debug("build compare", i2, a, b);
            if (a === void 0 && b === void 0) {
              return 0;
            } else if (b === void 0) {
              return 1;
            } else if (a === void 0) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i2);
        }
        inc(release, identifier, identifierBase) {
          switch (release) {
            case "premajor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor = 0;
              this.major++;
              this.inc("pre", identifier, identifierBase);
              break;
            case "preminor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor++;
              this.inc("pre", identifier, identifierBase);
              break;
            case "prepatch":
              this.prerelease.length = 0;
              this.inc("patch", identifier, identifierBase);
              this.inc("pre", identifier, identifierBase);
              break;
            case "prerelease":
              if (this.prerelease.length === 0) {
                this.inc("patch", identifier, identifierBase);
              }
              this.inc("pre", identifier, identifierBase);
              break;
            case "major":
              if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                this.major++;
              }
              this.minor = 0;
              this.patch = 0;
              this.prerelease = [];
              break;
            case "minor":
              if (this.patch !== 0 || this.prerelease.length === 0) {
                this.minor++;
              }
              this.patch = 0;
              this.prerelease = [];
              break;
            case "patch":
              if (this.prerelease.length === 0) {
                this.patch++;
              }
              this.prerelease = [];
              break;
            case "pre": {
              const base = Number(identifierBase) ? 1 : 0;
              if (!identifier && identifierBase === false) {
                throw new Error("invalid increment argument: identifier is empty");
              }
              if (this.prerelease.length === 0) {
                this.prerelease = [base];
              } else {
                let i2 = this.prerelease.length;
                while (--i2 >= 0) {
                  if (typeof this.prerelease[i2] === "number") {
                    this.prerelease[i2]++;
                    i2 = -2;
                  }
                }
                if (i2 === -1) {
                  if (identifier === this.prerelease.join(".") && identifierBase === false) {
                    throw new Error("invalid increment argument: identifier already exists");
                  }
                  this.prerelease.push(base);
                }
              }
              if (identifier) {
                let prerelease = [identifier, base];
                if (identifierBase === false) {
                  prerelease = [identifier];
                }
                if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                  if (isNaN(this.prerelease[1])) {
                    this.prerelease = prerelease;
                  }
                } else {
                  this.prerelease = prerelease;
                }
              }
              break;
            }
            default:
              throw new Error(`invalid increment argument: ${release}`);
          }
          this.raw = this.format();
          if (this.build.length) {
            this.raw += `+${this.build.join(".")}`;
          }
          return this;
        }
      };
      module.exports = SemVer;
    }
  });

  // node_modules/semver/functions/compare.js
  var require_compare = __commonJS({
    "node_modules/semver/functions/compare.js"(exports, module) {
      var SemVer = require_semver();
      var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
      module.exports = compare;
    }
  });

  // node_modules/semver/functions/gt.js
  var require_gt = __commonJS({
    "node_modules/semver/functions/gt.js"(exports, module) {
      var compare = require_compare();
      var gt = (a, b, loose) => compare(a, b, loose) > 0;
      module.exports = gt;
    }
  });

  // node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "node_modules/classnames/index.js"(exports, module) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames3() {
          var classes = "";
          for (var i2 = 0; i2 < arguments.length; i2++) {
            var arg = arguments[i2];
            if (arg) {
              classes = appendClass(classes, parseValue(arg));
            }
          }
          return classes;
        }
        function parseValue(arg) {
          if (typeof arg === "string" || typeof arg === "number") {
            return arg;
          }
          if (typeof arg !== "object") {
            return "";
          }
          if (Array.isArray(arg)) {
            return classNames3.apply(null, arg);
          }
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            return arg.toString();
          }
          var classes = "";
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes = appendClass(classes, key);
            }
          }
          return classes;
        }
        function appendClass(value, newClass) {
          if (!newClass) {
            return value;
          }
          if (value) {
            return value + " " + newClass;
          }
          return value + newClass;
        }
        if (typeof module !== "undefined" && module.exports) {
          classNames3.default = classNames3;
          module.exports = classNames3;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames3;
          });
        } else {
          window.classNames = classNames3;
        }
      })();
    }
  });

  // node_modules/lodash.debounce/index.js
  var require_lodash2 = __commonJS({
    "node_modules/lodash.debounce/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var NAN = 0 / 0;
      var symbolTag = "[object Symbol]";
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      var now = function() {
        return root.Date.now();
      };
      function debounce2(func, wait, options2) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options2)) {
          leading = !!options2.leading;
          maxing = "maxWait" in options2;
          maxWait = maxing ? nativeMax(toNumber(options2.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options2 ? !!options2.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
          return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = debounce2;
    }
  });

  // src/app.tsx
  var import_react = __toESM(require_react());
  var import_react_dom2 = __toESM(require_react_dom());

  // src/utils/config.ts
  var import_lodash = __toESM(require_lodash());

  // src/constants/icons.ts
  var ICONS = {
    OFFLINE_SVG: `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCI+CiAgPHJlY3Qgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB4PSIwIiB5PSIwIiAvPgogIDxwYXRoIGZpbGw9IiNCM0IzQjMiIGQ9Ik0yNi4yNSAxNi4xNjJMMjEuMDA1IDEzLjEzNEwyMS4wMTIgMjIuNTA2QzIwLjU5NCAyMi4xOTIgMjAuMDgxIDIxLjk5OSAxOS41MTkgMjEuOTk5QzE4LjE0MSAyMS45OTkgMTcuMDE5IDIzLjEyMSAxNy4wMTkgMjQuNDk5QzE3LjAxOSAyNS44NzggMTguMTQxIDI2Ljk5OSAxOS41MTkgMjYuOTk5QzIwLjg5NyAyNi45OTkgMjIuMDE5IDI1Ljg3OCAyMi4wMTkgMjQuNDk5QzIyLjAxOSAyNC40MjIgMjIuMDA2IDE0Ljg2NyAyMi4wMDYgMTQuODY3TDI1Ljc1IDE3LjAyOUwyNi4yNSAxNi4xNjJaTTE5LjUxOSAyNS45OThDMTguNjkyIDI1Ljk5OCAxOC4wMTkgMjUuMzI1IDE4LjAxOSAyNC40OThDMTguMDE5IDIzLjY3MSAxOC42OTIgMjIuOTk4IDE5LjUxOSAyMi45OThDMjAuMzQ2IDIyLjk5OCAyMS4wMTkgMjMuNjcxIDIxLjAxOSAyNC40OThDMjEuMDE5IDI1LjMyNSAyMC4zNDYgMjUuOTk4IDE5LjUxOSAyNS45OThaIi8+Cjwvc3ZnPgo=`,
    FULLSCREEN: `<svg role="img" height="20" width="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10.5 3L16.5428 3.00182L16.6281 3.01661L16.691 3.03779L16.767 3.07719L16.8221 3.11759L16.8824 3.17788L16.9112 3.21534L16.9533 3.2886L16.9834 3.37186L16.9979 3.45421L17 3.5V9.5C17 9.77614 16.7761 10 16.5 10C16.2545 10 16.0504 9.82312 16.0081 9.58988L16 9.5V4.706L4.706 16H9.5C9.74546 16 9.94961 16.1769 9.99194 16.4101L10 16.5C10 16.7455 9.82312 16.9496 9.58988 16.9919L9.5 17L3.47964 16.9996L3.4112 16.9921L3.30896 16.9622L3.23299 16.9228L3.17786 16.8824L3.11758 16.8221L3.08884 16.7847L3.04674 16.7114L3.01661 16.6281L3.01109 16.605C3.00383 16.5713 3 16.5361 3 16.5L3.00546 16.5739L3.00182 16.5428L3 10.5C3 10.2239 3.22386 10 3.5 10C3.74546 10 3.94961 10.1769 3.99194 10.4101L4 10.5V15.292L15.292 4H10.5C10.2545 4 10.0504 3.82312 10.0081 3.58988L10 3.5C10 3.22386 10.2239 3 10.5 3Z"></path><path class="" d="M16 3C16.5523 3 17 3.44772 17 4V9.25C17 9.66421 16.6642 10 16.25 10C15.8358 10 15.5 9.66421 15.5 9.25V5.559L5.559 15.5H9.25C9.66421 15.5 10 15.8358 10 16.25C10 16.6642 9.66421 17 9.25 17H4C3.44772 17 3 16.5523 3 16V10.75C3 10.3358 3.33579 10 3.75 10C4.16421 10 4.5 10.3358 4.5 10.75V14.439L14.439 4.5H10.75C10.3358 4.5 10 4.16421 10 3.75C10 3.33579 10.3358 3 10.75 3H16Z"></path></svg>`,
    TV_MODE: `<svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/></svg>`,
    INVERT_ACTIVE: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="20px" width="20px" viewBox="0 0 20 20" fill="currentColor"><rect fill="none" height="20" width="20"/><path d="M7.08,4.96L10,2l4.53,4.6l0,0c1.07,1.1,1.72,2.6,1.72,4.24c0,0.96-0.23,1.86-0.62,2.67L10,7.88V4.14L8.14,6.02L7.08,4.96z M16.01,18.13l-2.33-2.33C12.65,16.55,11.38,17,10,17c-3.45,0-6.25-2.76-6.25-6.16c0-1.39,0.47-2.67,1.26-3.7L1.87,3.99l1.06-1.06 l14.14,14.14L16.01,18.13z M10,12.12L6.09,8.21c-0.54,0.77-0.84,1.68-0.84,2.63c0,2.57,2.13,4.66,4.75,4.66V12.12z"/></svg>`,
    INVERT_INACTIVE: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="20px" width="20px" viewBox="0 0 20 20" fill="currentColor"><rect fill="none" height="20" width="20"/><path d="M14.53,6.59L14.53,6.59L10,2L5.5,6.56c-1.08,1.11-1.75,2.62-1.75,4.28c0,3.4,2.8,6.16,6.25,6.16s6.25-2.76,6.25-6.16 C16.25,9.19,15.6,7.7,14.53,6.59z M5.25,10.84c0-1.21,0.47-2.35,1.32-3.22L10,4.14V15.5C7.38,15.5,5.25,13.41,5.25,10.84z"/></svg>`,
    LYRICS_ACTIVE: `<svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/></svg>`,
    LYRICS_INACTIVE: `<svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/></svg>`,
    MINUS: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 7h12v2H0z"/>`,
    ALBUM: `<svg height="30" width="30" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons.album}</svg>`,
    ARTIST: `   <svg height="30" width="30" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons.artist}</svg>`,
    PLAYING_ICON: `<svg id='playing-icon' width="30" height="30" viewBox='0 0 22 24' fill="currentColor"><defs><style> #playing-icon { fill: currentColor; } @keyframes play { 0% {transform: scaleY(1);} 3.3% {transform: scaleY(0.9583);} 6.6% {transform: scaleY(0.9166);} 9.9% {transform: scaleY(0.8333);} 13.3% {transform: scaleY(0.7083);} 16.6% {transform: scaleY(0.5416);} 19.9% {transform: scaleY(0.4166);} 23.3% {transform: scaleY(0.25);} 26.6% {transform: scaleY(0.1666);} 29.9% {transform: scaleY(0.125);} 33.3% {transform: scaleY(0.125);} 36.6% {transform: scaleY(0.1666);} 39.9% {transform: scaleY(0.1666);} 43.3% {transform: scaleY(0.2083);} 46.6% {transform: scaleY(0.2916);} 49.9% {transform: scaleY(0.375);} 53.3% {transform: scaleY(0.5);} 56.6% {transform: scaleY(0.5833);} 59.9% {transform: scaleY(0.625);} 63.3% {transform: scaleY(0.6666);} 66.6% {transform: scaleY(0.6666);} 69.9% {transform: scaleY(0.6666);} 73.3% {transform: scaleY(0.6666);} 76.6% {transform: scaleY(0.7083);} 79.9% {transform: scaleY(0.75);} 83.3% {transform: scaleY(0.8333);} 86.6% {transform: scaleY(0.875);} 89.9% {transform: scaleY(0.9166);} 93.3% {transform: scaleY(0.9583);} 96.6% {transform: scaleY(1);} } #bar1 { transform-origin: bottom; animation: play 0.9s -0.51s infinite; } #bar2 { transform-origin: bottom; animation: play 0.9s infinite; } #bar3 { transform-origin: bottom; animation: play 0.9s -0.15s infinite; } #bar4 { transform-origin: bottom; animation: play 0.9s -0.75s infinite; } </style></defs><rect id='bar1' class='cls-1' width='2' height='24'/><rect id='bar2' class='cls-1' x='6' width='2' height='24'/><rect id='bar3' class='cls-1' x='12' width='2' height='24'/><rect id='bar4' class='cls-1' x='18' width='2' height='24'/></svg>`,
    PAUSED_ICON: `<svg id='paused-icon'  width="30" height="30" viewBox="5 4 16 16" fill="currentColor"><path d="M9.732 19.241c1.077 0 2.688-.79 2.688-2.922V9.617c0-.388.074-.469.418-.542l3.347-.732a.48.48 0 00.403-.484V5.105c0-.388-.315-.637-.689-.563l-3.764.82c-.47.102-.725.359-.725.769l.014 8.144c.037.36-.132.594-.454.66l-1.164.241c-1.465.308-2.154 1.055-2.154 2.16 0 1.122.864 1.905 2.08 1.905z" fill-rule="nonzero"></path></svg>`,
    CTX_RADIO: `<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M19.359 18.57C21.033 16.818 22 14.461 22 11.89s-.967-4.93-2.641-6.68c-.276-.292-.653-.26-.868-.023-.222.246-.176.591.085.868 1.466 1.535 2.272 3.593 2.272 5.835 0 2.241-.806 4.3-2.272 5.835-.261.268-.307.621-.085.86.215.245.592.276.868-.016zm-13.85.014c.222-.238.176-.59-.085-.86-1.474-1.535-2.272-3.593-2.272-5.834 0-2.242.798-4.3 2.272-5.835.261-.277.307-.622.085-.868-.215-.238-.592-.269-.868.023C2.967 6.96 2 9.318 2 11.89s.967 4.929 2.641 6.68c.276.29.653.26.868.014zm1.957-1.873c.223-.253.162-.583-.1-.867-.951-1.068-1.473-2.45-1.473-3.954 0-1.505.522-2.887 1.474-3.954.26-.284.322-.614.1-.876-.23-.26-.622-.26-.891.039-1.175 1.274-1.827 2.963-1.827 4.79 0 1.82.652 3.517 1.827 4.784.269.3.66.307.89.038zm9.958-.038c1.175-1.267 1.827-2.964 1.827-4.783 0-1.828-.652-3.517-1.827-4.791-.269-.3-.66-.3-.89-.039-.23.262-.162.592.092.876.96 1.067 1.481 2.449 1.481 3.954 0 1.504-.522 2.886-1.481 3.954-.254.284-.323.614-.092.867.23.269.621.261.89-.038zm-8.061-1.966c.23-.26.13-.568-.092-.883-.415-.522-.63-1.197-.63-1.934 0-.737.215-1.413.63-1.943.222-.307.322-.614.092-.875s-.653-.261-.906.054a4.385 4.385 0 00-.968 2.764 4.38 4.38 0 00.968 2.756c.253.322.675.322.906.061zm6.18-.061a4.38 4.38 0 00.968-2.756 4.385 4.385 0 00-.968-2.764c-.253-.315-.675-.315-.906-.054-.23.261-.138.568.092.875.415.53.63 1.206.63 1.943 0 .737-.215 1.412-.63 1.934-.23.315-.322.622-.092.883s.653.261.906-.061zm-3.547-.967c.96 0 1.789-.814 1.789-1.797s-.83-1.789-1.789-1.789c-.96 0-1.781.806-1.781 1.789 0 .983.821 1.797 1.781 1.797z" fill-rule="nonzero"></path></svg>`,
    CTX_TRACK: `<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M9.732 19.241c1.077 0 2.688-.79 2.688-2.922V9.617c0-.388.074-.469.418-.542l3.347-.732a.48.48 0 00.403-.484V5.105c0-.388-.315-.637-.689-.563l-3.764.82c-.47.102-.725.359-.725.769l.014 8.144c.037.36-.132.594-.454.66l-1.164.241c-1.465.308-2.154 1.055-2.154 2.16 0 1.122.864 1.905 2.08 1.905z" fill-rule="nonzero"></path></svg>`,
    CTX_QUEUE: `<svg width="48" height="48" viewBox="1 1.2 16 16" fill="currentColor"><path d="M2 2v5l4.33-2.5L2 2zm0 12h14v-1H2v1zm0-4h14V9H2v1zm7-5v1h7V5H9z"></path></svg>`
  };
  var icons_default = ICONS;

  // src/constants/defaults.ts
  var DEFAULTS = {
    tv: {
      lyricsDisplay: true,
      lyricsAlignment: "right",
      autoHideLyrics: true,
      animationTempo: 0.2,
      progressBarDisplay: "never",
      playerControls: "never",
      trimTitle: true,
      trimTitleUpNext: true,
      showAlbum: "date",
      showAllArtists: true,
      icons: true,
      titleMovingIcon: false,
      enableFade: true,
      enableFullscreen: true,
      backgroundChoice: "artist_art",
      extraControls: "never",
      upnextDisplay: true,
      contextDisplay: "always",
      volumeDisplay: "smart",
      themedButtons: true,
      themedIcons: true,
      invertColors: "never",
      backAnimationTime: 0.4,
      animationSpeed: 0.25,
      upNextAnim: "sp",
      upnextTimeToShow: 45,
      coloredBackChoice: "DESATURATED",
      staticBackChoice: "#787878",
      blurSize: 0,
      backgroundBrightness: 0.4,
      showRemainingTime: false,
      verticalMonitorSupport: false,
      sidebarQueue: false
    },
    def: {
      lyricsDisplay: true,
      lyricsAlignment: "right",
      autoHideLyrics: true,
      animationTempo: 0.2,
      progressBarDisplay: "always",
      playerControls: "always",
      trimTitle: true,
      trimTitleUpNext: true,
      showAlbum: "never",
      showAllArtists: true,
      icons: false,
      titleMovingIcon: false,
      enableFade: true,
      enableFullscreen: true,
      backgroundChoice: "album_art",
      extraControls: "always",
      upnextDisplay: true,
      contextDisplay: "mousemove",
      volumeDisplay: "smart",
      themedButtons: true,
      themedIcons: false,
      invertColors: "never",
      backAnimationTime: 1,
      animationSpeed: 0.25,
      upNextAnim: "sp",
      upnextTimeToShow: 30,
      coloredBackChoice: "DESATURATED",
      staticBackChoice: "#787878",
      blurSize: 32,
      backgroundBrightness: 0.7,
      showRemainingTime: false,
      verticalMonitorSupport: true,
      sidebarQueue: false
    },
    tvMode: false,
    locale: "en-US",
    fsHideOriginal: false,
    autoLaunch: "never",
    activationTypes: "both",
    buttonActivation: "both",
    keyActivation: "both"
  };

  // src/constants/general.ts
  var CLASSES_TO_ADD = [
    "video",
    "video-full-screen",
    "video-full-window",
    "video-full-screen--hide-ui",
    "fsd-activated"
  ];

  // src/constants/selectors.ts
  var TOP_BAR_SELECTOR = ".main-topBar-historyButtons";
  var TOP_BAR_SELECTOR_GLOBAL_NAVBAR = ".main-topBar-topbarContentRight>.main-actionButtons";
  var EXTRA_BAR_SELECTOR = ".main-nowPlayingBar-right";
  var ORIGINAL_QUEUE_BUTTON = "div.main-nowPlayingBar-right > div > div.GlueDropTarget.GlueDropTarget--tracks.GlueDropTarget--local-tracks.GlueDropTarget--episodes > button";
  var RIGH_PANEL = ".Root__right-sidebar";

  // src/constants/index.ts
  var constants_default = icons_default;

  // src/utils/config.ts
  var CONFIG = null;
  var ACTIVE = null;
  function getConfig(DEFAULTS2) {
    try {
      const parsed = JSON.parse(localStorage.getItem("full-screen-config") ?? "{}");
      if (Boolean(parsed) && typeof parsed === "object") {
        (0, import_lodash.default)(parsed, DEFAULTS2);
        localStorage.setItem("full-screen-config", JSON.stringify(parsed));
        return parsed;
      }
      throw "";
    } catch {
      localStorage.setItem("full-screen-config", JSON.stringify(DEFAULTS2));
      return DEFAULTS2;
    }
  }
  function saveConfig(CONFIG2) {
    localStorage.setItem("full-screen-config", JSON.stringify(CONFIG2));
  }
  var ConfigManager = {
    get(key) {
      if (CONFIG === null) {
        CONFIG = getConfig(DEFAULTS);
      }
      if (ACTIVE === null) {
        ACTIVE = CONFIG.tvMode ? "tv" : "def";
      }
      return CONFIG[ACTIVE][key];
    },
    set(key, value) {
      if (CONFIG === null) {
        CONFIG = getConfig(DEFAULTS);
      }
      if (ACTIVE === null) {
        ACTIVE = CONFIG.tvMode ? "tv" : "def";
      }
      CONFIG[ACTIVE][key] = value;
      saveConfig(CONFIG);
      document.dispatchEvent(new CustomEvent(key, { detail: value }));
    },
    getGlobal(key) {
      if (CONFIG === null) {
        CONFIG = getConfig(DEFAULTS);
      }
      if (ACTIVE === null) {
        ACTIVE = CONFIG.tvMode ? "tv" : "def";
      }
      return CONFIG[key];
    },
    setGlobal(key, value) {
      if (CONFIG === null) {
        CONFIG = getConfig(DEFAULTS);
      }
      if (ACTIVE === null) {
        ACTIVE = CONFIG.tvMode ? "tv" : "def";
      }
      CONFIG[key] = value;
      saveConfig(CONFIG);
      document.dispatchEvent(new CustomEvent(key, { detail: value }));
    },
    getMode() {
      if (CONFIG === null) {
        CONFIG = getConfig(DEFAULTS);
      }
      if (ACTIVE === null) {
        ACTIVE = CONFIG.tvMode ? "tv" : "def";
      }
      return ACTIVE;
    },
    setMode(modeValue) {
      ACTIVE = modeValue;
    },
    resetSettings(key = null, isGlobal = false) {
      if (CONFIG === null) {
        CONFIG = getConfig(DEFAULTS);
      }
      if (isGlobal) {
        CONFIG = DEFAULTS;
      } else {
        if (ACTIVE === null) {
          ACTIVE = CONFIG.tvMode ? "tv" : "def";
        }
        if (key === null) {
          CONFIG[ACTIVE] = DEFAULTS[ACTIVE];
        } else {
          CONFIG[ACTIVE][key] = DEFAULTS[ACTIVE][key];
        }
      }
      saveConfig(CONFIG);
    }
  };
  var config_default = ConfigManager;

  // src/utils/animation.ts
  function animateCanvas(prevImg, nextImg, back, fromResize = false) {
    const configTransitionTime = config_default.get("backAnimationTime");
    const { innerWidth: width, innerHeight: height } = window;
    back.width = width;
    back.height = height;
    const ctx = back.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    const blur = config_default.get("blurSize");
    ctx.filter = `brightness(${config_default.get("backgroundBrightness")}) blur(${blur}px)`;
    const vals = getSizeValues(width, height, nextImg.width, nextImg.height);
    const x = vals.x - blur * 2;
    const y = vals.y - blur * 2;
    const sizeX = vals.width + blur * 4;
    const sizeY = vals.height + blur * 4;
    if (!config_default.get("enableFade") || fromResize) {
      ctx.globalAlpha = 1;
      ctx.drawImage(nextImg, x, y, sizeX, sizeY);
      return;
    }
    let prevTimeStamp, start, done = false;
    const animate = (timestamp) => {
      if (start === void 0)
        start = timestamp;
      const elapsed = timestamp - start;
      if (prevTimeStamp !== timestamp) {
        const factor = Math.min(elapsed / (configTransitionTime * 1e3), 1);
        ctx.globalAlpha = 1;
        ctx.drawImage(prevImg, x, y, sizeX, sizeY);
        ctx.globalAlpha = Math.sin(Math.PI / 2 * factor);
        ctx.drawImage(nextImg, x, y, sizeX, sizeY);
        if (factor === 1)
          done = true;
      }
      if (elapsed < configTransitionTime * 1e3) {
        prevTimeStamp = timestamp;
        !done && requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
  var prevColor = "#000000";
  async function animateColor(nextColor, back, fromConfig = false) {
    const configTransitionTime = config_default.get("backAnimationTime");
    const { innerWidth: width, innerHeight: height } = window;
    back.width = width;
    back.height = height;
    const ctx = back.getContext("2d");
    if (!config_default.get("enableFade") || fromConfig) {
      ctx.globalAlpha = 1;
      ctx.fillStyle = nextColor;
      ctx.fillRect(0, 0, width, height);
      return;
    }
    let previousTimeStamp, done = false, start;
    const animate = (timestamp) => {
      if (start === void 0)
        start = timestamp;
      const elapsed = timestamp - start;
      if (previousTimeStamp !== timestamp) {
        const factor = Math.min(elapsed / (configTransitionTime * 1e3), 1);
        ctx.globalAlpha = 1;
        ctx.fillStyle = prevColor;
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = Math.sin(Math.PI / 2 * factor);
        ctx.fillStyle = nextColor;
        ctx.fillRect(0, 0, width, height);
        if (factor === 1)
          done = true;
      }
      if (elapsed < configTransitionTime * 1e3) {
        previousTimeStamp = timestamp;
        !done && requestAnimationFrame(animate);
      } else {
        prevColor = nextColor;
      }
    };
    requestAnimationFrame(animate);
  }
  var isAnimationRunning = false;
  var modifyIsAnimationRunning = (value) => {
    isAnimationRunning = value;
  };
  var rotationSpeed = config_default.get("animationSpeed");
  var modifyRotationSpeed = (value) => {
    rotationSpeed = value;
  };
  function animatedRotatedCanvas(back, bgImg) {
    const ctx = back.getContext("2d");
    back.width = window.innerWidth;
    back.height = window.innerHeight;
    const blur = Math.max(config_default.get("blurSize"), 28);
    const brightness = Math.min(
      config_default.get("backgroundBrightness"),
      0.7
    );
    ctx.filter = `saturate(2) brightness(${brightness}) blur(${blur}px)`;
    const radius = Math.min(back.width, back.height);
    let rotationAngle = 0;
    function draw() {
      ctx.clearRect(0, 0, back.width, back.height);
      ctx.save();
      ctx.translate(0, 0);
      ctx.rotate(2 * Math.PI / 360 * rotationAngle);
      ctx.drawImage(bgImg, -radius, -radius, radius * 2, radius * 2);
      ctx.restore();
      ctx.save();
      ctx.translate(back.width / 2, 0);
      ctx.rotate(2 * Math.PI / 360 * rotationAngle + Math.PI);
      ctx.drawImage(bgImg, -radius, -radius, radius * 2, radius * 2);
      ctx.restore();
      rotationAngle += rotationSpeed;
      if (isAnimationRunning)
        requestAnimationFrame(draw);
    }
    isAnimationRunning = true;
    draw();
  }
  var lastFrameTime = performance.now();
  var offscreenCanvas = document.createElement("canvas");
  function getSizeValues(parentWidth, parentHeight, childWidth, childHeight) {
    const doRatio = childWidth / childHeight;
    const cRatio = parentWidth / parentHeight;
    let width = parentWidth;
    let height = parentHeight;
    if (doRatio < cRatio) {
      height = width / doRatio;
    } else {
      width = height * doRatio;
    }
    return {
      width,
      height,
      x: (parentWidth - width) / 2,
      y: (parentHeight - height) / 2
    };
  }

  // node_modules/marked/lib/marked.esm.js
  function _getDefaults() {
    return {
      async: false,
      breaks: false,
      extensions: null,
      gfm: true,
      hooks: null,
      pedantic: false,
      renderer: null,
      silent: false,
      tokenizer: null,
      walkTokens: null
    };
  }
  var _defaults = _getDefaults();
  function changeDefaults(newDefaults) {
    _defaults = newDefaults;
  }
  var escapeTest = /[&<>"']/;
  var escapeReplace = new RegExp(escapeTest.source, "g");
  var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
  var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
  var escapeReplacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  var getEscapeReplacement = (ch) => escapeReplacements[ch];
  function escape$1(html2, encode) {
    if (encode) {
      if (escapeTest.test(html2)) {
        return html2.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html2)) {
        return html2.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }
    return html2;
  }
  var caret = /(^|[^\[])\^/g;
  function edit(regex, opt) {
    let source = typeof regex === "string" ? regex : regex.source;
    opt = opt || "";
    const obj = {
      replace: (name, val) => {
        let valSource = typeof val === "string" ? val : val.source;
        valSource = valSource.replace(caret, "$1");
        source = source.replace(name, valSource);
        return obj;
      },
      getRegex: () => {
        return new RegExp(source, opt);
      }
    };
    return obj;
  }
  function cleanUrl(href) {
    try {
      href = encodeURI(href).replace(/%25/g, "%");
    } catch {
      return null;
    }
    return href;
  }
  var noopTest = { exec: () => null };
  function splitCells(tableRow, count) {
    const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false;
      let curr = offset;
      while (--curr >= 0 && str[curr] === "\\")
        escaped = !escaped;
      if (escaped) {
        return "|";
      } else {
        return " |";
      }
    }), cells = row.split(/ \|/);
    let i2 = 0;
    if (!cells[0].trim()) {
      cells.shift();
    }
    if (cells.length > 0 && !cells[cells.length - 1].trim()) {
      cells.pop();
    }
    if (count) {
      if (cells.length > count) {
        cells.splice(count);
      } else {
        while (cells.length < count)
          cells.push("");
      }
    }
    for (; i2 < cells.length; i2++) {
      cells[i2] = cells[i2].trim().replace(/\\\|/g, "|");
    }
    return cells;
  }
  function rtrim(str, c, invert) {
    const l = str.length;
    if (l === 0) {
      return "";
    }
    let suffLen = 0;
    while (suffLen < l) {
      const currChar = str.charAt(l - suffLen - 1);
      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }
    return str.slice(0, l - suffLen);
  }
  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }
    let level = 0;
    for (let i2 = 0; i2 < str.length; i2++) {
      if (str[i2] === "\\") {
        i2++;
      } else if (str[i2] === b[0]) {
        level++;
      } else if (str[i2] === b[1]) {
        level--;
        if (level < 0) {
          return i2;
        }
      }
    }
    return -1;
  }
  function outputLink(cap, link2, raw, lexer2) {
    const href = link2.href;
    const title = link2.title ? escape$1(link2.title) : null;
    const text = cap[1].replace(/\\([\[\]])/g, "$1");
    if (cap[0].charAt(0) !== "!") {
      lexer2.state.inLink = true;
      const token = {
        type: "link",
        raw,
        href,
        title,
        text,
        tokens: lexer2.inlineTokens(text)
      };
      lexer2.state.inLink = false;
      return token;
    }
    return {
      type: "image",
      raw,
      href,
      title,
      text: escape$1(text)
    };
  }
  function indentCodeCompensation(raw, text) {
    const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
    if (matchIndentToCode === null) {
      return text;
    }
    const indentToCode = matchIndentToCode[1];
    return text.split("\n").map((node) => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }
      const [indentInNode] = matchIndentInNode;
      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }
      return node;
    }).join("\n");
  }
  var _Tokenizer = class {
    options;
    rules;
    lexer;
    constructor(options2) {
      this.options = options2 || _defaults;
    }
    space(src) {
      const cap = this.rules.block.newline.exec(src);
      if (cap && cap[0].length > 0) {
        return {
          type: "space",
          raw: cap[0]
        };
      }
    }
    code(src) {
      const cap = this.rules.block.code.exec(src);
      if (cap) {
        const text = cap[0].replace(/^(?: {1,4}| {0,3}\t)/gm, "");
        return {
          type: "code",
          raw: cap[0],
          codeBlockStyle: "indented",
          text: !this.options.pedantic ? rtrim(text, "\n") : text
        };
      }
    }
    fences(src) {
      const cap = this.rules.block.fences.exec(src);
      if (cap) {
        const raw = cap[0];
        const text = indentCodeCompensation(raw, cap[3] || "");
        return {
          type: "code",
          raw,
          lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
          text
        };
      }
    }
    heading(src) {
      const cap = this.rules.block.heading.exec(src);
      if (cap) {
        let text = cap[2].trim();
        if (/#$/.test(text)) {
          const trimmed = rtrim(text, "#");
          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            text = trimmed.trim();
          }
        }
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[1].length,
          text,
          tokens: this.lexer.inline(text)
        };
      }
    }
    hr(src) {
      const cap = this.rules.block.hr.exec(src);
      if (cap) {
        return {
          type: "hr",
          raw: rtrim(cap[0], "\n")
        };
      }
    }
    blockquote(src) {
      const cap = this.rules.block.blockquote.exec(src);
      if (cap) {
        let lines = rtrim(cap[0], "\n").split("\n");
        let raw = "";
        let text = "";
        const tokens = [];
        while (lines.length > 0) {
          let inBlockquote = false;
          const currentLines = [];
          let i2;
          for (i2 = 0; i2 < lines.length; i2++) {
            if (/^ {0,3}>/.test(lines[i2])) {
              currentLines.push(lines[i2]);
              inBlockquote = true;
            } else if (!inBlockquote) {
              currentLines.push(lines[i2]);
            } else {
              break;
            }
          }
          lines = lines.slice(i2);
          const currentRaw = currentLines.join("\n");
          const currentText = currentRaw.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1").replace(/^ {0,3}>[ \t]?/gm, "");
          raw = raw ? `${raw}
${currentRaw}` : currentRaw;
          text = text ? `${text}
${currentText}` : currentText;
          const top = this.lexer.state.top;
          this.lexer.state.top = true;
          this.lexer.blockTokens(currentText, tokens, true);
          this.lexer.state.top = top;
          if (lines.length === 0) {
            break;
          }
          const lastToken = tokens[tokens.length - 1];
          if (lastToken?.type === "code") {
            break;
          } else if (lastToken?.type === "blockquote") {
            const oldToken = lastToken;
            const newText = oldToken.raw + "\n" + lines.join("\n");
            const newToken = this.blockquote(newText);
            tokens[tokens.length - 1] = newToken;
            raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
            text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
            break;
          } else if (lastToken?.type === "list") {
            const oldToken = lastToken;
            const newText = oldToken.raw + "\n" + lines.join("\n");
            const newToken = this.list(newText);
            tokens[tokens.length - 1] = newToken;
            raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
            text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
            lines = newText.substring(tokens[tokens.length - 1].raw.length).split("\n");
            continue;
          }
        }
        return {
          type: "blockquote",
          raw,
          tokens,
          text
        };
      }
    }
    list(src) {
      let cap = this.rules.block.list.exec(src);
      if (cap) {
        let bull = cap[1].trim();
        const isordered = bull.length > 1;
        const list2 = {
          type: "list",
          raw: "",
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : "",
          loose: false,
          items: []
        };
        bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
        if (this.options.pedantic) {
          bull = isordered ? bull : "[*+-]";
        }
        const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
        let endsWithBlankLine = false;
        while (src) {
          let endEarly = false;
          let raw = "";
          let itemContents = "";
          if (!(cap = itemRegex.exec(src))) {
            break;
          }
          if (this.rules.block.hr.test(src)) {
            break;
          }
          raw = cap[0];
          src = src.substring(raw.length);
          let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
          let nextLine = src.split("\n", 1)[0];
          let blankLine = !line.trim();
          let indent = 0;
          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimStart();
          } else if (blankLine) {
            indent = cap[1].length + 1;
          } else {
            indent = cap[2].search(/[^ ]/);
            indent = indent > 4 ? 1 : indent;
            itemContents = line.slice(indent);
            indent += cap[1].length;
          }
          if (blankLine && /^[ \t]*$/.test(nextLine)) {
            raw += nextLine + "\n";
            src = src.substring(nextLine.length + 1);
            endEarly = true;
          }
          if (!endEarly) {
            const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
            const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
            const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
            const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
            const htmlBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, "i");
            while (src) {
              const rawLine = src.split("\n", 1)[0];
              let nextLineWithoutTabs;
              nextLine = rawLine;
              if (this.options.pedantic) {
                nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
                nextLineWithoutTabs = nextLine;
              } else {
                nextLineWithoutTabs = nextLine.replace(/\t/g, "    ");
              }
              if (fencesBeginRegex.test(nextLine)) {
                break;
              }
              if (headingBeginRegex.test(nextLine)) {
                break;
              }
              if (htmlBeginRegex.test(nextLine)) {
                break;
              }
              if (nextBulletRegex.test(nextLine)) {
                break;
              }
              if (hrRegex.test(nextLine)) {
                break;
              }
              if (nextLineWithoutTabs.search(/[^ ]/) >= indent || !nextLine.trim()) {
                itemContents += "\n" + nextLineWithoutTabs.slice(indent);
              } else {
                if (blankLine) {
                  break;
                }
                if (line.replace(/\t/g, "    ").search(/[^ ]/) >= 4) {
                  break;
                }
                if (fencesBeginRegex.test(line)) {
                  break;
                }
                if (headingBeginRegex.test(line)) {
                  break;
                }
                if (hrRegex.test(line)) {
                  break;
                }
                itemContents += "\n" + nextLine;
              }
              if (!blankLine && !nextLine.trim()) {
                blankLine = true;
              }
              raw += rawLine + "\n";
              src = src.substring(rawLine.length + 1);
              line = nextLineWithoutTabs.slice(indent);
            }
          }
          if (!list2.loose) {
            if (endsWithBlankLine) {
              list2.loose = true;
            } else if (/\n[ \t]*\n[ \t]*$/.test(raw)) {
              endsWithBlankLine = true;
            }
          }
          let istask = null;
          let ischecked;
          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);
            if (istask) {
              ischecked = istask[0] !== "[ ] ";
              itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
            }
          }
          list2.items.push({
            type: "list_item",
            raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents,
            tokens: []
          });
          list2.raw += raw;
        }
        list2.items[list2.items.length - 1].raw = list2.items[list2.items.length - 1].raw.trimEnd();
        list2.items[list2.items.length - 1].text = list2.items[list2.items.length - 1].text.trimEnd();
        list2.raw = list2.raw.trimEnd();
        for (let i2 = 0; i2 < list2.items.length; i2++) {
          this.lexer.state.top = false;
          list2.items[i2].tokens = this.lexer.blockTokens(list2.items[i2].text, []);
          if (!list2.loose) {
            const spacers = list2.items[i2].tokens.filter((t) => t.type === "space");
            const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
            list2.loose = hasMultipleLineBreaks;
          }
        }
        if (list2.loose) {
          for (let i2 = 0; i2 < list2.items.length; i2++) {
            list2.items[i2].loose = true;
          }
        }
        return list2;
      }
    }
    html(src) {
      const cap = this.rules.block.html.exec(src);
      if (cap) {
        const token = {
          type: "html",
          block: true,
          raw: cap[0],
          pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
          text: cap[0]
        };
        return token;
      }
    }
    def(src) {
      const cap = this.rules.block.def.exec(src);
      if (cap) {
        const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
        const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
        const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
        return {
          type: "def",
          tag: tag2,
          raw: cap[0],
          href,
          title
        };
      }
    }
    table(src) {
      const cap = this.rules.block.table.exec(src);
      if (!cap) {
        return;
      }
      if (!/[:|]/.test(cap[2])) {
        return;
      }
      const headers = splitCells(cap[1]);
      const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
      const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
      const item = {
        type: "table",
        raw: cap[0],
        header: [],
        align: [],
        rows: []
      };
      if (headers.length !== aligns.length) {
        return;
      }
      for (const align of aligns) {
        if (/^ *-+: *$/.test(align)) {
          item.align.push("right");
        } else if (/^ *:-+: *$/.test(align)) {
          item.align.push("center");
        } else if (/^ *:-+ *$/.test(align)) {
          item.align.push("left");
        } else {
          item.align.push(null);
        }
      }
      for (let i2 = 0; i2 < headers.length; i2++) {
        item.header.push({
          text: headers[i2],
          tokens: this.lexer.inline(headers[i2]),
          header: true,
          align: item.align[i2]
        });
      }
      for (const row of rows) {
        item.rows.push(splitCells(row, item.header.length).map((cell, i2) => {
          return {
            text: cell,
            tokens: this.lexer.inline(cell),
            header: false,
            align: item.align[i2]
          };
        }));
      }
      return item;
    }
    lheading(src) {
      const cap = this.rules.block.lheading.exec(src);
      if (cap) {
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[2].charAt(0) === "=" ? 1 : 2,
          text: cap[1],
          tokens: this.lexer.inline(cap[1])
        };
      }
    }
    paragraph(src) {
      const cap = this.rules.block.paragraph.exec(src);
      if (cap) {
        const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
        return {
          type: "paragraph",
          raw: cap[0],
          text,
          tokens: this.lexer.inline(text)
        };
      }
    }
    text(src) {
      const cap = this.rules.block.text.exec(src);
      if (cap) {
        return {
          type: "text",
          raw: cap[0],
          text: cap[0],
          tokens: this.lexer.inline(cap[0])
        };
      }
    }
    escape(src) {
      const cap = this.rules.inline.escape.exec(src);
      if (cap) {
        return {
          type: "escape",
          raw: cap[0],
          text: escape$1(cap[1])
        };
      }
    }
    tag(src) {
      const cap = this.rules.inline.tag.exec(src);
      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: "html",
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: false,
          text: cap[0]
        };
      }
    }
    link(src) {
      const cap = this.rules.inline.link.exec(src);
      if (cap) {
        const trimmedUrl = cap[2].trim();
        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          if (!/>$/.test(trimmedUrl)) {
            return;
          }
          const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          const lastParenIndex = findClosingBracket(cap[2], "()");
          if (lastParenIndex > -1) {
            const start = cap[0].indexOf("!") === 0 ? 5 : 4;
            const linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = "";
          }
        }
        let href = cap[2];
        let title = "";
        if (this.options.pedantic) {
          const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
          if (link2) {
            href = link2[1];
            title = link2[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : "";
        }
        href = href.trim();
        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
          title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
        }, cap[0], this.lexer);
      }
    }
    reflink(src, links) {
      let cap;
      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
        const link2 = links[linkString.toLowerCase()];
        if (!link2) {
          const text = cap[0].charAt(0);
          return {
            type: "text",
            raw: text,
            text
          };
        }
        return outputLink(cap, link2, cap[0], this.lexer);
      }
    }
    emStrong(src, maskedSrc, prevChar = "") {
      let match = this.rules.inline.emStrongLDelim.exec(src);
      if (!match)
        return;
      if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
        return;
      const nextChar = match[1] || match[2] || "";
      if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
        const lLength = [...match[0]].length - 1;
        let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
        const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        endReg.lastIndex = 0;
        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim)
            continue;
          rLength = [...rDelim].length;
          if (match[3] || match[4]) {
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue;
            }
          }
          delimTotal -= rLength;
          if (delimTotal > 0)
            continue;
          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
          const lastCharLength = [...match[0]][0].length;
          const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
          if (Math.min(lLength, rLength) % 2) {
            const text2 = raw.slice(1, -1);
            return {
              type: "em",
              raw,
              text: text2,
              tokens: this.lexer.inlineTokens(text2)
            };
          }
          const text = raw.slice(2, -2);
          return {
            type: "strong",
            raw,
            text,
            tokens: this.lexer.inlineTokens(text)
          };
        }
      }
    }
    codespan(src) {
      const cap = this.rules.inline.code.exec(src);
      if (cap) {
        let text = cap[2].replace(/\n/g, " ");
        const hasNonSpaceChars = /[^ ]/.test(text);
        const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        text = escape$1(text, true);
        return {
          type: "codespan",
          raw: cap[0],
          text
        };
      }
    }
    br(src) {
      const cap = this.rules.inline.br.exec(src);
      if (cap) {
        return {
          type: "br",
          raw: cap[0]
        };
      }
    }
    del(src) {
      const cap = this.rules.inline.del.exec(src);
      if (cap) {
        return {
          type: "del",
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2])
        };
      }
    }
    autolink(src) {
      const cap = this.rules.inline.autolink.exec(src);
      if (cap) {
        let text, href;
        if (cap[2] === "@") {
          text = escape$1(cap[1]);
          href = "mailto:" + text;
        } else {
          text = escape$1(cap[1]);
          href = text;
        }
        return {
          type: "link",
          raw: cap[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
    }
    url(src) {
      let cap;
      if (cap = this.rules.inline.url.exec(src)) {
        let text, href;
        if (cap[2] === "@") {
          text = escape$1(cap[0]);
          href = "mailto:" + text;
        } else {
          let prevCapZero;
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
          } while (prevCapZero !== cap[0]);
          text = escape$1(cap[0]);
          if (cap[1] === "www.") {
            href = "http://" + cap[0];
          } else {
            href = cap[0];
          }
        }
        return {
          type: "link",
          raw: cap[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
    }
    inlineText(src) {
      const cap = this.rules.inline.text.exec(src);
      if (cap) {
        let text;
        if (this.lexer.state.inRawBlock) {
          text = cap[0];
        } else {
          text = escape$1(cap[0]);
        }
        return {
          type: "text",
          raw: cap[0],
          text
        };
      }
    }
  };
  var newline = /^(?:[ \t]*(?:\n|$))+/;
  var blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
  var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
  var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
  var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
  var bullet = /(?:[*+-]|\d{1,9}[.)])/;
  var lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex();
  var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
  var blockText = /^[^\n]+/;
  var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
  var def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
  var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
  var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
  var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
  var html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
  var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
  var blockNormal = {
    blockquote,
    code: blockCode,
    def,
    fences,
    heading,
    hr,
    html,
    lheading,
    list,
    newline,
    paragraph,
    table: noopTest,
    text: blockText
  };
  var gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
  var blockGfm = {
    ...blockNormal,
    table: gfmTable,
    paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
  };
  var blockPedantic = {
    ...blockNormal,
    html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
  };
  var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
  var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
  var br = /^( {2,}|\\)\n(?!\s*$)/;
  var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
  var _punctuation = "\\p{P}\\p{S}";
  var punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
  var blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
  var emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
  var emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex();
  var emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex();
  var anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
  var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
  var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
  var tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
  var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  var link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
  var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
  var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
  var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
  var inlineNormal = {
    _backpedal: noopTest,
    anyPunctuation,
    autolink,
    blockSkip,
    br,
    code: inlineCode,
    del: noopTest,
    emStrongLDelim,
    emStrongRDelimAst,
    emStrongRDelimUnd,
    escape,
    link,
    nolink,
    punctuation,
    reflink,
    reflinkSearch,
    tag,
    text: inlineText,
    url: noopTest
  };
  var inlinePedantic = {
    ...inlineNormal,
    link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
  };
  var inlineGfm = {
    ...inlineNormal,
    escape: edit(escape).replace("])", "~|])").getRegex(),
    url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  };
  var inlineBreaks = {
    ...inlineGfm,
    br: edit(br).replace("{2,}", "*").getRegex(),
    text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  };
  var block = {
    normal: blockNormal,
    gfm: blockGfm,
    pedantic: blockPedantic
  };
  var inline = {
    normal: inlineNormal,
    gfm: inlineGfm,
    breaks: inlineBreaks,
    pedantic: inlinePedantic
  };
  var _Lexer = class {
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(options2) {
      this.tokens = [];
      this.tokens.links = /* @__PURE__ */ Object.create(null);
      this.options = options2 || _defaults;
      this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      this.tokenizer.lexer = this;
      this.inlineQueue = [];
      this.state = {
        inLink: false,
        inRawBlock: false,
        top: true
      };
      const rules = {
        block: block.normal,
        inline: inline.normal
      };
      if (this.options.pedantic) {
        rules.block = block.pedantic;
        rules.inline = inline.pedantic;
      } else if (this.options.gfm) {
        rules.block = block.gfm;
        if (this.options.breaks) {
          rules.inline = inline.breaks;
        } else {
          rules.inline = inline.gfm;
        }
      }
      this.tokenizer.rules = rules;
    }
    static get rules() {
      return {
        block,
        inline
      };
    }
    static lex(src, options2) {
      const lexer2 = new _Lexer(options2);
      return lexer2.lex(src);
    }
    static lexInline(src, options2) {
      const lexer2 = new _Lexer(options2);
      return lexer2.inlineTokens(src);
    }
    lex(src) {
      src = src.replace(/\r\n|\r/g, "\n");
      this.blockTokens(src, this.tokens);
      for (let i2 = 0; i2 < this.inlineQueue.length; i2++) {
        const next = this.inlineQueue[i2];
        this.inlineTokens(next.src, next.tokens);
      }
      this.inlineQueue = [];
      return this.tokens;
    }
    blockTokens(src, tokens = [], lastParagraphClipped = false) {
      if (this.options.pedantic) {
        src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
      }
      let token;
      let lastToken;
      let cutSrc;
      while (src) {
        if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);
          if (token.raw.length === 1 && tokens.length > 0) {
            tokens[tokens.length - 1].raw += "\n";
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.code(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.def(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.raw;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }
          continue;
        }
        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        cutSrc = src;
        if (this.options.extensions && this.options.extensions.startBlock) {
          let startIndex = Infinity;
          const tempSrc = src.slice(1);
          let tempStart;
          this.options.extensions.startBlock.forEach((getStartIndex) => {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc);
            if (typeof tempStart === "number" && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });
          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src.substring(0, startIndex + 1);
          }
        }
        if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
          lastToken = tokens[tokens.length - 1];
          if (lastParagraphClipped && lastToken?.type === "paragraph") {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          lastParagraphClipped = cutSrc.length !== src.length;
          src = src.substring(token.raw.length);
          continue;
        }
        if (token = this.tokenizer.text(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === "text") {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src) {
          const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      this.state.top = true;
      return tokens;
    }
    inline(src, tokens = []) {
      this.inlineQueue.push({ src, tokens });
      return tokens;
    }
    inlineTokens(src, tokens = []) {
      let token, lastToken, cutSrc;
      let maskedSrc = src;
      let match;
      let keepPrevChar, prevChar;
      if (this.tokens.links) {
        const links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      }
      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }
      while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      }
      while (src) {
        if (!keepPrevChar) {
          prevChar = "";
        }
        keepPrevChar = false;
        if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }
        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.tag(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === "text" && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === "text" && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.autolink(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (!this.state.inLink && (token = this.tokenizer.url(src))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        cutSrc = src;
        if (this.options.extensions && this.options.extensions.startInline) {
          let startIndex = Infinity;
          const tempSrc = src.slice(1);
          let tempStart;
          this.options.extensions.startInline.forEach((getStartIndex) => {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc);
            if (typeof tempStart === "number" && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });
          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src.substring(0, startIndex + 1);
          }
        }
        if (token = this.tokenizer.inlineText(cutSrc)) {
          src = src.substring(token.raw.length);
          if (token.raw.slice(-1) !== "_") {
            prevChar = token.raw.slice(-1);
          }
          keepPrevChar = true;
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src) {
          const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      return tokens;
    }
  };
  var _Renderer = class {
    options;
    parser;
    constructor(options2) {
      this.options = options2 || _defaults;
    }
    space(token) {
      return "";
    }
    code({ text, lang, escaped }) {
      const langString = (lang || "").match(/^\S*/)?.[0];
      const code = text.replace(/\n$/, "") + "\n";
      if (!langString) {
        return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
      }
      return '<pre><code class="language-' + escape$1(langString) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    blockquote({ tokens }) {
      const body = this.parser.parse(tokens);
      return `<blockquote>
${body}</blockquote>
`;
    }
    html({ text }) {
      return text;
    }
    heading({ tokens, depth }) {
      return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
    }
    hr(token) {
      return "<hr>\n";
    }
    list(token) {
      const ordered = token.ordered;
      const start = token.start;
      let body = "";
      for (let j = 0; j < token.items.length; j++) {
        const item = token.items[j];
        body += this.listitem(item);
      }
      const type = ordered ? "ol" : "ul";
      const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
      return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
    }
    listitem(item) {
      let itemBody = "";
      if (item.task) {
        const checkbox = this.checkbox({ checked: !!item.checked });
        if (item.loose) {
          if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
            item.tokens[0].text = checkbox + " " + item.tokens[0].text;
            if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
              item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
            }
          } else {
            item.tokens.unshift({
              type: "text",
              raw: checkbox + " ",
              text: checkbox + " "
            });
          }
        } else {
          itemBody += checkbox + " ";
        }
      }
      itemBody += this.parser.parse(item.tokens, !!item.loose);
      return `<li>${itemBody}</li>
`;
    }
    checkbox({ checked }) {
      return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
    }
    paragraph({ tokens }) {
      return `<p>${this.parser.parseInline(tokens)}</p>
`;
    }
    table(token) {
      let header = "";
      let cell = "";
      for (let j = 0; j < token.header.length; j++) {
        cell += this.tablecell(token.header[j]);
      }
      header += this.tablerow({ text: cell });
      let body = "";
      for (let j = 0; j < token.rows.length; j++) {
        const row = token.rows[j];
        cell = "";
        for (let k = 0; k < row.length; k++) {
          cell += this.tablecell(row[k]);
        }
        body += this.tablerow({ text: cell });
      }
      if (body)
        body = `<tbody>${body}</tbody>`;
      return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
    }
    tablerow({ text }) {
      return `<tr>
${text}</tr>
`;
    }
    tablecell(token) {
      const content = this.parser.parseInline(token.tokens);
      const type = token.header ? "th" : "td";
      const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
      return tag2 + content + `</${type}>
`;
    }
    strong({ tokens }) {
      return `<strong>${this.parser.parseInline(tokens)}</strong>`;
    }
    em({ tokens }) {
      return `<em>${this.parser.parseInline(tokens)}</em>`;
    }
    codespan({ text }) {
      return `<code>${text}</code>`;
    }
    br(token) {
      return "<br>";
    }
    del({ tokens }) {
      return `<del>${this.parser.parseInline(tokens)}</del>`;
    }
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return text;
      }
      href = cleanHref;
      let out = '<a href="' + href + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += ">" + text + "</a>";
      return out;
    }
    image({ href, title, text }) {
      const cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return text;
      }
      href = cleanHref;
      let out = `<img src="${href}" alt="${text}"`;
      if (title) {
        out += ` title="${title}"`;
      }
      out += ">";
      return out;
    }
    text(token) {
      return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : token.text;
    }
  };
  var _TextRenderer = class {
    strong({ text }) {
      return text;
    }
    em({ text }) {
      return text;
    }
    codespan({ text }) {
      return text;
    }
    del({ text }) {
      return text;
    }
    html({ text }) {
      return text;
    }
    text({ text }) {
      return text;
    }
    link({ text }) {
      return "" + text;
    }
    image({ text }) {
      return "" + text;
    }
    br() {
      return "";
    }
  };
  var _Parser = class {
    options;
    renderer;
    textRenderer;
    constructor(options2) {
      this.options = options2 || _defaults;
      this.options.renderer = this.options.renderer || new _Renderer();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.renderer.parser = this;
      this.textRenderer = new _TextRenderer();
    }
    static parse(tokens, options2) {
      const parser2 = new _Parser(options2);
      return parser2.parse(tokens);
    }
    static parseInline(tokens, options2) {
      const parser2 = new _Parser(options2);
      return parser2.parseInline(tokens);
    }
    parse(tokens, top = true) {
      let out = "";
      for (let i2 = 0; i2 < tokens.length; i2++) {
        const anyToken = tokens[i2];
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
          const genericToken = anyToken;
          const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
          if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
            out += ret || "";
            continue;
          }
        }
        const token = anyToken;
        switch (token.type) {
          case "space": {
            out += this.renderer.space(token);
            continue;
          }
          case "hr": {
            out += this.renderer.hr(token);
            continue;
          }
          case "heading": {
            out += this.renderer.heading(token);
            continue;
          }
          case "code": {
            out += this.renderer.code(token);
            continue;
          }
          case "table": {
            out += this.renderer.table(token);
            continue;
          }
          case "blockquote": {
            out += this.renderer.blockquote(token);
            continue;
          }
          case "list": {
            out += this.renderer.list(token);
            continue;
          }
          case "html": {
            out += this.renderer.html(token);
            continue;
          }
          case "paragraph": {
            out += this.renderer.paragraph(token);
            continue;
          }
          case "text": {
            let textToken = token;
            let body = this.renderer.text(textToken);
            while (i2 + 1 < tokens.length && tokens[i2 + 1].type === "text") {
              textToken = tokens[++i2];
              body += "\n" + this.renderer.text(textToken);
            }
            if (top) {
              out += this.renderer.paragraph({
                type: "paragraph",
                raw: body,
                text: body,
                tokens: [{ type: "text", raw: body, text: body }]
              });
            } else {
              out += body;
            }
            continue;
          }
          default: {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return "";
            } else {
              throw new Error(errMsg);
            }
          }
        }
      }
      return out;
    }
    parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      let out = "";
      for (let i2 = 0; i2 < tokens.length; i2++) {
        const anyToken = tokens[i2];
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
          const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
          if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
            out += ret || "";
            continue;
          }
        }
        const token = anyToken;
        switch (token.type) {
          case "escape": {
            out += renderer.text(token);
            break;
          }
          case "html": {
            out += renderer.html(token);
            break;
          }
          case "link": {
            out += renderer.link(token);
            break;
          }
          case "image": {
            out += renderer.image(token);
            break;
          }
          case "strong": {
            out += renderer.strong(token);
            break;
          }
          case "em": {
            out += renderer.em(token);
            break;
          }
          case "codespan": {
            out += renderer.codespan(token);
            break;
          }
          case "br": {
            out += renderer.br(token);
            break;
          }
          case "del": {
            out += renderer.del(token);
            break;
          }
          case "text": {
            out += renderer.text(token);
            break;
          }
          default: {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return "";
            } else {
              throw new Error(errMsg);
            }
          }
        }
      }
      return out;
    }
  };
  var _Hooks = class {
    options;
    block;
    constructor(options2) {
      this.options = options2 || _defaults;
    }
    preprocess(markdown) {
      return markdown;
    }
    postprocess(html2) {
      return html2;
    }
    processAllTokens(tokens) {
      return tokens;
    }
    provideLexer() {
      return this.block ? _Lexer.lex : _Lexer.lexInline;
    }
    provideParser() {
      return this.block ? _Parser.parse : _Parser.parseInline;
    }
  };
  __publicField(_Hooks, "passThroughHooks", /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]));
  var Marked = class {
    defaults = _getDefaults();
    options = this.setOptions;
    parse = this.parseMarkdown(true);
    parseInline = this.parseMarkdown(false);
    Parser = _Parser;
    Renderer = _Renderer;
    TextRenderer = _TextRenderer;
    Lexer = _Lexer;
    Tokenizer = _Tokenizer;
    Hooks = _Hooks;
    constructor(...args) {
      this.use(...args);
    }
    walkTokens(tokens, callback) {
      let values = [];
      for (const token of tokens) {
        values = values.concat(callback.call(this, token));
        switch (token.type) {
          case "table": {
            const tableToken = token;
            for (const cell of tableToken.header) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
            for (const row of tableToken.rows) {
              for (const cell of row) {
                values = values.concat(this.walkTokens(cell.tokens, callback));
              }
            }
            break;
          }
          case "list": {
            const listToken = token;
            values = values.concat(this.walkTokens(listToken.items, callback));
            break;
          }
          default: {
            const genericToken = token;
            if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
              this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
                const tokens2 = genericToken[childTokens].flat(Infinity);
                values = values.concat(this.walkTokens(tokens2, callback));
              });
            } else if (genericToken.tokens) {
              values = values.concat(this.walkTokens(genericToken.tokens, callback));
            }
          }
        }
      }
      return values;
    }
    use(...args) {
      const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
      args.forEach((pack) => {
        const opts = { ...pack };
        opts.async = this.defaults.async || opts.async || false;
        if (pack.extensions) {
          pack.extensions.forEach((ext) => {
            if (!ext.name) {
              throw new Error("extension name required");
            }
            if ("renderer" in ext) {
              const prevRenderer = extensions.renderers[ext.name];
              if (prevRenderer) {
                extensions.renderers[ext.name] = function(...args2) {
                  let ret = ext.renderer.apply(this, args2);
                  if (ret === false) {
                    ret = prevRenderer.apply(this, args2);
                  }
                  return ret;
                };
              } else {
                extensions.renderers[ext.name] = ext.renderer;
              }
            }
            if ("tokenizer" in ext) {
              if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
                throw new Error("extension level must be 'block' or 'inline'");
              }
              const extLevel = extensions[ext.level];
              if (extLevel) {
                extLevel.unshift(ext.tokenizer);
              } else {
                extensions[ext.level] = [ext.tokenizer];
              }
              if (ext.start) {
                if (ext.level === "block") {
                  if (extensions.startBlock) {
                    extensions.startBlock.push(ext.start);
                  } else {
                    extensions.startBlock = [ext.start];
                  }
                } else if (ext.level === "inline") {
                  if (extensions.startInline) {
                    extensions.startInline.push(ext.start);
                  } else {
                    extensions.startInline = [ext.start];
                  }
                }
              }
            }
            if ("childTokens" in ext && ext.childTokens) {
              extensions.childTokens[ext.name] = ext.childTokens;
            }
          });
          opts.extensions = extensions;
        }
        if (pack.renderer) {
          const renderer = this.defaults.renderer || new _Renderer(this.defaults);
          for (const prop in pack.renderer) {
            if (!(prop in renderer)) {
              throw new Error(`renderer '${prop}' does not exist`);
            }
            if (["options", "parser"].includes(prop)) {
              continue;
            }
            const rendererProp = prop;
            const rendererFunc = pack.renderer[rendererProp];
            const prevRenderer = renderer[rendererProp];
            renderer[rendererProp] = (...args2) => {
              let ret = rendererFunc.apply(renderer, args2);
              if (ret === false) {
                ret = prevRenderer.apply(renderer, args2);
              }
              return ret || "";
            };
          }
          opts.renderer = renderer;
        }
        if (pack.tokenizer) {
          const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
          for (const prop in pack.tokenizer) {
            if (!(prop in tokenizer)) {
              throw new Error(`tokenizer '${prop}' does not exist`);
            }
            if (["options", "rules", "lexer"].includes(prop)) {
              continue;
            }
            const tokenizerProp = prop;
            const tokenizerFunc = pack.tokenizer[tokenizerProp];
            const prevTokenizer = tokenizer[tokenizerProp];
            tokenizer[tokenizerProp] = (...args2) => {
              let ret = tokenizerFunc.apply(tokenizer, args2);
              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args2);
              }
              return ret;
            };
          }
          opts.tokenizer = tokenizer;
        }
        if (pack.hooks) {
          const hooks = this.defaults.hooks || new _Hooks();
          for (const prop in pack.hooks) {
            if (!(prop in hooks)) {
              throw new Error(`hook '${prop}' does not exist`);
            }
            if (["options", "block"].includes(prop)) {
              continue;
            }
            const hooksProp = prop;
            const hooksFunc = pack.hooks[hooksProp];
            const prevHook = hooks[hooksProp];
            if (_Hooks.passThroughHooks.has(prop)) {
              hooks[hooksProp] = (arg) => {
                if (this.defaults.async) {
                  return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                    return prevHook.call(hooks, ret2);
                  });
                }
                const ret = hooksFunc.call(hooks, arg);
                return prevHook.call(hooks, ret);
              };
            } else {
              hooks[hooksProp] = (...args2) => {
                let ret = hooksFunc.apply(hooks, args2);
                if (ret === false) {
                  ret = prevHook.apply(hooks, args2);
                }
                return ret;
              };
            }
          }
          opts.hooks = hooks;
        }
        if (pack.walkTokens) {
          const walkTokens2 = this.defaults.walkTokens;
          const packWalktokens = pack.walkTokens;
          opts.walkTokens = function(token) {
            let values = [];
            values.push(packWalktokens.call(this, token));
            if (walkTokens2) {
              values = values.concat(walkTokens2.call(this, token));
            }
            return values;
          };
        }
        this.defaults = { ...this.defaults, ...opts };
      });
      return this;
    }
    setOptions(opt) {
      this.defaults = { ...this.defaults, ...opt };
      return this;
    }
    lexer(src, options2) {
      return _Lexer.lex(src, options2 ?? this.defaults);
    }
    parser(tokens, options2) {
      return _Parser.parse(tokens, options2 ?? this.defaults);
    }
    parseMarkdown(blockType) {
      const parse = (src, options2) => {
        const origOpt = { ...options2 };
        const opt = { ...this.defaults, ...origOpt };
        const throwError = this.onError(!!opt.silent, !!opt.async);
        if (this.defaults.async === true && origOpt.async === false) {
          return throwError(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
        }
        if (typeof src === "undefined" || src === null) {
          return throwError(new Error("marked(): input parameter is undefined or null"));
        }
        if (typeof src !== "string") {
          return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
        }
        if (opt.hooks) {
          opt.hooks.options = opt;
          opt.hooks.block = blockType;
        }
        const lexer2 = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline;
        const parser2 = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
        if (opt.async) {
          return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
        }
        try {
          if (opt.hooks) {
            src = opt.hooks.preprocess(src);
          }
          let tokens = lexer2(src, opt);
          if (opt.hooks) {
            tokens = opt.hooks.processAllTokens(tokens);
          }
          if (opt.walkTokens) {
            this.walkTokens(tokens, opt.walkTokens);
          }
          let html2 = parser2(tokens, opt);
          if (opt.hooks) {
            html2 = opt.hooks.postprocess(html2);
          }
          return html2;
        } catch (e) {
          return throwError(e);
        }
      };
      return parse;
    }
    onError(silent, async) {
      return (e) => {
        e.message += "\nPlease report this to https://github.com/markedjs/marked.";
        if (silent) {
          const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
          if (async) {
            return Promise.resolve(msg);
          }
          return msg;
        }
        if (async) {
          return Promise.reject(e);
        }
        throw e;
      };
    }
  };
  var markedInstance = new Marked();
  function marked(src, opt) {
    return markedInstance.parse(src, opt);
  }
  marked.options = marked.setOptions = function(options2) {
    markedInstance.setOptions(options2);
    marked.defaults = markedInstance.defaults;
    changeDefaults(marked.defaults);
    return marked;
  };
  marked.getDefaults = _getDefaults;
  marked.defaults = _defaults;
  marked.use = function(...args) {
    markedInstance.use(...args);
    marked.defaults = markedInstance.defaults;
    changeDefaults(marked.defaults);
    return marked;
  };
  marked.walkTokens = function(tokens, callback) {
    return markedInstance.walkTokens(tokens, callback);
  };
  marked.parseInline = markedInstance.parseInline;
  marked.Parser = _Parser;
  marked.parser = _Parser.parse;
  marked.Renderer = _Renderer;
  marked.TextRenderer = _TextRenderer;
  marked.Lexer = _Lexer;
  marked.lexer = _Lexer.lex;
  marked.Tokenizer = _Tokenizer;
  marked.Hooks = _Hooks;
  marked.parse = marked;
  var options = marked.options;
  var setOptions = marked.setOptions;
  var use = marked.use;
  var walkTokens = marked.walkTokens;
  var parseInline = marked.parseInline;
  var parser = _Parser.parse;
  var lexer = _Lexer.lex;

  // package.json
  var version = "2.7.0";

  // src/services/whats-new.tsx
  var import_react_dom = __toESM(require_react_dom());

  // src/constants/changelog.ts
  var changelog = `## General 
  - Add queue in sidebar, enable it from settings now!!
  - use esc key to exit the full screen experience
  - re-enable dynamic colors theme and backgrounds
  - compatibility with latest spotify and spicetify 
  ## New Keyboard Shortcuts
| Key            | Purpose                                   |
|----------------|-------------------------------------------|
| <kbd>Q</kbd>   | Toggle Sidebar Queue Panel (when enabled) |
| <kbd>C</kbd>   | Toggle Settings popup                     |
| <kbd>L</kbd>   | Toggle Lyrics (when enabled)              |
| <kbd>ESC</kbd> | Exit full screen app                      |
| <kbd>F</kbd>   | Toggle Default Mode (exit if active)      |
| <kbd>T</kbd>   | Toggle TV Mode (exit of active)           |
  `;
  var VersionedChangelog = {
    "2.7.0": changelog,
    "2.6.0": `## General 
  - **Info** -: dynamic color theme and backgrounds is not working anymore in new Spotify
  - fix classnames library error(use own version)
  - fix wrong artist order when showing multiple artists
  - add brazilian translations (thanks to [@vinizent](https://github.com/vinizent))
  - add chinese traditional translations (thanks to [@york9675](https://github.com/york9675))
### P.S - update your spicetify if you are facing issues with lyrics
  `,
    "2.5.0": `## General 
  - add new settings options for progress bar and controls to only show on mousemove
  - auto hide lyrics is more repsonsive now (should react faster)
  - add hyperlinks to title,artists and albums
  - misc bug fixes and quality of life improvements
  - add indonesian translations (thanks to [@ianz56](https://github.com/ianz56))
    `,
    "2.4.0": `## General 
  - add support for vertical monitor(with lyrics on bottom)
  - add compatibility with latest spotify and spicetify
  - add french translations (thanks to [@ShirowLeBG](https://github.com/ShirowLeBG))
    `,
    "2.3.1": `## General 
  - fix background tearing up sometimes on first launch
  - add spanish translations (thanks to [@DavKiller](https://github.com/DavKiller))
    `,
    "2.3.0": `## New Features
  - \u2B50Add ability to modify animation speed of the animated background
  - add keyboard shortcut for lyrics toggling (toggle by key <kbd>L</kbd>)
  - add auto hide lyrics functionality (experimental)
  
   ## General 
  - update adjust settings design and reorganize settings
  - update chinese translations
  - fix right click getting blocked on background for opening settings menu
    `,
    "2.2.0": `## Animated Background Mode
  **\u2B50NEW:** add a new background choice option  - "Animated Album Art" which contains a beautiful animation of color blobs.
  Inspired by [this repo for lyrics](https://github.com/surfbryce/beautiful-lyrics) and Apple music background animation. 
  <br>
  Try it out today by modifying the settings and let me know what you think on [GitHub](https://github.com/daksh2k/Spicetify-stuff)!
  Star this project and help it to reach more people! [![Github Stars badge](https://img.shields.io/github/stars/daksh2k/spicetify-stuff?style=social)](https://github.com/daksh2k/spicetify-stuff)
  
  *PS: It's still experimental, may be a little resource intensive.*

  <br>
  
  <img align="center" width="480" height="auto" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjFlOWI1MmEzMDdhNjI5YTY5OWY3YzhlMDJiNGE2OTA4MzMzMDkwZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/EIuHnuq1XIDg4Tt2hx/giphy.gif">
  
  <hr>
    
## General
  - add Vietnamese translations
  - update russian translations
  - update tv mode lyrics width
  - fix lyrics jumping around when choosing center or left alignment
    `,
    "2.1.0": `## General
- Support for changing activation methods.
- Support for customizing activation buttons and keys.
- Support for narrow screens(responsive styling).
- Context aware reset of settings.
  - Reset all settings when not active in any mode.
  - Reset only mode specific settings when active in that mode.
- Show full changelog for new users.`,
    "2.0.0": `## General
  - Rewritten the entire codebase in TypeScript. It is now modular and easier to maintain.
  - Added a changelog for new features.
  - \u2B50New Progress Bar and Volume Bar which are now seekable. Drag away!
  - Overhauled the background and animations to be more fluent in transitions.
  - Add a versioned changelog
  - Update Italian translations
  - Bug fixes
  - Choice of 4 backgrounds to choose from
     - Artist Image
     - Album Image
     - Dynamic Color(Extracted from album image)
     - Static Color
## Settings menu
  - Complete UI Overhaul for Settings Menu
  - Descriptions for some common settings 
  - Added new options to fine tune the UI`
  };
  var changelog_default = changelog;

  // src/services/whats-new.tsx
  var import_gt = __toESM(require_gt());
  function showWhatsNew(forcedShow = false) {
    const [title, content] = getChangelogContent(forcedShow);
    showWhatsNewModal(
      "full-screen",
      version,
      {
        title,
        content,
        isLarge: true
      },
      forcedShow
    );
  }
  function getChangelogContent(forcedShow = false) {
    let title, content;
    if (forcedShow || localStorage.getItem("whats-new_full-screen-version") === null) {
      title = "New in Full Screen";
      content = marked.parse(
        Object.entries(VersionedChangelog).map(([version2, changes]) => {
          return `# v${version2}
${changes}`;
        }).join("\n\n"),
        { gfm: true, breaks: true }
      );
    } else {
      title = `New in Full Screen v${version}`;
      content = marked.parse(changelog_default, { gfm: true, breaks: true });
    }
    return [title, content];
  }
  async function showWhatsNewModal(appName, currentVersion, content, forcedShow = false) {
    while (!Spicetify?.PopupModal || !Spicetify?.LocalStorage) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const LS_KEY = `whats-new_${appName}-version`;
    const versionFromLocalstorage = Spicetify.LocalStorage.get(LS_KEY) ?? "";
    try {
      if (versionFromLocalstorage === "" || (0, import_gt.default)(currentVersion, versionFromLocalstorage) || forcedShow) {
        Spicetify.LocalStorage.set(LS_KEY, currentVersion);
        showModal();
      }
    } catch (err) {
      Spicetify.LocalStorage.set(LS_KEY, currentVersion);
    }
    function showModal() {
      const modalContent = {
        ...content,
        content: typeof content.content == "string" ? wrapHTMLElement(content.content) : wrapReactElement(content.content)
      };
      Spicetify.PopupModal.display(modalContent);
    }
  }
  function wrapHTMLElement(htmlElement) {
    const [wrapper, style] = getWhatsNewElements();
    wrapper.innerHTML = htmlElement;
    wrapper.append(style);
    return wrapper;
  }
  function wrapReactElement(reactElement) {
    const [wrapper, style] = getWhatsNewElements();
    import_react_dom.default.render(reactElement, wrapper);
    wrapper.appendChild(style);
    return wrapper;
  }
  function getWhatsNewElements() {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "whats-new-content-wrapper");
    const style = document.createElement("style");
    style.textContent = `
      #whats-new-content-wrapper ul, #whats-new-content-wrapper ol {
         list-style: inherit;
         margin-left: 1.5em;
      }
      #whats-new-content-wrapper a{
            color: var(--spice-button);
            text-decoration: underline;
      }
      #whats-new-content-wrapper kbd {
        display: inline-block;
        padding: 3px 5px;
        margin: 0 4px;
        font: 15px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono,
            monospace;
        line-height: 10px;
        color: #c9d1d9;
        vertical-align: middle;
        background-color: #3b5746;
        border: solid 1px rgba(110, 118, 129, 0.4);
        border-radius: 6px;
        box-shadow: inset 0 -1px 0 rgba(110, 118, 129, 0.4);
    }
   `;
    return [wrapper, style];
  }

  // src/utils/setting.ts
  function headerText(text, subtext = "") {
    const container = document.createElement("div");
    container.classList.add("setting-subhead");
    const listHeader = document.createElement("h2");
    listHeader.innerText = text;
    container.append(listHeader);
    if (subtext) {
      const listSub = document.createElement("div");
      listSub.classList.add("setting-subhead-description");
      listSub.innerHTML = marked.parse(subtext, { breaks: true });
      container.append(listSub);
    }
    return container;
  }
  function getSettingCard(actionContent, title, key, description = "") {
    const settingCard = document.createElement("div");
    settingCard.classList.add("setting-card");
    settingCard.setAttribute("setting-key", key);
    if (key in DEFAULTS) {
      settingCard.setAttribute(
        "setting-default",
        String(config_default.getGlobal(key) === DEFAULTS[key])
      );
    } else {
      settingCard.setAttribute(
        "setting-default",
        String(
          config_default.get(key) === DEFAULTS[config_default.getMode()][key]
        )
      );
    }
    settingCard.innerHTML = `
        <div class="setting-container">
            <div class="setting-item">
                <label class="setting-title">${title}</label>
                <div class="setting-action">${actionContent}</div>
            </div>
            <div class="setting-description">${marked.parse(description, { breaks: true })}</div>
        </div>
    `;
    return settingCard;
  }
  function createAdjust(title, key, unit = "", configValue, step, min, max, onChange, extraDescription = "") {
    let value = configValue;
    function adjustValue(dir) {
      let temp = Number(value) + dir * step;
      if (temp < min) {
        temp = min;
      } else if (temp > max) {
        temp = max;
      }
      value = Number(Number(temp).toFixed(step >= 1 ? 0 : 2));
      settingCard.querySelector(".adjust-value").innerText = `${value}${unit}`;
      plus && plus.classList.toggle("disabled", value === max);
      minus && minus.classList.toggle("disabled", value === min);
      onChange(value);
    }
    const settingCard = getSettingCard(
      `<button class="switch small minus">${constants_default.MINUS}</button>
            <p class="adjust-value">${value}${unit}</p>
        <button class="switch small plus"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons.plus2px}</button>`,
      title,
      key,
      extraDescription
    );
    const minus = settingCard.querySelector(".minus");
    const plus = settingCard.querySelector(".plus");
    if (minus && plus) {
      minus.classList.toggle("disabled", value === min);
      plus.classList.toggle("disabled", value === max);
      minus.onclick = () => adjustValue(-1);
      plus.onclick = () => adjustValue(1);
    }
    return settingCard;
  }
  function getAboutSection() {
    const settingCard = document.createElement("div");
    settingCard.classList.add("setting-card");
    settingCard.innerHTML = `
        <div class="setting-container about-section">
            <div class="setting-about">Version: ${"  " + version}</div>
            <div class="setting-about">Made with \u{1F496} by <a class="about" href="https://github.com/daksh2k">@daksh2k</a></div>
            <div class="setting-about">Source code: <a class="about" href="https://github.com/daksh2k/Spicetify-stuff/tree/master/Extensions/full-screen">GitHub</a></div>
            <div class="setting-about">Report issues: <a class="about" href="https://github.com/daksh2k/Spicetify-stuff/issues/new/choose">GitHub</a></div>
            <div class="setting-about"><button class="main-buttons-button main-button-primary" id="changelog">Show Changelog</button></div>
        </div>
    `;
    settingCard.querySelector("#changelog").onclick = () => {
      const popup = document.querySelector("body > generic-modal");
      if (popup)
        popup.remove();
      setTimeout(() => showWhatsNew(true), 100);
    };
    return settingCard;
  }

  // src/services/web-api.ts
  var colorsCache = [];
  var WebAPI = class {
    static getToken() {
      return Spicetify.Platform.AuthorizationAPI._state.token.accessToken;
    }
    static async getTrackInfo(id) {
      return fetch(`https://api.spotify.com/v1/tracks/${id}`, {
        headers: {
          Authorization: `Bearer ${await WebAPI.getToken()}`
        }
      }).then((res) => res.json());
    }
    static async getAlbumInfo(id) {
      return fetch(`https://api.spotify.com/v1/albums/${id}`, {
        headers: {
          Authorization: `Bearer ${await WebAPI.getToken()}`
        }
      }).then((res) => res.json());
    }
    static async getPlaylistInfo(uri) {
      return Spicetify.CosmosAsync.get(`sp://core-playlist/v1/playlist/${uri}`);
    }
    static async getArtistInfo(id) {
      return fetch(
        `https://api-partner.spotify.com/pathfinder/v1/query?operationName=queryArtistOverview&variables=%7B%22uri%22%3A%22spotify%3Aartist%3A${id}%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22d66221ea13998b2f81883c5187d174c8646e4041d67f5b1e103bc262d447e3a0%22%7D%7D`,
        {
          headers: {
            Authorization: `Bearer ${await WebAPI.getToken()}`
          }
        }
      ).then((res) => res.json()).then((res) => res.data.artist);
    }
    static async searchArt(name) {
      return fetch(`https://api.spotify.com/v1/search?q="${name}"&type=artist&limit=2`, {
        headers: {
          Authorization: `Bearer ${await WebAPI.getToken()}`
        }
      }).then((res) => res.json());
    }
    static async colorExtractor(uri) {
      const presentInCache = colorsCache.filter((obj) => obj.uri === uri);
      if (presentInCache.length > 0)
        return presentInCache[0].colors;
      const body = await Spicetify.CosmosAsync.get(
        `https://spclient.wg.spotify.com/colorextractor/v1/extract-presets?uri=${uri}&format=json`
      );
      if (body.entries && body.entries.length) {
        const list2 = {};
        for (const color of body.entries[0].color_swatches) {
          list2[color.preset] = `#${color.color.toString(16).padStart(6, "0")}`;
        }
        if (colorsCache.length > 20)
          colorsCache.shift();
        colorsCache.push({ uri, colors: list2 });
        return list2;
      }
      throw "No colors returned.";
    }
  };
  var web_api_default = WebAPI;

  // src/utils/utils.ts
  var prevUriObj;
  var wasQueuePanelEnabled = null;
  var Utils = class {
    static allNotExist() {
      const extraBar = document.querySelector(EXTRA_BAR_SELECTOR)?.childNodes[0];
      const topBar = document.querySelector(TOP_BAR_SELECTOR) || document.querySelector(TOP_BAR_SELECTOR_GLOBAL_NAVBAR);
      const entriesToVerify = {
        "Top Bar Component": topBar,
        "Extra Bar Component": extraBar,
        "Spicetify CosmosAsync": Spicetify.CosmosAsync,
        "Spicetify Mousetrap": Spicetify.Mousetrap,
        "Spicetify Player": Spicetify.Player,
        "Spicetify Platform": Spicetify.Platform
      };
      return Object.entries(entriesToVerify).filter(([, val]) => !val);
    }
    static printNotExistings(entriesNotPresent) {
      entriesNotPresent.forEach((entry) => {
        console.error(
          `${entry[0]} not available. Report issue on GitHub or run Spicetify.test() to test.`
        );
        Spicetify.showNotification(
          `Error initializing "fullscreen.js" extension. ${entry[0]} not available. Report issue on GitHub.`,
          true
        );
      });
      console.log("Retries exceeded. Aborting.");
    }
    static fullScreenOn() {
      if (!document.fullscreenElement)
        return document.documentElement.requestFullscreen();
    }
    static fullScreenOff() {
      if (document.fullscreenElement)
        return document.exitFullscreen();
    }
    static fadeAnimation(element, animClass = "fade-do") {
      element.classList.remove(animClass);
      element.classList.add(animClass);
      setTimeout(() => {
        element.classList.remove(animClass);
      }, 800);
    }
    static addObserver(observer, selector, options2) {
      const ele = document.querySelector(selector);
      if (!ele) {
        setTimeout(() => {
          Utils.addObserver(observer, selector, options2);
        }, 2e3);
        return;
      }
      observer.observe(ele, options2);
    }
    static hexToRgb(hex) {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : null;
    }
    static trimTitle(title) {
      const trimmedTitle = title.replace(/\(.+?\)/g, "").replace(/\[.+?\]/g, "").replace(/\s-\s.+?$/, "").trim();
      if (!trimmedTitle)
        return title;
      return trimmedTitle;
    }
    static async getAlbumReleaseDate(albumURI, locale) {
      const albumInfo = await web_api_default.getAlbumInfo(albumURI.replace("spotify:album:", "")).catch(
        (err) => console.error(err)
      );
      if (!albumInfo?.release_date)
        return "";
      const albumDate = new Date(albumInfo.release_date);
      const recentDate = new Date();
      recentDate.setMonth(recentDate.getMonth() - 18);
      const dateStr = albumDate.toLocaleString(
        locale,
        albumDate > recentDate ? { year: "numeric", month: "short" } : { year: "numeric" }
      );
      return " \u2022 " + dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    }
    static async getImageAndLoad(meta) {
      if (meta.artist_uri == null)
        return meta.image_xlarge_url;
      let arUri = meta.artist_uri.split(":")[2];
      if (meta.artist_uri.split(":")[1] === "local") {
        const res = await web_api_default.searchArt(meta.artist_name ?? "").catch(
          (err) => console.error(err)
        );
        arUri = res ? res.artists.items[0].id : "";
      }
      const artistInfo = await web_api_default.getArtistInfo(arUri).catch((err) => console.error(err));
      return artistInfo?.visuals?.headerImage?.sources[0].url ?? meta.image_xlarge_url;
    }
    static async getNextColor(colorChoice) {
      let nextColor = "#444444";
      const imageColors = await web_api_default.colorExtractor(
        Spicetify.Player.data.item?.uri ?? ""
      ).catch((err) => console.warn(err));
      if (imageColors && imageColors[colorChoice])
        nextColor = imageColors[colorChoice];
      return nextColor;
    }
    static revertPathHistory(originalLocation) {
      Spicetify.Platform.History.push(originalLocation);
      Spicetify.Platform.History.entries.splice(Spicetify.Platform.History.entries.length - 3, 2);
      Spicetify.Platform.History.index = Spicetify.Platform.History.index > 0 ? Spicetify.Platform.History.index - 2 : -1;
      Spicetify.Platform.History.length = Spicetify.Platform.History.length > 1 ? Spicetify.Platform.History.length - 2 : 0;
    }
    static getShowTime(upnextTime) {
      const showBefore = upnextTime * 1e3;
      const dur = Spicetify.Player.data.duration;
      const curProg = Spicetify.Player.getProgress();
      if (dur - curProg <= showBefore)
        return -1;
      else
        return dur - showBefore - curProg;
    }
    static isModeActivated() {
      return document.body.classList.contains("fsd-activated");
    }
    static overlayBack(hideBackground = true) {
      const overlay = document.querySelector("body > generic-modal > div");
      if (overlay) {
        hideBackground ? overlay.classList.add("transparent-bg") : overlay.classList.remove("transparent-bg");
      }
    }
    static getAvailableLanguages(translations2) {
      const languages = {};
      for (const lang in translations2) {
        languages[lang] = translations2[lang].langName;
      }
      return languages;
    }
    static async getMainColor(imageURL) {
      let imageProminentColor, thresholdValue = 160;
      const imageColors = await web_api_default.colorExtractor(imageURL).catch((err) => console.warn(err));
      if (config_default.get("backgroundChoice") === "album_art" || config_default.get("backgroundChoice") === "artist_art") {
        if (!imageColors?.PROMINENT)
          imageProminentColor = "0,0,0";
        else
          imageProminentColor = Utils.hexToRgb(imageColors.PROMINENT);
        thresholdValue = 260 - config_default.get("backgroundBrightness") * 100;
      } else if (config_default.get("backgroundChoice") === "dynamic_color") {
        if (!imageColors || !imageColors[config_default.get("coloredBackChoice")])
          imageProminentColor = Utils.hexToRgb("#444444");
        else
          imageProminentColor = Utils.hexToRgb(
            imageColors[config_default.get("coloredBackChoice")]
          );
      } else if (config_default.get("backgroundChoice") === "static_color") {
        imageProminentColor = Utils.hexToRgb(
          config_default.get("staticBackChoice")
        );
      }
      const isLightBG = Number(imageProminentColor?.split(",")[0]) * 0.299 + Number(imageProminentColor?.split(",")[1]) * 0.587 + Number(imageProminentColor?.split(",")[2]) * 0.114 > thresholdValue;
      const mainColor = isLightBG && Number(config_default.get("backgroundBrightness")) > 0.3 ? "0,0,0" : "255,255,255";
      const contrastColor = isLightBG && Number(config_default.get("backgroundBrightness")) > 0.3 ? "255,255,255" : "0,0,0";
      return [mainColor, contrastColor];
    }
    static async getContext(STRINGS) {
      let ctxIcon = "", ctxSource, ctxName;
      if (Spicetify.Player.data.item?.provider === "queue") {
        ctxIcon = constants_default.CTX_QUEUE;
        ctxSource = STRINGS.context.queue;
        ctxName = "";
      } else {
        const uriObj = Spicetify.URI.fromString(Spicetify.Player.data.context.uri);
        if (JSON.stringify(uriObj) === JSON.stringify(prevUriObj) && ctxSource != void 0 && ctxName != void 0)
          return { ctxIcon, ctxSource, ctxName };
        prevUriObj = uriObj;
        switch (uriObj.type) {
          case Spicetify.URI.Type.TRACK:
            ctxIcon = constants_default.CTX_TRACK;
            ctxSource = STRINGS.context.track;
            await web_api_default.getTrackInfo(uriObj?.id ?? "").then(
              (meta) => ctxName = `${meta.name}  \u2022  ${meta.artists[0].name}`
            );
            break;
          case Spicetify.URI.Type.SEARCH:
            ctxIcon = Spicetify.SVGIcons["search-active"];
            ctxSource = STRINGS.context.search;
            ctxName = `"${uriObj.query}" in ${STRINGS.context.searchDest}`;
            break;
          case Spicetify.URI.Type.COLLECTION:
            ctxIcon = Spicetify.SVGIcons["heart-active"];
            ctxSource = STRINGS.context.collection;
            ctxName = STRINGS.context.likedSongs;
            break;
          case Spicetify.URI.Type.PLAYLIST_V2:
            ctxIcon = Spicetify.SVGIcons["playlist"];
            ctxSource = STRINGS.context.playlist;
            ctxName = Spicetify.Player.data.context?.metadata?.context_description || "";
            break;
          case Spicetify.URI.Type.STATION:
          case Spicetify.URI.Type.RADIO:
            ctxIcon = constants_default.CTX_RADIO;
            switch (uriObj.args[0]) {
              case "album":
                ctxSource = STRINGS.context.albumRadio;
                await web_api_default.getAlbumInfo(uriObj.args[1]).then(
                  (meta) => ctxName = meta.name
                );
                break;
              case "track":
                ctxSource = STRINGS.context.trackRadio;
                await web_api_default.getTrackInfo(uriObj.args[1]).then(
                  (meta) => ctxName = `${meta.name}  \u2022  ${meta.artists[0].name}`
                );
                break;
              case "artist":
                ctxSource = STRINGS.context.artistRadio;
                await web_api_default.getArtistInfo(uriObj.args[1]).then(
                  (meta) => ctxName = meta?.profile?.name
                );
                break;
              case "playlist":
              case "playlist-v2":
                ctxSource = STRINGS.context.playlistRadio;
                ctxIcon = `<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M16.94 6.9l-1.4 1.46C16.44 9.3 17 10.58 17 12s-.58 2.7-1.48 3.64l1.4 1.45C18.22 15.74 19 13.94 19 12s-.8-3.8-2.06-5.1zM23 12c0-3.12-1.23-5.95-3.23-8l-1.4 1.45C19.97 7.13 21 9.45 21 12s-1 4.9-2.64 6.55l1.4 1.45c2-2.04 3.24-4.87 3.24-8zM7.06 17.1l1.4-1.46C7.56 14.7 7 13.42 7 12s.6-2.7 1.5-3.64L7.08 6.9C5.78 8.2 5 10 5 12s.8 3.8 2.06 5.1zM1 12c0 3.12 1.23 5.95 3.23 8l1.4-1.45C4.03 16.87 3 14.55 3 12s1-4.9 2.64-6.55L4.24 4C2.24 6.04 1 8.87 1 12zm9-3.32v6.63l5-3.3-5-3.3z"></path></svg>`;
                await web_api_default.getPlaylistInfo("spotify:playlist:" + uriObj.args[1]).then(
                  (meta) => ctxName = meta.playlist.name
                );
                break;
              default:
                ctxName = "";
            }
            break;
          case Spicetify.URI.Type.PLAYLIST:
            ctxIcon = Spicetify.SVGIcons[uriObj.type];
            ctxSource = STRINGS.context.playlist;
            ctxName = Spicetify.Player.data.context?.metadata.context_description || "";
            break;
          case Spicetify.URI.Type.ALBUM:
            ctxIcon = Spicetify.SVGIcons[uriObj.type];
            ctxSource = STRINGS.context.album;
            ctxName = Spicetify.Player.data.context?.metadata.context_description || "";
            break;
          case Spicetify.URI.Type.ARTIST:
            ctxIcon = Spicetify.SVGIcons[uriObj.type];
            ctxSource = STRINGS.context.artist;
            ctxName = Spicetify.Player.data.context?.metadata.context_description || "";
            break;
          case Spicetify.URI.Type.FOLDER: {
            ctxIcon = Spicetify.SVGIcons["playlist-folder"];
            ctxSource = STRINGS.context.playlistFolder;
            const res = await Spicetify.CosmosAsync.get(`sp://core-playlist/v1/rootlist`, {
              policy: { folder: { rows: true, link: true, name: true } }
            });
            for (const item of res.rows) {
              if (item.type === "folder" && item.link === Spicetify.Player.data.context.uri) {
                ctxName = item.name;
                break;
              }
            }
            break;
          }
          default:
            ctxSource = uriObj.type;
            ctxName = Spicetify.Player.data?.context?.metadata?.context_description || "";
        }
      }
      return { ctxIcon, ctxSource, ctxName };
    }
    static toggleQueuePanel(myQueueButton, enabled) {
      const originalQueueButton = document.querySelector(
        ORIGINAL_QUEUE_BUTTON
      );
      const rightPanel = document.querySelector(RIGH_PANEL);
      if (enabled) {
        setTimeout(() => {
          if (!originalQueueButton?.classList.contains("main-genericButton-buttonActive")) {
            originalQueueButton?.click();
            wasQueuePanelEnabled = false;
          } else {
            wasQueuePanelEnabled = true;
          }
          setTimeout(() => {
            rightPanel?.classList.add("fsd-queue-panel");
            setTimeout(() => {
              rightPanel?.classList.add("fsd-transform-animation");
            }, 100);
          }, 300);
        }, 600);
      } else {
        if (wasQueuePanelEnabled != null && !wasQueuePanelEnabled) {
          originalQueueButton?.click();
        }
        rightPanel?.style.setProperty("--queue-panel-x", "1000px");
        wasQueuePanelEnabled = null;
        myQueueButton?.classList.remove("button-active", "dot-after");
        rightPanel?.classList.remove("fsd-queue-panel", "fsd-transform-animation");
        document.body.classList.remove("fsd-queue-panel-active");
      }
    }
    static toggleQueue(queueButton) {
      const rightPanel = document.querySelector(RIGH_PANEL);
      if (document.body.classList.contains("fsd-queue-panel-active")) {
        rightPanel?.style.setProperty("--queue-panel-x", "1000px");
        queueButton?.classList.remove("button-active", "dot-after");
        document.body.classList.remove("fsd-queue-panel-active");
      } else {
        rightPanel?.style.setProperty("--queue-panel-x", "0px");
        queueButton?.classList.add("button-active", "dot-after");
        document.body.classList.add("fsd-queue-panel-active");
      }
    }
  };
  var utils_default = Utils;

  // src/resources/locales/en-US.json
  var en_US_default = {
    langName: "English",
    context: {
      queue: "Playing from queue",
      track: "Playing track",
      album: "Playing from album",
      artist: "Playing from artist",
      playlist: "Playing from playlist",
      playlistFolder: "Playing from playlist folder",
      search: "Playing from search",
      searchDest: "Songs",
      collection: "Playing from collection",
      likedSongs: "Liked Songs",
      trackRadio: "Playing from track radio",
      artistRadio: "Playing from artist radio",
      albumRadio: "Playing from album radio",
      playlistRadio: "Playing from playlist radio"
    },
    upnext: "UP NEXT",
    unknownArtist: "Artist (Unavailable)",
    settings: {
      switchToTV: "Switch to TV Mode",
      switchToFullscreen: "Switch to Default Mode",
      tvModeConfig: "TV Mode Configuration",
      fullscreenConfig: "Full Screen Configuration",
      exit: "Exit",
      pluginSettings: "Plugin Settings",
      fsHideOriginal: "Hide Stock Button",
      fsHideOriginalDescription: "Hide the spotify's stock fullscreen button(available to **Premium** users)",
      language: "Language",
      autoLaunch: {
        setting: "Auto launch(on spotify startup)",
        description: "**Limitation:** The spotify window cannot go into fullscreen while automatically launching on startup.",
        never: "Never(Default)",
        default: "Open Default Mode",
        tvmode: "Open TV Mode",
        lastused: "Last Used Mode"
      },
      activationTypes: {
        setting: "Activation Methods",
        description: "Choose the methods you want to use to activate the plugin. <kbd>F</kbd> and <kbd>T</kbd> keys, or buttons on topbar and bottom bar.",
        both: "Buttons and Keyboard Shortcuts",
        btns: "Buttons Only",
        keys: "Keyboard Shortcuts Only"
      },
      buttonActivation: {
        setting: "Customize Activation Buttons",
        description: "Choose the buttons you want for activation, on topbar(*TV Mode*) and bottom bar(*Default Mode*).",
        both: "Buttons for both modes",
        tv: "Button only for TV Mode",
        def: "Button only for Default Mode"
      },
      keyActivation: {
        setting: "Customize Activation Keys",
        description: "Choose the keys you want for activation. <kbd>F</kbd> for *Default Mode* and <kbd>T</kbd> for *TV Mode*",
        both: "Keys for both modes",
        tv: "Key only for TV Mode",
        def: "Key only for Default Mode"
      },
      lyricsHeader: "Lyrics Settings",
      lyrics: "Lyrics",
      lyricsDescription: [
        "**Note:** You need the [lyrics-plus](https://spicetify.app/docs/advanced-usage/custom-apps#lyrics-plus) custom app to use this feature.",
        "Follow the instructions in the link to install the custom app."
      ],
      lyricsAlignment: {
        setting: "Lyrics Alignment",
        left: "Left",
        center: "Center",
        right: "Right"
      },
      autoHideLyrics: "Auto Hide Lyrics (when unavailable)",
      lyricsAnimationTempo: "Lyrics Animation Tempo",
      generalHeader: "General Settings",
      progressBar: "Progress Bar",
      playerControls: "Player Controls",
      trimTitle: "Trim Title",
      trimTitleUpNext: "Trim Title(Up Next)",
      showAlbum: {
        setting: "Show Album",
        never: "Never",
        always: "Always",
        date: "Show with Release Date"
      },
      showAllArtists: "Show All Artists",
      icons: "Icons",
      songChangeAnimation: "Song Change Animation",
      fullscreen: "Fullscreen",
      extraHeader: "Extra Functionality",
      backgroundChoice: {
        setting: "\u2B50 Background Choice",
        description: [
          "**New:** Try out the **animated album art** option!",
          "**Warning:** Looks beautiful but may be resource intensive, and is experimental."
        ],
        dynamicColor: "Dynamic solid color",
        staticColor: "Static solid color",
        artwork: "Album art",
        animatedArt: "Animated Album Art (Experimental)",
        artist: "Artist artwork"
      },
      sidebarQueue: "Enable Queue in Sidebar (replaces the lyrics button)",
      sidebarQueueDescription: [
        "Toggle the queue in the sidebar with <kbd>Q</kbd> or the button in the extra bar.",
        "Make sure to enable the setting in Experimental features. Check [this.](https://github.com/daksh2k/Spicetify-stuff/issues/167#issuecomment-2199480598) "
      ],
      extraControls: "Extra Controls",
      upnextDisplay: "Upnext Display",
      contextDisplay: {
        setting: "Context Display",
        always: "Always",
        never: "Never",
        mouse: "On mouse movement"
      },
      volumeDisplay: {
        setting: "Volume Bar Display",
        description: [
          "In `smart` mode the volume bar will be displayed when:",
          "  - you move your mouse to the left side of the screen.",
          " - when the volume is changed."
        ],
        always: "Always",
        never: "Never",
        smart: "Smart"
      },
      appearanceHeader: "Advanced/Appearance",
      appearanceSubHeader: "*(Only change if you know what you are doing!)*",
      backgroundHeader: "Background Modifications",
      backgroundSubHeader: "Comes with reasonable defaults, *(Only change if you know what you are doing!)*",
      backgroundColor: {
        setting: "Color Choice (for dynamic colored background)",
        vibrant: "Vibrant",
        prominent: "Prominent",
        desaturated: "Desaturated (recommended)",
        lightVibrant: "Light Vibrant",
        darkVibrant: "Dark Vibrant",
        vibrantNonAlarming: "Vibrant Non Alarming"
      },
      staticColor: "Color Choice (for static colored background)",
      themedButtons: "Themed Buttons",
      themedIcons: "Themed Icons",
      invertColors: {
        setting: "Invert Colors",
        never: "Never",
        always: "Always",
        auto: "Automatic (Based on BG)"
      },
      verticalMonitorSupport: "Vertical Monitor Support",
      verticalMonitorSupportDescription: "Enable this if you have a vertical monitor setup. Lyrics will be shown in the bottom, when the window height is greater than the width.",
      backAnimationTime: "Background Animation Time (for image background)",
      animationSpeed: "\u2B50 Animation Speed (for animated background)",
      upnextScroll: {
        setting: "Upnext Scroll Animation",
        mq: "Marquee/Scrolling",
        sp: "Spotify/Translating"
      },
      upnextTime: "Upnext Time to Show",
      backgroundBlur: "Background Blur",
      backgroundBrightness: "Background Brightness",
      aboutHeader: "About",
      configReset: "Reset Config",
      reload: "Reload Client"
    },
    tvBtnDesc: "TV Mode Display",
    fullscreenBtnDesc: "Full Screen"
  };

  // src/resources/locales/it-IT.json
  var it_IT_default = {
    langName: "Italiano",
    context: {
      queue: "Riproduzione coda",
      track: "Riproduzione brano",
      album: "Riproduzione album",
      artist: "Riproduzione artista",
      playlist: "Riproduzione playlist",
      playlistFolder: "Riproduzione da cartella di playlist",
      search: "Riproduzione da ricerca",
      searchDest: "Brani",
      collection: "Riproduzione dalla libreria",
      likedSongs: "Brani che ti piacciono",
      trackRadio: "Radio dal brano",
      artistRadio: "Radio da artista",
      albumRadio: "Radio da album",
      playlistRadio: "Radio da playlist"
    },
    upnext: "In coda",
    unknownArtist: "Artista sconosciuto",
    settings: {
      switchToTV: "Passa alla modalit\xE0 TV",
      switchToFullscreen: "Passa alla modalit\xE0 schermo intero",
      tvModeConfig: "Modalit\xE0 TV",
      fullscreenConfig: "Modalit\xE0 schermo intero",
      exit: "Esci",
      pluginSettings: "Impostazioni plugin",
      fsHideOriginal: "Nascondi pulsante Schermo Intero di Premium",
      fsHideOriginalDescription: "Nascondi il pulsante Schermo Intero degli utenti **Spotify Premium**. Richiede un riavvio.",
      language: "Lingua",
      autoLaunch: {
        setting: "Apri automaticamente (all'apertura di Spotify)",
        description: "**Limitazione:** La finestra di Spotify non pu\xF2 entrare in modalit\xE0 schermo intero durante l'avvio all'accensione.",
        never: "Mai (Predefinito)",
        default: "Apri in modalit\xE0 default",
        tvmode: "Apri in modalit\xE0 TV",
        lastused: "Apri con l'ultima modalit\xE0 usata"
      },
      lyricsHeader: "Impostazioni testo",
      lyrics: "Mostra testo",
      lyricsDescription: ["**Nota:** Serve [lyrics-plus](https://spicetify.app/docs/advanced-usage/custom-apps#lyrics-plus) per usare questa funzione.", "Segui le instruzioni nel link per installare l'app."],
      lyricsAlignment: {
        setting: "Allineamento testo",
        left: "Sinistra",
        center: "Centro",
        right: "Destra"
      },
      lyricsAnimationTempo: "Durata animazione testo",
      generalHeader: "Impostazioni generali",
      progressBar: "Barra di avanzamento",
      playerControls: "Controlli player",
      trimTitle: "Accorcia titolo",
      trimTitleUpNext: "Accorcia titolo nel visualizzatore coda",
      showAlbum: {
        setting: "Mostra album",
        never: "Mai",
        always: "Sempre",
        date: "Con data di uscita"
      },
      showAllArtists: "Mostra tutti gli artisti",
      icons: "Icone",
      songChangeAnimation: "Animazione cambio brano",
      fullscreen: "Schermo intero",
      extraHeader: "Funzionalit\xE0 aggiuntive",
      backgroundChoice: {
        setting: "Scelta sfondo",
        dynamicColor: "Tinta unita dinamica",
        staticColor: "Tinta unita fissa (scegli sotto)",
        artwork: "Immagine dell'album",
        artist: "Immagine dell'artista"
      },
      extraControls: "Controlli aggiuntivi",
      upnextDisplay: "Mostra il brano in coda",
      contextDisplay: {
        setting: "Mostra contesto",
        always: "Sempre",
        never: "Mai",
        mouse: "Al movimento del mouse"
      },
      volumeDisplay: {
        setting: "Mostra barra volume",
        description: ["In modalit\xE0 `smart` la barra del volume sar\xE0 mostrata quando:", "  - muovi il mouse nella parte sinistra dello schermo.", " - il volume viene cambiato."],
        always: "Sempre",
        never: "Mai",
        smart: "Smart"
      },
      appearanceHeader: "Avanzato/Aspetto",
      appearanceSubHeader: "Cambia solo se sai cosa stai facendo!",
      backgroundColor: {
        setting: "Colore su sfondo tinta unita",
        vibrant: "Vivace",
        prominent: "Evidente",
        desaturated: "Desaturato (raccomandato)",
        lightVibrant: "Vivace chiaro",
        darkVibrant: "Vivace scuro",
        vibrantNonAlarming: "Vivace delicato"
      },
      staticColor: "Scelta del colore per lo sfondo statico a tinta unita",
      themedButtons: "Pulsanti a tema",
      themedIcons: "Icone a tema",
      invertColors: {
        setting: "Inverti colori",
        never: "Mai",
        always: "Sempre",
        auto: "Automatico (basato su sfondo)"
      },
      backAnimationTime: "Durata animazione sfondo",
      upnextScroll: {
        setting: "Scorrimento Up next",
        mq: "Scorrimento",
        sp: "Traslazione"
      },
      upnextTime: "Tempo per mostrare Up next",
      backgroundBlur: "Sfocamento sfondo",
      backgroundBrightness: "Luminosit\xE0 sfondo",
      aboutHeader: "A proposito",
      configReset: "Resetta configurazione",
      reload: "Ricarica client"
    },
    tvBtnDesc: "Modalit\xE0 TV",
    fullscreenBtnDesc: "Schermo intero"
  };

  // src/resources/locales/zh-CN.json
  var zh_CN_default = {
    langName: "\u7B80\u4F53\u4E2D\u6587",
    context: {
      queue: "\u6B63\u5728\u4ECE\u961F\u5217\u64AD\u653E",
      track: "\u6B63\u5728\u64AD\u653E",
      album: "\u6B63\u5728\u4ECE\u4E13\u8F91\u64AD\u653E",
      artist: "\u6B63\u5728\u4ECE\u827A\u4EBA\u64AD\u653E",
      playlist: "\u6B63\u5728\u4ECE\u6B4C\u5355\u64AD\u653E",
      playlistFolder: "\u6B63\u5728\u4ECE\u6B4C\u5355\u6587\u4EF6\u5939\u64AD\u653E",
      search: "\u6B63\u5728\u4ECE\u641C\u7D22\u7ED3\u679C\u64AD\u653E",
      searchDest: "\u6B4C\u66F2",
      collection: "\u6B63\u5728\u4ECE\u5408\u8F91\u64AD\u653E",
      likedSongs: "\u5DF2\u70B9\u8D5E\u7684\u6B4C\u66F2",
      trackRadio: "\u6B63\u5728\u4ECE\u6B4C\u66F2\u7535\u53F0\u64AD\u653E",
      artistRadio: "\u6B63\u5728\u4ECE\u827A\u4EBA\u7535\u53F0\u64AD\u653E",
      albumRadio: "\u6B63\u5728\u4ECE\u4E13\u8F91\u7535\u53F0\u64AD\u653E",
      playlistRadio: "\u6B63\u5728\u4ECE\u6B4C\u5355\u7535\u53F0\u64AD\u653E"
    },
    upnext: "\u4E0B\u4E00\u9996",
    unknownArtist: "\u672A\u77E5\u6B4C\u624B",
    settings: {
      switchToTV: "\u5207\u6362\u81F3\u7535\u89C6\u6A21\u5F0F",
      switchToFullscreen: "\u5207\u6362\u81F3\u9ED8\u8BA4\u6A21\u5F0F",
      tvModeConfig: "\u7535\u89C6\u6A21\u5F0F\u914D\u7F6E",
      fullscreenConfig: "\u5168\u5C4F\u6A21\u5F0F\u914D\u7F6E",
      exit: "\u9000\u51FA",
      pluginSettings: "\u63D2\u4EF6\u8BBE\u7F6E",
      fsHideOriginal: "\u9690\u85CF\u5207\u6362\u81F3\u539F\u7248\u6309\u94AE (Spotify Premium)",
      fsHideOriginalDescription: "\u9690\u85CF\u539F\u7248\u7684\u5168\u5C4F\u6309\u94AE(\u4EC5\u5BF9**Premium**\u7528\u6237\u6709\u6548). \u9700\u8981\u91CD\u542F",
      language: "\u8BED\u8A00",
      autoLaunch: {
        setting: "\u81EA\u52A8\u542F\u52A8(\u5F53Spotify\u542F\u52A8\u65F6)",
        description: "**\u9650\u5236:** \u81EA\u52A8\u542F\u52A8\u65F6Spotify\u7A97\u53E3\u4E0D\u80FD\u81EA\u52A8\u5168\u5C4F",
        never: "\u4ECE\u4E0D(\u9ED8\u8BA4)",
        default: "\u8FDB\u5165\u9ED8\u8BA4\u6A21\u5F0F",
        tvmode: "\u7535\u89C6\u6A21\u5F0F",
        lastused: "\u8BB0\u5FC6\u4E0A\u6B21\u4F7F\u7528\u72B6\u6001"
      },
      activationTypes: {
        setting: "\u6FC0\u6D3B\u65B9\u5F0F",
        description: "\u9009\u62E9\u4F60\u8981\u6FC0\u6D3B\u5168\u5C4F\u7684\u65B9\u5F0F <kbd>F</kbd> \u548C <kbd>T</kbd> \u952E, \u6216\u8005\u9876\u680F\u548C\u5E95\u680F\u7684\u6309\u94AE. **\u9700\u8981\u91CD\u542F**",
        both: "\u6309\u94AE\u548C\u952E\u76D8\u5FEB\u6377\u65B9\u5F0F",
        btns: "\u4EC5\u6309\u94AE",
        keys: "\u4EC5\u952E\u76D8\u5FEB\u6377\u65B9\u5F0F"
      },
      buttonActivation: {
        setting: "\u81EA\u5B9A\u4E49\u6FC0\u6D3B\u6309\u94AE",
        description: "\u9009\u62E9\u4F60\u8981\u6FC0\u6D3B\u5168\u5C4F\u7684\u6309\u94AE\u6A21\u5F0F\uFF0C\u9876\u680F(*\u7535\u89C6\u6A21\u5F0F*)\u548C\u5E95\u680F(*\u9ED8\u8BA4\u6A21\u5F0F) **\u9700\u8981\u91CD\u542F**",
        both: "\u4E24\u8005\u90FD\u8981",
        tv: "\u4EC5\u7535\u89C6\u6A21\u5F0F",
        def: "\u4EC5\u666E\u901A\u6A21\u5F0F"
      },
      keyActivation: {
        setting: "\u81EA\u5B9A\u4E49\u6FC0\u6D3B\u5FEB\u6377\u952E",
        description: "\u9009\u62E9\u6FC0\u6D3B\u5168\u5C4F\u7684\u5FEB\u6377\u952E\u6A21\u5F0F <kbd>F</kbd>  \u5207\u6362\u5230*\u9ED8\u8BA4\u6A21\u5F0F*\uFF0C <kbd>T</kbd> \u5207\u6362\u5230*\u7535\u89C6\u6A21\u5F0F*  **\u9700\u8981\u91CD\u542F**",
        both: "\u4E24\u8005\u90FD\u8981",
        tv: "\u4EC5\u7535\u89C6\u6A21\u5F0F",
        def: "\u4EC5\u666E\u901A\u6A21\u5F0F"
      },
      lyricsHeader: "\u6B4C\u8BCD\u8BBE\u7F6E",
      lyrics: "\u6B4C\u8BCD",
      lyricsDescription: [
        "**\u6CE8\u610F:**\u4F60\u9700\u8981[lyrics-plus](https://spicetify.app/docs/advanced-usage/custom-apps#lyrics-plus)\u63D2\u4EF6\u6765\u542F\u7528\u6B4C\u8BCD",
        "\u6839\u636E\u8FDE\u63A5\u91CC\u7684\u6307\u793A\u6765\u5B89\u88C5\u8FD9\u4E2A\u63D2\u4EF6"
      ],
      lyricsAlignment: {
        setting: "\u6B4C\u8BCD\u5BF9\u9F50\u65B9\u5F0F",
        left: "\u9760\u5DE6",
        center: "\u5C45\u4E2D",
        right: "\u9760\u53F3"
      },
      lyricsAnimationTempo: "\u6B4C\u8BCD\u52A8\u753B\u901F\u5EA6",
      generalHeader: "\u901A\u7528\u8BBE\u7F6E",
      progressBar: "\u64AD\u653E\u8FDB\u5EA6\u6761",
      playerControls: "\u64AD\u653E\u63A7\u5236",
      trimTitle: "\u7F29\u77ED\u6807\u9898",
      trimTitleUpNext: "\u7F29\u77ED\u6807\u9898 (\u4E0B\u4E00\u9996\u63D0\u793A)",
      showAlbum: {
        setting: "\u663E\u793A\u6807\u9898",
        never: "\u6C38\u4E0D",
        always: "\u603B\u662F",
        date: "\u4E0E\u53D1\u5E03\u65E5\u671F\u4E00\u8D77\u663E\u793A"
      },
      showAllArtists: "\u663E\u793A\u6240\u6709\u827A\u4EBA",
      icons: "\u663E\u793A\u56FE\u6807",
      songChangeAnimation: "\u5207\u6B4C\u52A8\u753B",
      fullscreen: "\u5168\u5C4F",
      extraHeader: "\u989D\u5916\u529F\u80FD",
      backgroundChoice: {
        setting: "\u80CC\u666F\u9009\u62E9",
        description: [
          "**\u6700\u65B0\u6700\u70ED:** \u8BD5\u4E00\u4E0B**\u5E26\u52A8\u753B\u7684\u4E13\u8F91\u56FE** \u9009\u9879 [\u7075\u611F](https://github.com/surfbryce/beautiful-lyrics)",
          "**\u8B66\u544A:** \u5F88\u6F02\u4EAE\uFF0C\u4F46\u662F\u8FD9\u53EF\u80FD\u5360\u7528\u8F83\u591A\u8D44\u6E90\uFF0C\u800C\u4E14\u8FD9\u662F\u5B9E\u9A8C\u6027\u7684"
        ],
        dynamicColor: "\u52A8\u6001\u7EAF\u8272",
        staticColor: "\u9759\u6001\u7EAF\u8272(\u4ECE\u4E0B\u9762\u9009\u62E9)",
        artwork: "\u4E13\u8F91\u56FE",
        animatedArt: "\u5E26\u52A8\u753B\u7684\u4E13\u8F91\u56FE(\u5B9E\u9A8C\u6027)",
        artist: "\u827A\u4EBA\u7167\u7247"
      },
      extraControls: "\u989D\u5916\u63A7\u4EF6",
      upnextDisplay: "\u4E0B\u4E00\u9996\u63D0\u793A",
      contextDisplay: {
        setting: "\u5185\u5BB9\u6765\u6E90\u663E\u793A",
        always: "\u603B\u662F",
        never: "\u4ECE\u4E0D",
        mouse: "\u5F53\u9F20\u6807\u79FB\u52A8\u65F6"
      },
      volumeDisplay: {
        setting: "\u97F3\u91CF\u663E\u793A",
        description: [
          "\u81EA\u52A8\u6A21\u5F0F\u4E0B\u97F3\u91CF\u6761\u5C06\u4F1A\u5728\u4EE5\u4E0B\u60C5\u51B5\u663E\u793A:",
          " - \u9F20\u6807\u79FB\u52A8\u5230\u5C4F\u5E55\u5DE6\u4FA7",
          " - \u97F3\u91CF\u6709\u53D8\u5316"
        ],
        always: "\u603B\u662F",
        never: "\u4ECE\u4E0D",
        smart: "\u81EA\u52A8"
      },
      appearanceHeader: "\u9AD8\u7EA7/\u5916\u89C2",
      appearanceSubHeader: "*(\u4E0D\u8981\u52A8\u9664\u975E\u4F60\u77E5\u9053\u81EA\u5DF1\u5728\u505A\u4EC0\u4E48)*",
      backgroundColor: {
        setting: "\u7EAF\u8272\u80CC\u666F\u7684\u989C\u8272\u914D\u7F6E",
        vibrant: "Vibrant",
        prominent: "Prominent",
        desaturated: "Desaturated (\u63A8\u8350)",
        lightVibrant: "Light Vibrant",
        darkVibrant: "Dark Vibrant",
        vibrantNonAlarming: "Vibrant Non Alarming"
      },
      themedButtons: "\u4E3B\u9898\u8272\u6309\u94AE",
      themedIcons: "\u4E3B\u9898\u8272\u56FE\u6807",
      invertColors: {
        setting: "\u53CD\u8F6C\u989C\u8272",
        never: "\u4ECE\u4E0D",
        always: "\u603B\u662F",
        auto: "\u81EA\u52A8(\u57FA\u4E8E\u80CC\u666F)"
      },
      backAnimationTime: "\u80CC\u666F\u52A8\u753B\u65F6\u95F4",
      upnextScroll: {
        setting: "\u4E0B\u4E00\u9996\u63D0\u793A\u6EDA\u52A8",
        mq: "Marquee/\u6EDA\u52A8",
        sp: "Spotify/\u53D8\u6362"
      },
      upnextTime: "\u4E0B\u4E00\u9996\u63D0\u793A\u663E\u793A\u65F6\u95F4",
      backgroundBlur: "\u80CC\u666F\u6A21\u7CCA",
      backgroundBrightness: "\u80CC\u666F\u4EAE\u5EA6",
      aboutHeader: "\u5173\u4E8E",
      configReset: "\u91CD\u7F6E\u914D\u7F6E",
      reload: "\u91CD\u65B0\u8F7D\u5165\u5E94\u7528"
    },
    tvBtnDesc: "\u7535\u89C6\u6A21\u5F0F\u663E\u793A",
    fullscreenBtnDesc: "\u5168\u5C4F"
  };

  // src/resources/locales/de-DE.json
  var de_DE_default = {
    langName: "Deutsch",
    context: {
      queue: "Wiedergabe aus der Warteschlange",
      track: "Titel spielen",
      album: "Abspielen von Album",
      artist: "Abspielen von K\xFCnstler",
      playlist: "Abspielen von Playlist",
      playlistFolder: "Wiedergabe aus dem Playlist-Ordner",
      search: "Wiedergabe aus Suche",
      searchDest: "Lieder",
      collection: "Abspielen aus Sammlung",
      likedSongs: "Lieblingssongs",
      trackRadio: "Abspielen von Titel Radio",
      artistRadio: "Abspielen von K\xFCnstler Radio",
      albumRadio: "Abspielen von Alben Radio",
      playlistRadio: "Abspielen von Playlist Radio"
    },
    upnext: "ALS N\xC4CHSTES",
    unknownArtist: "K\xFCnstler (nicht verf\xFCgbar)",
    settings: {
      switchToTV: "Wechseln zu TV-Modus",
      switchToFullscreen: "Einstellungen des Vollbildmodis",
      tvModeConfig: "Konfiguration des TV-Modus",
      fullscreenConfig: "Vollbildmodus konfiguration",
      exit: "Exit",
      pluginSettings: "Plugin Einstellungen",
      fsHideOriginal: "Stock-Schaltfl\xE4che ausblenden (Spotify Premium)",
      language: "Sprache",
      lyricsHeader: "Ausrichtung des Liedtextes",
      lyrics: "Liedtext",
      lyricsAlignment: {
        setting: "Liedtext Ausrichtung",
        left: "Links",
        center: "Center",
        right: "Rechts"
      },
      lyricsAnimationTempo: "Liedtext Animationtempo",
      generalHeader: "Allgemeine Einstellungen",
      progressBar: "Fortschritt anzeige",
      playerControls: "Wiedegergabe steuerung",
      trimTitle: "Titel trimmen",
      trimTitleUpNext: "Trim Title(Up Next)",
      showAlbum: {
        setting: "Album anzeigen",
        never: "Niemals",
        always: "Immer",
        date: "Ver\xF6ffentlichungsdatum anzeigen"
      },
      showAllArtists: "Alle K\xFCnstler anzeigen",
      icons: "Symbole",
      songChangeAnimation: "Songwechsel-Animation",
      fullscreen: "Vollbildmodus",
      extraHeader: "Zus\xE4tzliche Funktionalit\xE4t",
      backgroundChoice: {
        setting: "Hintergrundauswahl",
        color: "Einfarbig",
        artwork: "Titelbild"
      },
      extraControls: "Zus\xE4tzliche Steuerelemente",
      upnextDisplay: "N\xE4chste-titel Anzeige",
      contextDisplay: {
        setting: "Kontextanzeige",
        always: "Immer",
        never: "Niemals",
        mouse: "Bei Mausbewegung"
      },
      volumeDisplay: {
        setting: "Anzeige der Lautst\xE4rkenleiste",
        always: "Immer",
        never: "Niemals",
        mouse: "Bei Mausbewegung",
        volume: "Bei Lautst\xE4rke\xE4nderung"
      },
      appearanceHeader: "Erweitert/Aussehen",
      appearanceSubHeader: "Achtung! \xC4ndern diese Einstellungen, wenn Sie wissen, was Sie tun!",
      backgroundColor: {
        setting: "Farbwahl auf farbigem Hintergrund",
        vibrant: "Beschwingt",
        prominent: "Prominente",
        desaturated: "Ents\xE4ttigt (empfohlen)",
        lightVibrant: "Hell lebendig",
        darkVibrant: "Dunkel lebendig",
        vibrantNonAlarming: "Lebhaft, nicht alarmierend"
      },
      themedButtons: "Themed Tasten",
      themedIcons: "Themed Symbole",
      invertColors: {
        setting: "Farben umkehren",
        never: "Niemals",
        always: "Immer",
        auto: "Automatisch (basierend auf Hintergrund)"
      },
      backAnimationTime: "Background Animation Time",
      upnextScroll: {
        setting: "N\xE4chstes Lied Scroll-Animation",
        mq: "Marquee/Scrolling",
        sp: "Spotify/Translating"
      },
      upnextTime: "N\xE4chster Titel Anzeigedauer",
      backgroundBlur: "Hintergrund Blur",
      backgroundBrightness: "Hintergrund Brightness",
      configReset: "Konfig zur\xFCcksetzen",
      reload: "Client neu laden"
    },
    tvBtnDesc: "TV Modus",
    fullscreenBtnDesc: "Vollbild"
  };

  // src/resources/locales/tr-TR.json
  var tr_TR_default = {
    langName: "Turkish",
    context: {
      queue: "\xC7alma s\u0131ras\u0131ndan \xE7al\u0131n\u0131yor",
      track: "Par\xE7a \xE7al\u0131n\u0131yor",
      album: "Alb\xFCmden oynat\u0131l\u0131yor",
      artist: "Sanat\xE7\u0131'dan oynat\u0131l\u0131yor",
      playlist: "\xC7alma Listesi'den oynat\u0131l\u0131yor",
      playlistFolder: "\xC7alma Listesi Klas\xF6r\xFCnden oynat\u0131l\u0131yor",
      search: "Arama'dan oynat\u0131l\u0131yor",
      searchDest: "Par\xE7alar",
      collection: "Koleksiyon'dan oynat\u0131l\u0131yor",
      likedSongs: "Be\u011Fenilen \u015Fark\u0131lar",
      trackRadio: "Par\xE7a Radyosu'ndan oynat\u0131l\u0131yor",
      artistRadio: "Sanat\xE7\u0131 Radyosu'ndan oynat\u0131l\u0131yor",
      albumRadio: "Alb\xFCm Radyosu'ndan oynat\u0131l\u0131yor",
      playlistRadio: "\xC7alma Listesi Radyosu'ndan oynat\u0131l\u0131yor"
    },
    upnext: "SONRAK\u0130",
    unknownArtist: "Sanat\xE7\u0131 (Mevcut de\u011Fil)",
    settings: {
      switchToTV: "TV Moduna ge\xE7",
      switchToFullscreen: "Tam ekran moduna ge\xE7",
      tvModeConfig: "TV Modu ayarlar\u0131",
      fullscreenConfig: "Tam ekran modu ayarlar\u0131",
      exit: "\xC7\u0131k",
      pluginSettings: "Eklenti ayarlar\u0131",
      fsHideOriginal: "Tam ekran tu\u015Funu gizle(Spotify Premium kullan\u0131c\u0131lar\u0131 i\xE7in)",
      language: "Dil",
      lyricsHeader: "\u015Eark\u0131 s\xF6zleri ayarlar\u0131",
      lyrics: "\u015Eark\u0131 s\xF6zleri",
      lyricsAlignment: {
        setting: "\u015Eark\u0131 s\xF6zleri konumu",
        left: "Sol",
        center: "Orta",
        right: "Sa\u011F"
      },
      lyricsAnimationTempo: "\u015Eark\u0131 s\xF6zleri animasyonu h\u0131z\u0131",
      generalHeader: "Genel ayarlar",
      progressBar: "\u0130lerleme \xE7ubu\u011Fu",
      playerControls: "Oynat\u0131c\u0131 kontrolleri",
      trimTitle: "Ba\u015Fl\u0131\u011F\u0131 k\u0131rp",
      trimTitleUpNext: "Ba\u015Fl\u0131\u011F\u0131 k\u0131rp (Sonraki \u015Fark\u0131 g\xF6sterimi)",
      showAlbum: {
        setting: "Alb\xFCm'\xFC g\xF6ster",
        never: "Asla",
        always: "Her zaman",
        date: "Alb\xFCm'\xFCn yay\u0131nlanma tarihini g\xF6ster"
      },
      showAllArtists: "\u015Eark\u0131ya katk\u0131s\u0131 olan t\xFCm sanat\xE7\u0131lar\u0131 g\xF6ster",
      icons: "Simgeler",
      songChangeAnimation: "\u015Eark\u0131 de\u011Fi\u015Ftirme animasyonu",
      fullscreen: "Tam ekran",
      extraHeader: "Ekstra \xF6zellikler",
      backgroundChoice: {
        setting: "Arka plan \xF6zellikleri",
        color: "Tek renk",
        artwork: "Alb\xFCm kapa\u011F\u0131"
      },
      extraControls: "Ekstra Kontroller",
      upnextDisplay: "Sonraki \u015Fark\u0131y\u0131 g\xF6sterme",
      contextDisplay: {
        setting: "Ayr\u0131nt\u0131lar\u0131 g\xF6sterme",
        always: "Her zaman",
        never: "Asla",
        mouse: "Yaln\u0131zca mause hareketinde"
      },
      volumeDisplay: {
        setting: "Ses \xE7ubu\u011Funu g\xF6sterme",
        always: "Her zaman",
        never: "Asla",
        mouse: "Yaln\u0131zca mause hareketinde",
        volume: "Yaln\u0131zca ses d\xFCzeyi de\u011Fi\u015Fti\u011Fi zaman"
      },
      appearanceHeader: "Geli\u015Fmi\u015F/G\xF6r\xFCn\xFCm",
      appearanceSubHeader: "Dikkat! Yaln\u0131zca ne yapt\u0131\u011F\u0131n\u0131 biliyorsan de\u011Fi\u015Ftir.",
      backgroundColor: {
        setting: "Arkaplan \xF6zel renk tercihi",
        vibrant: "Parlak",
        prominent: "\xD6ne \xE7\u0131kan",
        desaturated: "Soluk (\xF6nerilir)",
        lightVibrant: "A\xE7\u0131k parlak",
        darkVibrant: "Karanl\u0131k parlak",
        vibrantNonAlarming: "G\xF6z almayan parlak"
      },
      themedButtons: "Alb\xFCm resminin renklerine g\xF6re tu\u015Flar",
      themedIcons: "Alb\xFCm resminin renklerine g\xF6re simgeler",
      invertColors: {
        setting: "Renkleri ters \xE7evir",
        never: "Asla",
        always: "Her zaman",
        auto: "Otomatik (Arka plana g\xF6re)"
      },
      backAnimationTime: "Arkaplan animasyon stili",
      upnextScroll: {
        setting: "Sonraki \u015Fark\u0131 yaz\u0131 animasyonu",
        mq: "Marquee/Kayan",
        sp: "Spotify/Sa\u011Fa sola giden"
      },
      upnextTime: "Sonraki \u015Fark\u0131 ka\xE7\u0131nc\u0131 saniyeden sonra g\xF6sterilsin? ",
      backgroundBlur: "Arkaplan'\u0131 bulan\u0131kla\u015Ft\u0131r",
      backgroundBrightness: "Arka plan parlakl\u0131\u011F\u0131",
      configReset: "Ayarlar\u0131 s\u0131f\u0131rla",
      reload: "\u0130stemciyi (Spotify) yenile (F5)"
    },
    tvBtnDesc: "TV Modu'nu g\xF6ster",
    fullscreenBtnDesc: "Tam ekran"
  };

  // src/resources/locales/ru-RU.json
  var ru_RU_default = {
    langName: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    context: {
      queue: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u0437 \u043E\u0447\u0435\u0440\u0435\u0434\u0438",
      track: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0442\u0440\u0435\u043A\u0430",
      album: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u0437 \u0430\u043B\u044C\u0431\u043E\u043C\u0430",
      artist: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0441\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F",
      playlist: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u0437 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0430",
      playlistFolder: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u0437 \u043F\u0430\u043F\u043A\u0438 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u043E\u0432",
      search: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u0437 \u043F\u043E\u0438\u0441\u043A\u0430",
      searchDest: "\u0422\u0440\u0435\u043A\u0438",
      collection: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u0437 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438",
      likedSongs: "\u041B\u044E\u0431\u0438\u043C\u044B\u0435 \u0442\u0440\u0435\u043A\u0438",
      trackRadio: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u0437 \u0440\u0430\u0434\u0438\u043E \u043F\u043E \u0442\u0440\u0435\u043A\u0443",
      artistRadio: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u0437 \u0440\u0430\u0434\u0438\u043E \u043F\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E",
      albumRadio: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u0437 \u0440\u0430\u0434\u0438\u043E \u043F\u043E \u0430\u043B\u044C\u0431\u043E\u043C\u0443",
      playlistRadio: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u0437 \u0440\u0430\u0434\u0438\u043E \u043F\u043E \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0443"
    },
    upnext: "\u0421\u041B\u0415\u0414\u0423\u042E\u0429\u0415\u0415",
    unknownArtist: "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C (\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D)",
    settings: {
      switchToTV: "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u0422\u0412-\u0440\u0435\u0436\u0438\u043C",
      switchToFullscreen: "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0435\u0436\u0438\u043C \u041F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
      tvModeConfig: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0422\u0412-\u0440\u0435\u0436\u0438\u043C\u0430",
      fullscreenConfig: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u041F\u043E\u043B\u043D\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430",
      exit: "\u0412\u044B\u0445\u043E\u0434",
      pluginSettings: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043B\u0430\u0433\u0438\u043D\u0430",
      fsHideOriginal: "\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u0442\u043E\u043A\u043E\u0432\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443",
      fsHideOriginalDescription: "\u0421\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043A\u043D\u043E\u043F\u043A\u0443 Spotify \u0434\u043B\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u0442\u043E\u043A\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430 (\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 **\u041F\u0440\u0435\u043C\u0438\u0443\u043C** \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C). \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430.",
      language: "\u042F\u0437\u044B\u043A",
      autoLaunch: {
        setting: "\u0410\u0432\u0442\u043E-\u0437\u0430\u043F\u0443\u0441\u043A (\u043F\u0440\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 Spotify)",
        description: "**\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435:** \u041E\u043A\u043D\u043E Spotify \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u043E \u043D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D \u043F\u0440\u0438 \u0430\u0432\u0442\u043E-\u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u0430.",
        never: "\u041D\u0438\u043A\u043E\u0433\u0434\u0430 (\u043F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E)",
        default: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u041F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
        tvmode: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0422\u0412-\u0440\u0435\u0436\u0438\u043C",
        lastused: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"
      },
      activationTypes: {
        setting: "\u0421\u043F\u043E\u0441\u043E\u0431\u044B \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438",
        description: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043F\u043B\u0430\u0433\u0438\u043D\u0430. \u041A\u043B\u0430\u0432\u0438\u0448\u0438 <kbd>F</kbd> \u0438 <kbd>T</kbd> \u0438\u043B\u0438 \u043A\u043D\u043E\u043F\u043A\u0438 \u043D\u0430 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u0438 \u043D\u0438\u0436\u043D\u0435\u0439 \u043F\u0430\u043D\u0435\u043B\u044F\u0445. **\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430**",
        both: "\u041A\u043D\u043E\u043F\u043A\u0438 \u0438 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F \u043A\u043B\u0430\u0432\u0438\u0448",
        btns: "\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u043D\u043E\u043F\u043A\u0438",
        keys: "\u0422\u043E\u043B\u044C\u043A\u043E \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F \u043A\u043B\u0430\u0432\u0438\u0448"
      },
      buttonActivation: {
        setting: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043D\u043E\u043F\u043E\u043A \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438",
        description: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 \u043D\u0430 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 (*\u0422\u0412-\u0440\u0435\u0436\u0438\u043C*) \u0438 \u043D\u0438\u0436\u043D\u0435\u0439 (*\u0440\u0435\u0436\u0438\u043C \u041F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E*) \u043F\u0430\u043D\u0435\u043B\u044F\u0445. **\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430**",
        both: "\u041A\u043D\u043E\u043F\u043A\u0438 \u043E\u0431\u043E\u0438\u0445 \u0440\u0435\u0436\u0438\u043C\u043E\u0432",
        tv: "\u041A\u043D\u043E\u043F\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0422\u0412-\u0440\u0435\u0436\u0438\u043C\u0430",
        def: "\u041A\u043D\u043E\u043F\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0435\u0436\u0438\u043C\u0430 \u041F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"
      },
      keyActivation: {
        setting: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043B\u0430\u0432\u0438\u0448 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438",
        description: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0434\u043B\u044F \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438. <kbd>F</kbd> \u0434\u043B\u044F *\u0440\u0435\u0436\u0438\u043C\u0430 \u041F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E* \u0438 <kbd>T</kbd> \u0434\u043B\u044F *\u0422\u0412-\u0440\u0435\u0436\u0438\u043C\u0430*  **\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430**",
        both: "\u041A\u043B\u0430\u0432\u0438\u0448\u0438 \u0434\u043B\u044F \u043E\u0431\u043E\u0438\u0445 \u0440\u0435\u0436\u0438\u043C\u043E\u0432",
        tv: "\u041A\u043B\u0430\u0432\u0438\u0448\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0422\u0412-\u0440\u0435\u0436\u0438\u043C\u0430",
        def: "\u041A\u043B\u0430\u0432\u0438\u0448\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0440\u0435\u0436\u0438\u043C\u0430 \u041F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"
      },
      lyricsHeader: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0442\u0435\u043A\u0441\u0442\u0430",
      lyrics: "\u0422\u0435\u043A\u0441\u0442 \u0442\u0440\u0435\u043A\u0430",
      lyricsDescription: [
        "**\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435:** \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 [lyrics-plus](https://spicetify.app/docs/advanced-usage/custom-apps#lyrics-plus) \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u044D\u0442\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438.",
        "\u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F\u043C \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0434\u043B\u044F \u0435\u0433\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438."
      ],
      lyricsAlignment: {
        setting: "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430",
        left: "\u041F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
        center: "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
        right: "\u041F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E"
      },
      lyricsAnimationTempo: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 \u0442\u0435\u043A\u0441\u0442\u0430",
      generalHeader: "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
      progressBar: "\u041F\u043E\u043B\u043E\u0441\u0430 \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
      playerControls: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435\u043C",
      trimTitle: "\u041E\u0431\u0440\u0435\u0437\u0430\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
      trimTitleUpNext: "\u041E\u0431\u0440\u0435\u0437\u0430\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0442\u0440\u0435\u043A\u0430)",
      showAlbum: {
        setting: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0430\u043B\u044C\u0431\u043E\u043C",
        never: "\u041D\u0438\u043A\u043E\u0433\u0434\u0430",
        always: "\u0412\u0441\u0435\u0433\u0434\u0430",
        date: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0441 \u0434\u0430\u0442\u043E\u0439 \u0440\u0435\u043B\u0438\u0437\u0430"
      },
      showAllArtists: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0432\u0441\u0435\u0445 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439",
      icons: "\u0418\u043A\u043E\u043D\u043A\u0438",
      songChangeAnimation: "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0442\u0440\u0435\u043A\u0430",
      fullscreen: "\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D",
      extraHeader: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
      backgroundChoice: {
        setting: "\u0417\u0430\u0434\u043D\u0438\u0439 \u0444\u043E\u043D",
        description: [
          "**\u041D\u043E\u0432\u043E\u0435:** \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 **\u0430\u043D\u0438\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043E\u0431\u043B\u043E\u0436\u043A\u0430 \u0430\u043B\u044C\u0431\u043E\u043C\u0430**! [\u0412\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435](https://github.com/surfbryce/beautiful-lyrics)",
          "**\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435:** \u0412\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u043E\u0447\u0435\u043D\u044C \u043A\u0440\u0430\u0441\u0438\u0432\u043E, \u043D\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0435\u0439."
        ],
        dynamicColor: "\u0414\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0437\u0430\u043B\u0438\u0432\u043A\u0430 \u0441\u043F\u043B\u043E\u0448\u043D\u044B\u043C \u0446\u0432\u0435\u0442\u043E\u043C",
        staticColor: "\u0421\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0437\u0430\u043B\u0438\u0432\u043A\u0430 \u0441\u043F\u043B\u043E\u0448\u043D\u044B\u043C \u0446\u0432\u0435\u0442\u043E\u043C (\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0438\u0436\u0435)",
        artwork: "\u041E\u0431\u043B\u043E\u0436\u043A\u0430 \u0430\u043B\u044C\u0431\u043E\u043C\u0430",
        animatedArt: "\u0410\u043D\u0438\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043E\u0431\u043B\u043E\u0436\u043A\u0430 \u0430\u043B\u044C\u0431\u043E\u043C\u0430 (\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E)",
        artist: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0430\u0440\u0442\u0438\u0441\u0442\u0430"
      },
      extraControls: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
      upnextDisplay: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0442\u0440\u0435\u043A",
      contextDisplay: {
        setting: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430 \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
        always: "\u0412\u0441\u0435\u0433\u0434\u0430",
        never: "\u041D\u0438\u043A\u043E\u0433\u0434\u0430",
        mouse: "\u041F\u0440\u0438 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0438 \u043C\u044B\u0448\u0438"
      },
      volumeDisplay: {
        setting: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u043F\u043E\u043B\u043E\u0441\u0443 \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u0438",
        description: [
          "\u0412 `\u0443\u043C\u043D\u043E\u043C` \u0440\u0435\u0436\u0438\u043C\u0435 \u043F\u043E\u043B\u043E\u0441\u0430 \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u0438 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0430 \u043F\u0440\u0438:",
          "  - \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0438 \u043C\u044B\u0448\u0438 \u043A \u043B\u0435\u0432\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u044D\u043A\u0440\u0430\u043D\u0430.",
          " - \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u0438."
        ],
        always: "\u0412\u0441\u0435\u0433\u0434\u0430",
        never: "\u041D\u0438\u043A\u043E\u0433\u0434\u0430",
        smart: "\u0423\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"
      },
      appearanceHeader: "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u0432\u0438\u0434\u0430",
      appearanceSubHeader: "*(\u0418\u0437\u043C\u0435\u043D\u044F\u0439\u0442\u0435, \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0435!)*",
      backgroundColor: {
        setting: "\u0422\u0438\u043F \u0446\u0432\u0435\u0442\u0430 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0437\u0430\u043B\u0438\u0432\u043A\u0438 \u0437\u0430\u0434\u043D\u0435\u0433\u043E \u0444\u043E\u043D\u0430",
        vibrant: "\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u044B\u0439",
        prominent: "\u042F\u0440\u043A\u0438\u0439",
        desaturated: "\u041F\u0440\u0438\u0433\u043B\u0443\u0448\u0435\u043D\u043D\u044B\u0439 (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F)",
        lightVibrant: "\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u044B\u0439 \u0441\u0432\u0435\u0442\u043B\u044B\u0439",
        darkVibrant: "\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043C\u043D\u044B\u0439",
        vibrantNonAlarming: "\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439"
      },
      staticColor: "\u0426\u0432\u0435\u0442 \u0441\u0442\u0430\u0442\u0438\u0447\u043D\u043E\u0439 \u0437\u0430\u043B\u0438\u0432\u043A\u0438 \u0437\u0430\u0434\u043D\u0435\u0433\u043E \u0444\u043E\u043D\u0430",
      themedButtons: "\u0426\u0432\u0435\u0442\u043D\u044B\u0435 \u043A\u043D\u043E\u043F\u043A\u0438",
      themedIcons: "\u0426\u0432\u0435\u0442\u043D\u044B\u0435 \u0438\u043A\u043E\u043D\u043A\u0438",
      invertColors: {
        setting: "\u0418\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0446\u0432\u0435\u0442\u0430",
        never: "\u041D\u0438\u043A\u043E\u0433\u0434\u0430",
        always: "\u0412\u0441\u0435\u0433\u0434\u0430",
        auto: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 (\u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0444\u043E\u043D\u0430)"
      },
      backAnimationTime: "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 \u0441\u043C\u0435\u043D\u044B \u0444\u043E\u043D\u0430",
      upnextScroll: {
        setting: "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u0441\u043C\u0435\u043D\u044B \u0442\u0440\u0435\u043A\u0430",
        mq: "Marquee/\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430",
        sp: "Spotify/\u041F\u0435\u0440\u0435\u0445\u043E\u0434"
      },
      upnextTime: "\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0442\u0440\u0435\u043A\u0430",
      backgroundBlur: "\u0420\u0430\u0437\u043C\u044B\u0442\u0438\u0435 \u0444\u043E\u043D\u0430",
      backgroundBrightness: "\u042F\u0440\u043A\u043E\u0441\u0442\u044C \u0444\u043E\u043D\u0430",
      aboutHeader: "\u041E \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0438",
      configReset: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
      reload: "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435"
    },
    tvBtnDesc: "\u0422\u0412-\u0440\u0435\u0436\u0438\u043C",
    fullscreenBtnDesc: "\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D"
  };

  // src/resources/locales/vi-VN.json
  var vi_VN_default = {
    langName: "Ti\u1EBFng Vi\u1EC7t",
    context: {
      queue: "\u0110ang ph\xE1t t\u1EEB h\xE0ng ch\u1EDD",
      track: "\u0110ang ph\xE1t t\u1EEB b\xE0i h\xE1t",
      album: "\u0110ang ph\xE1t t\u1EEB album",
      artist: "\u0110ang ph\xE1t t\u1EEB ngh\u1EC7 s\u0129",
      playlist: "\u0110ang ph\xE1t t\u1EEB danh s\xE1ch ph\xE1t",
      playlistFolder: "\u0110ang ph\xE1t t\u1EEB th\u01B0 m\u1EE5c danh s\xE1ch ph\xE1t",
      search: "\u0110ang ph\xE1t t\u1EEB t\xECm ki\u1EBFm",
      searchDest: "B\xE0i h\xE1t",
      collection: "\u0110ang ph\xE1t t\u1EEB b\u1ED9 s\u01B0u t\u1EADp",
      likedSongs: "B\xE0i h\xE1t \u0111\xE3 th\xEDch",
      trackRadio: "\u0110ang ph\xE1t t\u1EEB \u0111\xE0i ph\xE1t c\u1EE7a b\xE0i h\xE1t",
      artistRadio: "\u0110ang ph\xE1t t\u1EEB \u0111\xE0i ph\xE1t c\u1EE7a ngh\u1EC7 s\u0129",
      albumRadio: "\u0110ang ph\xE1t t\u1EEB \u0111\xE0i ph\xE1t c\u1EE7a album",
      playlistRadio: "\u0110ang ph\xE1t t\u1EEB \u0111\xE0i ph\xE1t c\u1EE7a danh s\xE1ch ph\xE1t"
    },
    upnext: "TI\u1EBEP THEO",
    unknownArtist: "Ngh\u1EC7 s\u0129 (Kh\xF4ng kh\u1EA3 d\u1EE5ng)",
    settings: {
      switchToTV: "Chuy\u1EC3n sang ch\u1EBF \u0111\u1ED9 TV",
      switchToFullscreen: "Chuy\u1EC3n sang ch\u1EBF \u0111\u1ED9 m\u1EB7c \u0111\u1ECBnh",
      tvModeConfig: "T\xF9y ch\u1EC9nh ch\u1EBF \u0111\u1ED9 TV",
      fullscreenConfig: "T\xF9y ch\xEDnh ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh",
      exit: "Tho\xE1t",
      pluginSettings: "C\xE0i \u0111\u1EB7t Plugin",
      fsHideOriginal: "\u1EA8n n\xFAt m\u1EB7c \u0111\u1ECBnh",
      fsHideOriginalDescription: "\u1EA8n n\xFAt to\xE0n m\xE0n h\xECnh m\u1EB7c \u0111\u1ECBnh c\u1EE7a Spotify (y\xEAu c\u1EA7u l\xE0 ng\u01B0\u1EDDi d\xF9ng **Premium**). Y\xEAu c\u1EA7u t\u1EA3i l\u1EA1i.",
      language: "Ng\xF4n ng\u1EEF",
      autoLaunch: {
        setting: "T\u1EF1 kh\u1EDFi \u0111\u1ED9ng (khi Spotify kh\u1EDFi \u0111\u1ED9ng)",
        description: "**H\u1EA1n ch\u1EBF:** C\u1EEDa s\u1ED5 Spotify s\u1EBD kh\xF4ng th\u1EC3 m\u1EDF to\xE0n m\xE0n h\xECnh khi \u0111\u01B0\u1EE3c t\u1EF1 \u0111\u1ED9ng kh\u1EDFi ch\u1EA1y v\u1EDBi h\u1EC7 th\u1ED1ng.",
        never: "Kh\xF4ng bao gi\u1EDD (M\u1EB7c \u0111\u1ECBnh)",
        default: "M\u1EDF ch\u1EBF \u0111\u1ED9 m\u1EB7c \u0111\u1ECBnh",
        tvmode: "M\u1EDF ch\u1EBF \u0111\u1ED9 TV",
        lastused: "Ch\u1EBF \u0111\u1ED9 d\xF9ng l\u1EA7n cu\u1ED1i"
      },
      activationTypes: {
        setting: "Ph\u01B0\u01A1ng th\u1EE9c k\xEDch ho\u1EA1t",
        description: "Ch\u1ECDn ph\u01B0\u01A1ng th\u1EE9c b\u1EA1n mu\u1ED1n \u0111\u1EC3 k\xEDch ho\u1EA1t Plugin. Ph\xEDm <kbd>F</kbd> v\xE0 <kbd>T</kbd>, ho\u1EB7c l\xE0 n\xFAt \u1EDF tr\xEAn thanh \u0111i\u1EC1u h\u01B0\u1EDBng v\xE0 thanh tr\xECnh ph\xE1t. **Y\xEAu c\u1EA7u t\u1EA3i l\u1EA1i**",
        both: "N\xFAt v\xE0 ph\xEDm t\u1EAFt",
        btns: "Ch\u1EC9 n\xFAt",
        keys: "Ch\u1EC9 ph\xEDm t\u1EAFt"
      },
      buttonActivation: {
        setting: "T\xF9y ch\xEDnh n\xFAt k\xEDch ho\u1EA1t",
        description: "Ch\u1ECDn n\xFAt b\u1EA1n mu\u1ED1n \u0111\u1EC3 k\xEDch ho\u1EA1t, tr\xEAn thanh \u0111i\u1EC1u h\u01B0\u1EDBng (*Ch\u1EBF \u0111\u1ED9 TV*) v\xE0 thanh tr\xECnh ph\xE1t (*Ch\u1EBF \u0111\u1ED9 m\u1EB7c \u0111\u1ECBnh*). **Y\xEAu c\u1EA7u t\u1EA3i l\u1EA1i**",
        both: "N\xFAt cho c\u1EA3 hai ch\u1EBF \u0111\u1ED9",
        tv: "Ch\u1EC9 cho ch\u1EBF \u0111\u1ED9 TV",
        def: "Ch\u1EC9 cho ch\u1EBF \u0111\u1ED9 m\u1EB7c \u0111\u1ECBnh"
      },
      keyActivation: {
        setting: "T\xF9y ch\u1EC9nh ph\xEDm k\xEDch ho\u1EA1t",
        description: "Ch\u1ECDn ph\xEDm b\u1EA1n mu\u1ED1n \u0111\u1EC3 k\xEDch ho\u1EA1t. <kbd>F</kbd> cho *Ch\u1EBF \u0111\u1ED9 m\u1EB7c \u0111\u1ECBnh* v\xE0 <kbd>T</kbd> cho *Ch\u1EBF \u0111\u1ED9 TV*  **Y\xEAu c\u1EA7u t\u1EA3i l\u1EA1i**",
        both: "Ph\xEDm cho c\u1EA3 hai ch\u1EBF \u0111\u1ED9",
        tv: "Ch\u1EC9 cho ch\u1EBF \u0111\u1ED9 TV",
        def: "Ch\u1EC9 cho ch\u1EBF \u0111\u1ED9 m\u1EB7c \u0111\u1ECBnh"
      },
      lyricsHeader: "C\xE0i \u0111\u1EB7t l\u1EDDi b\xE0i h\xE1t",
      lyrics: "L\u1EDDi b\xE0i h\xE1t",
      lyricsDescription: [
        "**Ghi ch\xFA:** B\u1EA1n s\u1EBD c\u1EA7n \u1EE9ng d\u1EE5ng [lyrics-plus](https://spicetify.app/docs/advanced-usage/custom-apps#lyrics-plus) \u0111\u1EC3 d\xF9ng t\xEDnh n\u0103ng n\xE0y.",
        "L\xE0m theo c\xE1c b\u01B0\u1EDBc tr\xEAn ch\u1EC9 d\u1EABn \u0111\u1EC3 c\xE0i \u0111\u1EB7t \u1EE9ng d\u1EE5ng."
      ],
      lyricsAlignment: {
        setting: "C\u0103n ch\u1EC9nh l\u1EDDi b\xE0i h\xE1t",
        left: "Tr\xE1i",
        center: "Gi\u1EEFa",
        right: "Ph\u1EA3i"
      },
      lyricsAnimationTempo: "Nh\u1ECBp \u0111i\u1EC7u ho\u1EA1t h\u1ECDa",
      generalHeader: "C\xE0i \u0111\u1EB7t t\u1ED5ng qu\xE1t",
      progressBar: "Thanh ti\u1EBFn tr\xECnh",
      playerControls: "\u0110i\u1EC1u khi\u1EC3n tr\xECnh ph\xE1t",
      trimTitle: "L\u01B0\u1EE3c b\u1ECF ti\xEAu \u0111\u1EC1",
      trimTitleUpNext: "L\u01B0\u1EE3c b\u1ECF ti\xEAu \u0111\u1EC1 (B\xE0i h\xE1t k\u1EBF ti\u1EBFp)",
      showAlbum: {
        setting: "Hi\u1EC7n album",
        never: "Kh\xF4ng bao gi\u1EDD",
        always: "Lu\xF4n hi\u1EC7n",
        date: "Hi\u1EC7n v\u1EDBi ng\xE0y ph\xE1t h\xE0nh"
      },
      showAllArtists: "Hi\u1EC7n to\xE0n b\u1ED9 ngh\u1EC7 s\u0129",
      icons: "Icon",
      songChangeAnimation: "Ho\u1EA1t h\u1ECDa chuy\u1EC3n b\xE0i h\xE1t",
      fullscreen: "To\xE0n m\xE0n h\xECnh",
      extraHeader: "T\xEDnh n\u0103ng b\u1ED5 sung",
      backgroundChoice: {
        setting: "T\xF9y ch\u1ECDn h\xECnh n\u1EC1n",
        dynamicColor: "H\xECnh n\u1EC1n m\xE0u \u0111\u1ED9ng",
        staticColor: "H\xECnh n\u1EC1n m\xE0u t\u0129nh (Ch\u1ECDn b\xEAn d\u01B0\u1EDBi)",
        artwork: "\u1EA2nh b\xECa album",
        artist: "\u1EA2nh b\xECa ngh\u1EC7 s\u0129"
      },
      extraControls: "\u0110i\u1EC1u khi\u1EC3n b\u1ED5 sung",
      upnextDisplay: "Hi\u1EC7n b\xE0i h\xE1t ti\u1EBFp theo",
      contextDisplay: {
        setting: "Hi\u1EC7n t\xF9y ch\u1ECDn",
        always: "Lu\xF4n hi\u1EC7n",
        never: "Kh\xF4ng bao gi\u1EDD",
        mouse: "Khi chu\u1ED9t di chuy\u1EC3n"
      },
      volumeDisplay: {
        setting: "Hi\u1EC3n th\u1ECB thanh \xE2m l\u01B0\u1EE3ng",
        description: [
          "Trong ch\u1EBF \u0111\u1ED9 `th\xF4ng minh`, thanh \xE2m l\u01B0\u1EE3ng s\u1EBD \u0111\u01B0\u1EE3c hi\u1EC3n th\u1ECB khi:",
          "  - b\u1EA1n di chuy\u1EC3n chu\u1ED9t v\u1EC1 ph\xEDa tr\xE1i m\xE0n h\xECnh.",
          " - \xE2m l\u01B0\u1EE3ng thay \u0111\u1ED5i."
        ],
        always: "Lu\xF4n hi\u1EC7n",
        never: "Kh\xF4ng bao gi\u1EDD",
        smart: "Th\xF4ng minh"
      },
      appearanceHeader: "N\xE2ng cao/Giao di\u1EC7n",
      appearanceSubHeader: "*(Ch\u1EC9 thay \u0111\u1ED5i n\u1EBFu b\u1EA1n bi\u1EBFt b\u1EA1n \u0111ang l\xE0m g\xEC!)*",
      backgroundColor: {
        setting: "T\xF9y ch\u1ECDn m\xE0u cho h\xECnh n\u1EC1n m\xE0u \u0111\u1ED9ng",
        vibrant: "S\u1ED1ng \u0111\u1ED9ng",
        prominent: "N\u1ED5i b\u1EADt",
        desaturated: "Kh\u1EED b\xE3o h\xF2a (\u0111\u01B0\u1EE3c khuy\u1EBFn ngh\u1ECB)",
        lightVibrant: "S\u1ED1ng \u0111\u1ED9ng (s\xE1ng)",
        darkVibrant: "S\u1ED1ng \u0111\u1ED9ng (t\u1ED1i)",
        vibrantNonAlarming: "Kh\xF4ng qu\xE1 s\u1ED1ng \u0111\u1ED9ng"
      },
      staticColor: "T\xF9y ch\u1ECDn m\xE0u cho h\xECnh n\u1EC1n m\xE0u t\u0129nh",
      themedButtons: "N\xFAt \u0111\u01B0\u1EE3c ch\u1EC9nh theo m\xE0u",
      themedIcons: "Icon \u0111\u01B0\u1EE3c ch\u1EC9nh theo m\xE0u",
      invertColors: {
        setting: "\u0110\u1EA3o ng\u01B0\u1EE3c m\xE0u",
        never: "Kh\xF4ng bao gi\u1EDD",
        always: "Lu\xF4n \u0111\u1EA3o ng\u01B0\u1EE3c",
        auto: "T\u1EF1 \u0111\u1ED9ng (D\u1EF1a tr\xEAn h\xECnh n\u1EC1n)"
      },
      backAnimationTime: "Th\u1EDDi gian ho\u1EA1t h\u1ECDa c\u1EE7a h\xECnh n\u1EC1n",
      upnextScroll: {
        setting: "Ho\u1EA1t h\u1ECDa c\u1EE7a b\xE0i h\xE1t ti\u1EBFp theo",
        mq: "Marquee/Scrolling",
        sp: "Spotify/Translating"
      },
      upnextTime: "Th\u1EDDi gian hi\u1EC7n th\xF4ng b\xE1o b\xE0i h\xE1t ti\u1EBFp theo",
      backgroundBlur: "L\xE0m m\u1EDD h\xECnh n\u1EC1n",
      backgroundBrightness: "\u0110\u1ED9 s\xE1ng h\xECnh n\u1EC1n",
      aboutHeader: "Th\xF4ng tin",
      configReset: "\u0110\u1EB7t l\u1EA1i c\xE0i \u0111\u1EB7t",
      reload: "T\u1EA3i l\u1EA1i Client"
    },
    tvBtnDesc: "Ch\u1EBF \u0111\u1ED9 TV",
    fullscreenBtnDesc: "To\xE0n m\xE0n h\xECnh"
  };

  // src/resources/locales/es-ES.json
  var es_ES_default = {
    langName: "Spanish",
    context: {
      queue: "Reproduciendo desde la cola",
      track: "Reproduciendo la pista",
      album: "Reproduciendo desde el \xE1lbum",
      artist: "Reproduciendo desde el artista",
      playlist: "Reproduciendo desde la lista de reproducci\xF3n",
      playlistFolder: "Reproduciendo desde la carpeta de listas de reproducci\xF3n",
      search: "Reproduciendo desde la b\xFAsqueda",
      searchDest: "Canciones",
      collection: "Reproduciendo desde la colecci\xF3n",
      likedSongs: "Canciones favoritas",
      trackRadio: "Reproduciendo desde la radio de la pista",
      artistRadio: "Reproduciendo desde la radio del artista",
      albumRadio: "Reproduciendo desde la radio del \xE1lbum",
      playlistRadio: "Reproduciendo desde la radio de la lista de reproducci\xF3n"
    },
    upnext: "SIGUIENTE",
    unknownArtist: "Artista (No disponible)",
    settings: {
      switchToTV: "Cambiar a modo TV",
      switchToFullscreen: "Cambiar a modo pantalla completa",
      tvModeConfig: "Configuraci\xF3n del modo TV",
      fullscreenConfig: "Configuraci\xF3n de pantalla completa",
      exit: "Salir",
      pluginSettings: "Configuraci\xF3n del complemento",
      fsHideOriginal: "Ocultar el bot\xF3n de pantalla completa de Spotify",
      fsHideOriginalDescription: "Oculta el bot\xF3n de pantalla completa de Spotify (solo disponible para usuarios **Premium**)",
      language: "Idioma",
      autoLaunch: {
        setting: "Lanzamiento autom\xE1tico (al iniciar Spotify)",
        description: "**Limitaci\xF3n:** La ventana de Spotify no puede ir a pantalla completa al iniciarse autom\xE1ticamente.",
        never: "Nunca (predeterminado)",
        default: "Abrir el modo predeterminado",
        tvmode: "Abrir el modo TV",
        lastused: "\xDAltimo modo usado"
      },
      activationTypes: {
        setting: "M\xE9todos de activaci\xF3n",
        description: "Elige los m\xE9todos que quieres usar para activar el complemento. Los atajos de teclado <kbd>F</kbd> y <kbd>T</kbd>, o los botones en la barra superior e inferior.",
        both: "Botones y atajos de teclado",
        btns: "Botones solo",
        keys: "Atajos de teclado solo"
      },
      buttonActivation: {
        setting: "Personalizar los botones de activaci\xF3n",
        description: "Elige los botones que quieres para la activaci\xF3n, en la barra superior (*Modo TV*) y en la barra inferior (*Modo predeterminado*).",
        both: "Botones para ambos modos",
        tv: "Bot\xF3n solo para el modo TV",
        def: "Bot\xF3n solo para el modo predeterminado"
      },
      keyActivation: {
        setting: "Personalizar los atajos de activaci\xF3n",
        description: "Elige los atajos que quieres para la activaci\xF3n. <kbd>F</kbd> para el *Modo predeterminado* y <kbd>T</kbd> para el *Modo TV*",
        both: "Atajos para ambos modos",
        tv: "Atajo solo para el modo TV",
        def: "Atajo solo para el modo predeterminado"
      },
      lyricsHeader: "Configuraci\xF3n de las letras",
      lyrics: "Letras",
      lyricsDescription: [
        "**Nota:** Necesitas la aplicaci\xF3n personalizada [lyrics-plus](https://spicetify.app/docs/advanced-usage/custom-apps#lyrics-plus) para usar esta funci\xF3n.",
        "Sigue las instrucciones del enlace para instalar la aplicaci\xF3n personalizada."
      ],
      lyricsAlignment: {
        setting: "Alineaci\xF3n de las letras",
        left: "Izquierda",
        center: "Centro",
        right: "Derecha"
      },
      autoHideLyrics: "Ocultar las letras autom\xE1ticamente (cuando no est\xE9n disponibles)",
      lyricsAnimationTempo: "Tempo de la animaci\xF3n de las letras",
      generalHeader: "Configuraci\xF3n general",
      progressBar: "Barra de progreso",
      playerControls: "Controles del reproductor",
      trimTitle: "Recortar t\xEDtulo",
      trimTitleUpNext: "Recortar t\xEDtulo (Siguiente)",
      showAlbum: {
        setting: "Mostrar \xE1lbum",
        never: "Nunca",
        always: "Siempre",
        date: "Mostrar con fecha de lanzamiento"
      },
      showAllArtists: "Mostrar todos los artistas",
      icons: "Iconos",
      songChangeAnimation: "Animaci\xF3n de cambio de canci\xF3n",
      fullscreen: "Pantalla completa",
      extraHeader: "Funcionalidad adicional",
      backgroundChoice: {
        setting: "\u2B50 Elecci\xF3n de fondo",
        description: [
          "**Nuevo:** \xA1Prueba la opci\xF3n de **obra de arte del \xE1lbum animado**!",
          "**Advertencia:** Se ve hermoso, pero puede ser intensivo en recursos y es experimental."
        ],
        dynamicColor: "Color s\xF3lido din\xE1mico",
        staticColor: "Color s\xF3lido est\xE1tico",
        artwork: "Obra de arte del \xE1lbum",
        animatedArt: "Obra de arte del \xE1lbum animada (Experimental)",
        artist: "Obra de arte del artista"
      },
      extraControls: "Controles adicionales",
      upnextDisplay: "Visualizaci\xF3n de la lista de reproducci\xF3n",
      contextDisplay: {
        setting: "Visualizaci\xF3n de contexto",
        always: "Siempre",
        never: "Nunca",
        mouse: "Al mover el mouse"
      },
      volumeDisplay: {
        setting: "Visualizaci\xF3n de la barra de volumen",
        description: [
          "En el modo `inteligente`, la barra de volumen se mostrar\xE1 cuando:",
          "  - mueves el mouse al lado izquierdo de la pantalla.",
          "  - cuando se cambia el volumen."
        ],
        always: "Siempre",
        never: "Nunca",
        smart: "Inteligente"
      },
      appearanceHeader: "Apariencia avanzada/Apariencia",
      appearanceSubHeader: "*(Solo cambia si sabes lo que est\xE1s haciendo!)*",
      backgroundHeader: "Modificaciones de fondo",
      backgroundSubHeader: "Viene con valores predeterminados razonables, *(solo cambia si sabes lo que est\xE1s haciendo!)*",
      backgroundColor: {
        setting: "Elecci\xF3n de color (para fondo de color din\xE1mico)",
        vibrant: "Vibrante",
        prominent: "Prominente",
        desaturated: "Desaturado (recomendado)",
        lightVibrant: "Vibrante claro",
        darkVibrant: "Vibrante oscuro",
        vibrantNonAlarming: "Vibrante sin alarma"
      },
      staticColor: "Elecci\xF3n de color (para fondo de color est\xE1tico)",
      themedButtons: "Botones tem\xE1ticos",
      themedIcons: "Iconos tem\xE1ticos",
      invertColors: {
        setting: "Invertir colores",
        never: "Nunca",
        always: "Siempre",
        auto: "Autom\xE1tico (Basado en BG)"
      },
      backAnimationTime: "Tiempo de animaci\xF3n de fondo (para fondo de imagen)",
      animationSpeed: "\u2B50 Velocidad de animaci\xF3n (para fondo animado)",
      upnextScroll: {
        setting: "Animaci\xF3n de desplazamiento de la lista de reproducci\xF3n",
        mq: "Marquesina/Desplazamiento",
        sp: "Spotify/Traducci\xF3n"
      },
      upnextTime: "Tiempo de visualizaci\xF3n de la lista de reproducci\xF3n",
      backgroundBlur: "Desenfoque de fondo",
      backgroundBrightness: "Brillo de fondo",
      aboutHeader: "Acerca de",
      configReset: "Restablecer configuraci\xF3n",
      reload: "Recargar cliente"
    },
    tvBtnDesc: "Visualizaci\xF3n del modo TV",
    fullscreenBtnDesc: "Pantalla completa"
  };

  // src/resources/locales/fr-FR.json
  var fr_FR_default = {
    langName: "Fran\xE7ais",
    context: {
      queue: "Lecture de la file d'attente",
      track: "Lecture de la piste",
      album: "Lecture de l'album",
      artist: "Lecture de l'artiste",
      playlist: "Lecture de la playlist",
      playlistFolder: "Lecture du dossier de playlist",
      search: "Lecture de la recherche",
      searchDest: "Chansons",
      collection: "Lecture de la collection",
      likedSongs: "Chansons aim\xE9es",
      trackRadio: "Lecture de la radio de la piste",
      artistRadio: "Lecture de la radio de l'artiste",
      albumRadio: "Lecture de la radio de l'album",
      playlistRadio: "Lecture de la radio de la playlist"
    },
    upnext: "\xC0 SUIVRE",
    unknownArtist: "Artiste (Indisponible)",
    settings: {
      switchToTV: "Passer en mode TV",
      switchToFullscreen: "Revenir au mode par d\xE9faut",
      tvModeConfig: "Configuration du mode TV",
      fullscreenConfig: "Configuration en plein \xE9cran",
      exit: "Quitter",
      pluginSettings: "Param\xE8tres du plugin",
      fsHideOriginal: "Masquer le bouton d'origine",
      fsHideOriginalDescription: "Masquez le bouton de plein \xE9cran d'origine de Spotify (disponible pour les utilisateurs **Premium**)",
      language: "Langue",
      autoLaunch: {
        setting: "Lancement automatique (au d\xE9marrage de Spotify)",
        description: "**Limitation :** La fen\xEAtre de Spotify ne peut pas passer en mode plein \xE9cran lors du d\xE9marrage automatique.",
        never: "Jamais (Par d\xE9faut)",
        default: "Ouvrir en mode par d\xE9faut",
        tvmode: "Ouvrir en mode TV",
        lastused: "Dernier mode utilis\xE9"
      },
      activationTypes: {
        setting: "M\xE9thodes d'activation",
        description: "Choisissez les m\xE9thodes que vous souhaitez utiliser pour activer le plugin. Touches <kbd>F</kbd> et <kbd>T</kbd>, ou boutons dans la barre sup\xE9rieure et la barre inf\xE9rieure.",
        both: "Boutons et raccourcis clavier",
        btns: "Boutons uniquement",
        keys: "Raccourcis clavier uniquement"
      },
      buttonActivation: {
        setting: "Personnaliser les boutons d'activation",
        description: "Choisissez les boutons que vous souhaitez utiliser pour l'activation, dans la barre sup\xE9rieure (*Mode TV*) et la barre inf\xE9rieure (*Mode par d\xE9faut*).",
        both: "Boutons pour les deux modes",
        tv: "Bouton uniquement pour le mode TV",
        def: "Bouton uniquement pour le mode par d\xE9faut"
      },
      keyActivation: {
        setting: "Personnaliser les touches d'activation",
        description: "Choisissez les touches que vous souhaitez utiliser pour l'activation. Touche <kbd>F</kbd> pour le *Mode par d\xE9faut* et <kbd>T</kbd> pour le *Mode TV*",
        both: "Touches pour les deux modes",
        tv: "Touche uniquement pour le mode TV",
        def: "Touche uniquement pour le mode par d\xE9faut"
      },
      lyricsHeader: "Param\xE8tres des paroles",
      lyrics: "Paroles",
      lyricsDescription: [
        "**Remarque :** Vous avez besoin de l'application personnalis\xE9e [lyrics-plus](https://spicetify.app/docs/advanced-usage/custom-apps#lyrics-plus) pour utiliser cette fonctionnalit\xE9.",
        "Suivez les instructions du lien pour installer l'application personnalis\xE9e."
      ],
      lyricsAlignment: {
        setting: "Alignement des paroles",
        left: "Gauche",
        center: "Centre",
        right: "Droite"
      },
      autoHideLyrics: "Masquer automatiquement les paroles (lorsque pas disponibles)",
      lyricsAnimationTempo: "Tempo de l'animation des paroles",
      generalHeader: "Param\xE8tres g\xE9n\xE9raux",
      progressBar: "Barre de progression",
      playerControls: "Contr\xF4les du lecteur",
      trimTitle: "R\xE9duire le titre",
      trimTitleUpNext: "R\xE9duire le titre (\xC0 suivre)",
      showAlbum: {
        setting: "Afficher l'album",
        never: "Jamais",
        always: "Toujours",
        date: "Afficher avec la date de sortie"
      },
      showAllArtists: "Afficher tous les artistes",
      icons: "Ic\xF4nes",
      songChangeAnimation: "Animation de changement de chanson",
      fullscreen: "Plein \xE9cran",
      extraHeader: "Fonctionnalit\xE9s suppl\xE9mentaires",
      backgroundChoice: {
        setting: "\u2B50 Choix de l'arri\xE8re-plan",
        description: [
          "**Nouveau :** Essayez l'option **image d'album anim\xE9e** !",
          "**Avertissement :** Cela peut \xEAtre tr\xE8s beau, mais peut consommer des ressources et est exp\xE9rimental."
        ],
        dynamicColor: "Couleur solide dynamique",
        staticColor: "Couleur solide statique",
        artwork: "Image d'album",
        animatedArt: "Image d'album anim\xE9e (Exp\xE9rimental)",
        artist: "Image de l'artiste"
      },
      extraControls: "Contr\xF4les suppl\xE9mentaires",
      upnextDisplay: "Affichage \xC0 suivre",
      contextDisplay: {
        setting: "Affichage du contexte",
        always: "Toujours",
        never: "Jamais",
        mouse: "Lors du mouvement de la souris"
      },
      volumeDisplay: {
        setting: "Affichage de la barre de volume",
        description: [
          "En mode `intelligent`, la barre de volume s'affichera lorsque :",
          "  - vous d\xE9placez votre souris vers le c\xF4t\xE9 gauche de l'\xE9cran.",
          "  - lorsque le volume est modifi\xE9."
        ],
        always: "Toujours",
        never: "Jamais",
        smart: "Intelligent"
      },
      appearanceHeader: "Param\xE8tres avanc\xE9s/Aspect",
      appearanceSubHeader: "*(\xC0 changer uniquement si vous savez ce que vous faites !)*",
      backgroundHeader: "Modifications de l'arri\xE8re-plan",
      backgroundSubHeader: "Fournit des valeurs par d\xE9faut raisonnables, *(\xC0 changer uniquement si vous savez ce que vous faites !)*",
      backgroundColor: {
        setting: "Choix de la couleur (pour un arri\xE8re-plan color\xE9 dynamique)",
        vibrant: "Vibrante",
        prominent: "Prominente",
        desaturated: "D\xE9satur\xE9e (recommand\xE9e)",
        lightVibrant: "L\xE9g\xE8rement vibrante",
        darkVibrant: "Fonc\xE9 vibrante",
        vibrantNonAlarming: "Vibrante non alarmante"
      },
      staticColor: "Choix de la couleur (pour un arri\xE8re-plan color\xE9 statique)",
      themedButtons: "Boutons th\xE9matiques",
      themedIcons: "Ic\xF4nes th\xE9matiques",
      invertColors: {
        setting: "Inverser les couleurs",
        never: "Jamais",
        always: "Toujours",
        auto: "Automatique (bas\xE9 sur le fond)"
      },
      backAnimationTime: "Temps d'animation de l'arri\xE8re-plan (pour l'arri\xE8re-plan image)",
      animationSpeed: "\u2B50 Vitesse d'animation (pour l'arri\xE8re-plan anim\xE9)",
      upnextScroll: {
        setting: "Animation de d\xE9filement \xC0 suivre",
        mq: "Marquee/Defilement",
        sp: "Spotify/Translation"
      },
      upnextTime: "Temps pour afficher \xC0 suivre",
      backgroundBlur: "Flou de l'arri\xE8re-plan",
      backgroundBrightness: "Luminosit\xE9 de l'arri\xE8re-plan",
      aboutHeader: "\xC0 propos",
      configReset: "R\xE9initialiser la configuration",
      reload: "Recharger le client"
    },
    tvBtnDesc: "Affichage du mode TV",
    fullscreenBtnDesc: "Plein \xE9cran"
  };

  // src/resources/locales/id-ID.json
  var id_ID_default = {
    langName: "Bahasa Indonesia",
    context: {
      queue: "Memutar dari antrian",
      track: "Memutar lagu",
      album: "Memutar dari album",
      artist: "Memutar dari artis",
      playlist: "Memutar dari playlist",
      playlistFolder: "Memutar dari folder playlist",
      search: "Memutar dari hasil pencarian",
      searchDest: "Lagu",
      collection: "Memutar dari koleksi",
      likedSongs: "Lagu yang disukai",
      trackRadio: "Memutar dari trek radio",
      artistRadio: "Memutar dari radio artis",
      albumRadio: "Memutar dari album radio",
      playlistRadio: "Memutar dari playlist radio"
    },
    upnext: "SELANJUTNYA",
    unknownArtist: "Artis (Tidak Tersedia)",
    settings: {
      switchToTV: "Beralih ke Mode TV",
      switchToFullscreen: "Beralih ke Mode Default",
      tvModeConfig: "Konfigurasi Mode TV",
      fullscreenConfig: "Konfigurasi Layar Penuh",
      exit: "Keluar",
      pluginSettings: "Pengaturan Plugin",
      fsHideOriginal: "Sembunyikan Tombol Default",
      fsHideOriginalDescription: "Sembunyikan tombol layar penuh bawaan Spotify (tersedia untuk pengguna **Premium**)",
      language: "Bahasa",
      autoLaunch: {
        setting: "Auto-launch (saat startup Spotify)",
        description: "**Batasan:** Jendela Spotify tidak dapat masuk ke mode layar penuh saat diluncurkan secara otomatis pada startup.",
        never: "Tidak Pernah (Default)",
        default: "Buka Mode Default",
        tvmode: "Buka Mode TV",
        lastused: "Mode Terakhir yang Digunakan"
      },
      activationTypes: {
        setting: "Metode Aktivasi",
        description: "Pilih metode yang ingin Anda gunakan untuk mengaktifkan plugin. Tombol <kbd>F</kbd> dan <kbd>T</kbd>, atau tombol di bilah atas dan bawah.",
        both: "Tombol dan Pintasan Keyboard",
        btns: "Hanya Tombol",
        keys: "Hanya Pintasan Keyboard"
      },
      buttonActivation: {
        setting: "Sesuaikan Tombol Aktivasi",
        description: "Pilih tombol yang ingin Anda gunakan untuk aktivasi, di bilah atas (*Mode TV*) dan bawah (*Mode Default*).",
        both: "Tombol untuk kedua mode",
        tv: "Tombol hanya untuk Mode TV",
        def: "Tombol hanya untuk Mode Default"
      },
      keyActivation: {
        setting: "Sesuaikan Tombol Aktivasi",
        description: "Pilih tombol yang ingin Anda gunakan untuk aktivasi. <kbd>F</kbd> untuk *Mode Default* dan <kbd>T</kbd> untuk *Mode TV*",
        both: "Tombol untuk kedua mode",
        tv: "Tombol hanya untuk Mode TV",
        def: "Tombol hanya untuk Mode Default"
      },
      lyricsHeader: "Pengaturan Lirik",
      lyrics: "Lirik",
      lyricsDescription: [
        "**Catatan:** Anda memerlukan aplikasi kustom [lyrics-plus](https://spicetify.app/docs/advanced-usage/custom-apps#lyrics-plus) untuk menggunakan fitur ini.",
        "Ikuti petunjuk dalam tautan untuk menginstal aplikasi kustom tersebut."
      ],
      lyricsAlignment: {
        setting: "Penjajaran Lirik",
        left: "Kiri",
        center: "Tengah",
        right: "Kanan"
      },
      autoHideLyrics: "Sembunyikan Lirik Secara Otomatis (saat tidak tersedia)",
      lyricsAnimationTempo: "Kecepatan Animasi Lirik",
      generalHeader: "Pengaturan Umum",
      progressBar: "Progress Bar",
      playerControls: "Kontrol Pemutar",
      trimTitle: "Potong Judul",
      trimTitleUpNext: "Potong Judul (Selanjutnya)",
      showAlbum: {
        setting: "Tampilkan Album",
        never: "Tidak Pernah",
        always: "Selalu",
        date: "Tampilkan dengan Tanggal Rilis"
      },
      showAllArtists: "Tampilkan Semua Artis",
      icons: "Ikon",
      songChangeAnimation: "Animasi Perubahan Lagu",
      fullscreen: "Layar Penuh",
      extraHeader: "Fungsionalitas Tambahan",
      backgroundChoice: {
        setting: "\u2B50 Pilihan Latar Belakang",
        description: [
          "**Baru:** Cobalah opsi **album seni bergerak**!",
          "**Peringatan:** Terlihat indah tetapi mungkin membutuhkan sumber daya yang tinggi, dan eksperimental."
        ],
        dynamicColor: "Warna solid dinamis",
        staticColor: "Warna solid statis",
        artwork: "Seni Album",
        animatedArt: "Seni Album Bergerak (Eksperimental)",
        artist: "Seni Artis"
      },
      sidebarQueue: "Aktifkan Antrian di Bilah Samping (menggantikan tombol lirik)",
      sidebarQueueDescription: [
        "Alihkan antrean di bilah sisi dengan <kbd>Q</kbd> atau tombol di bilah ekstra.",
        "Pastikan mengaktifkan pengaturan dalam fitur Experimental. Lihat [ini] (https://github.com/daksh2k/Spicetify-stuff/issues/167#issuecomment-2199480598)"
      ],
      extraControls: "Kontrol Tambahan",
      upnextDisplay: "Tampilan Selanjutnya",
      contextDisplay: {
        setting: "Tampilan Konteks",
        always: "Selalu",
        never: "Tidak Pernah",
        mouse: "Pada pergerakan mouse"
      },
      volumeDisplay: {
        setting: "Tampilan Bar Volume",
        description: [
          "Dalam mode `cerdas`, bar volume akan ditampilkan ketika:",
          "  - Anda memindahkan mouse ke sisi kiri layar.",
          "  - ketika volume diubah."
        ],
        always: "Selalu",
        never: "Tidak Pernah",
        smart: "Cerdas"
      },
      appearanceHeader: "Lanjutan/Penampilan",
      appearanceSubHeader: "*(Ubah hanya jika Anda tahu apa yang Anda lakukan!)*",
      backgroundHeader: "Modifikasi Latar Belakang",
      backgroundSubHeader: "Hadir dengan standar yang wajar, *(Ubah hanya jika Anda tahu apa yang Anda lakukan!)*",
      backgroundColor: {
        setting: "Pilihan Warna (untuk latar belakang berwarna dinamis)",
        vibrant: "Vibrant",
        prominent: "Prominent",
        desaturated: "Desaturated (disarankan)",
        lightVibrant: "Light Vibrant",
        darkVibrant: "Dark Vibrant",
        vibrantNonAlarming: "Vibrant Non Alarming"
      },
      staticColor: "Pilihan Warna (untuk latar belakang berwarna statis)",
      themedButtons: "Tombol Bertema",
      themedIcons: "Ikon Vertema",
      invertColors: {
        setting: "Balik Warna",
        never: "Tidak Pernah",
        always: "Selalu",
        auto: "Otomatis (Berdasarkan Latar)"
      },
      verticalMonitorSupport: "Dukungan Monitor Vertical",
      verticalMonitorSupportDescription: "Aktifkan ini jika Anda memiliki pengaturan monitor vertical. Lirik akan ditampilkan di bagian bawah, ketika tinggi jendela lebih besar dari lebar.",
      backAnimationTime: "Waktu Animasi Latar Belakang (untuk latar belakang gambar)",
      animationSpeed: "\u2B50 Kecepatan Animasi (untuk latar belakang bergerak)",
      upnextScroll: {
        setting: "Animasi Gulir Selanjutnya",
        mq: "Marquee/Gulir",
        sp: "Spotify/Translasi"
      },
      upnextTime: "Waktu Selanjutnya untuk Ditampilkan",
      backgroundBlur: "Blur Latar Belakang",
      backgroundBrightness: "Kecerahan Latar Belakang",
      aboutHeader: "Tentang",
      configReset: "Atur Ulang Konfigurasi",
      reload: "Muat Ulang Klien"
    },
    tvBtnDesc: "Tampilan Mode TV",
    fullscreenBtnDesc: "Layar Penuh"
  };

  // src/resources/locales/pt-BR.json
  var pt_BR_default = {
    langName: "Portugu\xEAs Brasileiro",
    context: {
      queue: "Reproduzindo da fila",
      track: "Reproduzindo faixa",
      album: "Reproduzindo do \xE1lbum",
      artist: "Reproduzindo do artista",
      playlist: "Reproduzindo da playlist",
      playlistFolder: "Reproduzindo de pasta de playlist",
      search: "Reproduzindo da pesquisa",
      searchDest: "M\xFAsicas",
      collection: "Reproduzindo da cole\xE7\xE3o",
      likedSongs: "M\xFAsicas Curtidas",
      trackRadio: "Reproduzindo do r\xE1dio da faixa",
      artistRadio: "Reproduzindo do r\xE1dio do artista",
      albumRadio: "Reproduzindo do r\xE1dio do \xE1lbum",
      playlistRadio: "Reproduzindo do r\xE1dio da playlist"
    },
    upnext: "A SEGUIR",
    unknownArtist: "Artista (Indispon\xEDvel)",
    settings: {
      switchToTV: "Mudar para Modo TV",
      switchToFullscreen: "Mudar para Modo Padr\xE3o",
      tvModeConfig: "Configura\xE7\xE3o do Modo TV",
      fullscreenConfig: "Configura\xE7\xE3o de Tela Cheia",
      exit: "Sair",
      pluginSettings: "Configura\xE7\xF5es do Plugin",
      fsHideOriginal: "Ocultar Bot\xE3o Padr\xE3o",
      fsHideOriginalDescription: "Oculta o bot\xE3o de tela cheia padr\xE3o do Spotify (dispon\xEDvel para usu\xE1rios **Premium**)",
      language: "Idioma",
      autoLaunch: {
        setting: "Inicializa\xE7\xE3o autom\xE1tica (na inicializa\xE7\xE3o do Spotify))",
        description: "**Limita\xE7\xE3o:** A janela do Spotify n\xE3o pode ser maximizada automaticamente na inicializa\xE7\xE3o.",
        never: "Nunca (Padr\xE3o)",
        default: "Modo Padr\xE3o",
        tvmode: "Modo TV",
        lastused: "\xDAltimo Modo Utilizado"
      },
      activationTypes: {
        setting: "M\xE9todos de Ativa\xE7\xE3o",
        description: "Escolha os m\xE9todos que deseja usar para ativar o plugin. <kbd>F</kbd> e <kbd>T</kbd> keys, ou bot\xF5es na barra superior e inferior.",
        both: "Bot\xF5es e Atalhos de Teclado",
        btns: "Apenas Bot\xF5es",
        keys: "Apenas Atalhos de Teclado"
      },
      buttonActivation: {
        setting: "Personalizar Bot\xF5es de Ativa\xE7\xE3o",
        description: "Escolha os bot\xF5es desejados para ativa\xE7\xE3o, na barra superior (*Modo TV*) e inferior (*Modo Padr\xE3o*).",
        both: "Modo Padr\xE3o e Modo TV",
        tv: "Modo TV",
        def: "Modo Padr\xE3o"
      },
      keyActivation: {
        setting: "Personalizar Teclas de Ativa\xE7\xE3o",
        description: "Escolha as teclas desejadas para ativa\xE7\xE3o. Tecla <kbd>F</kbd> para *Modo Padr\xE3o* e <kbd>T</kbd> para *Modo TV*",
        both: "Modo Padr\xE3o e Modo TV",
        tv: "Modo TV",
        def: "Modo Padr\xE3o"
      },
      lyricsHeader: "Configura\xE7\xF5es de Letras",
      lyrics: "Letras",
      lyricsDescription: [
        "**Observa\xE7\xE3o:** Voc\xEA precisa do [lyrics-plus](https://spicetify.app/docs/advanced-usage/custom-apps#lyrics-plus) aplicativo personalizado para usar esse recurso.",
        "Siga as instru\xE7\xF5es no link para instalar o aplicativo personalizado."
      ],
      lyricsAlignment: {
        setting: "Alinhamento de Letras",
        left: "Esquerda",
        center: "Centro",
        right: "Direita"
      },
      autoHideLyrics: "Ocultar Letras Automaticamente (Quando indispon\xEDveis)",
      lyricsAnimationTempo: "Tempo de Anima\xE7\xE3o das Letras",
      generalHeader: "Configura\xE7\xF5es Gerais",
      progressBar: "Barra de Progresso",
      playerControls: "Controles do Reprodutor",
      trimTitle: "Reduzir T\xEDtulo",
      trimTitleUpNext: "Reduzir T\xEDtulo (Em breve)",
      showAlbum: {
        setting: "Exibi\xE7\xE3o do \xC1lbum",
        never: "Nunca",
        always: "Sempre",
        date: "Exibir com Data de Lan\xE7amento"
      },
      showAllArtists: "Exibi\xE7\xE3o de Todos os Artistas",
      icons: "\xCDcones",
      songChangeAnimation: "Anima\xE7\xE3o de Troca de M\xFAsica",
      fullscreen: "Tela Cheia",
      extraHeader: "Funcionalidades Extras",
      backgroundChoice: {
        setting: "\u2B50 Escolha de Fundo",
        description: [
          "**Novidade:** Experimente a op\xE7\xE3o de **Arte do \xC1lbum Animada**!",
          "**Aviso:** Parece bonito, mas pode exigir muito desempenho e \xE9 experimental."
        ],
        dynamicColor: "Cor s\xF3lida din\xE2mica",
        staticColor: "Cor s\xF3lida est\xE1tica",
        artwork: "Arte do \xE1lbum",
        animatedArt: "Arte do \xC1lbum Animada (Experimental))",
        artist: "Arte do Artista"
      },
      extraControls: "Controles Extras",
      upnextDisplay: "Exibi\xE7\xE3o da Pr\xF3xima M\xFAsuica",
      contextDisplay: {
        setting: "Exibi\xE7\xE3o do Contexto",
        always: "Sempre",
        never: "Nunca",
        mouse: "Ao movimentar o mouse"
      },
      volumeDisplay: {
        setting: "Exibi\xE7\xE3o da Barra de Volume",
        description: [
          "No modo `inteligente`, a barra de volume ser\xE1 exibida quando:",
          "  - voc\xEA mover o mouse para o lado esquerdo da tela.",
          " - quando o volume for alterado."
        ],
        always: "Sempre",
        never: "Nunca",
        smart: "Inteligente"
      },
      appearanceHeader: "Avan\xE7ado/Apar\xEAncia",
      appearanceSubHeader: "**(Mude apenas se souber o que est\xE1 fazendo!)*",
      backgroundHeader: "Modifica\xE7\xF5es de Fundo",
      backgroundSubHeader: "Vem com padr\xF5es razo\xE1veis, *(Mude apenas se souber o que est\xE1 fazendo!)*",
      backgroundColor: {
        setting: "Escolha de Cor (Para fundo colorido din\xE2mico)",
        vibrant: "Vibrante",
        prominent: "Destaque",
        desaturated: "Desaturado (Recomendado)",
        lightVibrant: "Vibrante Claro",
        darkVibrant: "Vibrante Escuro",
        vibrantNonAlarming: "Vibrante N\xE3o Alarmante"
      },
      staticColor: "Escolha de Cor (Para fundo colorido din\xE2mico)",
      themedButtons: "Bot\xF5es Tem\xE1ticos",
      themedIcons: "\xCDcones Tem\xE1ticos",
      invertColors: {
        setting: "Inverter Cores",
        never: "Nunca",
        always: "Sempre",
        auto: "Autom\xE1tico (Baseado no fundo)"
      },
      verticalMonitorSupport: "Suporte para Monitor Vertical",
      verticalMonitorSupportDescription: "Ative isso se tiver uma configura\xE7\xE3o de monitor vertical. As letras ser\xE3o exibidas na parte inferior quando a altura da janela for maior que a largura.",
      backAnimationTime: "Tempo de Anima\xE7\xE3o do Fundo (Para fundo de imagem)",
      animationSpeed: "\u2B50 Velocidade de Anima\xE7\xE3o (Para fundo animado)",
      upnextScroll: {
        setting: "Anima\xE7\xE3o de rolagem da faixa a seguir",
        mq: "Marca\xE7\xE3o/Rolagem",
        sp: "Spotify/Tradu\xE7\xE3o"
      },
      upnextTime: "Tempo para exibi\xE7\xE3o da faixa a seguir",
      backgroundBlur: "Desfoque do Fundo",
      backgroundBrightness: "Brilho do Fundo",
      aboutHeader: "Sobre",
      configReset: "Redefinir Configura\xE7\xE3o",
      reload: "Recarregar Cliente"
    },
    tvBtnDesc: "Exibi\xE7\xE3o do Modo TV",
    fullscreenBtnDesc: "Tela Cheia"
  };

  // src/resources/locales/zh-TW.json
  var zh_TW_default = {
    langName: "\u7E41\u9AD4\u4E2D\u6587",
    context: {
      queue: "\u6B63\u5728\u5F9E\u4F47\u5217\u64AD\u653E",
      track: "\u6B63\u5728\u64AD\u653E",
      album: "\u6B63\u5728\u5F9E\u5C08\u8F2F\u64AD\u653E",
      artist: "\u6B63\u5728\u5F9E\u85DD\u4EBA\u64AD\u653E",
      playlist: "\u6B63\u5728\u5F9E\u6B4C\u55AE\u64AD\u653E",
      playlistFolder: "\u6B63\u5728\u5F9E\u6B4C\u55AE\u8CC7\u6599\u593E\u64AD\u653E",
      search: "\u6B63\u5728\u5F9E\u641C\u5C0B\u7D50\u679C\u64AD\u653E",
      searchDest: "\u6B4C\u66F2",
      collection: "\u6B63\u5728\u5F9E\u5408\u8F2F\u64AD\u653E",
      likedSongs: "\u5DF2\u6309\u8B9A\u7684\u6B4C\u66F2",
      trackRadio: "\u6B63\u5728\u5F9E\u6B4C\u66F2\u96FB\u53F0\u64AD\u653E",
      artistRadio: "\u6B63\u5728\u5F9E\u85DD\u4EBA\u96FB\u53F0\u64AD\u653E",
      albumRadio: "\u6B63\u5728\u5F9E\u5C08\u8F2F\u96FB\u53F0\u64AD\u653E",
      playlistRadio: "\u6B63\u5728\u5F9E\u6B4C\u55AE\u96FB\u53F0\u64AD\u653E"
    },
    upnext: "\u4E0B\u4E00\u9996",
    unknownArtist: "\u672A\u77E5\u85DD\u4EBA",
    settings: {
      switchToTV: "\u5207\u63DB\u81F3\u96FB\u8996\u6A21\u5F0F",
      switchToFullscreen: "\u5207\u63DB\u81F3\u9810\u8A2D\u6A21\u5F0F",
      tvModeConfig: "\u96FB\u8996\u6A21\u5F0F\u8A2D\u5B9A",
      fullscreenConfig: "\u5168\u87A2\u5E55\u6A21\u5F0F\u8A2D\u5B9A",
      exit: "\u9000\u51FA",
      pluginSettings: "\u63D2\u4EF6\u8A2D\u5B9A",
      fsHideOriginal: "\u96B1\u85CF\u539F\u7248\u6309\u9215",
      fsHideOriginalDescription: "\u96B1\u85CFSpotify\u539F\u7248\u7684\u5168\u87A2\u5E55\u6309\u9215 (\u53EA\u5C0D**Premium**\u4F7F\u7528\u8005\u6709\u6548)",
      language: "\u8A9E\u8A00",
      autoLaunch: {
        setting: "\u81EA\u52D5\u555F\u52D5 (\u7576Spotify\u555F\u52D5\u6642)",
        description: "**\u9650\u5236:** Spotify \u8996\u7A97\u5728\u81EA\u52D5\u555F\u52D5\u6642\u7121\u6CD5\u9032\u5165\u5168\u87A2\u5E55\u6A21\u5F0F",
        never: "\u6C38\u4E0D (\u9810\u8A2D)",
        default: "\u9032\u5165\u9810\u8A2D\u6A21\u5F0F",
        tvmode: "\u96FB\u8996\u6A21\u5F0F",
        lastused: "\u4E0A\u6B21\u4F7F\u7528\u7684\u6A21\u5F0F"
      },
      activationTypes: {
        setting: "\u958B\u555F\u65B9\u5F0F",
        description: "\u9078\u64C7\u4F60\u8981\u958B\u555F\u5168\u87A2\u5E55\u7684\u65B9\u5F0F <kbd>F</kbd> \u548C <kbd>T</kbd> \u9375\uFF0C\u6216\u8005\u5728\u9802\u90E8\u548C\u5E95\u90E8\u6B04\u7684\u6309\u9215",
        both: "\u6309\u9215\u548C\u9375\u76E4\u5FEB\u6377\u9375",
        btns: "\u50C5\u9650\u6309\u9215",
        keys: "\u50C5\u9650\u9375\u76E4\u5FEB\u6377\u9375"
      },
      buttonActivation: {
        setting: "\u81EA\u8A02\u958B\u555F\u6309\u9215",
        description: "\u9078\u64C7\u4F60\u8981\u958B\u555F\u5168\u87A2\u5E55\u7684\u65B9\u5F0F\uFF0C\u9802\u90E8(*\u96FB\u8996\u6A21\u5F0F*)\u548C\u5E95\u90E8(*\u9810\u8A2D\u6A21\u5F0F*)",
        both: "\u5169\u7A2E\u6A21\u5F0F\u7684\u6309\u9215",
        tv: "\u50C5\u9650\u96FB\u8996\u6A21\u5F0F\u7684\u6309\u9215",
        def: "\u50C5\u9650\u4E00\u822C\u6A21\u5F0F\u7684\u6309\u9215"
      },
      keyActivation: {
        setting: "\u81EA\u8A02\u958B\u555F\u5FEB\u6377\u9375",
        description: "\u9078\u64C7\u4F60\u8981\u958B\u555F\u5168\u87A2\u5E55\u7684\u65B9\u5F0F <kbd>F</kbd>  \u5207\u63DB\u5230*\u9810\u8A2D\u6A21\u5F0F*\uFF0C <kbd>T</kbd> \u5207\u63DB\u5230*\u96FB\u8996\u6A21\u5F0F*",
        both: "\u5169\u7A2E\u6A21\u5F0F\u7684\u6309\u9375",
        tv: "\u50C5\u9650\u96FB\u8996\u6A21\u5F0F\u7684\u6309\u9375",
        def: "\u50C5\u9650\u4E00\u822C\u6A21\u5F0F\u7684\u6309\u9375"
      },
      lyricsHeader: "\u6B4C\u8A5E\u8A2D\u5B9A",
      lyrics: "\u6B4C\u8A5E",
      lyricsDescription: [
        "**\u6CE8\u610F:**\u4F60\u9700\u8981\u5148\u5B89\u88DD[lyrics-plus](https://spicetify.app/docs/advanced-usage/custom-apps#lyrics-plus)\u63D2\u4EF6\u624D\u80FD\u4F7F\u7528\u6B4C\u8A5E\u529F\u80FD",
        "\u8ACB\u6839\u64DA\u9023\u7D50\u88E1\u7684\u6307\u793A\u5B89\u88DD\u9019\u500B\u63D2\u4EF6"
      ],
      lyricsAlignment: {
        setting: "\u6B4C\u8A5E\u5C0D\u9F4A\u65B9\u5F0F",
        left: "\u9760\u5DE6\u5C0D\u9F4A",
        center: "\u7F6E\u4E2D",
        right: "\u9760\u53F3\u5C0D\u9F4A"
      },
      autoHideLyrics: "\u81EA\u52D5\u96B1\u85CF\u6B4C\u8A5E (\u7576\u6B4C\u8A5E\u4E0D\u53EF\u7528\u6642)",
      lyricsAnimationTempo: "\u6B4C\u8A5E\u52D5\u756B\u901F\u5EA6",
      generalHeader: "\u4E00\u822C\u8A2D\u5B9A",
      progressBar: "\u64AD\u653E\u9032\u5EA6\u689D",
      playerControls: "\u64AD\u653E\u63A7\u5236",
      trimTitle: "\u7E2E\u77ED\u6A19\u984C",
      trimTitleUpNext: "\u7E2E\u77ED\u4E0B\u4E00\u9996\u63D0\u793A\u7684\u6A19\u984C",
      showAlbum: {
        setting: "\u986F\u793A\u5C08\u8F2F\u6A19\u984C",
        never: "\u6C38\u4E0D\u986F\u793A",
        always: "\u6C38\u9060\u986F\u793A",
        date: "\u8207\u767C\u4F48\u5E74\u5206\u4E00\u8D77\u986F\u793A"
      },
      showAllArtists: "\u986F\u793A\u6240\u6709\u85DD\u4EBA",
      icons: "\u986F\u793A\u5716\u793A",
      songChangeAnimation: "\u6B4C\u66F2\u5207\u63DB\u52D5\u756B",
      fullscreen: "\u5168\u87A2\u5E55",
      extraHeader: "\u984D\u5916\u529F\u80FD\u8A2D\u5B9A",
      backgroundChoice: {
        setting: "\u80CC\u666F\u8A2D\u5B9A",
        description: [
          "**\u65B0\u529F\u80FD:** \u8A66\u8A66\u770B **\u52D5\u5316\u5C08\u8F2F\u7167** \u9078\u9805!",
          "**\u8B66\u544A:** \u5F88\u6F02\u4EAE\uFF0C\u4F46\u53EF\u80FD\u6D88\u8017\u66F4\u591A\u96FB\u8166\u8CC7\u6E90\uFF0C\u800C\u4E14\u9019\u662F\u5BE6\u9A57\u6027\u7684\u529F\u80FD"
        ],
        dynamicColor: "\u52D5\u614B\u7D14\u8272",
        staticColor: "\u975C\u614B\u7D14\u8272",
        artwork: "\u5C08\u8F2F\u7167",
        animatedArt: "\u52D5\u5316\u5C08\u8F2F\u7167 (\u5BE6\u9A57\u6027)",
        artist: "\u85DD\u4EBA\u5C01\u9762"
      },
      extraControls: "\u984D\u5916\u63A7\u5236",
      upnextDisplay: "\u4E0B\u4E00\u9996\u63D0\u793A",
      contextDisplay: {
        setting: "\u64AD\u653E\u4F86\u6E90\u986F\u793A",
        always: "\u6C38\u9060\u986F\u793A",
        never: "\u6C38\u4E0D\u986F\u793A",
        mouse: "\u7576\u6ED1\u9F20\u79FB\u52D5\u6642\u986F\u793A"
      },
      volumeDisplay: {
        setting: "\u97F3\u91CF\u689D\u986F\u793A",
        description: [
          "\u5728\u81EA\u52D5\u6A21\u5F0F\u4E0B\uFF0C\u97F3\u91CF\u689D\u5C07\u6703\u5728\u4EE5\u4E0B\u60C5\u6CC1\u986F\u793A:",
          " - \u6ED1\u9F20\u79FB\u52D5\u5230\u87A2\u5E55\u5DE6\u65B9",
          " - \u97F3\u91CF\u6709\u8B8A\u5316"
        ],
        always: "\u6C38\u9060\u986F\u793A",
        never: "\u6C38\u4E0D\u986F\u793A",
        smart: "\u81EA\u52D5\u6A21\u5F0F"
      },
      appearanceHeader: "\u9032\u968E/\u5916\u89C0\u8A2D\u5B9A",
      appearanceSubHeader: "*(\u9664\u975E\u4F60\u77E5\u9053\u4F60\u5728\u5E79\u561B\uFF0C\u4E0D\u7136\u4E0D\u8981\u6539!)*",
      backgroundHeader: "\u80CC\u666F\u4FEE\u6539",
      backgroundSubHeader: "\u6709\u5408\u7406\u7684\u9810\u8A2D\uFF0C*\u9664\u975E\u4F60\u77E5\u9053\u4F60\u5728\u5E79\u561B\uFF0C\u4E0D\u7136\u4E0D\u8981\u6539!*",
      backgroundColor: {
        setting: "\u984F\u8272\u9078\u64C7 (\u7528\u65BC\u52D5\u614B\u7D14\u8272)",
        vibrant: "\u8C50\u5BCC\u591A\u5F69",
        prominent: "\u7A81\u51FA",
        desaturated: "\u53BB\u98FD\u548C\u5EA6 (\u63A8\u85A6)",
        lightVibrant: "\u660E\u4EAE\u7684\u6D3B\u529B",
        darkVibrant: "\u6DF1\u8272\u7684\u6D3B\u529B",
        vibrantNonAlarming: "\u4E0D\u5F15\u4EBA\u6CE8\u76EE\u7684\u6D3B\u529B"
      },
      staticColor: "\u984F\u8272\u9078\u64C7 (\u7528\u65BC\u975C\u614B\u7D14\u8272)",
      themedButtons: "\u4E3B\u984C\u8272\u6309\u9215",
      themedIcons: "\u4E3B\u984C\u8272\u5716\u793A",
      invertColors: {
        setting: "\u53CD\u8F49\u984F\u8272",
        never: "\u6C38\u4E0D",
        always: "\u6C38\u9060",
        auto: "\u81EA\u52D5 (\u57FA\u65BC\u80CC\u666F)"
      },
      verticalMonitorSupport: "\u5782\u76F4\u986F\u793A\u5668\u652F\u63F4",
      verticalMonitorSupportDescription: "\u5982\u679C\u4F60\u6709\u5782\u76F4\u986F\u793A\u5668\uFF0C\u8ACB\u555F\u7528\u6B64\u529F\u80FD\u3002\u7576\u8996\u7A97\u9AD8\u5EA6\u5927\u65BC\u5BEC\u5EA6\u6642\uFF0C\u6B4C\u8A5E\u5C07\u986F\u793A\u5728\u5E95\u90E8\u3002",
      backAnimationTime: "\u80CC\u666F\u52D5\u756B\u6642\u9593 (\u7528\u65BC\u5716\u7247\u80CC\u666F)",
      animationSpeed: "\u2B50 \u52D5\u756B\u901F\u5EA6 (\u7528\u65BC\u52D5\u756B\u80CC\u666F)",
      upnextScroll: {
        setting: "\u4E0B\u4E00\u9996\u63D0\u793A\u52D5\u756B",
        mq: "\u8DD1\u99AC\u71C8/\u6EFE\u52D5",
        sp: "Spotify/\u8B8A\u63DB"
      },
      upnextTime: "\u4E0B\u4E00\u9996\u63D0\u793A\u986F\u793A\u6642\u9593",
      backgroundBlur: "\u80CC\u666F\u6A21\u7CCA",
      backgroundBrightness: "\u80CC\u666F\u4EAE\u5EA6",
      aboutHeader: "\u95DC\u65BC",
      configReset: "\u91CD\u8A2D\u8A2D\u5B9A",
      reload: "\u91CD\u65B0\u8F09\u5165\u63D2\u4EF6"
    },
    tvBtnDesc: "\u96FB\u8996\u6A21\u5F0F",
    fullscreenBtnDesc: "\u5168\u87A2\u5E55\u6A21\u5F0F"
  };

  // src/resources/strings.ts
  var import_lodash2 = __toESM(require_lodash());
  var translations = {
    "en-US": en_US_default,
    "it-IT": (0, import_lodash2.default)(it_IT_default, en_US_default),
    "zh-CN": (0, import_lodash2.default)(zh_CN_default, en_US_default),
    "de-DE": (0, import_lodash2.default)(de_DE_default, en_US_default),
    "tr-TR": (0, import_lodash2.default)(tr_TR_default, en_US_default),
    "ru-RU": (0, import_lodash2.default)(ru_RU_default, en_US_default),
    "vi-VN": (0, import_lodash2.default)(vi_VN_default, en_US_default),
    "es-ES": (0, import_lodash2.default)(es_ES_default, en_US_default),
    "fr-FR": (0, import_lodash2.default)(fr_FR_default, en_US_default),
    "id-ID": (0, import_lodash2.default)(id_ID_default, en_US_default),
    "pt-BR": (0, import_lodash2.default)(pt_BR_default, en_US_default),
    "zh-TW": (0, import_lodash2.default)(zh_TW_default, en_US_default)
  };
  var strings_default = translations;

  // src/services/html-creator.ts
  var getHtmlContent = (areLyricsForceHidden) => {
    return `
        <canvas id="fsd-background"></canvas>
  ${config_default.get("contextDisplay") !== "never" ? `
   <div id="fsd-ctx-container">
      <div id="fsd-ctx-icon"></div>
      <div id="fsd-ctx-details">
        <div id="fsd-ctx-source"></div>
        <div id="fsd-ctx-name"></div>
      </div>
    </div>` : ""}
 ${config_default.get("upnextDisplay") ? `
<div id="fsd-upnext-container">
      <div id="fsd_next_art">
        <div id="fsd_next_art_image"></div>
       </div>
      <div id="fsd_next_details">
        <div id="fsd_up_next_text"></div>
        <div id="fsd_next_tit_art">
        <div id="fsd_next_tit_art_inner">
        <span id="fsd_first_span"></span>
        <span id="fsd_second_span"></span>
        </div></div>
      </div>
    </div>` : ""}
<div id="fsd-volume-parent"></div>
${config_default.get("lyricsDisplay") ? `<div id="fad-lyrics-plus-container"></div>` : ""}
<div id="fsd-foreground">
    <div id="fsd-art">
        <div id="fsd-art-image">
            <div id="fsd-art-inner"></div>
        </div>
    </div>
    <div id="fsd-details">
            <div id="fsd-title" class="fsd-song-meta">
                 ${constants_default.PLAYING_ICON}
                 ${constants_default.PAUSED_ICON}
                 <span></span>
            </div>
            <div id="fsd-artist">
                ${constants_default.ARTIST}
                <span class="fsd-artist-list"></span>
            </div>
            ${config_default.get("showAlbum") !== "never" ? `<div id="fsd-album" class="fsd-song-meta">
                 ${constants_default.ALBUM}
                 <span></span>
            </div>` : ""} 
            <div id="fsd-status" class="${config_default.get("playerControls") !== "never" || config_default.get("extraControls") !== "never" || config_default.get("progressBarDisplay") ? "active" : ""}">
                ${config_default.get("extraControls") !== "never" ? `<div class="fsd-controls-left fsd-controls extra-controls">
                       <button class="fs-button" id="fsd-heart">
                           <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons["heart"]}</svg>
                       </button>
                       <button class="fs-button" id="fsd-shuffle">
                           <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons["shuffle"]}</svg>
                       </button>
                    </div>` : ""}
                    ${config_default.get("playerControls") !== "never" ? `
                    <div class="fsd-controls-center fsd-controls">
                        <button class="fs-button" id="fsd-back">
                            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons["skip-back"]}</svg>
                        </button>
                        <button class="fs-button" id="fsd-play">
                            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons.play}</svg>
                        </button>
                        <button class="fs-button" id="fsd-next">
                            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons["skip-forward"]}</svg>
                        </button>
                    </div>` : ""}
                ${config_default.get("extraControls") !== "never" ? `<div class="fsd-controls-right fsd-controls extra-controls">
                        ${config_default.get("invertColors") === "auto" ? `<button class="fs-button" id="fsd-invert"> ${constants_default.INVERT_ACTIVE}</button>` : ""}
                       <button class="fs-button" id="fsd-repeat">
                            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons["repeat"]}</svg>
                       </button>
                       ${config_default.get("lyricsDisplay") && !config_default.get("sidebarQueue") ? `<button id="fsd-lyrics" class="fs-button ${areLyricsForceHidden ? "" : "button-active"}">
                       ${areLyricsForceHidden ? constants_default.LYRICS_ACTIVE : constants_default.LYRICS_INACTIVE}
                    </button>` : ""}
                      ${config_default.get("sidebarQueue") ? `<button class="fs-button" id="fsd-queue">
                       <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons["queue"]}</svg>
                  </button>` : ""}
                    </div>` : ""}
                ${config_default.getGlobal("tvMode") && !(config_default.get("playerControls") !== "never" && config_default.get("extraControls") !== "never") ? `<div id="fsd-progress-parent"></div>` : ""}
            </div>
            ${config_default.getGlobal("tvMode") && config_default.get("playerControls") !== "never" && config_default.get("extraControls") !== "never" ? `<div id="fsd-progress-parent"></div>` : ""}
    </div>
    ${!config_default.getGlobal("tvMode") ? `<div id="fsd-progress-parent"></div>` : ""}
</div>`;
  };

  // src/services/mousetrap-record.ts
  function initMoustrapRecord(Mousetrap) {
    var _recordedSequence = [], _recordedSequenceCallback = null, _currentRecordedKeys = [], _recordedCharacterKey = false, _recordTimer = null, _origHandleKey = Mousetrap.prototype.handleKey;
    function _handleKey(character, modifiers, e) {
      var self2 = this;
      if (!self2.recording) {
        _origHandleKey.apply(self2, arguments);
        return;
      }
      if (e.type == "keydown") {
        if (character.length === 1 && _recordedCharacterKey) {
          _recordCurrentCombo();
        }
        for (i = 0; i < modifiers.length; ++i) {
          _recordKey(modifiers[i]);
        }
        _recordKey(character);
      } else if (e.type == "keyup" && _currentRecordedKeys.length > 0) {
        _recordCurrentCombo();
      }
    }
    function _recordKey(key) {
      var i2;
      for (i2 = 0; i2 < _currentRecordedKeys.length; ++i2) {
        if (_currentRecordedKeys[i2] === key) {
          return;
        }
      }
      _currentRecordedKeys.push(key);
      if (key.length === 1) {
        _recordedCharacterKey = true;
      }
    }
    function _recordCurrentCombo() {
      _recordedSequence.push(_currentRecordedKeys);
      _currentRecordedKeys = [];
      _recordedCharacterKey = false;
      _restartRecordTimer();
    }
    function _normalizeSequence(sequence) {
      var i2;
      for (i2 = 0; i2 < sequence.length; ++i2) {
        sequence[i2].sort(function(x, y) {
          if (x.length > 1 && y.length === 1) {
            return -1;
          } else if (x.length === 1 && y.length > 1) {
            return 1;
          }
          return x > y ? 1 : -1;
        });
        sequence[i2] = sequence[i2].join("+");
      }
    }
    function _finishRecording() {
      if (_recordedSequenceCallback) {
        _normalizeSequence(_recordedSequence);
        _recordedSequenceCallback(_recordedSequence);
      }
      _recordedSequence = [];
      _recordedSequenceCallback = null;
      _currentRecordedKeys = [];
    }
    function _restartRecordTimer() {
      clearTimeout(_recordTimer);
      _recordTimer = setTimeout(_finishRecording, 1e3);
    }
    Mousetrap.prototype.record = function(callback) {
      var self2 = this;
      self2.recording = true;
      _recordedSequenceCallback = function() {
        self2.recording = false;
        callback.apply(self2, arguments);
      };
    };
    Mousetrap.prototype.handleKey = function() {
      var self2 = this;
      _handleKey.apply(self2, arguments);
    };
    Mousetrap.init();
  }

  // src/ui/components/ProgressBar/ProgressBar.tsx
  var React = __toESM(require_react());
  var import_classnames = __toESM(require_classnames());
  var SeekableProgressBar = ({ state }) => {
    const [curProgress, setProgress] = React.useState(Spicetify.Player.getProgress());
    const [curDuration, setDuration] = React.useState(Spicetify.Player.getDuration());
    const [secondaryPref, setSecondaryPref] = React.useState(config_default.get("showRemainingTime"));
    const [changingProgress, setChangingProgress] = React.useState({
      isChanging: false,
      data: null
    });
    const progSlider = React.useRef(null);
    const [visibility, setVisibility] = React.useState(true);
    const progressTimer = React.useRef(null);
    const onMouseDown = (evt) => {
      if (evt.button == 0) {
        const sliderWidth = progSlider.current?.getBoundingClientRect().width ?? 480;
        const newData = {
          isChanging: true,
          data: {
            begin: evt.offsetX,
            positionCoord: evt.offsetX,
            beginClient: evt.clientX,
            sliderDimen: sliderWidth
          }
        };
        const newPercentage = newData.data.positionCoord / sliderWidth;
        setProgress(newPercentage * curDuration);
        setChangingProgress(newData);
      }
    };
    const onMouseMove = (evt) => {
      if (changingProgress.isChanging && changingProgress.data) {
        const moveX = evt.clientX - changingProgress.data.beginClient;
        const sliderWidth = changingProgress.data.sliderDimen;
        const newPosX = Math.min(Math.max(changingProgress.data.begin + moveX, 0), sliderWidth);
        const newPercentage = newPosX / sliderWidth;
        setProgress(newPercentage * curDuration);
        setChangingProgress({
          isChanging: true,
          data: { ...changingProgress.data, positionCoord: newPosX }
        });
      }
      if (state === "mousemove") {
        hideProgressBar();
      }
    };
    const onMouseUp = (evt) => {
      if (evt.button == 0 && changingProgress.isChanging) {
        Spicetify.Player.seek(curProgress);
        setChangingProgress({ isChanging: false, data: null });
      }
    };
    const hideProgressBar = (timeout = 3e3) => {
      if (progressTimer.current) {
        clearTimeout(progressTimer.current);
      }
      setVisibility(true);
      progressTimer.current = setTimeout(() => {
        setVisibility(false);
      }, timeout);
    };
    const setDragListener = () => {
      progSlider.current?.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };
    const resetDragListener = () => {
      progSlider.current?.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    const updateProgress = () => {
      const progress = Spicetify.Player.getProgress();
      if (!changingProgress.isChanging && (Spicetify.Player.isPlaying() || curProgress !== progress)) {
        setProgress(progress);
      }
    };
    const updateDuration = (meta) => {
      setProgress(0);
      setDuration(meta.data.duration);
    };
    const updateSecondaryPref = () => {
      setSecondaryPref(!secondaryPref);
      config_default.set("showRemainingTime", !secondaryPref);
    };
    const getSecondaryTime = () => {
      if (secondaryPref) {
        return " -" + Spicetify.Player.formatTime(curDuration - curProgress);
      } else {
        return Spicetify.Player.formatTime(curDuration);
      }
    };
    React.useEffect(() => {
      if (state === "mousemove") {
        hideProgressBar();
      } else {
        setVisibility(true);
      }
      const updateInterval = setInterval(updateProgress, 500);
      Spicetify.Player.addEventListener("songchange", updateDuration);
      setDragListener();
      return () => {
        clearInterval(updateInterval);
        Spicetify.Player.removeEventListener("songchange", updateDuration);
        resetDragListener();
      };
    }, [changingProgress, state]);
    return /* @__PURE__ */ React.createElement("div", {
      id: "fsd-progress-container",
      style: { opacity: visibility ? 1 : 0 }
    }, /* @__PURE__ */ React.createElement("div", {
      className: "progress-number",
      id: "fsd-elapsed"
    }, Spicetify.Player.formatTime(curProgress)), /* @__PURE__ */ React.createElement("div", {
      id: "fsd-progress-bar",
      ref: progSlider,
      className: (0, import_classnames.default)({ dragging: changingProgress.isChanging })
    }, /* @__PURE__ */ React.createElement("div", {
      id: "fsd-progress-bar-inner",
      style: { width: curProgress / curDuration * 100 + "%" }
    }, /* @__PURE__ */ React.createElement("div", {
      id: "progress-thumb"
    }))), /* @__PURE__ */ React.createElement("div", {
      className: "progress-number",
      id: "fsd-duration",
      onClick: updateSecondaryPref
    }, getSecondaryTime()));
  };
  var ProgressBar_default = SeekableProgressBar;

  // src/ui/components/VolumeBar/VolumeBar.tsx
  var React2 = __toESM(require_react());
  var import_lodash3 = __toESM(require_lodash2());
  var import_classnames2 = __toESM(require_classnames());
  var SeekableVolumeBar = ({ state }) => {
    const DEFAULT_VOLUME = -100;
    const [curVolume, setVolume] = React2.useState(
      Spicetify.Platform?.PlaybackAPI?._isAvailable ? Math.round(Spicetify.Player.getVolume() * 100) : DEFAULT_VOLUME
    );
    const [changingProgress, setChangingProgress] = React2.useState({
      isChanging: false,
      data: null
    });
    const [visibility, setVisibility] = React2.useState(true);
    const progSlider = React2.useRef(null);
    const volumeTimer = React2.useRef(null);
    const onMouseDown = (evt) => {
      if (evt.button === 0) {
        const sliderHeight = progSlider.current?.getBoundingClientRect().height ?? 250;
        const newData = {
          isChanging: true,
          data: {
            begin: sliderHeight - evt.offsetY,
            positionCoord: sliderHeight - evt.offsetY,
            beginClient: evt.clientY,
            sliderDimen: sliderHeight
          }
        };
        const newPercentage = Math.round(newData.data.positionCoord / sliderHeight * 100);
        setVolume(newPercentage);
        setChangingProgress(newData);
      }
    };
    const debouncedVolume = (0, import_lodash3.default)((newPercentage) => {
      Spicetify.Player.setVolume(newPercentage / 100);
    }, 20);
    const onMouseMove = (evt) => {
      if (changingProgress.isChanging && changingProgress.data) {
        const moveY = changingProgress.data.beginClient - evt.clientY;
        const sliderHeight = changingProgress.data.sliderDimen;
        const newPosY = Math.min(
          Math.max(changingProgress.data.begin + moveY, 0),
          sliderHeight
        );
        const newPercentage = Math.round(newPosY / sliderHeight * 100);
        setVolume(newPercentage);
        debouncedVolume(newPercentage);
        setChangingProgress({
          isChanging: true,
          data: { ...changingProgress.data, positionCoord: newPosY }
        });
      }
      if (state === "smart" && evt.clientY / window.innerHeight > 0.2 && evt.clientY / window.innerHeight < 0.75 && evt.clientX / window.innerWidth < 0.15) {
        hideVolumeBar();
      }
    };
    const onMouseUp = (evt) => {
      if (evt.button == 0 && changingProgress.isChanging) {
        Spicetify.Player.setVolume(curVolume / 100);
        setChangingProgress({ isChanging: false, data: null });
      }
    };
    const hideVolumeBar = (timeout = 2e3) => {
      if (volumeTimer.current)
        clearTimeout(volumeTimer.current);
      setVisibility(true);
      volumeTimer.current = setTimeout(() => {
        setVisibility(false);
      }, timeout);
    };
    const setDragListener = () => {
      progSlider.current?.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };
    const resetDragListener = () => {
      progSlider.current?.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    const updateVolume = (meta) => {
      if (!changingProgress.isChanging) {
        const newVol = Math.round(meta.data.volume * 100);
        if (newVol !== curVolume) {
          setVolume(newVol);
          if (state === "smart") {
            hideVolumeBar();
          }
        }
      }
    };
    React2.useEffect(() => {
      if (state === "smart") {
        hideVolumeBar(3e3);
      }
      Spicetify.Platform.PlaybackAPI._events.addListener("volume", updateVolume);
      setDragListener();
      return () => {
        Spicetify.Platform.PlaybackAPI._events.removeListener("volume", updateVolume);
        resetDragListener();
      };
    }, [changingProgress, state, curVolume]);
    return /* @__PURE__ */ React2.createElement("div", {
      id: "fsd-volume-container",
      className: (0, import_classnames2.default)({
        unavailable: curVolume === -100,
        "v-hidden": state !== "always" && !visibility,
        dragging: changingProgress.isChanging
      })
    }, /* @__PURE__ */ React2.createElement("div", {
      id: "fsd-volume"
    }, curVolume === -100 ? "" : `${curVolume}%`), /* @__PURE__ */ React2.createElement("div", {
      id: "fsd-volume-bar",
      ref: progSlider,
      className: (0, import_classnames2.default)({ dragging: changingProgress.isChanging })
    }, /* @__PURE__ */ React2.createElement("div", {
      id: "fsd-volume-bar-inner",
      style: {
        height: (curVolume === -100 ? 100 : curVolume) + "%"
      }
    }, /* @__PURE__ */ React2.createElement("div", {
      id: "volume-thumb"
    }))), /* @__PURE__ */ React2.createElement(VolumeButton, {
      volume: curVolume
    }));
  };
  var VolumeButton = ({ volume }) => {
    const getVolumeIcon = () => {
      if (typeof volume !== "number" || volume > 60 || volume === -100)
        return `
            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                ${Spicetify.SVGIcons["volume"]}
            </svg>
        `;
      else if (volume > 30)
        return `
            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                ${Spicetify.SVGIcons["volume-two-wave"]}
            </svg>
        `;
      else if (volume > 0)
        return `
            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                ${Spicetify.SVGIcons["volume-one-wave"]}
            </svg>
        `;
      else
        return `
            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                ${Spicetify.SVGIcons["volume-off"]}
            </svg>
        `;
    };
    return /* @__PURE__ */ React2.createElement("button", {
      className: "fs-button",
      id: "fsd-volume-icon",
      onClick: () => document.querySelector("div.main-nowPlayingBar-volumeBar > button")?.click(),
      title: volume == 0 ? "Unmute" : "Mute",
      dangerouslySetInnerHTML: { __html: getVolumeIcon() }
    });
  };
  var VolumeBar_default = SeekableVolumeBar;

  // src/styles/settings.ts
  var settingsStyles = `
.GenericModal ::-webkit-scrollbar{
    width: 7px;
}
.GenericModal ::-webkit-scrollbar-thumb{
    border-radius: 2rem;
}
.GenericModal__overlay{
    background-color: rgba(0,0,0,.5);
}
.main-trackCreditsModal-container{
    background-color: #121212;
    height: 75vh;
    max-height: 800px;
    width: clamp(550px,50vw,680px);
}        
.main-trackCreditsModal-mainSection{
    padding: 16px 16px 0;
}
.transparent-bg {
    background-color: rgba(0, 0, 0, 0);
}
`;

  // src/app.tsx
  async function main() {
    let INIT_RETRIES = 0;
    let entriesNotPresent = utils_default.allNotExist();
    while (entriesNotPresent.length > 0) {
      if (INIT_RETRIES > 100) {
        utils_default.printNotExistings(entriesNotPresent);
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 300));
      entriesNotPresent = utils_default.allNotExist();
      INIT_RETRIES += 1;
    }
    showWhatsNew();
    initMoustrapRecord(Spicetify.Mousetrap);
    if (config_default.getGlobal("activationTypes") !== "btns") {
      if (config_default.getGlobal("keyActivation") !== "def")
        Spicetify.Mousetrap.bind("t", openwithTV);
      if (config_default.getGlobal("keyActivation") !== "tv")
        Spicetify.Mousetrap.bind("f", openwithDef);
    }
    function openwithTV() {
      if (!utils_default.isModeActivated() || !config_default.getGlobal("tvMode") || config_default.getMode() !== "tv") {
        if (!config_default.getGlobal("tvMode") || config_default.getMode() !== "tv") {
          config_default.setGlobal("tvMode", true);
          config_default.setMode("tv");
          render();
        }
        activate();
      } else
        deactivate();
    }
    function openwithDef() {
      if (!utils_default.isModeActivated() || config_default.getGlobal("tvMode") || config_default.getMode() === "tv") {
        if (config_default.getGlobal("tvMode") || config_default.getMode() === "tv") {
          config_default.setGlobal("tvMode", false);
          config_default.setMode("def");
          render();
        }
        activate();
      } else
        deactivate();
    }
    if (localStorage.getItem("full-screen:inverted") === null) {
      localStorage.setItem("full-screen:inverted", "{}");
    }
    const INVERTED = JSON.parse(
      localStorage.getItem("full-screen:inverted") ?? "{}"
    );
    let LOCALE = config_default.getGlobal("locale");
    const style = document.createElement("style");
    const container = document.createElement("div");
    container.id = "full-screen-display";
    container.classList.add(
      "Video",
      "VideoPlayer--fullscreen",
      "VideoPlayer--landscape"
    );
    let cover, back, title, artist, album, play, ctx_container, ctx_icon, ctx_source, ctx_name, fsd_myUp, fsd_nextCover, fsd_up_next_text, fsd_next_tit_art, fsd_next_tit_art_inner, fsd_first_span, fsd_second_span, playingIcon, pausedIcon, nextControl, backControl, heart, shuffle, repeat, queue, invertButton, lyrics;
    const coverImg = new Image();
    const backgroundImg = new Image();
    function render() {
      container.classList.toggle(
        "lyrics-active",
        Boolean(config_default.get("lyricsDisplay"))
      );
      if (config_default.get("sidebarQueue")) {
        utils_default.toggleQueuePanel(queue, false);
      }
      container.classList.toggle(
        "vertical-mode",
        config_default.get(
          "verticalMonitorSupport"
        ) && window.innerWidth < window.innerHeight
      );
      container.setAttribute("data-locale", LOCALE);
      container.setAttribute("mode", config_default.getMode());
      if (!config_default.get("lyricsDisplay") || config_default.get("extraControls") === "never")
        container.classList.remove("lyrics-hide-force");
      Spicetify.Player.removeEventListener("songchange", updateInfo);
      Spicetify.Player.removeEventListener("onplaypause", updatePlayerControls);
      Spicetify.Player.removeEventListener("onplaypause", updatePlayingIcon);
      document.removeEventListener("fullscreenchange", fullScreenListener);
      Spicetify.Platform.PlayerAPI._events.removeListener(
        "update",
        updateExtraControls
      );
      heartObserver.disconnect();
      Spicetify.Platform.PlayerAPI._events.removeListener(
        "queue_update",
        updateUpNext
      );
      Spicetify.Platform.PlayerAPI._events.removeListener(
        "update",
        updateUpNextShow
      );
      window.removeEventListener("resize", resizeEvents);
      upNextShown = false;
      modifyIsAnimationRunning(false);
      if (origLoc !== "/lyrics-plus" && utils_default.isModeActivated()) {
        utils_default.revertPathHistory(origLoc);
      }
      window.dispatchEvent(new Event("fad-request"));
      window.removeEventListener("lyrics-plus-update", handleLyricsUpdate);
      handleMouseMoveDeactivation();
      style.innerHTML = `
        #full-screen-display {
            --lyrics-alignment: ${config_default.get("lyricsAlignment")};
            --lyrics-animation-tempo: ${config_default.get("animationTempo")}s;
            --icons-display: ${config_default.get("icons") ? "inline-block" : "none"};
            --fs-transition: ${config_default.get("backAnimationTime")}s;
       }
       `;
      container.innerHTML = getHtmlContent(
        container.classList.contains("lyrics-hide-force")
      );
      back = container.querySelector("canvas");
      back.width = window.innerWidth;
      back.height = window.innerHeight;
      cover = container.querySelector("#fsd-art-image");
      title = container.querySelector("#fsd-title span");
      artist = container.querySelector("#fsd-artist span");
      album = container.querySelector("#fsd-album span");
      if (config_default.get("contextDisplay") !== "never") {
        ctx_container = container.querySelector("#fsd-ctx-container");
        ctx_icon = container.querySelector("#fsd-ctx-icon");
        ctx_source = container.querySelector("#fsd-ctx-source");
        ctx_name = container.querySelector("#fsd-ctx-name");
      }
      if (config_default.get("upnextDisplay")) {
        fsd_myUp = container.querySelector("#fsd-upnext-container");
        fsd_myUp.onclick = Spicetify.Player.next;
        fsd_nextCover = container.querySelector("#fsd_next_art_image");
        fsd_up_next_text = container.querySelector("#fsd_up_next_text");
        fsd_next_tit_art = container.querySelector("#fsd_next_tit_art");
        fsd_next_tit_art_inner = container.querySelector(
          "#fsd_next_tit_art_inner"
        );
        fsd_first_span = container.querySelector("#fsd_first_span");
        fsd_second_span = container.querySelector("#fsd_second_span");
      }
      if (config_default.get("icons")) {
        playingIcon = container.querySelector("#playing-icon");
        playingIcon.onclick = () => {
          config_default.set("titleMovingIcon", false);
          playingIcon.classList.add("hidden");
          pausedIcon.classList.remove("hidden");
        };
        pausedIcon = container.querySelector("#paused-icon");
        pausedIcon.onclick = () => {
          config_default.set("titleMovingIcon", true);
          playingIcon.classList.remove("hidden");
          pausedIcon.classList.add("hidden");
          updatePlayingIcon({
            data: { is_paused: !Spicetify.Player.isPlaying() }
          });
        };
      }
      if (config_default.get("playerControls") !== "never") {
        play = container.querySelector("#fsd-play");
        play.onclick = () => {
          utils_default.fadeAnimation(play);
          Spicetify.Player.togglePlay();
        };
        nextControl = container.querySelector("#fsd-next");
        nextControl.onclick = () => {
          utils_default.fadeAnimation(nextControl, "fade-ri");
          Spicetify.Player.next();
        };
        backControl = container.querySelector("#fsd-back");
        backControl.onclick = () => {
          utils_default.fadeAnimation(backControl, "fade-le");
          Spicetify.Player.back();
        };
      }
      if (config_default.get("extraControls") !== "never") {
        heart = container.querySelector("#fsd-heart");
        shuffle = container.querySelector("#fsd-shuffle");
        repeat = container.querySelector("#fsd-repeat");
        heart.onclick = () => {
          utils_default.fadeAnimation(heart);
          Spicetify.Player.toggleHeart();
        };
        shuffle.onclick = () => {
          utils_default.fadeAnimation(shuffle);
          Spicetify.Player.toggleShuffle();
        };
        repeat.onclick = () => {
          utils_default.fadeAnimation(repeat);
          Spicetify.Player.toggleRepeat();
        };
        if (config_default.get("invertColors") === "auto") {
          invertButton = container.querySelector("#fsd-invert");
          invertButton.onclick = toggleInvert;
        }
        if (config_default.get("lyricsDisplay") && !config_default.get("sidebarQueue")) {
          lyrics = container.querySelector("#fsd-lyrics");
          lyrics.onclick = () => toggleLyrics();
        }
        if (config_default.get("sidebarQueue")) {
          queue = container.querySelector("#fsd-queue");
          queue.onclick = () => toggleQueue();
        }
      }
    }
    function recordSequence() {
      Spicetify.Mousetrap.record(function(sequence) {
        console.log("You pressed: " + sequence.join(" "));
      });
    }
    let upnextTimer, upNextShown = false;
    function toggleLyrics() {
      container.classList.toggle("lyrics-hide-force");
      if (lyrics) {
        utils_default.fadeAnimation(lyrics);
        lyrics.classList.toggle("button-active");
        lyrics.innerHTML = container.classList.contains("lyrics-unavailable") || container.classList.contains("lyrics-hide-force") ? constants_default.LYRICS_ACTIVE : constants_default.LYRICS_INACTIVE;
      }
    }
    function toggleQueue() {
      utils_default.toggleQueue(queue);
      if (queue) {
        utils_default.fadeAnimation(queue);
      }
    }
    function updateUpNextShow() {
      setTimeout(() => {
        const timetogo = utils_default.getShowTime(
          config_default.get("upnextTimeToShow")
        );
        if (upnextTimer) {
          clearTimeout(upnextTimer);
        }
        if (timetogo < 10) {
          if (!upNextShown || fsd_myUp.style.transform !== "translateX(0px)") {
            updateUpNext();
          }
          upNextShown = true;
        } else {
          fsd_myUp.style.transform = "translateX(600px)";
          upNextShown = false;
          if (Spicetify.Player.isPlaying()) {
            upnextTimer = setTimeout(() => {
              updateUpNext();
              upNextShown = true;
            }, timetogo);
          }
        }
      }, 100);
    }
    function handleNavigation(navigateUri) {
      const formattedUri = navigateUri.replace("spotify", "").replaceAll(":", "/");
      deactivate();
      setTimeout(() => {
        Spicetify.Platform.History.push(formattedUri);
      }, 100);
    }
    async function updateInfo() {
      const meta = Spicetify.Player.data.item?.metadata;
      if (config_default.get("contextDisplay") !== "never")
        updateContext().catch(
          (err) => console.error("Error getting context: ", err)
        );
      let songName = meta?.title;
      if (config_default.get("trimTitle")) {
        songName = utils_default.trimTitle(songName);
      }
      let artistData;
      if (config_default.get("showAllArtists")) {
        const artistNameList = Object.keys(meta).filter((key) => key.startsWith("artist_name")).sort();
        const artistUriList = Object.keys(meta).filter((key) => key.startsWith("artist_uri")).sort();
        artistData = artistNameList.map((key, index) => [
          meta[key],
          meta[artistUriList[index]]
        ]);
      } else {
        artistData = [[meta?.artist_name, meta?.artist_uri]];
      }
      let albumText, updatedAlbum = false;
      if (config_default.get("showAlbum") !== "never") {
        albumText = meta?.album_title || "";
        const albumURI = meta?.album_uri;
        if (albumURI?.startsWith("spotify:album:") && config_default.get("showAlbum") === "date") {
          utils_default.getAlbumReleaseDate(albumURI, LOCALE).then((releaseDate) => {
            albumText += releaseDate;
            if (updatedAlbum)
              album.innerText = albumText || "";
          });
        }
      }
      updateBackground(meta);
      coverImg.src = meta?.image_xlarge_url;
      coverImg.onload = () => {
        cover.style.backgroundImage = `url("${coverImg.src}")`;
        title.innerText = songName || "";
        title.setAttribute("uri", Spicetify.Player.data?.item?.uri || "");
        artist.innerHTML = `${artistData.map((artist2) => `<span uri=${artist2[1]}>${artist2[0]}</span>`).join(", ")}`;
        artist.querySelectorAll("span").forEach((span) => {
          span.onclick = () => {
            handleNavigation(span.getAttribute("uri"));
          };
        });
        if (album) {
          album.innerText = albumText || "";
          album.setAttribute("uri", meta?.album_uri || "");
          updatedAlbum = true;
        }
        if (config_default.get("lyricsDisplay") && config_default.get("autoHideLyrics")) {
          const lyricsContainer = container.querySelector(
            "#fad-lyrics-plus-container"
          );
          if (lyricsContainer) {
            autoHideLyrics();
          }
        }
      };
      coverImg.onerror = () => {
        console.error("Check your Internet! Unable to load Image");
        coverImg.src = constants_default.OFFLINE_SVG;
      };
    }
    async function updateBackground(meta, fromResize = false) {
      const previousImg = backgroundImg.cloneNode();
      const settingValue = config_default.get(
        "backgroundChoice"
      );
      back.classList.toggle("animated", settingValue === "animated_album");
      modifyIsAnimationRunning(settingValue === "animated_album");
      switch (settingValue) {
        case "dynamic_color": {
          const nextColor = await utils_default.getNextColor(
            config_default.get("coloredBackChoice")
          );
          updateMainColor(
            Spicetify.Player.data.item?.uri,
            meta
          );
          updateThemeColor(Spicetify.Player.data.item?.uri);
          animateColor(nextColor, back);
          break;
        }
        case "static_color":
          updateMainColor(
            Spicetify.Player.data.item?.uri,
            meta
          );
          updateThemeColor(Spicetify.Player.data.item?.uri);
          animateColor(
            config_default.get("staticBackChoice"),
            back
          );
          break;
        case "artist_art":
          backgroundImg.src = await utils_default.getImageAndLoad(
            meta
          );
          updateMainColor(
            backgroundImg.src,
            meta
          );
          updateThemeColor(backgroundImg.src);
          backgroundImg.onload = () => {
            animateCanvas(previousImg, backgroundImg, back, fromResize);
          };
          break;
        case "animated_album": {
          backgroundImg.src = meta?.image_xlarge_url;
          backgroundImg.onload = () => {
            updateMainColor(
              Spicetify.Player.data.item?.uri,
              meta
            );
            updateThemeColor(Spicetify.Player.data.item?.uri);
            animatedRotatedCanvas(back, backgroundImg);
          };
          break;
        }
        case "album_art":
        default:
          backgroundImg.src = meta?.image_xlarge_url;
          backgroundImg.onload = () => {
            updateMainColor(
              Spicetify.Player.data.item?.uri,
              meta
            );
            updateThemeColor(Spicetify.Player.data.item?.uri);
            animateCanvas(previousImg, backgroundImg, back, fromResize);
          };
          break;
      }
    }
    async function updateMainColor(imageURL, meta) {
      switch (config_default.get("invertColors")) {
        case "always":
          container.style.setProperty("--main-color", "0,0,0");
          container.style.setProperty("--contrast-color", "255,255,255");
          break;
        case "auto": {
          let mainColor = "255,255,255", contrastColor = "0,0,0";
          if (config_default.get("backgroundChoice") === "album_art" && (meta?.album_uri?.split(":")[2] ?? "") in INVERTED) {
            mainColor = INVERTED[meta?.album_uri?.split(":")[2] ?? ""] ? "0,0,0" : "255,255,255";
          } else {
            [mainColor, contrastColor] = await utils_default.getMainColor(imageURL);
          }
          container.style.setProperty("--main-color", mainColor);
          container.style.setProperty("--contrast-color", contrastColor);
          if (config_default.get("extraControls") !== "never") {
            invertButton.classList.remove("button-active");
            invertButton.innerHTML = constants_default.INVERT_INACTIVE;
          }
          break;
        }
        case "never":
        default:
          container.style.setProperty("--main-color", "255,255,255");
          container.style.setProperty("--contrast-color", "0,0,0");
          break;
      }
    }
    async function updateThemeColor(imageURL) {
      if (!(config_default.get("backgroundChoice") == "dynamic_color" && config_default.get("coloredBackChoice") == "VIBRANT") && (config_default.get("themedButtons") || config_default.get("themedIcons"))) {
        container.classList.toggle(
          "themed-buttons",
          Boolean(config_default.get("themedButtons"))
        );
        container.classList.toggle(
          "themed-icons",
          Boolean(config_default.get("themedIcons"))
        );
        let themeVibrantColor;
        const artColors = await web_api_default.colorExtractor(imageURL).catch(
          (err) => console.warn(err)
        );
        if (!artColors?.VIBRANT)
          themeVibrantColor = "175,175,175";
        else
          themeVibrantColor = utils_default.hexToRgb(artColors.VIBRANT);
        container.style.setProperty("--theme-color", themeVibrantColor);
      } else {
        container.classList.remove("themed-buttons", "themed-icons");
        container.style.setProperty("--theme-color", "175,175,175");
      }
    }
    function handleLyricsUpdate(evt) {
      if (evt.detail.isLoading)
        return;
      container.classList.toggle(
        "lyrics-unavailable",
        !(evt.detail.available && (evt.detail?.synced?.length ?? 5) > 1)
      );
      if (config_default.get("extraControls") !== "never" && !config_default.get("sidebarQueue")) {
        lyrics.classList.toggle(
          "hidden",
          container.classList.contains("lyrics-unavailable")
        );
      }
    }
    function autoHideLyrics() {
      const lyricsContainer = container.querySelector(
        "#fad-lyrics-plus-container"
      );
      if (!lyricsContainer.innerText) {
        handleLyricsUpdate({ detail: { isLoading: true, available: false } });
        setTimeout(autoHideLyrics, 100);
      } else {
        if (lyricsContainer.innerText == "(\u2022 _ \u2022 )") {
          handleLyricsUpdate({ detail: { isLoading: false, available: false } });
        } else {
          handleLyricsUpdate({ detail: { isLoading: false, available: true } });
        }
      }
    }
    function resizeEvents() {
      if (config_default.get("upnextDisplay"))
        updateUpNext();
      updateBackground(Spicetify.Player.data.item?.metadata, true);
      container.classList.toggle(
        "vertical-mode",
        config_default.get(
          "verticalMonitorSupport"
        ) && window.innerWidth < window.innerHeight
      );
    }
    async function updateContext() {
      const ctxDetails = await utils_default.getContext(strings_default[LOCALE]).catch(
        (err) => console.error(err)
      );
      ctx_source.classList.toggle("ctx-no-name", !ctxDetails.ctxName);
      if (!ctxDetails.ctxIcon)
        ctxDetails.ctxIcon = Spicetify.SVGIcons.spotify;
      ctx_icon.innerHTML = /^<path/.test(ctxDetails.ctxIcon) ? `<svg width="48" height="48" viewBox="0 0 16 16" fill="currentColor">${ctxDetails.ctxIcon}</svg>` : ctxDetails.ctxIcon;
      if (ctx_source.innerText.toLowerCase() !== `${ctxDetails.ctxSource}`.toLowerCase() || ctx_name.innerText.toLowerCase() !== ctxDetails.ctxName.toLowerCase()) {
        ctx_source.innerText = `${ctxDetails.ctxSource}`;
        ctx_name.innerText = ctxDetails.ctxName;
        if (config_default.get("contextDisplay") === "mousemove")
          hideContext();
      }
    }
    function updateUpNextInfo() {
      fsd_up_next_text.innerText = strings_default[LOCALE].upnext.toUpperCase();
      let metadata = {};
      const queue_metadata = Spicetify.Queue.nextTracks[0];
      if (queue_metadata) {
        metadata = queue_metadata?.contextTrack?.metadata;
      } else {
        metadata["artist_name"] = "";
        metadata["title"] = "";
      }
      let songName = metadata.title;
      if (config_default.get("trimTitleUpNext") && songName) {
        songName = utils_default.trimTitle(songName);
      }
      const artistNameNext = Object.keys(metadata).filter((key) => key.startsWith("artist_name")).sort().map((key) => metadata[key]).join(", ");
      let next_artist;
      if (artistNameNext) {
        next_artist = artistNameNext;
      } else {
        next_artist = strings_default[LOCALE].unknownArtist;
      }
      const next_image = metadata.image_xlarge_url;
      if (next_image) {
        fsd_nextCover.style.backgroundImage = `url("${next_image}")`;
      } else {
        if (metadata.image_url)
          fsd_nextCover.style.backgroundImage = `url("${metadata.image_url}")`;
        else {
          fsd_nextCover.style.backgroundImage = `url("${constants_default.OFFLINE_SVG}")`;
        }
      }
      fsd_first_span.innerText = songName + "  \u2022  " + next_artist;
      fsd_second_span.innerText = songName + "  \u2022  " + next_artist;
    }
    async function updateUpNext() {
      if (Spicetify.Player.data.duration - Spicetify.Player.getProgress() <= config_default.get("upnextTimeToShow") * 1e3 + 50 && Spicetify.Queue?.nextTracks[0]?.contextTrack?.metadata?.title) {
        await updateUpNextInfo();
        fsd_myUp.style.transform = "translateX(0px)";
        upNextShown = true;
        let animTime;
        if (fsd_second_span.offsetWidth > fsd_next_tit_art.offsetWidth - 2) {
          switch (config_default.get("upNextAnim")) {
            case "mq":
              fsd_first_span.style.paddingRight = "80px";
              animTime = 5e3 * (fsd_first_span.offsetWidth / 400);
              fsd_myUp.style.setProperty(
                "--translate_width_fsd",
                `-${fsd_first_span.offsetWidth + 3.5}px`
              );
              fsd_next_tit_art_inner.style.animation = "fsd_cssmarquee " + animTime + "ms linear 800ms infinite";
              break;
            case "sp":
            default:
              fsd_first_span.style.paddingRight = "0px";
              fsd_second_span.innerText = "";
              animTime = (fsd_first_span.offsetWidth - fsd_next_tit_art.offsetWidth - 2) / 0.05;
              fsd_myUp.style.setProperty(
                "--translate_width_fsd",
                `-${fsd_first_span.offsetWidth - fsd_next_tit_art.offsetWidth + 5}px`
              );
              fsd_next_tit_art_inner.style.animation = `fsd_translate ${animTime > 1500 ? animTime : 1500}ms linear 800ms infinite`;
              break;
          }
        } else {
          fsd_first_span.style.paddingRight = "0px";
          fsd_next_tit_art_inner.style.animation = "none";
          fsd_second_span.innerText = "";
        }
      } else {
        upNextShown = false;
        fsd_myUp.style.transform = "translateX(600px)";
        fsd_first_span.style.paddingRight = "0px";
        fsd_next_tit_art_inner.style.animation = "none";
        fsd_second_span.innerText = "";
      }
    }
    function updatePlayingIcon(evt) {
      if (evt.data.is_paused || evt.data.isPaused) {
        pausedIcon.classList.remove("hidden");
        playingIcon.classList.add("hidden");
      } else {
        pausedIcon.classList.toggle(
          "hidden",
          config_default.get("titleMovingIcon")
        );
        playingIcon.classList.toggle("hidden", !config_default.get("titleMovingIcon"));
      }
    }
    function updatePlayerControls(evt) {
      if (config_default.get("playerControls") === "mousemove")
        hidePlayerControls();
      utils_default.fadeAnimation(play);
      if (evt.data.is_paused || evt.data.isPaused) {
        play.innerHTML = `<svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons.play}</svg>`;
      } else {
        play.innerHTML = `<svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons.pause}</svg>`;
      }
    }
    let prevControlData = {
      shuffle: Spicetify.Platform?.PlayerAPI?._state?.shuffle,
      repeat: Spicetify.Platform?.PlayerAPI?._state?.repeat
    };
    function updateExtraControls(data) {
      data = data?.data ?? Spicetify.Player.data;
      updateHeart();
      if (prevControlData?.shuffle !== data?.shuffle)
        utils_default.fadeAnimation(shuffle);
      if (prevControlData?.repeat !== data?.repeat)
        utils_default.fadeAnimation(repeat);
      prevControlData = {
        shuffle: data?.shuffle,
        repeat: data?.repeat
      };
      repeat.classList.toggle("dot-after", data?.repeat !== 0);
      repeat.classList.toggle("button-active", data?.repeat !== 0);
      shuffle.classList.toggle("dot-after", data?.shuffle);
      shuffle.classList.toggle("button-active", data?.shuffle);
      if (data?.repeat === 2) {
        repeat.innerHTML = `<svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons["repeat-once"]}</svg>`;
      } else {
        repeat.innerHTML = `<svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons["repeat"]}</svg>`;
      }
      if (data?.restrictions) {
        shuffle.classList.toggle(
          "unavailable",
          !data?.restrictions?.canToggleShuffle
        );
        repeat.classList.toggle(
          "unavailable",
          !data?.restrictions?.canToggleRepeatTrack && !data?.restrictions?.canToggleRepeatContext
        );
      }
    }
    let prevHeartData = Spicetify.Player?.data?.item?.metadata["collection.in_collection"];
    function updateHeart() {
      setTimeout(() => {
        const meta = Spicetify.Player?.data?.item;
        heart.classList.toggle(
          "unavailable",
          meta?.metadata["collection.can_add"] !== "true"
        );
        if (prevHeartData !== meta?.metadata["collection.in_collection"])
          utils_default.fadeAnimation(heart);
        prevHeartData = meta?.metadata["collection.in_collection"];
        if (meta?.metadata["collection.in_collection"] === "true" || Spicetify.Player.getHeart()) {
          heart.innerHTML = `<svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons["heart-active"]}</svg>`;
          heart.classList.add("button-active");
        } else {
          heart.innerHTML = `<svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">${Spicetify.SVGIcons["heart"]}</svg>`;
          heart.classList.remove("button-active");
        }
      }, 200);
    }
    function toggleInvert() {
      utils_default.fadeAnimation(invertButton);
      if (invertButton.classList.contains("button-active"))
        invertButton.innerHTML = constants_default.INVERT_ACTIVE;
      else
        invertButton.innerHTML = constants_default.INVERT_INACTIVE;
      invertButton.classList.toggle("button-active");
      if (getComputedStyle(container).getPropertyValue("--main-color").startsWith("0")) {
        container.style.setProperty("--main-color", "255,255,255");
        container.style.setProperty("--contrast-color", "0,0,0");
        if (!config_default.getGlobal("tvMode") && config_default.get("backgroundChoice") === "album_art")
          INVERTED[Spicetify.Player.data.item?.metadata?.album_uri?.split(":")[2]] = false;
      } else {
        container.style.setProperty("--main-color", "0,0,0");
        container.style.setProperty("--contrast-color", "255,255,255");
        if (!config_default.getGlobal("tvMode") && config_default.get("backgroundChoice") === "album_art")
          INVERTED[Spicetify.Player.data.item?.metadata?.album_uri?.split(":")[2]] = true;
      }
      localStorage.setItem("full-screen:inverted", JSON.stringify(INVERTED));
    }
    let curTimer, ctxTimer, extraControlsTimer, playerControlsTimer;
    function hideCursor() {
      if (curTimer) {
        clearTimeout(curTimer);
      }
      container.style.cursor = "default";
      curTimer = setTimeout(() => container.style.cursor = "none", 2e3);
    }
    function hideContext() {
      if (ctxTimer) {
        clearTimeout(ctxTimer);
      }
      ctx_container.style.opacity = "1";
      ctxTimer = setTimeout(() => ctx_container.style.opacity = "0", 3e3);
    }
    function hideExtraControls() {
      if (extraControlsTimer) {
        clearTimeout(extraControlsTimer);
      }
      const elements = container.querySelectorAll(
        ".extra-controls"
      );
      elements.forEach((element) => element.style.opacity = "1");
      extraControlsTimer = setTimeout(() => {
        elements.forEach((element) => element.style.opacity = "0");
      }, 3e3);
    }
    function hidePlayerControls() {
      if (playerControlsTimer) {
        clearTimeout(playerControlsTimer);
      }
      const element = container.querySelector(
        ".fsd-controls-center"
      );
      element.style.opacity = "1";
      playerControlsTimer = setTimeout(() => element.style.opacity = "0", 3e3);
    }
    function handleMouseMoveActivation() {
      container.addEventListener("mousemove", hideCursor);
      hideCursor();
      if (config_default.get("contextDisplay") === "mousemove") {
        container.addEventListener("mousemove", hideContext);
        hideContext();
      }
      if (config_default.get("extraControls") === "mousemove") {
        container.addEventListener("mousemove", hideExtraControls);
        hideExtraControls();
      }
      if (config_default.get("playerControls") === "mousemove") {
        container.addEventListener("mousemove", hidePlayerControls);
        hidePlayerControls();
      }
    }
    function handleMouseMoveDeactivation() {
      container.removeEventListener("mousemove", hideCursor);
      container.removeEventListener("mousemove", hideContext);
      container.removeEventListener("mousemove", hideExtraControls);
      container.removeEventListener("mousemove", hidePlayerControls);
      if (curTimer)
        clearTimeout(curTimer);
      if (ctxTimer)
        clearTimeout(ctxTimer);
      if (extraControlsTimer)
        clearTimeout(extraControlsTimer);
      if (playerControlsTimer)
        clearTimeout(playerControlsTimer);
    }
    function fullScreenListener() {
      if (document.fullscreenElement === null && config_default.get("enableFullscreen") && utils_default.isModeActivated()) {
        deactivate();
      }
    }
    let origLoc;
    const heartObserver = new MutationObserver(updateHeart);
    async function activate() {
      if (config_default.get("sidebarQueue")) {
        utils_default.toggleQueuePanel(queue, true);
      }
      document.body.classList.add(...CLASSES_TO_ADD);
      if (config_default.get("enableFullscreen"))
        await utils_default.fullScreenOn()?.catch((err) => {
        });
      else
        await utils_default.fullScreenOff()?.catch((err) => {
        });
      setTimeout(() => {
        updateInfo();
        window.addEventListener("resize", resizeEvents);
        resizeEvents();
        container.querySelectorAll(".fsd-song-meta span").forEach((span) => {
          span.onclick = (evt) => {
            handleNavigation(evt.target?.getAttribute("uri") ?? "");
          };
        });
      }, 200);
      Spicetify.Player.addEventListener("songchange", updateInfo);
      handleMouseMoveActivation();
      container.querySelector("#fsd-foreground").oncontextmenu = openConfig;
      container.querySelector("#fsd-foreground").ondblclick = deactivate;
      back.oncontextmenu = openConfig;
      back.ondblclick = deactivate;
      if (config_default.get("upnextDisplay")) {
        updateUpNextShow();
        Spicetify.Platform.PlayerAPI._events.addListener(
          "queue_update",
          updateUpNext
        );
        Spicetify.Platform.PlayerAPI._events.addListener(
          "update",
          updateUpNextShow
        );
      }
      if (config_default.get("volumeDisplay") !== "never") {
        import_react_dom2.default.render(
          /* @__PURE__ */ import_react.default.createElement(VolumeBar_default, {
            state: config_default.get("volumeDisplay")
          }),
          container.querySelector("#fsd-volume-parent")
        );
      }
      if (config_default.get("enableFade")) {
        cover.classList.add("fsd-background-fade");
      } else {
        cover.classList.remove("fsd-background-fade");
      }
      if (config_default.get("icons")) {
        updatePlayingIcon({ data: { is_paused: !Spicetify.Player.isPlaying() } });
        Spicetify.Player.addEventListener("onplaypause", updatePlayingIcon);
      }
      if (config_default.get("progressBarDisplay") !== "never") {
        import_react_dom2.default.render(
          /* @__PURE__ */ import_react.default.createElement(ProgressBar_default, {
            state: config_default.get("progressBarDisplay")
          }),
          container.querySelector("#fsd-progress-parent")
        );
      }
      if (config_default.get("playerControls") !== "never") {
        updatePlayerControls({
          data: { is_paused: !Spicetify.Player.isPlaying() }
        });
        Spicetify.Player.addEventListener("onplaypause", updatePlayerControls);
      }
      if (config_default.get("extraControls") !== "never") {
        updateExtraControls(null);
        utils_default.addObserver(heartObserver, ".control-button-heart", {
          attributes: true,
          attributeFilter: ["aria-checked"]
        });
        Spicetify.Platform.PlayerAPI._events.addListener(
          "update",
          updateExtraControls
        );
      }
      document.querySelector(".Root__top-container")?.append(style, container);
      if (config_default.get("lyricsDisplay")) {
        window.addEventListener("lyrics-plus-update", handleLyricsUpdate);
        origLoc = Spicetify.Platform.History.location.pathname;
        if (origLoc !== "/lyrics-plus") {
          Spicetify.Platform.History.push("/lyrics-plus");
        }
        window.dispatchEvent(new Event("fad-request"));
      }
      Spicetify.Mousetrap.bind("f11", fsToggle);
      document.addEventListener("fullscreenchange", fullScreenListener);
      Spicetify.Mousetrap.bind("esc", deactivate);
      if (config_default.get("lyricsDisplay")) {
        Spicetify.Mousetrap.bind("l", toggleLyrics);
      }
      Spicetify.Mousetrap.bind("c", () => {
        const popup = document.querySelector("body > generic-modal");
        if (popup)
          popup.remove();
        else
          openConfig();
      });
      if (config_default.get("sidebarQueue")) {
        Spicetify.Mousetrap.bind("q", toggleQueue);
      }
    }
    async function deactivate() {
      if (config_default.get("sidebarQueue")) {
        utils_default.toggleQueuePanel(queue, false);
      }
      modifyIsAnimationRunning(false);
      Spicetify.Player.removeEventListener("songchange", updateInfo);
      handleMouseMoveDeactivation();
      window.removeEventListener("resize", resizeEvents);
      if (config_default.get("upnextDisplay")) {
        upNextShown = false;
        Spicetify.Platform.PlayerAPI._events.removeListener(
          "queue_update",
          updateUpNext
        );
        Spicetify.Platform.PlayerAPI._events.removeListener(
          "update",
          updateUpNextShow
        );
      }
      import_react_dom2.default.unmountComponentAtNode(
        container.querySelector("#fsd-volume-parent")
      );
      import_react_dom2.default.unmountComponentAtNode(
        container.querySelector("#fsd-progress-parent")
      );
      if (config_default.get("icons")) {
        Spicetify.Player.removeEventListener("onplaypause", updatePlayingIcon);
      }
      if (config_default.get("playerControls") !== "never") {
        Spicetify.Player.removeEventListener("onplaypause", updatePlayerControls);
      }
      if (config_default.get("extraControls") !== "never") {
        heartObserver.disconnect();
        Spicetify.Platform.PlayerAPI._events.removeListener(
          "update",
          updateExtraControls
        );
      }
      document.body.classList.remove(...CLASSES_TO_ADD);
      upNextShown = false;
      if (config_default.get("enableFullscreen")) {
        await utils_default.fullScreenOff()?.catch((err) => {
        });
      }
      const popup = document.querySelector("body > generic-modal");
      if (popup)
        popup.remove();
      style.remove();
      container.remove();
      if (config_default.get("lyricsDisplay")) {
        window.removeEventListener("lyrics-plus-update", handleLyricsUpdate);
        if (origLoc !== "/lyrics-plus") {
          utils_default.revertPathHistory(origLoc);
        }
        window.dispatchEvent(new Event("fad-request"));
      }
      document.removeEventListener("fullscreenchange", fullScreenListener);
      Spicetify.Mousetrap.unbind("f11");
      Spicetify.Mousetrap.unbind("esc");
      Spicetify.Mousetrap.unbind("l");
      Spicetify.Mousetrap.unbind("c");
      Spicetify.Mousetrap.unbind("q");
    }
    function fsToggle() {
      if (config_default.get("enableFullscreen")) {
        config_default.set("enableFullscreen", false);
        render();
        activate();
      } else {
        config_default.set("enableFullscreen", true);
        render();
        activate();
      }
    }
    function saveOption(key, value) {
      config_default.set(key, value);
      render();
      if (utils_default.isModeActivated())
        activate();
    }
    function saveGlobalOption(key, value) {
      config_default.setGlobal(key, value);
      LOCALE = config_default.getGlobal("locale");
      render();
      if (utils_default.isModeActivated())
        activate();
    }
    function getSettingTopHeader() {
      const container2 = document.createElement("div");
      container2.innerHTML = `
        <div class="setting-button-row">
          <button class="main-buttons-button main-button-primary" id="mode-switch">${config_default.getGlobal("tvMode") ? strings_default[LOCALE].settings.switchToFullscreen : strings_default[LOCALE].settings.switchToTV}</button>
          <button class="main-buttons-button main-button-primary" id="mode-exit">
            ${strings_default[LOCALE].settings.exit}
          </button>
        </div>`;
      container2.querySelector("#mode-exit").onclick = deactivate;
      container2.querySelector("#mode-switch").onclick = () => {
        config_default.getGlobal("tvMode") ? openwithDef() : openwithTV();
        document.querySelector("body > generic-modal")?.remove();
      };
      return container2;
    }
    function getSettingBottomHeader() {
      const container2 = document.createElement("div");
      container2.innerHTML = `
        <div class="setting-button-row">
          <button class="main-buttons-button main-button-secondary" id="reset-switch">${strings_default[LOCALE].settings.configReset}</button>
          <button class="main-buttons-button main-button-secondary" id="reload-switch">${strings_default[LOCALE].settings.reload}</button>
        </div>`;
      container2.querySelector("#reset-switch").onclick = () => {
        if (utils_default.isModeActivated()) {
          config_default.resetSettings();
          render();
          activate();
          configContainer = "";
          setTimeout(openConfig, 5);
        } else {
          config_default.resetSettings(null, true);
          location.reload();
        }
      };
      container2.querySelector("#reload-switch").onclick = () => {
        location.reload();
      };
      return container2;
    }
    function createOptions(title2, options2, configValue, key, callback, description = "") {
      const settingCard = getSettingCard(
        `<select>
                ${Object.keys(options2).map(
          (item) => `<option value="${item}" dir="auto">${options2[item]}</option>`
        ).join("\n")}
            </select>`,
        title2,
        key,
        description
      );
      const select = settingCard.querySelector("select");
      if (!(configValue in options2)) {
        if (key in DEFAULTS[config_default.getMode()]) {
          configValue = DEFAULTS[config_default.getMode()][key];
          saveOption(key, configValue);
        } else if (key in DEFAULTS) {
          configValue = DEFAULTS[key];
          saveGlobalOption(
            key,
            configValue
          );
        }
      }
      select.value = configValue.toString();
      select.onchange = (e) => {
        callback((e?.target).value);
      };
      return settingCard;
    }
    function createToggle(title2, key, callback = (value) => saveOption(key, value), description = "") {
      const settingCard = getSettingCard(
        `<label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>`,
        title2,
        key,
        description
      );
      const toggle = settingCard.querySelector("input");
      if (toggle) {
        if (key in DEFAULTS)
          toggle.checked = config_default.getGlobal(key);
        else
          toggle.checked = config_default.get(key);
        toggle.onchange = (evt) => callback(evt?.target?.checked);
      }
      return settingCard;
    }
    function createInputElement(title2, key, type, callback = (value) => saveOption(key, value), description = "") {
      const settingCard = getSettingCard(
        `<label class="gen-input">
                <input type="${type}">
            </label>`,
        title2,
        key,
        description
      );
      const inputElement = settingCard.querySelector("input");
      if (inputElement) {
        if (key in DEFAULTS)
          inputElement.value = config_default.getGlobal(key);
        else
          inputElement.value = config_default.get(key);
        inputElement.oninput = (evt) => callback(evt?.target?.value);
      }
      return settingCard;
    }
    let configContainer;
    let overlayTimout;
    function openConfig(evt = null) {
      evt?.preventDefault();
      configContainer = document.createElement("div");
      configContainer.id = "full-screen-config-container";
      const style2 = document.createElement("style");
      style2.innerHTML = settingsStyles;
      configContainer.append(
        style2,
        utils_default.isModeActivated() ? getSettingTopHeader() : "",
        headerText(strings_default[LOCALE].settings.pluginSettings),
        createOptions(
          strings_default[LOCALE].settings.language,
          utils_default.getAvailableLanguages(strings_default),
          config_default.getGlobal("locale"),
          "locale",
          (value) => {
            saveGlobalOption("locale", value);
            document.querySelector("body > generic-modal")?.remove();
            openConfig();
          }
        ),
        createToggle(
          strings_default[LOCALE].settings.fsHideOriginal,
          "fsHideOriginal",
          (value) => {
            saveGlobalOption("fsHideOriginal", value);
            location.reload();
          },
          strings_default[LOCALE].settings.fsHideOriginalDescription
        ),
        createOptions(
          strings_default[LOCALE].settings.autoLaunch.setting,
          {
            never: strings_default[LOCALE].settings.autoLaunch.never,
            default: strings_default[LOCALE].settings.autoLaunch.default,
            tvmode: strings_default[LOCALE].settings.autoLaunch.tvmode,
            lastused: strings_default[LOCALE].settings.autoLaunch.lastused
          },
          config_default.getGlobal("autoLaunch"),
          "autoLaunch",
          (value) => {
            saveGlobalOption("autoLaunch", value);
          },
          strings_default[LOCALE].settings.autoLaunch.description
        ),
        createOptions(
          strings_default[LOCALE].settings.activationTypes.setting,
          {
            both: strings_default[LOCALE].settings.activationTypes.both,
            btns: strings_default[LOCALE].settings.activationTypes.btns,
            keys: strings_default[LOCALE].settings.activationTypes.keys
          },
          config_default.getGlobal("activationTypes"),
          "activationTypes",
          (value) => {
            saveGlobalOption("activationTypes", value);
            location.reload();
          },
          strings_default[LOCALE].settings.activationTypes.description
        ),
        createOptions(
          strings_default[LOCALE].settings.buttonActivation.setting,
          {
            both: strings_default[LOCALE].settings.buttonActivation.both,
            tv: strings_default[LOCALE].settings.buttonActivation.tv,
            def: strings_default[LOCALE].settings.buttonActivation.def
          },
          config_default.getGlobal("buttonActivation"),
          "buttonActivation",
          (value) => {
            saveGlobalOption("buttonActivation", value);
            location.reload();
          },
          strings_default[LOCALE].settings.buttonActivation.description
        ),
        createOptions(
          strings_default[LOCALE].settings.keyActivation.setting,
          {
            both: strings_default[LOCALE].settings.keyActivation.both,
            tv: strings_default[LOCALE].settings.keyActivation.tv,
            def: strings_default[LOCALE].settings.keyActivation.def
          },
          config_default.getGlobal("keyActivation"),
          "keyActivation",
          (value) => {
            saveGlobalOption("keyActivation", value);
            location.reload();
          },
          strings_default[LOCALE].settings.keyActivation.description
        ),
        headerText(strings_default[LOCALE].settings.lyricsHeader),
        createToggle(
          strings_default[LOCALE].settings.lyrics,
          "lyricsDisplay",
          (value) => {
            saveOption("lyricsDisplay", value);
            container.classList.remove("lyrics-unavailable");
          },
          strings_default[LOCALE].settings.lyricsDescription.join("<br>")
        ),
        createToggle(
          strings_default[LOCALE].settings.autoHideLyrics,
          "autoHideLyrics"
        ),
        createOptions(
          strings_default[LOCALE].settings.lyricsAlignment.setting,
          {
            left: strings_default[LOCALE].settings.lyricsAlignment.left,
            center: strings_default[LOCALE].settings.lyricsAlignment.center,
            right: strings_default[LOCALE].settings.lyricsAlignment.right
          },
          config_default.get("lyricsAlignment"),
          "lyricsAlignment",
          (value) => saveOption("lyricsAlignment", value)
        ),
        createAdjust(
          strings_default[LOCALE].settings.lyricsAnimationTempo,
          "animationTempo",
          "s",
          config_default.get("animationTempo"),
          0.1,
          0,
          1,
          (state) => {
            config_default.set("animationTempo", Number(state));
            render();
            if (utils_default.isModeActivated())
              activate();
          }
        ),
        headerText(strings_default[LOCALE].settings.generalHeader),
        createOptions(
          strings_default[LOCALE].settings.progressBar,
          {
            never: strings_default[LOCALE].settings.contextDisplay.never,
            mousemove: strings_default[LOCALE].settings.contextDisplay.mouse,
            always: strings_default[LOCALE].settings.contextDisplay.always
          },
          config_default.get("progressBarDisplay"),
          "progressBarDisplay",
          (value) => {
            config_default.set("progressBarDisplay", value);
            if (value !== "never") {
              import_react_dom2.default.render(
                /* @__PURE__ */ import_react.default.createElement(ProgressBar_default, {
                  state: value
                }),
                container.querySelector("#fsd-progress-parent")
              );
            } else {
              import_react_dom2.default.unmountComponentAtNode(
                container.querySelector("#fsd-progress-parent")
              );
            }
          }
        ),
        createOptions(
          strings_default[LOCALE].settings.playerControls,
          {
            never: strings_default[LOCALE].settings.contextDisplay.never,
            mousemove: strings_default[LOCALE].settings.contextDisplay.mouse,
            always: strings_default[LOCALE].settings.contextDisplay.always
          },
          config_default.get("playerControls"),
          "playerControls",
          (value) => saveOption("playerControls", value)
        ),
        createOptions(
          strings_default[LOCALE].settings.showAlbum.setting,
          {
            never: strings_default[LOCALE].settings.showAlbum.never,
            always: strings_default[LOCALE].settings.showAlbum.always,
            date: strings_default[LOCALE].settings.showAlbum.date
          },
          config_default.get("showAlbum"),
          "showAlbum",
          (value) => saveOption("showAlbum", value)
        ),
        createToggle(strings_default[LOCALE].settings.icons, "icons"),
        createToggle(
          strings_default[LOCALE].settings.showAllArtists,
          "showAllArtists"
        ),
        createToggle(strings_default[LOCALE].settings.trimTitle, "trimTitle"),
        createToggle(
          strings_default[LOCALE].settings.songChangeAnimation,
          "enableFade"
        ),
        document.fullscreenEnabled ? createToggle(
          strings_default[LOCALE].settings.fullscreen,
          "enableFullscreen"
        ) : "",
        headerText(strings_default[LOCALE].settings.extraHeader),
        createToggle(
          strings_default[LOCALE].settings.sidebarQueue,
          "sidebarQueue",
          (value) => saveOption("sidebarQueue", value),
          strings_default[LOCALE].settings.sidebarQueueDescription.join("<br>")
        ),
        createOptions(
          strings_default[LOCALE].settings.extraControls,
          {
            never: strings_default[LOCALE].settings.contextDisplay.never,
            mousemove: strings_default[LOCALE].settings.contextDisplay.mouse,
            always: strings_default[LOCALE].settings.contextDisplay.always
          },
          config_default.get("extraControls"),
          "extraControls",
          (value) => saveOption("extraControls", value)
        ),
        createToggle(
          strings_default[LOCALE].settings.upnextDisplay,
          "upnextDisplay"
        ),
        createOptions(
          strings_default[LOCALE].settings.contextDisplay.setting,
          {
            never: strings_default[LOCALE].settings.contextDisplay.never,
            mousemove: strings_default[LOCALE].settings.contextDisplay.mouse,
            always: strings_default[LOCALE].settings.contextDisplay.always
          },
          config_default.get("contextDisplay"),
          "contextDisplay",
          (value) => saveOption("contextDisplay", value)
        ),
        createOptions(
          strings_default[LOCALE].settings.volumeDisplay.setting,
          {
            always: strings_default[LOCALE].settings.volumeDisplay.always,
            never: strings_default[LOCALE].settings.volumeDisplay.never,
            smart: strings_default[LOCALE].settings.volumeDisplay.smart
          },
          config_default.get("volumeDisplay"),
          "volumeDisplay",
          (value) => {
            config_default.set("volumeDisplay", value);
            if (value !== "never") {
              import_react_dom2.default.render(
                /* @__PURE__ */ import_react.default.createElement(VolumeBar_default, {
                  state: value
                }),
                container.querySelector("#fsd-volume-parent")
              );
            } else {
              import_react_dom2.default.unmountComponentAtNode(
                container.querySelector("#fsd-volume-parent")
              );
            }
          },
          strings_default[LOCALE].settings.volumeDisplay.description.join("\n")
        ),
        headerText(
          strings_default[LOCALE].settings.backgroundHeader,
          strings_default[LOCALE].settings.backgroundSubHeader
        ),
        createOptions(
          strings_default[LOCALE].settings.backgroundChoice.setting,
          {
            album_art: strings_default[LOCALE].settings.backgroundChoice.artwork,
            animated_album: strings_default[LOCALE].settings.backgroundChoice.animatedArt,
            dynamic_color: strings_default[LOCALE].settings.backgroundChoice.dynamicColor,
            static_color: strings_default[LOCALE].settings.backgroundChoice.staticColor,
            artist_art: strings_default[LOCALE].settings.backgroundChoice.artist
          },
          config_default.get("backgroundChoice"),
          "backgroundChoice",
          (value) => {
            config_default.set("backgroundChoice", value);
            if (utils_default.isModeActivated()) {
              updateBackground(Spicetify.Player.data.item?.metadata);
            }
          },
          strings_default[LOCALE].settings.backgroundChoice.description.join("<br>")
        ),
        createAdjust(
          strings_default[LOCALE].settings.animationSpeed,
          "animationSpeed",
          "%",
          config_default.get("animationSpeed") * 100,
          5,
          5,
          150,
          (state) => {
            config_default.set("animationSpeed", Number(state) / 100);
            modifyRotationSpeed(Number(state) / 100);
          }
        ),
        createAdjust(
          strings_default[LOCALE].settings.backAnimationTime,
          "backAnimationTime",
          "s",
          config_default.get("backAnimationTime"),
          0.1,
          0,
          5,
          (state) => {
            config_default.set("backAnimationTime", Number(state));
            container.style.setProperty("--fs-transition", `${state}s`);
          }
        ),
        createOptions(
          strings_default[LOCALE].settings.backgroundColor.setting,
          {
            VIBRANT: strings_default[LOCALE].settings.backgroundColor.vibrant,
            PROMINENT: strings_default[LOCALE].settings.backgroundColor.prominent,
            DESATURATED: strings_default[LOCALE].settings.backgroundColor.desaturated,
            LIGHT_VIBRANT: strings_default[LOCALE].settings.backgroundColor.lightVibrant,
            DARK_VIBRANT: strings_default[LOCALE].settings.backgroundColor.darkVibrant,
            VIBRANT_NON_ALARMING: strings_default[LOCALE].settings.backgroundColor.vibrantNonAlarming
          },
          config_default.get("coloredBackChoice"),
          "coloredBackChoice",
          (value) => {
            config_default.set("coloredBackChoice", value);
            if (utils_default.isModeActivated()) {
              updateBackground(Spicetify.Player.data.item?.metadata, true);
            }
          }
        ),
        createInputElement(
          strings_default[LOCALE].settings.staticColor,
          "staticBackChoice",
          "color",
          (value) => {
            config_default.set("staticBackChoice", value);
            if (config_default.get("backgroundChoice") === "static_color" && utils_default.isModeActivated()) {
              utils_default.overlayBack();
              animateColor(value, back, true);
              updateMainColor(
                Spicetify.Player.data.item?.uri,
                Spicetify.Player.data.item?.metadata
              );
              if (overlayTimout)
                clearTimeout(overlayTimout);
              overlayTimout = setTimeout(() => {
                utils_default.overlayBack(false);
              }, 1500);
            }
          }
        ),
        createAdjust(
          strings_default[LOCALE].settings.backgroundBlur,
          "blurSize",
          "px",
          config_default.get("blurSize"),
          4,
          0,
          100,
          (state) => {
            config_default.set("blurSize", Number(state));
            if (utils_default.isModeActivated()) {
              utils_default.overlayBack();
              updateBackground(Spicetify.Player.data.item?.metadata, true);
              if (overlayTimout)
                clearTimeout(overlayTimout);
              overlayTimout = setTimeout(() => {
                utils_default.overlayBack(false);
              }, 2e3);
            }
          }
        ),
        createOptions(
          strings_default[LOCALE].settings.backgroundBrightness,
          {
            0: "0%",
            0.1: "10%",
            0.2: "20%",
            0.3: "30%",
            0.4: "40%",
            0.5: "50%",
            0.6: "60%",
            0.7: "70%",
            0.8: "80%",
            0.9: "90%",
            1: "100%"
          },
          config_default.get("backgroundBrightness"),
          "backgroundBrightness",
          (value) => {
            config_default.set("backgroundBrightness", value);
            if (utils_default.isModeActivated()) {
              updateBackground(Spicetify.Player.data.item?.metadata, true);
            }
          }
        ),
        headerText(
          strings_default[LOCALE].settings.appearanceHeader,
          strings_default[LOCALE].settings.appearanceSubHeader
        ),
        createToggle(
          strings_default[LOCALE].settings.themedButtons,
          "themedButtons"
        ),
        createToggle(strings_default[LOCALE].settings.themedIcons, "themedIcons"),
        createOptions(
          strings_default[LOCALE].settings.invertColors.setting,
          {
            never: strings_default[LOCALE].settings.invertColors.never,
            always: strings_default[LOCALE].settings.invertColors.always,
            auto: strings_default[LOCALE].settings.invertColors.auto
          },
          config_default.get("invertColors"),
          "invertColors",
          (value) => saveOption("invertColors", value)
        ),
        createToggle(
          strings_default[LOCALE].settings.verticalMonitorSupport,
          "verticalMonitorSupport",
          (value) => saveOption("verticalMonitorSupport", value),
          strings_default[LOCALE].settings.verticalMonitorSupportDescription
        ),
        createToggle(
          strings_default[LOCALE].settings.trimTitleUpNext,
          "trimTitleUpNext"
        ),
        createOptions(
          strings_default[LOCALE].settings.upnextScroll.setting,
          {
            mq: strings_default[LOCALE].settings.upnextScroll.mq,
            sp: strings_default[LOCALE].settings.upnextScroll.sp
          },
          config_default.get("upNextAnim"),
          "upNextAnim",
          (value) => saveOption("upNextAnim", value)
        ),
        createAdjust(
          strings_default[LOCALE].settings.upnextTime,
          "upnextTimeToShow",
          "s",
          config_default.get("upnextTimeToShow"),
          1,
          5,
          60,
          (state) => {
            config_default.set("upnextTimeToShow", Number(state));
            updateUpNextShow();
          }
        ),
        headerText(strings_default[LOCALE].settings.aboutHeader),
        getAboutSection(),
        getSettingBottomHeader()
      );
      Spicetify.PopupModal.display({
        title: config_default.getMode() === "tv" ? strings_default[LOCALE].settings.tvModeConfig : strings_default[LOCALE].settings.fullscreenConfig,
        content: configContainer
      });
    }
    const extraBar = document.querySelector(EXTRA_BAR_SELECTOR)?.childNodes[0];
    if (config_default.getGlobal("fsHideOriginal")) {
      if (extraBar.lastChild.classList.contains(
        "control-button"
      ) || extraBar.lastChild?.title == "Full screen")
        extraBar?.lastChild?.remove();
    }
    if (config_default.getGlobal("activationTypes") != "keys") {
      if (config_default.getGlobal("buttonActivation") !== "tv") {
        const defButton = document.createElement("button");
        defButton.classList.add(
          "button",
          "fsd-button",
          "control-button",
          "InvalidDropTarget"
        );
        defButton.id = "fs-button";
        defButton.setAttribute("title", strings_default[LOCALE].fullscreenBtnDesc);
        defButton.innerHTML = constants_default.FULLSCREEN;
        defButton.onclick = openwithDef;
        defButton.oncontextmenu = (evt) => {
          evt.preventDefault();
          config_default.setMode("def");
          openConfig();
        };
        extraBar?.append(defButton);
      }
      if (config_default.getGlobal("buttonActivation") !== "def") {
        const tvButton = document.createElement("button");
        tvButton.innerHTML = constants_default.TV_MODE;
        tvButton.id = "TV-button";
        tvButton.setAttribute("title", strings_default[LOCALE].tvBtnDesc);
        tvButton.onclick = openwithTV;
        if (document.querySelector(TOP_BAR_SELECTOR)) {
          tvButton.classList.add(
            "button",
            "tm-button",
            "main-topBar-button",
            "InvalidDropTarget"
          );
          document.querySelector(TOP_BAR_SELECTOR)?.append(tvButton);
        } else {
          tvButton.classList.add(
            "tm-button",
            "Button-small-small-buttonTertiary-condensedAll-isUsingKeyboard-useBrowserDefaultFocusStyle",
            "Button-buttonTertiary-small-small-isUsingKeyboard-useBrowserDefaultFocusStyle-condensedAll",
            "encore-text-body-small-bold",
            "main-globalNav-buddyFeed",
            "Button-sc-1dqy6lx-0"
          );
          document.querySelector(TOP_BAR_SELECTOR_GLOBAL_NAVBAR)?.prepend(tvButton);
        }
        tvButton.oncontextmenu = (evt) => {
          evt.preventDefault();
          config_default.setMode("tv");
          openConfig();
        };
      }
    }
    render();
    switch (config_default.getGlobal("autoLaunch")) {
      case "default":
        openwithDef();
        break;
      case "tvmodesdsfdasds":
        openwithTV();
        break;
      case "lastsaddasused":
        if (config_default.getGlobal("tvMode"))
          openwithTV();
        else
          openwithDef();
        break;
      case "nevasddddddaddddddddddddddddddasddddddder":
      default:
        break;
    }
  }
  var app_default = main;

  // ../../../Users/Melih/AppData/Local/Temp/spicetify-creator/index.jsx
  (async () => {
    await app_default();
  })();
})();
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(async () => {
    if (!document.getElementById(`fullScreen`)) {
      var el = document.createElement('style');
      el.id = `fullScreen`;
      el.textContent = (String.raw`
  /* ../../../Users/Melih/AppData/Local/Temp/tmp-27760-gXSTFFzjD43K/193324ed83a28/styles.css */
#fsd-progress-container {
  width: 100%;
  display: flex;
  align-items: center;
  transition: opacity 1s ease-in-out;
}
#fsd-progress-container #fsd-progress-bar {
  width: 100%;
  height: 6px;
  border-radius: 4px;
  background: rgba(var(--main-color), 0.35);
  cursor: pointer;
  margin: 10px auto;
  display: flex;
  align-items: center;
}
#fsd-progress-container #fsd-progress-bar:hover #fsd-progress-bar-inner,
#fsd-progress-container #fsd-progress-bar:hover #progress-thumb,
#fsd-progress-container #fsd-progress-bar.dragging #fsd-progress-bar-inner,
#fsd-progress-container #fsd-progress-bar.dragging #progress-thumb {
  background: var(--theme-main-color);
  filter: saturate(1.5) contrast(1.5);
}
#fsd-progress-container #fsd-progress-bar:hover #progress-thumb,
#fsd-progress-container #fsd-progress-bar.dragging #progress-thumb {
  display: block;
}
#fsd-progress-container #fsd-progress-bar.dragging #progress-thumb {
  transform: scale(1.4);
}
#fsd-progress-container #fsd-progress-bar-inner {
  height: 100%;
  border-radius: 4px;
  background: var(--primary-color);
}
#fsd-progress-container #progress-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary-color);
  float: right;
  position: relative;
  left: 7px;
  top: -3px;
  display: none;
  pointer-events: none;
}
#fsd-progress-container .progress-number {
  min-width: 40px;
  text-align: center;
}
#fsd-progress-container #fsd-elapsed {
  margin-right: 12px;
}
#fsd-progress-container #fsd-duration {
  margin-left: 12px;
}

/* ../../../Users/Melih/AppData/Local/Temp/tmp-27760-gXSTFFzjD43K/193324ed83b29/styles.css */
#fsd-volume-container {
  position: fixed;
  text-align: center;
  background-color: transparent;
  color: var(--primary-color);
  float: left;
  top: 30%;
  left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 50;
  height: 250px;
  max-height: 33vh;
  transition: transform 0.6s var(--transition-function);
}
#fsd-volume-container.v-hidden {
  transform: translateX(-100px) scale(0.1);
}
#fsd-volume-container.dragging,
#fsd-volume-container:hover {
  transform: translateX(0px) scale(1);
}
#fsd-volume-container #fsd-volume {
  width: 50px;
  font-size: 18px;
}
#fsd-volume-container #fsd-volume-bar {
  margin: 8px 0;
  border-radius: 4px;
  background-color: rgba(var(--main-color), 0.35);
  width: 8px;
  height: 100%;
  display: flex;
  align-items: end;
}
#fsd-volume-container #fsd-volume-bar:hover #fsd-volume-bar-inner,
#fsd-volume-container #fsd-volume-bar:hover #volume-thumb,
#fsd-volume-container #fsd-volume-bar.dragging #fsd-volume-bar-inner,
#fsd-volume-container #fsd-volume-bar.dragging #volume-thumb {
  background: var(--theme-main-color);
  filter: saturate(1.5) contrast(1.5);
  transition: none;
}
#fsd-volume-container #fsd-volume-bar:hover #volume-thumb,
#fsd-volume-container #fsd-volume-bar.dragging #volume-thumb {
  display: block;
}
#fsd-volume-container #fsd-volume-bar.dragging #volume-thumb {
  transform: scale(1.1);
}
#fsd-volume-container #fsd-volume-bar-inner {
  width: 100%;
  border-radius: 4px;
  background-color: var(--primary-color);
  pointer-events: none;
  transition: height 0.1s var(--transition-function);
}
#fsd-volume-container #fsd-volume-icon svg {
  fill: var(--primary-color) !important;
}
#fsd-volume-container #volume-thumb {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--primary-color);
  position: relative;
  left: -2px;
  top: -5px;
  display: none;
  pointer-events: none;
}
#fsd-volume-container.unavailable #fsd-volume-bar {
  pointer-events: none;
}
#fsd-volume-container.unavailable #fsd-volume-bar-inner {
  height: 100%;
  background-color: var(--tertiary-color);
}

/* ../../../Users/Melih/AppData/Local/Temp/tmp-27760-gXSTFFzjD43K/193324ed80c24/base.css */
#full-screen-display {
  display: none;
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  cursor: default;
  left: 0;
  top: 0;
  --transition-duration: 0.8s;
  --transition-function: ease-in-out;
  --main-color:
    255,
    255,
    255;
  --contrast-color:
    0,
    0,
    0;
  --primary-color: rgba(var(--main-color), 1);
  --secondary-color: rgba(var(--main-color), 0.7);
  --tertiary-color: rgba(var(--main-color), 0.5);
  --theme-color:
    175,
    175,
    175;
  --theme-background-color: rgba(175, 175, 175, 0.6);
  --theme-hover-color: rgba(175, 175, 175, 0.3);
  --theme-main-color: rgba(var(--theme-color), 1);
}
#full-screen-display.themed-buttons {
  --theme-background-color: rgba(var(--theme-color), 0.6);
  --theme-hover-color: rgba(var(--theme-color), 0.3);
}
#full-screen-display #fsd-title svg,
#full-screen-display #fsd-artist svg,
#full-screen-display #fsd-album svg {
  transition: all var(--transition-duration) var(--transition-function);
  display: var(--icons-display);
}
#full-screen-display .fsd-song-meta span:hover,
#full-screen-display .fsd-artist-list span:hover {
  cursor: pointer;
  text-decoration: underline;
}
#full-screen-display .unavailable {
  color: var(--tertiary-color) !important;
  pointer-events: none !important;
  opacity: 0.5 !important;
  background: transparent !important;
}
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeDo {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeRi {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeLe {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
#full-screen-display .fade-do {
  animation: fadeDo 0.5s cubic-bezier(0.3, 0, 0, 1);
}
#full-screen-display .fade-up {
  animation: fadeUp 0.5s cubic-bezier(0.3, 0, 0, 1);
}
#full-screen-display .fade-ri {
  animation: fadeRi 0.5s cubic-bezier(0.3, 0, 0, 1);
}
#full-screen-display .fade-le {
  animation: fadeLe 0.5s cubic-bezier(0.3, 0, 0, 1);
}
#full-screen-display button.dot-after {
  padding-bottom: 3px !important;
}
#full-screen-display .dot-after:after {
  background-color: currentColor;
  border-radius: 50%;
  bottom: 3px;
  content: "";
  display: block;
  height: 4px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 4px;
}
#full-screen-display #fsd-ctx-container {
  background-color: transparent;
  color: var(--secondary-color);
  position: fixed;
  float: left;
  top: 30px;
  left: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  z-index: 50;
  transition: all 1s ease-in-out;
  opacity: 1;
  max-width: 40%;
}
#full-screen-display #fsd-ctx-details {
  padding-left: 18px;
  line-height: initial;
  font-size: 18px;
  overflow: hidden;
}
#full-screen-display #fsd-ctx-icon {
  width: 48px;
  height: 48px;
}
#full-screen-display #fsd-progress-container {
  --theme-main-color: rgba(var(--main-color), 1);
}
#full-screen-display.themed-buttons #fsd-progress-container,
#full-screen-display.themed-icons #fsd-progress-container {
  --theme-main-color: rgba(var(--theme-color), 1);
}
#full-screen-display #fsd-ctx-icon svg {
  fill: var(--primary-color) !important;
}
#full-screen-display #fsd-ctx-source {
  text-transform: uppercase;
}
#full-screen-display #fsd-ctx-name {
  font-weight: 700;
  font-size: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
#full-screen-display .ctx-no-name {
  padding-bottom: 2px;
  font-size: 24px;
  font-weight: 600;
}
#full-screen-display #fsd-upnext-container {
  float: right;
  width: 472px;
  height: 102px;
  max-width: 45%;
  position: fixed;
  top: 45px;
  right: 60px;
  display: flex;
  border: 1px solid rgba(130, 130, 130, 0.7);
  border-radius: 10px;
  background-color: rgb(20, 20, 20);
  flex-direction: row;
  text-align: left;
  z-index: 50;
  transition: transform 0.8s ease-in-out;
  transform: translateX(600px);
}
#full-screen-display #fsd_next_art_image {
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 100px;
  border-radius: 9px 0 0 9px;
}
#full-screen-display #fsd_next_details {
  padding-left: 18px;
  padding-top: 17px;
  line-height: initial;
  width: calc(100% - 115px);
  color: rgb(255, 255, 255);
  font-size: 19px;
  overflow: hidden;
}
#full-screen-display #fsd_next_tit_art {
  padding-top: 9px;
  font-size: 22px;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
@keyframes fsd_cssmarquee {
  0% {
    transform: translateX(0%);
  }
  18% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(var(--translate_width_fsd));
  }
}
@keyframes fsd_translate {
  0%, 10% {
    transform: translateX(0%);
  }
  50%, 55% {
    transform: translateX(var(--translate_width_fsd));
  }
  100% {
    transform: translateX(0%);
  }
}
#full-screen-display #fad-lyrics-plus-container {
  transition: transform var(--transition-duration) var(--transition-function);
  position: absolute;
  right: -50px;
  width: 50%;
  top: 7.5vh;
}
#full-screen-display #fad-lyrics-plus-container .lyrics-lyricsContainer-LyricsContainer {
  --lyrics-color-active: var(--primary-color) !important;
  --lyrics-color-inactive: var(--tertiary-color) !important;
  --lyrics-highlight-background: rgba(var(--contrast-color), 0.7) !important;
  --lyrics-align-text: var(--lyrics-alignment) !important;
  --animation-tempo: var(--lyrics-animation-tempo) !important;
  height: 85vh !important;
}
#full-screen-display #fad-lyrics-plus-container .lyrics-config-button {
  margin-right: 20px;
}
#full-screen-display.lyrics-unavailable #fad-lyrics-plus-container,
#full-screen-display.lyrics-hide-force #fad-lyrics-plus-container {
  transform: translateX(1000px) scale3d(0.1, 0.1, 0.1) rotate(45deg);
}
#full-screen-display #fsd-foreground {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  transition: all var(--transition-duration) var(--transition-function);
}
#full-screen-display #fsd-art-image {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 100%;
  border-radius: 8px;
  background-size: cover;
}
#full-screen-display #fsd-art-inner {
  position: absolute;
  left: 3%;
  bottom: 0;
  width: 94%;
  height: 94%;
  z-index: -1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6) !important;
  transform: translateZ(0);
}
#full-screen-display #fsd-artist {
  font-weight: 500;
  color: var(--secondary-color);
}
#full-screen-display #fsd-album {
  font-weight: 400;
  color: var(--tertiary-color);
}
#full-screen-display .fsd-controls {
  display: flex;
  flex-direction: row;
  transition: opacity 1s ease-in-out;
  -moz-column-gap: 10px;
  column-gap: 10px;
}
#full-screen-display #fsd-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -2;
}
#full-screen-display #fsd-background.animated {
  transform: scale(3, 3.5);
  transform-origin: left top;
}
#full-screen-display .fs-button {
  background: transparent;
  border: 0;
  border-radius: 8px;
  color: var(--primary-color);
  padding: 3px 5px 0 5px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s var(--transition-function), transform 0.1s var(--transition-function);
}
#full-screen-display .fs-button:hover {
  transform: scale(1.2);
  filter: saturate(1.5) contrast(1.5) !important;
  background: var(--theme-hover-color);
}
#full-screen-display .fs-button.button-active {
  background: var(--theme-background-color) !important;
  filter: saturate(1.5) contrast(1.5) !important;
}
#full-screen-display #fsd-foreground svg {
  fill: var(--primary-color);
  transition: all 0.3s var(--transition-function);
}
#full-screen-display.themed-icons #fsd-foreground svg {
  fill: var(--theme-main-color);
  filter: saturate(1.5) contrast(1.5);
}
#full-screen-display.themed-icons.themed-buttons .fs-button.button-active svg {
  fill: var(--primary-color) !important;
}
#full-screen-display .fsd-background-fade {
  transition: background-image var(--fs-transition) linear;
}
body.fsd-activated #full-screen-display {
  display: block;
}
.fsd-activated .Root__top-bar,
.fsd-activated .Root__nav-bar,
.fsd-activated .Root__main-view,
.fsd-activated .Root__now-playing-bar {
  visibility: hidden;
  display: none;
}
.fsd-activated .Root__top-container {
  overflow-x: hidden;
}
.fsd-activated .fsd-transform-animation {
  transition: transform 0.4s ease-in-out;
}
.fsd-activated .fsd-queue-panel {
  --queue-panel-x: 1000px;
  z-index: 101;
  transform: translateX(var(--queue-panel-x));
}
.fsd-activated .fsd-queue-panel .main-buddyFeed-actions.main-buddyFeed-closeContainer,
.fsd-activated .fsd-queue-panel .icNf66tgG3uxDMbCCIaN.XOSSUjLDKk9RRmiX_UWa {
  display: none;
}
.fsd-activated .fsd-queue-panel .XOawmCGZcQx4cesyNfVO {
  width: 500px !important;
}
.fsd-activated .fsd-queue-panel .main-buddyFeed-container,
.fsd-activated .fsd-queue-panel .ffFwfKcPDbmAPLXzxzKq {
  background: transparent !important;
  -webkit-backdrop-filter: blur(10px) brightness(0.7);
  backdrop-filter: blur(10px) brightness(0.7);
}
.fsd-activated .Root__main-view-overlay {
  z-index: 1000;
}

/* ../../../Users/Melih/AppData/Local/Temp/tmp-27760-gXSTFFzjD43K/193324ed81b25/defaultMode.css */
#full-screen-display[mode=def],
#full-screen-display[mode=def].lyrics-unavailable,
#full-screen-display[mode=def].lyrics-hide-force {
  --fsd-foreground-transform: 50%;
  --fsd-art-max-width: 600px;
  --fsd-items-max-width: 580px;
  --fsd-title-size: 50px;
  --fsd-sec-size: 28px;
}
#full-screen-display[mode=def].lyrics-active :not(#full-screen-display.lyrics-unavailable *, #full-screen-display.lyrics-hide-force *) {
  --fsd-foreground-transform: 0px;
  --fsd-art-max-width: 500px;
  --fsd-items-max-width: 480px;
  --fsd-title-size: 40px;
  --fsd-sec-size: 23px;
}
#full-screen-display[mode=def].vertical-mode.lyrics-active {
  --lyrics-alignment: center;
}
#full-screen-display[mode=def].vertical-mode.lyrics-active #fsd-foreground {
  width: 100%;
  height: 50%;
  margin-top: 20px;
}
#full-screen-display[mode=def].vertical-mode.lyrics-active #fsd-foreground #fsd-art {
  --fsd-art-max-width: 350px;
}
#full-screen-display[mode=def].vertical-mode.lyrics-active #fad-lyrics-plus-container {
  right: 0;
  left: 0;
  width: 100%;
  top: 50%;
  height: 50%;
}
#full-screen-display[mode=def].vertical-mode.lyrics-active #fad-lyrics-plus-container .lyrics-lyricsContainer-LyricsContainer {
  height: 95% !important;
}
#full-screen-display[mode=def].vertical-mode.lyrics-active.lyrics-unavailable,
#full-screen-display[mode=def].vertical-mode.lyrics-active.lyrics-hide-force {
  --fsd-foreground-transform: 0%;
}
#full-screen-display[mode=def].vertical-mode.lyrics-active.lyrics-unavailable #fsd-foreground,
#full-screen-display[mode=def].vertical-mode.lyrics-active.lyrics-hide-force #fsd-foreground {
  width: 100%;
  height: 100%;
}
#full-screen-display[mode=def].vertical-mode.lyrics-active.lyrics-unavailable #fsd-foreground #fsd-art,
#full-screen-display[mode=def].vertical-mode.lyrics-active.lyrics-hide-force #fsd-foreground #fsd-art {
  --fsd-art-max-width: 400px;
}
#full-screen-display[mode=def].vertical-mode.lyrics-active.lyrics-unavailable #fad-lyrics-plus-container,
#full-screen-display[mode=def].vertical-mode.lyrics-active.lyrics-hide-force #fad-lyrics-plus-container {
  transform: translateY(1000px) scale3d(0.1, 0.1, 0.1);
}
@media (max-width: 1400px) {
  #full-screen-display[mode=def],
  #full-screen-display[mode=def].lyrics-unavailable,
  #full-screen-display[mode=def].lyrics-hide-force {
    --fsd-foreground-transform: 50%;
    --fsd-art-max-width: 550px;
    --fsd-items-max-width: 530px;
    --fsd-title-size: 45px;
    --fsd-sec-size: 26px;
  }
  #full-screen-display[mode=def].lyrics-active :not(#full-screen-display.lyrics-unavailable *, #full-screen-display.lyrics-hide-force *) {
    --fsd-foreground-transform: 0px;
    --fsd-art-max-width: 450px;
    --fsd-items-max-width: 430px;
    --fsd-title-size: 38px;
    --fsd-sec-size: 20px;
  }
}
@media (max-width: 1200px) {
  #full-screen-display[mode=def],
  #full-screen-display[mode=def].lyrics-unavailable,
  #full-screen-display[mode=def].lyrics-hide-force {
    --fsd-foreground-transform: 50%;
    --fsd-art-max-width: 500px;
    --fsd-items-max-width: 480px;
    --fsd-title-size: 40px;
    --fsd-sec-size: 23px;
  }
  #full-screen-display[mode=def].lyrics-active :not(#full-screen-display.lyrics-unavailable *, #full-screen-display.lyrics-hide-force *) {
    --fsd-foreground-transform: 0px;
    --fsd-art-max-width: 400px;
    --fsd-items-max-width: 380px;
    --fsd-title-size: 38px;
    --fsd-sec-size: 20px;
  }
}
@media (max-width: 992px) {
  #full-screen-display[mode=def],
  #full-screen-display[mode=def].lyrics-unavailable,
  #full-screen-display[mode=def].lyrics-hide-force {
    --fsd-foreground-transform: 50%;
    --fsd-art-max-width: 450px;
    --fsd-items-max-width: 430px;
    --fsd-title-size: 38px;
    --fsd-sec-size: 21px;
  }
  #full-screen-display[mode=def].lyrics-active :not(#full-screen-display.lyrics-unavailable *, #full-screen-display.lyrics-hide-force *) {
    --fsd-foreground-transform: 0px;
    --fsd-art-max-width: 350px;
    --fsd-items-max-width: 330px;
    --fsd-title-size: 36px;
    --fsd-sec-size: 20px;
  }
}
@media (max-width: 768px) {
  #full-screen-display[mode=def],
  #full-screen-display[mode=def].lyrics-unavailable,
  #full-screen-display[mode=def].lyrics-hide-force {
    --fsd-foreground-transform: 50%;
    --fsd-art-max-width: 400px;
    --fsd-items-max-width: 380px;
    --fsd-title-size: 40px;
    --fsd-sec-size: 23px;
  }
  #full-screen-display[mode=def].lyrics-active :not(#full-screen-display.lyrics-unavailable *, #full-screen-display.lyrics-hide-force *) {
    --fsd-foreground-transform: 0px;
    --fsd-art-max-width: 300px;
    --fsd-items-max-width: 280px;
    --fsd-title-size: 36px;
    --fsd-sec-size: 20px;
  }
}
#full-screen-display[mode=def] #fsd-art,
#full-screen-display[mode=def] #fsd-details,
#full-screen-display[mode=def] #fsd-status,
#full-screen-display[mode=def] #fsd-progress-parent {
  transition: all var(--transition-duration) var(--transition-function);
}
#full-screen-display[mode=def] #fsd-foreground {
  transform: translateX(var(--fsd-foreground-transform));
  width: 50%;
  flex-direction: column;
  text-align: center;
}
#full-screen-display[mode=def] #fsd-art {
  width: calc(100vh - 300px);
  max-width: var(--fsd-art-max-width);
  min-width: 300px;
}
#full-screen-display[mode=def] #fsd-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
#full-screen-display[mode=def] #fsd-album,
#full-screen-display[mode=def] #fsd-artist {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
#full-screen-display[mode=def] #fsd-progress-parent {
  width: 28vw;
  max-width: var(--fsd-items-max-width);
}
#full-screen-display[mode=def] #fsd-details {
  padding-top: 30px;
  line-height: initial;
  max-width: var(--fsd-items-max-width);
  color: var(--primary-color);
}
#full-screen-display[mode=def] #fsd-status {
  display: flex;
  width: 28vw;
  max-width: var(--fsd-items-max-width);
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
#full-screen-display[mode=def] #fsd-status.active {
  margin: 5px auto 0;
  gap: 10px;
}
#full-screen-display[mode=def] #fsd-title {
  font-size: var(--fsd-title-size);
  font-weight: 900;
  transition: all var(--transition-duration) var(--transition-function);
}
#full-screen-display[mode=def] #fsd-artist,
#full-screen-display[mode=def] #fsd-album {
  font-size: var(--fsd-sec-size);
  transition: all var(--transition-duration) var(--transition-function);
}
@media (max-width: 900px), (max-height: 900px) {
  #full-screen-display[mode=def] #fsd-title {
    font-size: 35px;
    font-weight: 600;
  }
}
#full-screen-display[mode=def] #fsd-title svg {
  width: 35px;
  height: 35px;
}
#full-screen-display[mode=def].lyrics-active #fsd-title svg {
  width: 30px;
  height: 30px;
}
#full-screen-display[mode=def].lyrics-active #playing-icon {
  margin-right: 2px;
}
#full-screen-display[mode=def].lyrics-unavailable #fsd-title svg,
#full-screen-display[mode=def].lyrics-hide-force #fsd-title svg {
  width: 35px;
  height: 35px;
}
#full-screen-display[mode=def].lyrics-unavailable #playing-icon,
#full-screen-display[mode=def].lyrics-hide-force #playing-icon {
  margin-right: 7px;
}
#full-screen-display[mode=def] #playing-icon {
  width: 28px !important;
  height: 28px !important;
  margin-right: 7px;
}
#full-screen-display[mode=def] #fsd-artist svg,
#full-screen-display[mode=def] #fsd-album svg {
  width: calc(var(--fsd-sec-size) - 6px);
  height: calc(var(--fsd-sec-size) - 6px);
  margin-right: 5px;
}
#full-screen-display[mode=def] .fsd-controls {
  margin-top: 10px;
  margin-bottom: 5px;
}
#full-screen-display[mode=def] .fsd-controls-left {
  width: 30%;
  justify-content: flex-start;
}
#full-screen-display[mode=def] .fsd-controls-center {
  width: 40%;
  justify-content: center;
  margin: 10px auto 5px;
}
#full-screen-display[mode=def] .fsd-controls-right {
  width: 30%;
  justify-content: flex-end;
}

/* ../../../Users/Melih/AppData/Local/Temp/tmp-27760-gXSTFFzjD43K/193324ed82726/settings.css */
#full-screen-config-container {
  --main-text-color: #ffffff;
  --secondary-text-color: #cdcdcd;
  --main-background-color: #121212;
  --secondary-background-color: #252525;
  --tertiary-background-color: #404040;
  --theme-color: var(--spice-button);
  color: var(--main-text-color);
}
#full-screen-config-container .setting-card {
  background-color: var(--secondary-background-color);
  border-radius: 10px;
  margin: 8px 0;
}
#full-screen-config-container .setting-container {
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
}
#full-screen-config-container .setting-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#full-screen-config-container .setting-button-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
#full-screen-config-container .setting-button-row button {
  margin: 5px 10px;
}
#full-screen-config-container .setting-subhead {
  text-align: center;
  padding: 5px 0;
}
#full-screen-config-container .setting-subhead-description {
  color: var(--secondary-text-color);
}
#full-screen-config-container .setting-title,
#full-screen-config-container .setting-action {
  display: flex;
  align-items: center;
  padding: 8px 0;
}
#full-screen-config-container .setting-title {
  padding-right: 15px;
  font-weight: 600;
}
#full-screen-config-container .setting-action {
  text-align: right;
}
#full-screen-config-container .setting-description {
  font-size: 0.9rem;
  color: var(--secondary-text-color);
}
#full-screen-config-container .setting-description code {
  background-color: var(--main-background-color);
}
#full-screen-config-container .setting-description a {
  color: var(--theme-color);
  text-decoration: underline;
}
#full-screen-config-container .setting-description ul,
#full-screen-config-container .setting-description ol {
  list-style: inherit;
  margin-left: 1.5rem;
}
#full-screen-config-container .setting-description kbd {
  display: inline-block;
  padding: 3px 5px;
  margin: 0 4px;
  font:
    12px ui-monospace,
    SFMono-Regular,
    SF Mono,
    Menlo,
    Consolas,
    Liberation Mono,
    monospace;
  line-height: 10px;
  color: #c9d1d9;
  vertical-align: middle;
  background-color: #16221b;
  border: solid 1px rgba(110, 118, 129, 0.4);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 rgba(110, 118, 129, 0.4);
}
#full-screen-config-container .about {
  color: var(--theme-color);
  text-decoration: underline;
  padding: 0 10px;
}
#full-screen-config-container .setting-about {
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 0;
}
#full-screen-config-container .switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 20px;
}
#full-screen-config-container .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
#full-screen-config-container .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(150, 150, 150, 0.5);
  transition: all 0.3s ease-in-out;
  border-radius: 34px;
}
#full-screen-config-container .slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: -2px;
  bottom: -2px;
  background-color: var(--secondary-text-color);
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
}
#full-screen-config-container input[type=color] {
  border: none !important;
  width: 80px !important;
  height: 35px !important;
  background: black !important;
}
#full-screen-config-container input:checked + .slider {
  background-color: var(--tertiary-background-color);
}
#full-screen-config-container input:focus + .slider {
  box-shadow: 0 0 1px var(--tertiary-background-color);
}
#full-screen-config-container input:checked + .slider:before {
  transform: translateX(24px);
  background-color: var(--theme-color);
  filter: brightness(1.1) saturate(1.2);
}
#full-screen-config-container select {
  background: var(--tertiary-background-color);
  color: var(--main-text-color);
  border: none;
  height: 32px;
}
#full-screen-config-container option {
  background: var(--tertiary-background-color);
  color: var(--main-text-color);
}
#full-screen-config-container button.switch {
  align-items: center;
  border: 0px;
  border-radius: 50%;
  background-color: var(--tertiary-background-color);
  cursor: pointer;
  margin-inline-start: 12px;
  padding: 10px;
  width: 32px;
  height: 32px;
}
#full-screen-config-container button.switch.disabled,
#full-screen-config-container button.switch[disabled] {
  color: var(--secondary-text-color);
  opacity: 0.5;
  pointer-events: none;
}
#full-screen-config-container button.switch.disabled svg,
#full-screen-config-container button.switch[disabled] svg {
  fill: var(--secondary-text-color) !important;
}
#full-screen-config-container button.switch.small {
  width: 22px;
  height: 22px;
  padding: 3px;
}
#full-screen-config-container button.switch.small svg {
  fill: var(--theme-color);
}
#full-screen-config-container .adjust-value {
  margin-inline: 12px;
  width: 22px;
  text-align: center;
}
#full-screen-config-container .main-buttons-button {
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.76px;
  line-height: 18px;
  padding: 8px 34px;
  text-align: center;
  text-transform: uppercase;
  transition: all 33ms cubic-bezier(0.3, 0, 0, 1);
  white-space: nowrap;
  will-change: transform;
}
#full-screen-config-container .main-button-primary {
  background-color: var(--theme-color);
  color: var(--main-text-color);
}
#full-screen-config-container .main-button-secondary {
  background-color: transparent;
  color: var(--theme-color);
  border: 2px solid var(--theme-color);
}

/* ../../../Users/Melih/AppData/Local/Temp/tmp-27760-gXSTFFzjD43K/193324ed83127/tvMode.css */
#full-screen-display[mode=tv] #fsd-foreground {
  flex-direction: row;
  text-align: left;
  justify-content: left;
  align-items: flex-end;
  position: absolute;
  top: auto;
  bottom: 75px;
}
#full-screen-display[mode=tv] #fad-lyrics-plus-container {
  width: 45%;
}
#full-screen-display[mode=tv].lyrics-active #fsd-foreground {
  width: -moz-max-content;
  width: max-content;
  max-width: 60%;
}
#full-screen-display[mode=tv] #fsd-art {
  width: calc(100vw - 840px);
  min-width: 180px;
  max-width: 220px;
  margin-left: 65px;
}
#full-screen-display[mode=tv] #fsd-progress-parent {
  width: 100%;
  max-width: 450px;
}
#full-screen-display[mode=tv] .fsd-controls + #fsd-progress-parent {
  padding-left: 10px;
}
#full-screen-display[mode=tv] #fsd-details {
  padding-left: 30px;
  line-height: initial;
  width: 80%;
  color: var(--primary-color);
}
#full-screen-display[mode=tv] #fsd-title,
#full-screen-display[mode=tv] #fsd-album,
#full-screen-display[mode=tv] #fsd-artist {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 5px;
}
#full-screen-display[mode=tv] #fsd-title span,
#full-screen-display[mode=tv] #fsd-album span,
#full-screen-display[mode=tv] #fsd-artist > span {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
#full-screen-display[mode=tv] #fsd-title span {
  -webkit-line-clamp: 3;
}
#full-screen-display[mode=tv] #fsd-title svg,
#full-screen-display[mode=tv] #fsd-artist svg,
#full-screen-display[mode=tv] #fsd-album svg {
  flex: 0 0 auto;
}
#full-screen-display[mode=tv] #fsd-title {
  font-size: 62px;
  font-weight: 900;
}
@media (max-width: 900px), (max-height: 800px) {
  #full-screen-display[mode=tv] #fsd-title {
    font-size: 40px;
    font-weight: 600;
  }
  #full-screen-display[mode=tv] #fsd-artist,
  #full-screen-display[mode=tv] #fsd-album {
    font-size: 20px;
  }
}
#full-screen-display[mode=tv] #fsd-artist,
#full-screen-display[mode=tv] #fsd-album {
  font-size: 28px;
}
#full-screen-display[mode=tv] #fsd-title svg {
  width: 35px;
  height: 45px;
}
#full-screen-display[mode=tv] #playing-icon {
  width: 30px !important;
  height: 40px !important;
  margin-right: 5px;
}
#full-screen-display[mode=tv] #fsd-artist svg,
#full-screen-display[mode=tv] #fsd-album svg {
  margin-right: 15px;
  width: 22px;
  height: 22px;
}
#full-screen-display[mode=tv] #fsd-status {
  display: flex;
  flex-direction: row;
  min-width: 450px;
  max-width: 450px;
  align-items: center;
  justify-content: space-between;
}
#full-screen-display[mode=tv] #fsd-status.active {
  -moz-column-gap: 10px;
  column-gap: 10px;
  margin: 10px 0;
}

      `).trim();
      document.head.appendChild(el);
    }
  })()
      })();