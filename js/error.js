
class FormError extends Error {
	constructor(message) {
		super(message);
		this.message = message;
		this.name = "FormError";
	}
}
