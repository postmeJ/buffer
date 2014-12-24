var Buffer = require('../').Buffer
var test = require('tape')
if (process.env.OBJECT_IMPL) Buffer.TYPED_ARRAY_SUPPORT = false
test('test-buffer-big.js', function(t) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// var common = require('../common');
// var assert = require('assert');

// The tests below should throw an error, not abort the process...
t.throws(function() { new Buffer(0x3fffffff + 1) }, RangeError);
// t.throws(function() { new Int8Array(0x3fffffff + 1) }, RangeError);
// t.throws(function() { new ArrayBuffer(0x3fffffff + 1) }, RangeError);
// t.throws(function() { new Float64Array(0x7ffffff + 1) }, RangeError);


t.end()
})