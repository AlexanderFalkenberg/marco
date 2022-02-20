<template>
	<div class="flex flex-col">
		<main class="h-full self-stretch mt-auto">
			<Hero />

			<section
				class="space-y-8 sm:overflow-x-hidden"
				id="about"
			>
				<SectionStory
					src="/img/headshot.jpg"
					alt="Marco Tennisbälle"
					class="mt-16"
				>
					<template v-slot:left>
						<div class="max-w-4xl">
							<h2
								class="
									text-3xl
									mt-8
									font-display font-extrabold
									text-gray-900
									uppercase
								"
							>
								Marco Meiwes
								<span
									class="
										bg-clip-text
										text-transparent
										bg-gradient-to-r
										from-orange-400
										to-orange-500
										block
									"
									>Personal Trainer</span
								>
							</h2>
							<p class="mt-4 lg:text-lg text-gray-500">
								Hey, ich bin Marco und ich bin Personal
								Trainer aus Hövelhof im Kreis Paderborn. Ich
								helfe Menschen sich in ihrem Körper
								wohlzufühlen.
							</p>
						</div>
					</template>
				</SectionStory>
				<SectionStory src="/img/action.jpg" alt="Handstand">
					<template v-slot:left>
						<div class="max-w-4xl">
							<p class="mt-8 lg:text-lg text-gray-500">
								Was kann der Körper und was kann er nicht?
								Wie frei kannst du dich in deinem Körper
								bewegen?
							</p>
							<p class="font-bold my-8 text-lg"
								>Hier setzt mein Training an.</p
							>
							<p class="mt-2 lg:text-lg text-gray-500">
								Wer einen funktionalen, beweglichen und
								verletzungsfreien Körper haben möchte ist
								bei mir an der richtigen Adresse.
							</p>
						</div>
					</template>
				</SectionStory>
				<SectionStory
					src="/img/badminton.jpg"
					alt="Handstand"
				>
					<template v-slot:left>
						<div class="max-w-4xl">
							<h2
								class="
									text-3xl
									mt-8
									font-display font-extrabold
									text-gray-900
									uppercase
								"
							>
								Über mich
							</h2>
							<p class="mt-4 lg:text-lg text-gray-500">
								Bewegung ist mein Leben. Seit 20 Jahren
								spiele ich Badminton im Verein und bin
								mittlerweile seit 10 Jahren als
								Badmintontrainer aktiv. Nebenbei habe ich
								auf meine körperliche Fitness immer großen
								Wert gelegt.
							</p>
						</div>
					</template>
				</SectionStory>
				<SectionStory src="/img/plank.jpg" alt="Handstand">
					<template v-slot:left>
						<div class="max-w-4xl">
							<p
								class="
									mt-8
									sm:mt-0
									lg:text-lg
									text-gray-500
								"
							>
								Der Sport hat mir das nötige Vertrauen in
								mich selbst gegeben und mir gezeigt, wozu
								mein Körper fähig ist.
							</p>
							<p class="mt-4 lg:text-lg text-gray-500">
								Während meines Sportstudiums veränderte sich
								mein Training von einem fitnessorientierten
								zu einem vielseitigen und
								bewegungsorientierten Training.
							</p>
						</div>
					</template>
				</SectionStory>
				<SectionStory
					src="/img/franky_action.jpg"
					alt="Handstand"
				>
					<template v-slot:left>
						<div class="max-w-4xl">
							<h2
								class="
									text-3xl
									mt-8
									font-display font-extrabold
									text-gray-900
									uppercase
								"
							>
								Was willst du
								<span
									class="
										bg-clip-text
										text-transparent
										bg-gradient-to-r
										from-orange-300
										to-orange-500
									"
									>wirklich?</span
								>
							</h2>
							<p class="mt-2 lg:text-lg text-gray-500">
								Du möchtest einen Körper, der dich mit
								Leichtigkeit durchs Leben bringt.
								Fahrradtouren mit der Familie, Bergsteigen
								mit Freunden, das Schwimmen im nächsten See
								oder das Tanzen mit dem Partner – all das
								sind Aktivitäten, die du gerne machst und
								genießen möchtest, ohne dass dir dein Körper
								einen Strich durch die Rechnung macht.
							</p>
						</div>
					</template>
				</SectionStory>
				<SectionStory src="/img/help.jpg" alt="Handstand">
					<template v-slot:left>
						<div class="max-w-4xl">
							<p class="mt-8 lg:text-lg text-gray-500">
								Doch wie gelangst du zu diesem Körper? Hier
								komme ich ins Spiel. Ich zeige dir, wie wir
								am effektivsten da hinkommen, wo du
								hinmöchtest. Dir weniger Gedanken, um deinen
								Körper zu machen, damit du Zeit hast, dich
								auf die wirklich wichtigen Dinge im Leben zu
								konzentrieren – vorausgesetzt, du bist
								bereit, die nötige Arbeit zu investieren
							</p>
						</div>
					</template>
				</SectionStory>
			</section>

			<Testimonial />

			<CTA />

			<FAQ />

			<MobileFixedButton />
		</main>
	</div>
</template>

<style>
.h-hero {
	height: calc(100vh - 90px);
}
</style>
