/* eslint-disable no-unused-expressions */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';
import propertydb from '../server/model/propertydb';

chai.use(chaiHttp);

chai.should();

describe('GET /properties', () => {
  it('should GET the list of all property adverts', (done) => {
    chai.request(app)
      .get('/api/v1/properties')
      .end((err, res) => {
        res.should.be.a('object');
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});
it('should return error for invalid address', (done) => {
  chai.request(app)
    .get('/api/v')
    .end((err, res) => {
      res.should.have.status(404);
      res.should.be.a.json;
      res.body.error.should.equal('Resource not found!. Please check the url then try again.');
      done(err);
    });
});
