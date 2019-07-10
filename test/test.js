/* eslint-disable no-unused-expressions */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';
import propdb from '../server/model/propdb';

chai.use(chaiHttp);

chai.should();

describe('GET /property', () => {
  it('should GET the list of all property adverts', (done) => {
    chai.request(app)
      .get('/api/v1/property')
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

describe('GET/property/:id', () => {
  it('should fetch a specific property type', (done) => {
    chai.request(app)
      .get('/api/v1/property/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a.json;
        res.should.be.a('object');
        done();
      });
  });
  it('should return error for invalid id', (done) => {
    chai.request(app)
      .get('/api/v1/property/g')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.error.should.equal('Id cannot found');
        done(err);
      });
  });
});
