var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  if (object = recipes) {
    Object.assign(object, {[key]: value});
   return object }
else {
   var object = Object.assign({}, recipes);
  Object.assign(object, {[key]: value});
   return object }
}
