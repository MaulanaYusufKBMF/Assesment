describe('Untuk mendapatkan Get Posts by ID', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  
    it('Kondisi Sukses Get Posts by ID ', () => {
      const postId = 4;
        cy.request({
        method: 'GET',
        url: `${baseUrl}/${postId}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', postId);
        expect(response.body).to.have.property('title');
        expect(response.body).to.have.property('body');
        expect(response.body).to.have.property('userId');
        expect(response.body.title).to.eq('eum et est occaecati');
      });
    });
  
    it('Kondisi Gagal ID tidak Valid', () => {
      const invalidPostId = 169;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/${invalidPostId}`,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.be.empty;
      });
    });
  });
  