import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  title: '',
  date: '',
  notes: '',

  actions: {
    addReminder() {
      console.log(this.getProperties('date'));
      const reminder = this.getProperties('title', 'date', 'notes');
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({
          title: '',
          date: '',
          notes: '',
        })
      })
    }
  }
});
