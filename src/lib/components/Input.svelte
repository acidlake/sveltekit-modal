<script>
  //
  export let label;
  export let value;
</script>
<span class="grid mt-2">
  <label>
    {#if label}
      <span class="text-gray-500 mb-2 block font-medium">
        {label}
      </span>
    {/if}
    <input 
      class="bg-gray-50 block w-full border border-gray-100 text-gray-500 p-4 rounded"
      type="text" 
      bind:value>
  </label>
</span>