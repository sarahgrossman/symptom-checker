# instadoc

The app that diagnoses your symptoms in a snap, and learns from your feedback.

## Development

Simply `npm install` and `npm run dev` to get the project running. Navigate to `http://localhost:4000` to get your dx!

## API

All the routes for the Express API are in server/routes. At present there are two being used by the frontend:

1. GET /api/diagnoses/:symptom - get all the diagnoses (human-readable names and frequency)
2. POST /api/diagnoses/:symptom - sends the diagnosis the user prefers from the frontend. Requires body that is an object with key "diagnosis" and value being the string name of the preferred diagnosis. Frequency for that diagnosis is incremented in the JavaScript object model.

Both routes accept and return JSON.

## Testing

Run `npm test` to run the test suite. At present, only tests for the Express API routes are included.
