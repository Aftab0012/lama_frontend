import { toast } from 'react-toastify';

const validateForm = (data) => {
  if (data.name === '') {
    toast.warn('Project name is required!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }
  if (data.description === '') {
    toast.warn('Password is a required field', {
      position: 'top-right',
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }

  return true;
};

const validateUserUpdateName = (data) => {
  if (data.name === '') {
    toast.warn('Name is required field!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }
  if (data.name.length <= 6) {
    toast.warn('Name must be 6 characters long!!', {
      position: 'top-right',
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }

  return true;
};

const validateUserGeneralForm = (data) => {
  if (data.name === '') {
    toast.warn('Name is a required field!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }
  if (data.message === '') {
    toast.warn('Message is a required field!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }
  if (data.placeholderVal.length <= 3) {
    toast.warn('Placeholder value must be greater than 3!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }
  return true;
};

const validateDisplayFormInput = (data) => {
  if (data.primarycolor === '') {
    toast.warn('Primary Color is a required field!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }
  if (!/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(data.primarycolor)) {
    toast.warn('Primary Color must be a valid hex color code!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }

  if (data.fontcolor === '') {
    toast.warn('Font Color is a required field!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }

  if (!/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(data.fontcolor)) {
    toast.warn('Font Color must be a valid hex color code!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }

  if (data.fontsize === '') {
    toast.warn('Font Size is a required field!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }

  if (data.chatheight === '') {
    toast.warn('Chat Height is a required field!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }

  if (data.chaticonsize === '') {
    toast.warn('Chat Icon Size is a required field!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }

  if (data.screenposition === '') {
    toast.warn('Screen Position is a required field!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }

  if (data.bottomdistance === '') {
    toast.warn('Bottom Distance is a required field!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }

  if (data.horizontaldistance === '') {
    toast.warn('Horizontal Distance is a required field!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }

  return true;
};

export {
  validateForm,
  validateUserUpdateName,
  validateUserGeneralForm,
  validateDisplayFormInput,
};
