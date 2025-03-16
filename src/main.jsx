import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://08a5ebc8582b5c84cb000d660c84b876@o4507450839662592.ingest.de.sentry.io/4507450850476112",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
