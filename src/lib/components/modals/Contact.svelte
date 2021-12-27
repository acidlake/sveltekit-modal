<script>
  import { contactForm } from "$lib/stores/index";
  import Input from "$lib/components/Input.svelte";
  import TextArea from "$lib/components/TextArea.svelte";
</script>
<div>
  <Input label="Name" bind:value={$contactForm.name} />
  <Input label="Last Name" bind:value={$contactForm.lastName} />
  <Input label="Email" bind:value={$contactForm.email} />
  <TextArea label="Comments" bind:value={$contactForm.comments} />
</div>