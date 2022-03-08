<template>
	<nav>
		<div
			class="border-neautral-300 md:border-t-none fixed bottom-0 z-50 mx-auto h-16 w-full flex-none border-t bg-neutral-100/75 duration-500 dark:border-neutral-600 dark:bg-neutral-800/75 md:top-0 md:border-none md:bg-white/50 md:dark:bg-black/50"
		>
			<div
				class="md:overflow-none scrollbar-hidden background-blur flex h-16 w-full items-center justify-between overflow-x-auto"
			>
				<Logo class="mx-6 shrink-0" />
				<div
					class="flex shrink-0 items-center justify-between space-x-2 pr-6 md:space-x-4"
				>
					<slot></slot>
				</div>
			</div>
		</div>
	</nav>
</template>
