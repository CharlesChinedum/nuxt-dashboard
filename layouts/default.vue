<template>
  <div class="bg-[#e2e3e5] dark:bg-darkBody">
    <div class="w-full flex relative">
      <div class="hidden lg:block fixed h-[100vh] w-[15rem] bg-darkBlue">
        <Sidebar />
      </div>
      <div
        class="flex flex-col w-full lg:pl-[15rem] border-[5px] borde-red-400"
      >
        <div class="hidden md:block">
          <Navbar />
        </div>
        <main>
          <slot />
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>
