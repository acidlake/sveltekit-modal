<script>
  //
  import { closeModal, processModal } from "$lib/stores/index";
  import Button from "$lib/components/Button.svelte";
  export let buttonOptions;

  //
  export let title = "Modal title goes here.."
</script>

<div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex ">
  <div class="relative w-2/4 my-6 mx-auto max-w-3xl">
    <!--content-->
    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      <!--header-->
      <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        <h3 class="text-3xl text-gray-600 font-semibold">
          {title}
        </h3>
        <button class="p-1 ml-auto bg-transparent border-0 text-gray-500  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" on:click={$closeModal()}>
          <span class="bg-transparent text-gray-500 opacity-4 h-6 w-6 text-2xl block outline-none focus:outline-none">
            ×
          </span>
        </button>
      </div>
      <!--body-->
      <div class="relative p-6 flex-auto">
        <slot></slot>
      </div>
      <!--footer-->
      <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
          <Button label="Cancel" on:click={$closeModal} />
          <Button label="Continue" on:click={$processModal(buttonOptions)} />
      </div>
    </div>
  </div>
</div>
<div class="opacity-25 fixed inset-0 z-40 bg-black"></div>