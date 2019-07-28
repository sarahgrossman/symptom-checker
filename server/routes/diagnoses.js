const camelCase = require('lodash/camelCase')
const router = require('express').Router()
const symptoms = require('../../data/symptoms')
module.exports = router

router.get('/:symptomName', (req, res, next) => {
  const symptomName = req.params.symptomName
  const diagnoses = symptoms.find(symptom => symptomName === camelCase(symptom.name))
  res.status(200).json(diagnoses)
})

router.post('/:symptomName', (req, res, next) => {
  const symptomName = req.params.symptomName
  const symptom = symptoms.find(item => symptomName === camelCase(item.name))
  const diagnosis = symptom.diagnoses.find(item => item.name === req.body.diagnosis)
  diagnosis.frequency++
  res.status(200).json({ diagnosis })
})
