<script>
	const types = {
		mdi: {
			size: 24,
			viewbox: '0 0 24 24',
		},
		'simple-icons': {
			size: 24,
			viewbox: '0 0 24 24',
		},
		default: {
			size: 0,
			viewbox: '0 0 0 0',
		},
	}

	export let type = null
	export let path
	export let size = null
	export let viewbox = null
	export let flip = 'none'
	export let rotate = 0

	$: defaults = types[type] || types.default
	$: sizeValue = size || defaults.size
	$: viewboxValue = viewbox || defaults.viewbox
	$: sx = ['both', 'horizontal'].includes(flip) ? '-1' : '1'
	$: sy = ['both', 'vertical'].includes(flip) ? '-1' : '1'
	$: r = isNaN(rotate) ? rotate : rotate + 'deg'
</script>

<style>
	svg {
		transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));
	}

	path {
		fill: currentColor;
	}
</style>

<svg width={sizeValue} height={sizeValue} viewBox={viewboxValue} style="--sx: {sx}; --sy: {sy}; --r: {r}">
	<path d={path} />
</svg>
