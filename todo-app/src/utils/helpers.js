const validatePdfExtension = (file) => {
	if (!file) return null;
	if (file.type === "application/pdf") {
		return true;
	}
	return false;
};

export { validatePdfExtension };
