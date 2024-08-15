const formatCurrency = ({ amount, country = 'México', graph = false, minimumFractionDigits = 0 }) => {
	if (typeof amount === 'string') return amount;

	if (country === 'México') {
		const options = { style: 'currency', currency: 'MXN', minimumFractionDigits };
		const mxnCurrency = new Intl.NumberFormat('es-MX', options);

		return graph === true ? mxnCurrency.format(amount).replace('$', '').toString() : mxnCurrency.format(amount);
	}
	if (country === 'Colombia') {
		const options = { style: 'currency', currency: 'COP', minimumFractionDigits };
		const copCurrency = new Intl.NumberFormat('es-CO', options);

		return graph === true ? copCurrency.format(amount).replace('$', '').toString() : copCurrency.format(amount);
	}
	if (country === 'Perú') {
		const options = { style: 'currency', currency: 'PEN', minimumFractionDigits };
		const copCurrency = new Intl.NumberFormat('es-PE', options);

		return graph === true ? copCurrency.format(amount).replace('$', '').replace('S/', '').toString() : copCurrency.format(amount);
	}
	if (country === 'USA') {
		const options = { style: 'currency', currency: 'USD', minimumFractionDigits };
		const mxnCurrency = new Intl.NumberFormat('en-US', options);

		return graph === true ? mxnCurrency.format(amount).replace('$', '').toString() : mxnCurrency.format(amount);
	}
	const options = { style: 'currency', currency: 'MXN', minimumFractionDigits };
	const mxnCurrency = new Intl.NumberFormat('es-MX', options);
	return graph === true ? mxnCurrency.format(amount).replace('$', '').toString() : mxnCurrency.format(amount);
};

export default formatCurrency;
