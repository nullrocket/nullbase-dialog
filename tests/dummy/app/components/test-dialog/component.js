import Ember from 'ember';
import DialogMixin from 'nullbase-dialog/mixins/dialog-base';
import layout from './template';

export default Ember.Component.extend(DialogMixin,{
  layout,
  actions:{
    doStuff: function(){
      this.sendAction("doStuff",this);
    },
    alert: function(){

      this.sendAction('alert',"DUDEEE");
    }
  }
});
