<template>
	<nav>
		<div
			class="bg-gray-100/50 dark:bg-gray-800/50 fixed bottom-0 z-50 mx-auto h-16 w-full flex-none duration-500 md:top-0"
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
