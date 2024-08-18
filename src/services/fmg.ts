import { IFMGInfo, IGPUAvailable, IGPUParams, TApiResponse, TParams } from "@/types/backend";

export const paramsKeyConvert = (str = '') => str.replace(/[A-Z]/g, ([s]) => `_${s.toLowerCase()}`);

class FMGService {
    endpoint: string = 'http://127.0.0.1:8000';

    async fetch<T>(path: string, params: TParams, options?: RequestInit) {
		const url = new URL(path, this.endpoint);
		for (const key of Object.keys(params)) {
			url.searchParams.set(paramsKeyConvert(key), params[key]);
		}
		options = {
			...options,
			headers: {
				'Content-Type': 'application/json',
				...options?.headers
			}
		};
		return new Promise<TApiResponse<T>>((resolve) => {
			const customResolve = (params: {
				data: T | undefined;
				error: string | undefined;
				status: number;
			}) => {
				resolve(params);
			};
			fetch(url, options)
				.then((resp) => {
					resp.json().then((res) => {
						if (resp.status === 200) {
							return customResolve({
								data: res as T,
								error: undefined,
								status: resp.status
							});
						} else {
							return customResolve({
								data: undefined,
								error: res.detail,
								status: resp.status || res.name
							});
						}
					}).catch((e) => {
						return customResolve({
							data: undefined,
							error: 'Something went wrong, unable to decode response.',
							status: e?.status || e?.name || 500
						});
					});
				})
				.catch((e) =>
					customResolve({
						data: undefined,
						error: e.message,
						status: 500
					})
				);
		});
	}

    async getFmgInfo() {
        return this.fetch<IFMGInfo>('/fmg_info', {});
    };

    async getGpuAvailability(params: IGPUParams) {
        return this.fetch<IGPUAvailable[]>('/gpu_availability', {}, {
            method: 'POST',
            body: JSON.stringify(params)
        });
    };
}

export default FMGService;