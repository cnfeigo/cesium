define([
        './loadWithXhr'
    ], function(
        loadWithXhr) {
    'use strict';

    /**
     * Asynchronously loads the given URL as XML.  Returns a promise that will resolve to
     * an XML Document once loaded, or reject if the URL failed to load.  The data is loaded
     * using XMLHttpRequest, which means that in order to make requests to another origin,
     * the server must have Cross-Origin Resource Sharing (CORS) headers enabled.
     *
     * @exports loadXML
     *
     * @param {String} url The URL to request.
     * @param {Object} [headers] HTTP headers to send with the request.
     * @param {Request} [request] The request object. Intended for internal use only.
     * @returns {Promise.<XMLDocument>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
     *
     *
     * @example
     * // load XML from a URL, setting a custom header
     * Cesium.loadXML('http://someUrl.com/someXML.xml', {
     *   'X-Custom-Header' : 'some value'
     * }).then(function(document) {
     *     // Do something with the document
     * }).otherwise(function(error) {
     *     // an error occurred
     * });
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest|XMLHttpRequest}
     * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
     * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
     */
    function loadXML(url, headers, request) {
        return loadWithXhr({
            url : url,
            responseType : 'document',
            headers : headers,
            overrideMimeType : 'text/xml',
            request : request
        });
    }

    return loadXML;
});
