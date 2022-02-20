<template>
	<div class="relative md:pb-32 justify-center">
		<div
			class="
				md:mx-auto md:max-w-7xl md:px-8
				grid
				items-center
				md:grid-cols-2
			"
		>
			<div
				class="
					lg:max-w-md
					px-4
					mx-auto
					lg:py-16 lg:mx-0 lg:px-0
					order-last
					md:order-first md:mr-16
				"
			>
				<slot name="left"></slot>
			</div>

			<div
				class="
					lg:mt-0
					flex
					justify-center
					order-first
					overflow-x-hidden
				"
			>
				<div
					class="
						rounded-lg
						lg:px-0 lg:m-0 lg:relative lg:h-full
					"
				>
					<img
						class="lg:h-72 w-auto max-w-none xl:-mr-16"
						:src="src"
						:alt="alt"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
	},
};</script
>>
