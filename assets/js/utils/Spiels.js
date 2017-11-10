const Spiels = {
	defaultLoginError(){
		return 'Encountered an error logging you in. Please try again.';
	},

  loginEmpty() {
      return 'Please fill in the required fields.';
  },

  validEmail() {
      return 'Invalid email format.';
  }
};

export default Spiels;