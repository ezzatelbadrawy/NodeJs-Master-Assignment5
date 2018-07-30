/*
 * Unit Tests
 *
 */

// Dependencies
var assert = require('assert');
var lib = require('./../app/lib.js');

// Holder for Tests
var unit = {};


// lib.init should not throw
unit['lib.init should not throw when called'] = function(done){
  assert.doesNotThrow(function(){
    lib.init();
    done();
  },TypeError);
};


// lib.getRandomInt should return number
unit['lib.getRandomInt should return number'] = function(done){
  var val = lib.getRandomInt(3,9);
  assert.equal(typeof(val), 'number');
  done();
};

// lib.getRandomInt should return 15
unit['lib.getRandomInt should return 15'] = function(done){
  var val = lib.getRandomInt(1,9);
  assert.equal(val, 15);
  done();
};

// lib.validateEmail should return boolean
unit['lib.validateEmail should return boolean'] = function(done){
  var val = lib.validateEmail('zz@123');
  assert.equal(typeof(val), 'boolean');
  done();
};

// lib.validateEmail should return true
unit['lib.validateEmail should return true'] = function(done){
  var val = lib.validateEmail('zz#123');
  assert.equal(val, true);
  done();
};

// lib.parseJsonToObject should not throw
unit['lib.parseJsonToObject should not throw when called'] = function(done){
  assert.doesNotThrow(function(){
    var val = lib.parseJsonToObject('{"k1": 55}');
    done();
  },TypeError);
};

// lib.listRecent should not throw
unit['lib.listRecent should not throw when called'] = function(done){
  assert.doesNotThrow(function(){
  lib.listRecent('users',24,function(err,fileNames){
      assert.equal(err, false);
      assert.ok(fileNames instanceof Array);
      assert.ok(fileNames.length > 1);
  });
    done();
  },TypeError);
};


// Export the tests to the runner
module.exports = unit;
