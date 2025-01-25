# React Router v6 Missing Route Bug

This repository demonstrates a common issue in React Router v6: unexpected behavior when a route is missing or misspelled.  The application fails to gracefully handle the situation, leading to crashes or blank screens.

## Bug Description

The `App.js` file contains a React Router configuration missing a route.  Navigating to the missing route results in an error.

## Solution

The `bugSolution.js` file demonstrates a solution using the `useRoutes` hook and a fallback route to handle unmatched paths gracefully.  An alternative would involve using a `Route` with the path `*` as a catch-all.