<template>
	<div class="flex rounded-lg bg-neutral-50 dark:bg-neutral-900">
		<div class="w-full p-8">
			<h3
				class="mb-0 pt-0 text-lg font-bold text-neutral-800 dark:text-white sm:text-xl"
			>
				Subscribe to stay up-to-date
			</h3>
			<form
				action="https://buttondown.email/api/emails/embed-subscribe/karl"
				method="post"
				target="popupwindow"
				onsubmit="window.open('https://buttondown.email/karl', 'popupwindow')"
				class="embeddable-buttondown-form mt-2 grid grid-cols-1 gap-2 pb-4 md:grid-cols-3"
			>
				<label for="bd-email" class="md:col-span-2">
					<span class="sr-only">Enter your email</span>
					<input
						type="email"
						@keyup.enter="submit"
						name="email"
						id="bd-email"
						placeholder="e.g. sly@stallone.com"
						class="w-full rounded-lg border border-neutral-200 bg-white py-3 px-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-neutral-700 dark:bg-black dark:text-neutral-50"
						required
					/>
				</label>
				<input type="hidden" value="1" name="embed" />
				<Button type="submit" color="white">
					<template #icon>
						<mail-icon
							size="1x"
							class="mr-2 inline-block text-neutral-50 dark:text-neutral-900"
						/>
					</template>
					<template #label> Subscribe </template>
				</Button>
			</form>
			<div
				class="flex flex-row items-center justify-start space-x-2 pt-2"
			>
				<a
					href="https://www.kejk.tech/rss.xml"
					target="_blank"
					rel="noreferrer"
					class="no-underline"
				>
					<Button color="grey" class="w-full rounded-full md:w-max">
						<template #icon>
							<rss-icon
								size="1x"
								class="mr-2 inline-block text-neutral-900 dark:text-neutral-50"
							/>
						</template>
						<template #label> RSS </template>
					</Button>
				</a>
				<a
					href="https://app.mailbrew.com/_kejk/kejk-thoughts-QQU8XZ7Y1S4b?aff=_kejk"
					target="_blank"
					rel="noreferrer"
					class="no-underline"
				>
					<Button color="red" class="w-full rounded-full md:w-max">
						<template #icon>
							<coffee-icon
								size="1x"
								class="mr-2 inline-block text-red-100"
							/>
						</template>
						<template #label> Mailbrew </template>
					</Button>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { RssIcon, CoffeeIcon, MailIcon } from 'vue-feather-icons'

export default {
	components: {
		RssIcon,
		CoffeeIcon,
		MailIcon,
	},
}
</script>
