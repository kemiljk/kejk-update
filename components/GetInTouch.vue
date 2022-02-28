<template>
	<div
		class="justify-center rounded-lg border border-neutral-200 bg-white dark:border-neutral-900 dark:bg-black sm:pt-0"
	>
		<div class="mx-auto max-w-5xl">
			<div class="overflow-hidden">
				<div class="grid grid-cols-1 md:grid-cols-2">
					<div
						class="rounded-tl-lg rounded-tr-lg p-6 sm:mr-2 sm:rounded-br-none sm:rounded-bl-none"
					>
						<h3
							class="mb-0 pt-0 text-xl font-bold tracking-tight text-neutral-800 dark:text-white sm:text-2xl"
						>
							Get in touch.
						</h3>
						<div
							class="grid-row grid w-full grid-cols-2 gap-4 pt-4 md:grid-cols-2"
						>
							<div v-for="social in socials" :key="social._id">
								<keep-alive>
									<SocialCard :social="social" />
								</keep-alive>
							</div>
						</div>
					</div>

					<form
						class="flex flex-col justify-center p-6"
						action="https://formcarry.com/s/mGfGBUrWtY"
						method="POST"
						accept-charset="UTF-8"
					>
						<div class="mt-2 flex flex-col">
							<label
								for="email"
								class="font-medium text-black dark:text-white"
								>Email</label
							>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="e.g. arnold@schwarzenegger.com"
								class="w-100 mt-2 rounded-lg border border-neutral-200 bg-white py-3 px-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50"
								required
							/>
						</div>

						<div class="mt-2 flex flex-col">
							<label
								for="message"
								class="font-medium text-black dark:text-white"
								>Your message</label
							>
							<textarea
								type="text"
								name="message"
								id="message"
								rows="4"
								placeholder="Ask me anything"
								class="w-100 mt-2 rounded-lg border border-neutral-200 bg-white py-3 px-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50"
								required
							/>
						</div>
						<input type="hidden" name="_gotcha" />

						<button
							id="submitbutton"
							type="submit"
							class="mt-8 rounded-lg bg-black py-3 px-6 font-medium text-white transition duration-300 ease-in-out hover:bg-neutral-900 dark:bg-white dark:text-neutral-900 hover:dark:bg-neutral-200 md:w-32"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { CheckIcon } from 'vue-feather-icons'

export default {
	name: 'GetInTouch',
	components: {
		CheckIcon,
	},
	data() {
		return {
			socials: [
				{
					href: 'https://www.figma.com/@_kejk',
					figma: true,
					title: 'Figma',
				},
				{
					href: 'https://www.twitter.com/_kejk',
					twitter: true,
					title: 'Twitter',
				},
				{
					href: 'https://www.Linkedin.com/in/kejk',
					linkedin: true,
					title: 'LinkedIn',
				},
				{
					href: 'https://www.github.com/kemiljk/',
					github: true,
					title: 'Github',
				},
				{
					href: 'https://dribbble.com/_kejk',
					dribbble: true,
					title: 'Dribbble',
				},
				{
					href: 'https://www.ko-fi.com/kemiljk',
					coffee: true,
					title: 'Ko-Fi',
				},
			],
		}
	},
}
</script>
