<script>
  // Core
  import { modalState, contactForm } from "$lib/stores/index";
  
  // Components
  import Modal from "$lib/components/Modal.svelte";
  import AboutUs from "$lib/components/modals/About.svelte";
  import ContactForm from "$lib/components/modals/Contact.svelte";
  import Button from "$lib/components/Button.svelte";

  // Initiate Modals
  const aboutModal = { showModal: true, modalId: 'about-us' }
  const contactModal = { showModal: true, modalId: 'contact-us' }
  const processForm = {trigger:true}

  // debug
  $: console.log("debug modal", $modalState);
  $: console.log("debug contactForm", $contactForm);
</script>
<svelte:head>
  <title>Sveltekit Modal</title>
</svelte:head>
{#if $modalState == aboutModal}
  <Modal title="Our company" buttonOptions={false}>
    <AboutUs />
  </Modal>
{/if}
{#if $modalState == contactModal}
  <Modal title="Contact us" buttonOptions={processForm}>
    <ContactForm />
  </Modal>
{/if}
<div id="container">
  <div class="grid justify-center text-center justify-items-center">
    <div class="p-4">
      <span class="text-3xl font-medium">SvelteKit Modal Example</span>
      <div class="mt-10">
        <Button label="Show About Us Modal" on:click={() => modalState.update(() => aboutModal)} />
        <Button label="Show Contact Us Modal" on:click={() => modalState.update(() => contactModal)} />
      </div>
    </div>
  </div>
</div>