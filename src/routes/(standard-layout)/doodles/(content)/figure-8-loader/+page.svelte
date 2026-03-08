<script lang="ts">
	import { page } from "$app/state"
	import { StaticPage } from "$lib/design-system/pages"
	import { PageContent } from "$lib/design-system/PageContent"
	import { LinkedHeading } from "$lib/design-system/LinkedHeading"
	import { CodeBlock } from "$lib/design-system/CodeBlock"
	import { metadata } from "./metadata"
</script>

<StaticPage title="{metadata.title}" description="{metadata.summary}" theme="{metadata.color}" pathname={page.url.pathname}>
	<PageContent slot="content">
		<p>Based on <a href="https://dev.to/afif/build-your-css-loader-with-only-one-div-the-dots-3882">Temani Afif's loader tutorial</a>. This figure-8 pattern is a valid solution to the three-body problem discovered by <a href="https://arxiv.org/pdf/math/0011268.pdf">Chenciner and Montgomery</a>. But I am bad at math now, so I just simulated an <a href="https://mathworld.wolfram.com/EightCurve.html">Eight Curve</a> ^^'</p>
		<div class="loader-container">
			<div class="loader"></div>
		</div>
		<LinkedHeading h="2" value="Code" />
		<CodeBlock lang="css" code={`
.loader {
	--d: radial-gradient(farthest-side, currentColor 90%, #0000);
	font-size: 1.25rem;
	margin: 1em auto;
	color: darkblue;
	width: 5em;
	height: 2.5em;
	background-image: var(--d), var(--d), var(--d);
	background-size: 1em 1em;
	background-repeat: no-repeat;
	animation: m 2.5s infinite;
}

@keyframes m {
	@for $i from 0 through 100 {
		#{$i}% {
		background-position:
			#{2.0 + 2.0 * math.sin(math.$pi / 50 * $i)}em #{0.75 + 1.5 * math.sin(math.$pi / 50 * $i) * math.cos(math.$pi / 50 * $i)}em,
			#{2.0 + 2.0 * math.sin(math.$pi / 50 * $i + 2 * math.$pi / 3)}em #{0.75 + 1.5 * math.sin(math.$pi / 50 * $i + 2 * math.$pi / 3) * math.cos(math.$pi / 50 * $i + 2 * math.$pi / 3)}em,
			#{2.0 + 2.0 * math.sin(math.$pi / 50 * $i + 4 * math.$pi / 3)}em #{0.75 + 1.5 * math.sin(math.$pi / 50 * $i + 4 * math.$pi / 3) * math.cos(math.$pi / 50 * $i + 4 * math.$pi / 3)}em;
		}
	}
}`} />
	</PageContent>
</StaticPage>

<style>
	.loader-container {
		margin-block: 6em;
	}

	.loader {
		--d: radial-gradient(farthest-side, currentColor 90%, #0000);
		font-size: 2rem;
		margin: 1em auto;
		color: var(--t-primary-a);
		width: 5em;
		height: 2.5em;
		background-image: var(--d), var(--d), var(--d);
		background-size: 1em 1em;
		background-repeat: no-repeat;
		animation: figure-eight 2.5s infinite;
	}


	@keyframes figure-eight {
		0% {
			background-position: 2em 0.75em, 3.7320508076em 0.1004809472em, 0.2679491924em 1.3995190528em;
		}
		1% {
			background-position: 2.1255810391em 0.8439999252em, 3.6658424814em 0.0586026363em, 0.2085764795em 1.3473974385em;
		}
		2% {
			background-position: 2.2506664671em 0.9365174154em, 3.593059836em 0.0276280749em, 0.1562736968em 1.2858545097em;
		}
		3% {
			background-position: 2.3747626292em 1.0260934145em, 3.5139901113em 0.0080457503em, 0.1112472595em 1.2158608352em;
		}
		4% {
			background-position: 2.4973797743em 1.1113152556em, 3.4289453593em 0.0001644874em, 0.0736748664em 1.138520257em;
		}
		5% {
			background-position: 2.6180339887em 1.1908389392em, 3.3382612127em 0.0041085785em, 0.0437047985em 1.0550524823em;
		}
		6% {
			background-position: 2.7362491054em 1.2634103294em, 3.2422955606em 0.0198158228em, 0.0214553341em 0.9667738477em;
		}
		7% {
			background-position: 2.8515585831em 1.3278849321em, 3.1414271354em 0.0470385079em, 0.0070142815em 0.87507656em;
		}
		8% {
			background-position: 2.9635073482em 1.3832459441em, 3.0360540187em 0.0853473156em, 0.0004386331em 0.7814067403em;
		}
		9% {
			background-position: 3.07165359em 1.4286202893em, 2.9265920702em 0.1341380931em, 0.0017543398em 0.6872416175em;
		}
		10% {
			background-position: 3.1755705046em 1.4632923872em, 2.8134732862em 0.1926413809em, 0.0109562093em 0.5940662319em;
		}
		11% {
			background-position: 3.2748479795em 1.486715438em, 2.6971440946em 0.259934547em, 0.0280079259em 0.5033500149em;
		}
		12% {
			background-position: 3.3690942119em 1.4985200463em, 2.5780635939em 0.3349563381em, 0.0528421943em 0.4165236156em;
		}
		13% {
			background-position: 3.4579372548em 1.4985200463em, 2.4567017402em 0.4165236156em, 0.0853610049em 0.3349563381em;
		}
		14% {
			background-position: 3.5410264856em 1.486715438em, 2.3335374934em 0.5033500149em, 0.125436021em 0.259934547em;
		}
		15% {
			background-position: 3.6180339887em 1.4632923872em, 2.2090569265em 0.5940662319em, 0.1729090847em 0.1926413809em;
		}
		16% {
			background-position: 3.688655851em 1.4286202893em, 2.0837513075em 0.6872416175em, 0.2275928415em 0.1341380931em;
		}
		17% {
			background-position: 3.7526133601em 1.3832459441em, 1.9581151602em 0.7814067403em, 0.2892714797em 0.0853473156em;
		}
		18% {
			background-position: 3.8096541049em 1.3278849321em, 1.8326443133em 0.87507656em, 0.3577015817em 0.0470385079em;
		}
		19% {
			background-position: 3.8595529718em 1.2634103294em, 1.7078339429em 0.9667738477em, 0.4326130853em 0.0198158228em;
		}
		20% {
			background-position: 3.9021130326em 1.1908389392em, 1.5841766184em 1.0550524823em, 0.513710349em 0.0041085785em;
		}
		21% {
			background-position: 3.9371663223em 1.1113152556em, 1.4621603588em 1.138520257em, 0.600673319em 0.0001644874em;
		}
		22% {
			background-position: 3.9645745015em 1.0260934145em, 1.3422667065em 1.2158608352em, 0.693158792em 0.0080457503em;
		}
		23% {
			background-position: 3.9842294026em 0.9365174154em, 1.2249688271em 1.2858545097em, 0.7908017703em 0.0276280749em;
		}
		24% {
			background-position: 3.9960534569em 0.8439999252em, 1.1107296416em 1.3473974385em, 0.8932169015em 0.0586026363em;
		}
		25% {
			background-position: 4em 0.75em, 1em 1.3995190528em, 1em 0.1004809472em;
		}
		26% {
			background-position: 3.9960534569em 0.6560000748em, 0.8932169015em 1.4413973637em, 1.1107296416em 0.1526025615em;
		}
		27% {
			background-position: 3.9842294026em 0.5634825846em, 0.7908017703em 1.4723719251em, 1.2249688271em 0.2141454903em;
		}
		28% {
			background-position: 3.9645745015em 0.4739065855em, 0.693158792em 1.4919542497em, 1.3422667065em 0.2841391648em;
		}
		29% {
			background-position: 3.9371663223em 0.3886847444em, 0.600673319em 1.4998355126em, 1.4621603588em 0.361479743em;
		}
		30% {
			background-position: 3.9021130326em 0.3091610608em, 0.513710349em 1.4958914215em, 1.5841766184em 0.4449475177em;
		}
		31% {
			background-position: 3.8595529718em 0.2365896706em, 0.4326130853em 1.4801841772em, 1.7078339429em 0.5332261523em;
		}
		32% {
			background-position: 3.8096541049em 0.1721150679em, 0.3577015817em 1.4529614921em, 1.8326443133em 0.62492344em;
		}
		33% {
			background-position: 3.7526133601em 0.1167540559em, 0.2892714797em 1.4146526844em, 1.9581151602em 0.7185932597em;
		}
		34% {
			background-position: 3.688655851em 0.0713797107em, 0.2275928415em 1.3658619069em, 2.0837513075em 0.8127583825em;
		}
		35% {
			background-position: 3.6180339887em 0.0367076128em, 0.1729090847em 1.3073586191em, 2.2090569265em 0.9059337681em;
		}
		36% {
			background-position: 3.5410264856em 0.013284562em, 0.125436021em 1.240065453em, 2.3335374934em 0.9966499851em;
		}
		37% {
			background-position: 3.4579372548em 0.0014799537em, 0.0853610049em 1.1650436619em, 2.4567017402em 1.0834763844em;
		}
		38% {
			background-position: 3.3690942119em 0.0014799537em, 0.0528421943em 1.0834763844em, 2.5780635939em 1.1650436619em;
		}
		39% {
			background-position: 3.2748479795em 0.013284562em, 0.0280079259em 0.9966499851em, 2.6971440946em 1.240065453em;
		}
		40% {
			background-position: 3.1755705046em 0.0367076128em, 0.0109562093em 0.9059337681em, 2.8134732862em 1.3073586191em;
		}
		41% {
			background-position: 3.07165359em 0.0713797107em, 0.0017543398em 0.8127583825em, 2.9265920702em 1.3658619069em;
		}
		42% {
			background-position: 2.9635073482em 0.1167540559em, 0.0004386331em 0.7185932597em, 3.0360540187em 1.4146526844em;
		}
		43% {
			background-position: 2.8515585831em 0.1721150679em, 0.0070142815em 0.62492344em, 3.1414271354em 1.4529614921em;
		}
		44% {
			background-position: 2.7362491054em 0.2365896706em, 0.0214553341em 0.5332261523em, 3.2422955606em 1.4801841772em;
		}
		45% {
			background-position: 2.6180339887em 0.3091610608em, 0.0437047985em 0.4449475177em, 3.3382612127em 1.4958914215em;
		}
		46% {
			background-position: 2.4973797743em 0.3886847444em, 0.0736748664em 0.361479743em, 3.4289453593em 1.4998355126em;
		}
		47% {
			background-position: 2.3747626292em 0.4739065855em, 0.1112472595em 0.2841391648em, 3.5139901113em 1.4919542497em;
		}
		48% {
			background-position: 2.2506664671em 0.5634825846em, 0.1562736968em 0.2141454903em, 3.593059836em 1.4723719251em;
		}
		49% {
			background-position: 2.1255810391em 0.6560000748em, 0.2085764795em 0.1526025615em, 3.6658424814em 1.4413973637em;
		}
		50% {
			background-position: 2em 0.75em, 0.2679491924em 0.1004809472em, 3.7320508076em 1.3995190528em;
		}
		51% {
			background-position: 1.8744189609em 0.8439999252em, 0.3341575186em 0.0586026363em, 3.7914235205em 1.3473974385em;
		}
		52% {
			background-position: 1.7493335329em 0.9365174154em, 0.406940164em 0.0276280749em, 3.8437263032em 1.2858545097em;
		}
		53% {
			background-position: 1.6252373708em 1.0260934145em, 0.4860098887em 0.0080457503em, 3.8887527405em 1.2158608352em;
		}
		54% {
			background-position: 1.5026202257em 1.1113152556em, 0.5710546407em 0.0001644874em, 3.9263251336em 1.138520257em;
		}
		55% {
			background-position: 1.3819660113em 1.1908389392em, 0.6617387873em 0.0041085785em, 3.9562952015em 1.0550524823em;
		}
		56% {
			background-position: 1.2637508946em 1.2634103294em, 0.7577044394em 0.0198158228em, 3.9785446659em 0.9667738477em;
		}
		57% {
			background-position: 1.1484414169em 1.3278849321em, 0.8585728646em 0.0470385079em, 3.9929857185em 0.87507656em;
		}
		58% {
			background-position: 1.0364926518em 1.3832459441em, 0.9639459813em 0.0853473156em, 3.9995613669em 0.7814067403em;
		}
		59% {
			background-position: 0.92834641em 1.4286202893em, 1.0734079298em 0.1341380931em, 3.9982456602em 0.6872416175em;
		}
		60% {
			background-position: 0.8244294954em 1.4632923872em, 1.1865267138em 0.1926413809em, 3.9890437907em 0.5940662319em;
		}
		61% {
			background-position: 0.7251520205em 1.486715438em, 1.3028559054em 0.259934547em, 3.9719920741em 0.5033500149em;
		}
		62% {
			background-position: 0.6309057881em 1.4985200463em, 1.4219364061em 0.3349563381em, 3.9471578057em 0.4165236156em;
		}
		63% {
			background-position: 0.5420627452em 1.4985200463em, 1.5432982598em 0.4165236156em, 3.9146389951em 0.3349563381em;
		}
		64% {
			background-position: 0.4589735144em 1.486715438em, 1.6664625066em 0.5033500149em, 3.874563979em 0.259934547em;
		}
		65% {
			background-position: 0.3819660113em 1.4632923872em, 1.7909430735em 0.5940662319em, 3.8270909153em 0.1926413809em;
		}
		66% {
			background-position: 0.311344149em 1.4286202893em, 1.9162486925em 0.6872416175em, 3.7724071585em 0.1341380931em;
		}
		67% {
			background-position: 0.2473866399em 1.3832459441em, 2.0418848398em 0.7814067403em, 3.7107285203em 0.0853473156em;
		}
		68% {
			background-position: 0.1903458951em 1.3278849321em, 2.1673556867em 0.87507656em, 3.6422984183em 0.0470385079em;
		}
		69% {
			background-position: 0.1404470282em 1.2634103294em, 2.2921660571em 0.9667738477em, 3.5673869147em 0.0198158228em;
		}
		70% {
			background-position: 0.0978869674em 1.1908389392em, 2.4158233816em 1.0550524823em, 3.486289651em 0.0041085785em;
		}
		71% {
			background-position: 0.0628336777em 1.1113152556em, 2.5378396412em 1.138520257em, 3.399326681em 0.0001644874em;
		}
		72% {
			background-position: 0.0354254985em 1.0260934145em, 2.6577332935em 1.2158608352em, 3.306841208em 0.0080457503em;
		}
		73% {
			background-position: 0.0157705974em 0.9365174154em, 2.7750311729em 1.2858545097em, 3.2091982297em 0.0276280749em;
		}
		74% {
			background-position: 0.0039465431em 0.8439999252em, 2.8892703584em 1.3473974385em, 3.1067830985em 0.0586026363em;
		}
		75% {
			background-position: 0em 0.75em, 3em 1.3995190528em, 3em 0.1004809472em;
		}
		76% {
			background-position: 0.0039465431em 0.6560000748em, 3.1067830985em 1.4413973637em, 2.8892703584em 0.1526025615em;
		}
		77% {
			background-position: 0.0157705974em 0.5634825846em, 3.2091982297em 1.4723719251em, 2.7750311729em 0.2141454903em;
		}
		78% {
			background-position: 0.0354254985em 0.4739065855em, 3.306841208em 1.4919542497em, 2.6577332935em 0.2841391648em;
		}
		79% {
			background-position: 0.0628336777em 0.3886847444em, 3.399326681em 1.4998355126em, 2.5378396412em 0.361479743em;
		}
		80% {
			background-position: 0.0978869674em 0.3091610608em, 3.486289651em 1.4958914215em, 2.4158233816em 0.4449475177em;
		}
		81% {
			background-position: 0.1404470282em 0.2365896706em, 3.5673869147em 1.4801841772em, 2.2921660571em 0.5332261523em;
		}
		82% {
			background-position: 0.1903458951em 0.1721150679em, 3.6422984183em 1.4529614921em, 2.1673556867em 0.62492344em;
		}
		83% {
			background-position: 0.2473866399em 0.1167540559em, 3.7107285203em 1.4146526844em, 2.0418848398em 0.7185932597em;
		}
		84% {
			background-position: 0.311344149em 0.0713797107em, 3.7724071585em 1.3658619069em, 1.9162486925em 0.8127583825em;
		}
		85% {
			background-position: 0.3819660113em 0.0367076128em, 3.8270909153em 1.3073586191em, 1.7909430735em 0.9059337681em;
		}
		86% {
			background-position: 0.4589735144em 0.013284562em, 3.874563979em 1.240065453em, 1.6664625066em 0.9966499851em;
		}
		87% {
			background-position: 0.5420627452em 0.0014799537em, 3.9146389951em 1.1650436619em, 1.5432982598em 1.0834763844em;
		}
		88% {
			background-position: 0.6309057881em 0.0014799537em, 3.9471578057em 1.0834763844em, 1.4219364061em 1.1650436619em;
		}
		89% {
			background-position: 0.7251520205em 0.013284562em, 3.9719920741em 0.9966499851em, 1.3028559054em 1.240065453em;
		}
		90% {
			background-position: 0.8244294954em 0.0367076128em, 3.9890437907em 0.9059337681em, 1.1865267138em 1.3073586191em;
		}
		91% {
			background-position: 0.92834641em 0.0713797107em, 3.9982456602em 0.8127583825em, 1.0734079298em 1.3658619069em;
		}
		92% {
			background-position: 1.0364926518em 0.1167540559em, 3.9995613669em 0.7185932597em, 0.9639459813em 1.4146526844em;
		}
		93% {
			background-position: 1.1484414169em 0.1721150679em, 3.9929857185em 0.62492344em, 0.8585728646em 1.4529614921em;
		}
		94% {
			background-position: 1.2637508946em 0.2365896706em, 3.9785446659em 0.5332261523em, 0.7577044394em 1.4801841772em;
		}
		95% {
			background-position: 1.3819660113em 0.3091610608em, 3.9562952015em 0.4449475177em, 0.6617387873em 1.4958914215em;
		}
		96% {
			background-position: 1.5026202257em 0.3886847444em, 3.9263251336em 0.361479743em, 0.5710546407em 1.4998355126em;
		}
		97% {
			background-position: 1.6252373708em 0.4739065855em, 3.8887527405em 0.2841391648em, 0.4860098887em 1.4919542497em;
		}
		98% {
			background-position: 1.7493335329em 0.5634825846em, 3.8437263032em 0.2141454903em, 0.406940164em 1.4723719251em;
		}
		99% {
			background-position: 1.8744189609em 0.6560000748em, 3.7914235205em 0.1526025615em, 0.3341575186em 1.4413973637em;
		}
		100% {
			background-position: 2em 0.75em, 3.7320508076em 0.1004809472em, 0.2679491924em 1.3995190528em;
		}
	}
</style>