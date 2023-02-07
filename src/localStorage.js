
var localStorageMock = (function() {
  var store = {
    stageData: '[{"id":1,"name":"Foundation","status":"Not Started","todo":[]},{"id":2,"name":"Discovery","status":"Not Started","todo":[]},{"id":3,"name":"Delivery","status":"Not Started","todo":[]}]'
  };
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
