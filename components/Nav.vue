<template>
	<nav>
		<div
			class="background-blur fixed bottom-0 z-50 mx-auto h-16 w-full flex-none pl-4 backdrop-blur-sm duration-500 sm:pl-6 md:top-0 lg:px-8"
		>
			<div
				class="md:overflow-none scrollbar-hidden flex h-16 w-full items-center justify-between overflow-x-auto"
			>
				<Logo class="mr-6 shrink-0 lg:mr-0" />
				<div
					class="mr-6 flex shrink-0 items-center justify-between space-x-2 md:space-x-4 lg:mr-0"
				>
					<slot></slot>
				</div>
			</div>
		</div>
	</nav>
</template>
