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
		StudieplekReservering: {
			GET: '/docs/studieplekReservering#get',
			POST: '/docs/studieplekReservering#post'
		},
		Vestigingen: {
			GET: '/docs/vestigingen#get'
		}
	};
</script>

<Documentation {data}>
	<slot />
</Documentation>
