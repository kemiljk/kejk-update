<template>
	<nav>
		<div
			class="bg-neutral-100/75 dark:bg-neutral-800/75 fixed bottom-0 z-50 mx-auto h-16 w-full flex-none duration-500 md:top-0 border-t border-neautral-300 dark:border-neutral-600 md:border-t-none"
		>
			<div
				class="md:overflow-none scrollbar-hidden background-blur flex h-16 w-full items-center justify-between overflow-x-auto"
			>
				<Logo class="mx-6 shrink-0" />
				<div
					class="pr-6 flex shrink-0 items-center justify-between space-x-2 md:space-x-4"
				>
					<slot></slot>
				</div>
			</div>
		</div>
	</nav>
</template>
