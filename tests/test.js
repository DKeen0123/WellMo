module.exports = {
    'Checking that the test works': function(client) {

  client
    .url('http://localhost:3000')
    .setValue('input', 'I cannot convert my feelings to numbers')
    .click('button', function(result) {
      this.assert.strictEqual(result.status, 0);
    })
    .expect.element('#score').text.to.contain('I cannot convert my feelings to numbers');
  },
};