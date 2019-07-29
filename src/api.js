import camelCase from 'lodash/camelCase'

export function getDiagnoses (symptom) {
  return fetch(`/api/diagnoses/${camelCase(symptom)}`)
}

export function setDiagnosis (symptom, diagnosis) {
  return fetch(`/api/diagnoses/${camelCase(symptom)}`, {
    method: 'POST',
    body: JSON.stringify({ diagnosis }),
    headers: { 'Content-type': 'application/json' }
  })
}
