import { describe, it, expect } from 'vitest';
import { render } from 'preact';

import { useState } from 'preact/hooks';
import { XMasBanner } from '../components/XMasBanner';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

describe('Counter component (browser mode)', () => {
	it('increments when clicked', async () => {
		// Conteneur réel dans le navigateur
		const container = document.createElement('div');
		document.body.appendChild(container);

		render(<Counter />, container);

		const button = container.querySelector('button')!;
		expect(button.textContent).toBe('Count: 0');

		// Interaction réelle
		button.click();
		await Promise.resolve(); // laisse Preact re-render

		expect(button.textContent).toBe('Count: 1');
	});
});

describe('XMasBanner renders', () => {
	it('renders', async() => {
		const container = document.createElement('div')
		document.body.appendChild(container)
		render(<XMasBanner />, container)

		const span = container.querySelector('span.ms-2')
		expect(span?.textContent).toContain('Noël 2025')
	})
})
