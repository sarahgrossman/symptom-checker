import camelCase from 'lodash/camelCase'

export function getDiagnoses (symptomName) {
  return fetch(`/api/diagnoses/${camelCase(symptomName)}`)
}
