<script>
	import { Documentation, Nav } from '@fdnd/components';

	const data = {
		Reserveringen: {
			GET: '/docs/reserveringen#get',
			POST: '/docs/reserveringen#post'
		},
		
	};
</script>

<Documentation {data}>
	<slot />
</Documentation>
