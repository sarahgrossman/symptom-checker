# instadoc

The app that diagnoses your symptoms in a snap, and learns from your feedback.

## Development

Simply `npm install` and `npm run dev` to get the project running. Navigate to `http://localhost:4000` to get your dx!

## API

All the routes for the Express API are in `server/routes`. At present there are two being used by the frontend:

1. GET /api/diagnoses/:symptom - get all the diagnoses for a given symptom
2. POST /api/diagnoses/:symptom - set the diagnosis the user prefers for a given symptom. Requires body that is an object with key "diagnosis" and value that is the preferred diagnosis (string). Frequency for that diagnosis is incremented in the JavaScript object model.

Both routes accept and return JSON.

## Testing

Run `npm test` to run the test suite. At present, only tests for the Express API routes are included.
