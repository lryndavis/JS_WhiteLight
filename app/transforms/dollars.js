import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return serialized / 100; //returns dollars
  },

  serialize(deserialized) {
    return deserialized * 100; //returns cents
  }
});
