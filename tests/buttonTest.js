module.exports = {
    'Checks the functionality of the submit button': function(client) {

  client
    .url('http://localhost:3000')
    .setValue('input', '50')
    .click('button', function(result) {
      this.assert.strictEqual(result.status, 0);
    })
    .expect.element('#score').text.to.contain('50');
  },
};