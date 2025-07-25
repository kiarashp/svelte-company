// lib/actions/clickOutside.ts

type Params = {
	callback: () => void;
	excludeEl: HTMLElement;
};
export function clickOutside(node: HTMLElement, { callback, excludeEl }: Params) {
	function handleClick(event: MouseEvent) {
		console.log(event.target === excludeEl);
		if (!node.contains(event.target as Node) && event.target !== excludeEl) {
			callback();
		}
	}

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
