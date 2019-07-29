const expect = require('chai').expect
const request = require('request')
const symptoms = require('../data/symptoms')
const camelCase = require('lodash/camelCase')

const symptomsCopy = symptoms

describe('Diagnoses API', () => {
  // reset symptom object after incrementing
  afterEach(() => symptoms.forEach((symptom, idx) => {
      symptom.diagnoses.forEach((diagnosis, diagIdx) => {
        symptoms[idx].diagnoses[diagIdx].frequency = symptomsCopy[idx].diagnoses[diagIdx].frequency
      })
    }
  ))

  describe('GET symptom diagnoses route', () => {
    it('returns diagnoses for a particular symptom', function (done) {
      request(`http://localhost:4000/api/diagnoses/${camelCase(symptoms[0].name)}`,
      (error, response, body) => {
        const parsed = JSON.parse(body)
          expect(parsed.diagnoses[0].name).to.equal(symptoms[0].diagnoses[0].name)
          done()
      })
    })
  })

  describe('POST symptom diagnoses route', () => {
    it('adds to the frequency count for a symptom\'s diagnosis', function (done) {
      request({
        method: 'post',
        url: `http://localhost:4000/api/diagnoses/${camelCase(symptoms[0].name)}`,
        json: true,
        body: {
          diagnosis: symptoms[0].diagnoses[0].name
        }
      },
      (error, response, body) => {
        expect(body.diagnosis.frequency).to.equal(1)
          done()
      })
    })
  })
})
