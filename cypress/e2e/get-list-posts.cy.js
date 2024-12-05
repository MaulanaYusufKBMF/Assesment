describe('Untuk mendapatkan Get List Posts', () => {
  it('Kondisi sukses menampilkan List Posts', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body[0]).to.have.all.keys('userId', 'id', 'title', 'body');
        expect(response.body[2].id).to.equal(3);
      });
  });
});
