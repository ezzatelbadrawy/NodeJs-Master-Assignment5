/*
 * Common App Functions
 *
 */


// Dependencies
var fs = require('fs');
var path = require('path');


// Container for module
var lib = {};

// Base directory of data folder
lib.baseDir = path.join(__dirname,'/../test/');

// Returns a random integer between min and max
lib.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Validate email
lib.validateEmail  = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// Parse a JSON string to an object but without try-ctach block 
lib.parseJsonToObject = function(str){
    var obj = JSON.parse(str);
    return obj;
};

// List recent created items in a directory according to input-hours
lib.listRecent = function(dir,hrs,callback){
  fs.readdir(lib.baseDir+dir+'/', function(err,data){
    if(!err && data && data.length > 0){
      var trimmedFileNames = [];
      var now = Date.now();
      var hrsInMs = parseInt(hrs)*60*60*1000;    
      var checkedFilesCounter = 0;        
      data.forEach(function(fileName){
        var path = lib.baseDir+dir+'/'+fileName;
        fs.stat(path, function (err,stats) {
            if(!err && stats){
                var btime = stats.birthtimeMs;      // birthtimeMs/birthtime : time of file creation
                if(now - btime <= hrsInMs){
                    trimmedFileNames.push(fileName.replace('.json',''));                    
                }
            }
            checkedFilesCounter ++;
            if(checkedFilesCounter == data.length){
                callback(false,trimmedFileNames);            
            }            
        });        
      });
    } else {
      callback(err,data);
    }
  });
};


// Init script
lib.init = function(){
    'use strict';
    x = 'hello';
    console.log(x);
};


// Export the module
module.exports = lib;
