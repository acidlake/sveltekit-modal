let params = {};

/**
 * @name modalInitalState
 * @Description Modal initial state
 * 
 * @param {}
 * @param {string} ModalId unique identifier
 * @param {Boolean} Visible state
 */
  params.modalInitalState = {
    visible: false, 
    modalId: null
  }

/**
 * @name contactForm
 * @Description Contact Form data
 * 
 * @param {}
 * @param {string} name person first name
 * @param {string} lastName person last name
 * @param {string} email person email
 * @param {string} comments person comments
 */
   params.contactForm = {
    name: '',
    lastName: '',
    email: '',
    comments: ''
  }

  params.resetContactForm = {
    name: '',
    lastName: '',
    email: '',
    comments: ''
  }


export default params;