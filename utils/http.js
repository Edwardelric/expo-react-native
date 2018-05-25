import fetchIntercept from 'fetch-intercept';

const http = () => {
	return (
		fetchIntercept.register({
			request: (url, config) => {
				return [url, config];
			},
			requestError: (error) => {
				return Promise.reject(error);
			},
			response: (response) => {
				return response;
			},
			responseError: (error) => {
				return Promise.reject(error);
			}
		})
	)
}

export { http }

