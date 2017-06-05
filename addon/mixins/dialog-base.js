import Ember from 'ember';
import SpreadMixin from 'ember-spread';

import createFocusTrap from "npm:focus-trap";


export default Ember.Mixin.create(SpreadMixin, {
  classNames: [ 'nb-modal-dialog-backdrop' ],
  classNameBindings: [ 'size' ],
  size: 'size-1',
  focusTrap:null,
  onRemove(){

  },
  onShow(){

  },
  init: function () {
    this._super(...arguments);
    this.get('parentView.dialogInstances').pushObject(this);
    this.set('parentComponent', this.get('parentView'));
  },

  willDestroy: function () {
    if(this.get('focusTrap'))
    {
      this.get('focusTrap').deactivate();
    }

    this.get('parentComponent.dialogInstances').removeObject(this);
    this._super(...arguments);
  },
  parentComponent: null,

  defaultAction: '',
  keyPress: function ( e ) {
    if ( this.get('defaultAction') ) {
      var key = e.which || e.keyCode;
      if ( key === 13 && e.target.nodeName !== 'TEXTAREA' ) {
        e.stopPropagation();
        e.preventDefault();

        this.send(this.get('defaultAction'));
      }
    }
  },
  actions: {
    remove: function () {
      console.log('will remove',this);
    this.onRemove();
      this.$().removeClass('show');
      this.$('.nb-modal-dialog').removeClass('show');
      this.get('focusTrap').deactivate();
      var self = this;
      setTimeout(function () {
        self.get('parentComponent').send('remove', self)
      }, 175);

    },
    show: function () {
      this.onShow();

      this.$().addClass('show');
      this.$('.nb-modal-dialog').addClass('show');
      var focusTrap = createFocusTrap(this.$('.nb-modal-dialog').get(0),{initialFocus:'.nb-modal-dialog'});
      this.set('focusTrap',focusTrap);
      focusTrap.activate();
    }
  }


});
