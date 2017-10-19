import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize() {
  //Provide title as a id
    let json = this._super(...arguments);
    json.data.id=json.data.attributes.title;
    return json;
  },
});