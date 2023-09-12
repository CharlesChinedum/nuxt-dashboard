<template>
  <div class="bg-[#e2e3e5]">
    <div class="w-full flex relative">
      <!-- <div class="fixed h-[100vh] w-[15rem] bg-darkBlue">
        <Sidebar />
      </div> -->

      <div class="flex flex-col w-full border-[5px] borde-red-400">
        <!-- lg:pl-[15rem] -->
        <div>
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
