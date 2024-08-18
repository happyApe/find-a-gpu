export type TParams = {
	[key: string]: any;
};

export type TApiResponse<T> = {
	data?: T;
	error?: string;
	status?: number;
};

export interface IFMGInfo {
    regions_zones: {
        [key: string]: string[];
    };
    'gpu_type-counts': {
        [key: string]: string[];
    };
}

export interface IGPUAvailable {
    region_name: string,
    zone: string,
    gpu_type: string,
    gpu_count: number,
    isAvailable: boolean,
    price_per_hour: number,
    created_at: string,
    updated_at: string
}

export interface IGPUParams {
    cloud: string,
    gpu_type: string,
    gpu_count: number
}