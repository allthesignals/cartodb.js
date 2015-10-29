var cdbProxy = require('cdb-proxy');
var TemplateList = require('../../../../src-browserify/core/template-list');

describe('core/template-list', function() {
  var tmpl;

  beforeEach(function() {
    var cdb = cdbProxy.set({
      log: jasmine.createSpyObj('cdb.log', ['error'])
    });
    tmpl = new TemplateList();
    tmpl.reset([
      {name: 't1', template: "hi, my name is <%= name %>"},
      {name: 't2', template: "byee!! <%= name %>"}
    ]);
  });

  it('should get template by name', function() {
    expect(tmpl.getTemplate('t1')).toBeTruthy();
    expect(tmpl.getTemplate('t2')({name:'rambo'})).toEqual('byee!! rambo');
    expect(tmpl.getTemplate('nononon')).toBeFalsy();
  });
});
