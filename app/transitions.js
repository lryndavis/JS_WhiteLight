export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('new'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('category'),
    this.use('fade'),
    this.reverse('fade')
  );
    this.transition(
    this.fromRoute('category'),
    this.toRoute('product'),
    this.use('fade'),
  );
    this.transition(
    this.fromRoute('new'),
    this.toRoute('product'),
    this.use('fade'),
  );
    this.transition(
    this.fromRoute('era'),
    this.toRoute('product'),
    this.use('fade'),
  );
    this.transition(
    this.fromRoute('size'),
    this.toRoute('product'),
    this.use('fade'),
  );
    this.transition(
    this.fromRoute('contact'),
    this.toRoute('category'),
    this.use('fade'),
  );
    this.transition(
    this.fromRoute('contact'),
    this.toRoute('new'),
    this.use('fade'),
  );
    this.transition(
    this.fromRoute('contact'),
    this.toRoute('contact'),
    this.use('fade'),
  );
    this.transition(
    this.fromRoute('cart'),
    this.toRoute('new'),
    this.use('fade'),
  );
    this.transition(
    this.fromRoute('new'),
    this.toRoute('contact'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
    this.transition(
    this.fromRoute('category'),
    this.toRoute('contact'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
    this.transition(
    this.fromRoute('category'),
    this.toRoute('about'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
    this.transition(
    this.fromRoute('new'),
    this.toRoute('about'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
};
