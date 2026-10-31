const API = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';
async function request(path, options = {}) {
  const response = await fetch(`${API}${path}`, { headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.message || `Request failed (${response.status})`);
  return payload;
}
export const getHealth = () => request('/api/health');
export const getBenchmarks = () => request('/api/benchmarks');
export const runBenchmark = name => request(`/api/benchmarks/${encodeURIComponent(name)}`);
export const runCustom = params => request('/api/run-custom', { method: 'POST', body: JSON.stringify(params) });
export const optimizeQasm = (qasm, name) => request('/api/optimize-qasm', { method: 'POST', body: JSON.stringify({ qasm, name }) });
