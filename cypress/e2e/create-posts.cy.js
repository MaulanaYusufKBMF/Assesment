describe('Membuat Data Baru Posts', () => {
    it('Kondisi Berhasil Membuat Data Posts', () => {
      const postData = {
        title: 'Perkenalan Diri',
        body: 'Nama Saya Maulana Yusuf, saya bekerja sebagai Quality Assurance Engineer, saya tinggal di Depok',
        userId: 4
      };
  
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: postData,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.title).to.eq('Perkenalan Diri');
        expect(response.body.body).to.eq('Nama Saya Maulana Yusuf, saya bekerja sebagai Quality Assurance Engineer, saya tinggal di Depok');
        expect(response.body.userId).to.eq(4);
        expect(response.body).to.have.property('id');
        expect(response.body.id).to.eq(101);
      });
    });
  });
  