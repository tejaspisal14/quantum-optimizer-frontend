# QubitLab frontend

React + Vite frontend for the repository's actual Qiskit optimizer. All metrics and circuit outputs are requested from the local Python API; the UI does not use the old mock benchmark service.

## Start the backend first

From the repository root:

```bash
python -m venv .venv
.venv\Scripts\activate
python -m pip install -r requirements.txt
python -m src.api
```

The API listens at `http://127.0.0.1:8000`.

## Start the frontend in a second terminal

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL (normally `http://localhost:5173`). Keep both terminals running.

## Live features

- Discover benchmark circuits from `test_circuits/*.qasm`.
- Run the real optimizer, Qiskit optimization-level-3 baseline, metrics, and equivalence checks.
- Generate a reproducible circuit with the repository's `src/generator.py`.
- Upload or paste OpenQASM 2.0 and run it through the same analysis pipeline.
- Inspect original, optimizer, Qiskit and separately scheduled circuit QASM/text diagrams.
- Export each resulting circuit as QASM and the full result payload as JSON.
- Review results from the current browser session.

The scheduler is reported as a separate candidate because `src/main.py`'s primary optimizer does not call `src/scheduler.py`. Full unitary/statevector verification follows the repository's existing 10-qubit limit. The weighted cost remains a project heuristic, not a hardware-calibrated cost.
