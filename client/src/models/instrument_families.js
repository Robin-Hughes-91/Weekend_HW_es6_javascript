import PubSub from '../helpers/pub_sub/js';

class InstrumentFamilies(data) {
  constructor(container) {
  this.data = data;
  }
};

bindEvents() {
  PubSub.publish('InstrumentFamilies:data-ready', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishFamilyDetail(selectedIndex);
  });
};

publishFamilyDetail(selectedIndex) {
  const selectedFamily = this.data[selectedIndex];
  PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
};

export default InstrumentFamilyView;
