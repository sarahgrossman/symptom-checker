export function selectAppDiagnosis (diagnoses) {
  const highestFreq = diagnoses.reduce((acc, curr) => {
    return curr.frequency > acc ? curr.frequency : acc
  }, 0)
  const options = diagnoses.filter(diagnosis => diagnosis.frequency === highestFreq)

  const randomOption = options[Math.floor(Math.random() * options.length)]
  return randomOption
}
