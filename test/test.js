/* eslint-disable no-unused-expressions */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';

chai.use(chaiHttp);

chai.should();

describe('Server test', () => {
  it('should start the server', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.be.json;
        done();
      });
  });
});
