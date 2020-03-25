'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PeerData = require('peer-data');
var PeerData__default = _interopDefault(PeerData);

var PeerDataContext = React__default.createContext(null);

var useSignaling = function (_a) {
    var _b = _a.url, url = _b === void 0 ? null : _b, _c = _a.customChannel, customChannel = _c === void 0 ? null : _c;
    return React.useState(customChannel ? customChannel : new PeerData.SocketChannel(url));
};

function PeerDataProvider(_a) {
    var children = _a.children, servers = _a.servers, constraints = _a.constraints, _b = _a.signaling, signaling = _b === void 0 ? {} : _b;
    useSignaling(signaling);
    return (React__default.createElement(PeerDataContext.Provider, { value: new PeerData__default(servers, constraints) }, React__default.Children.only(children)));
}

var usePeerData = function () { return React.useContext(PeerDataContext); };

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function withPeerData(WrappedComponent) {
    function Hoc(props) {
        var peerData = usePeerData();
        var forwardedRef = props.forwardedRef, rest = __rest(props, ["forwardedRef"]);
        return React__default.createElement(WrappedComponent, __assign({}, rest, { ref: forwardedRef, peerData: peerData }));
    }
    Hoc.displayName = "withPeerData(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")";
    return React__default.forwardRef(function (props, ref) {
        return React__default.createElement(Hoc, __assign({}, props, { forwardedRef: ref }));
    });
}

exports.PeerDataContext = PeerDataContext;
exports.PeerDataProvider = PeerDataProvider;
exports.usePeerData = usePeerData;
exports.useSignaling = useSignaling;
exports.withPeerData = withPeerData;
//# sourceMappingURL=index.js.map
