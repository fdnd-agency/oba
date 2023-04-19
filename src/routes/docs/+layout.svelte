<script>
	import { Documentation, Nav } from '@fdnd/components';

	const data = {
		Reservering: {
			GET: '/docs/reservering#get',
		},
		Reserveringen: {
			GET: '/docs/reserveringen#get',
			POST: '/docs/reserveringen#post'
		},
		Vestigingen: {
			GET: '/docs/vestigingen#get'
		}
		
	};
</script>

<Documentation {data}>
	<slot />
</Documentation>
