import React, { useState, useContext } from 'react';
import PeerData, { SocketChannel } from 'peer-data';

var PeerDataContext = React.createContext(null);

var useSignaling = function (_a) {
    var _b = _a.url, url = _b === void 0 ? null : _b, _c = _a.customChannel, customChannel = _c === void 0 ? null : _c;
    return useState(customChannel ? customChannel : new SocketChannel(url));
};

function PeerDataProvider(_a) {
    var children = _a.children, servers = _a.servers, constraints = _a.constraints, _b = _a.signaling, signaling = _b === void 0 ? {} : _b;
    useSignaling(signaling);
    return (React.createElement(PeerDataContext.Provider, { value: new PeerData(servers, constraints) }, React.Children.only(children)));
}

var usePeerData = function () { return useContext(PeerDataContext); };

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
        return React.createElement(WrappedComponent, __assign({}, rest, { ref: forwardedRef, peerData: peerData }));
    }
    Hoc.displayName = "withPeerData(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")";
    return React.forwardRef(function (props, ref) {
        return React.createElement(Hoc, __assign({}, props, { forwardedRef: ref }));
    });
}

export { PeerDataContext, PeerDataProvider, usePeerData, useSignaling, withPeerData };
//# sourceMappingURL=index.es.js.map
