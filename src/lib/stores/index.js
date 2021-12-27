// Core
import { writable, get } from "svelte/store";
import { browser } from "$app/env";
import params from "./params";

// Contact Form
export const contactForm = writable(params.contactForm);

// Modal Default Config
export const modalState = writable(params.modalInitalState);
export const closeModal = writable(() => {
  modalState.update(() => params.modalInitalState);
});
export const processModal = writable((options) => {
  if(options.trigger){
    if(browser){
      window.alert("Your form submission is ready")
      window.alert(JSON.stringify(get(contactForm)))
    }
    contactForm.update(() => params.resetContactForm);
  }
  modalState.update(() => params.modalInitalState);
});