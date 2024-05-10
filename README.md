# Daytrading tool for market code stuff

Making market research tools via code 

### Frontend
React

### Backend
Flask

## Dependencies

To install the boilerplate dependencies, you can run:

```bash
git clone https://github.com/YaleDHLab/flask-react-boilerplate
cd flask-react-boilerplate
npm install --no-optional
pip install -r requirements.txt
```

## Quickstart

That will start the server on port 7082. To run the development server with hot module reloading, run:

frontend
```bash
npm run start 
```

backend
```bash
npm run production (backend)
```
That will start the webpack dev server on port 7081.

## Tests

To run the Javascript tests (located in `src/tests/`), run:

```bash
npm run jest
```

To run the Python tests (located in `server/tests/`), run:

```bash
pytest
```

## Linting

To lint the Javascript files (located in `src`), run:

```bash
npm run lint-js
```

To lint the Python files (located in `server`), run:

```bash
npm run lint-py
```