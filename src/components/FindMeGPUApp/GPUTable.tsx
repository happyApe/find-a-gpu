"use client";

import React, { useEffect, useState } from 'react'
import { IFMGInfo, IGPUAvailable } from '@/types/backend';
import FMGService from '@/services/fmg';
import { Select, Table } from 'antd';

const GPUTable = () => {
    const [fmgInfo, setFmgInfo] = useState<IFMGInfo>({
        "gpu_type-counts": {},
        regions_zones: {}
    });
    const [gpuAvailability, setGpuAvailability] = useState<IGPUAvailable[]>([]);
    const [gpuType, setGPUType] = useState('');
    const [gpuCount, setGpuCount] = useState('');
    const [loadingFMGInfo, setLoadingFMGInfo] = useState(false);
    const [loadingGPUAvailability, setLoadingGPUAvailability] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoadingFMGInfo(true);
                const fmgService = new FMGService();
                const res = await fmgService.getFmgInfo();
                if (res.data) {
                    setFmgInfo(res.data);
                }
                setLoadingFMGInfo(false);
            } catch (error) {
                setLoadingFMGInfo(false);
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => {
        if (gpuCount && gpuType) {
            (async () => {
                try {
                    setLoadingGPUAvailability(true);
                    const fmgService = new FMGService();
                    const res = await fmgService.getGpuAvailability({
                        "cloud": 'GCP',
                        "gpu_count": Number(gpuCount),
                        "gpu_type": gpuType
                    });
                    if (res.data) {
                        setGpuAvailability(res.data);
                    }
                    setLoadingGPUAvailability(false);
                } catch (error) {
                    setLoadingGPUAvailability(false);
                    console.log(error);
                }
            })();
        }
    }, [gpuCount, gpuType]);
      
    const columns = [
        {
            title: 'Region Name',
            dataIndex: 'region_name',
            key: 'region_name',
        },
        {
            title: 'Zone',
            dataIndex: 'zone',
            key: 'zone',
        },
        {
            title: 'Gpu Type',
            dataIndex: 'gpu_type',
            key: 'gpu_type',
        },
        {
            title: 'Gpu Count',
            dataIndex: 'gpu_count',
            key: 'gpu_count',
        },
    ];
      
      
    return (
        <main
            className='flex items-center justify-center'
        >
            <div
                className='min-w-[500px] p-6 flex flex-col gap-y-6'
            >
                 <div
                    className='flex items-center gap-x-5'
                 >
                    <Select
                        value={gpuType}
                        onChange={(v) => {
                            setGPUType(v);
                            setGpuCount('');
                        }}
                        className='min-w-[200px]'
                        placeholder='GPU Type'
                        disabled={loadingFMGInfo}
                        loading={loadingFMGInfo}
                    >
                        {
                            Object.keys(fmgInfo['gpu_type-counts']).map((gpuType) => {
                                return (
                                    <Select.Option
                                        key={gpuType}
                                        value={gpuType}
                                    >
                                        {gpuType}
                                    </Select.Option>
                                );
                            })
                        }
                    </Select>
                    <Select
                        value={gpuCount}
                        onChange={(v) => {
                            setGpuCount(v);
                        }}
                        className='min-w-[200px]'
                        placeholder='GPU Count'
                        disabled={!fmgInfo['gpu_type-counts']?.[gpuType]?.length || loadingFMGInfo}
                        loading={loadingFMGInfo}
                    >
                        {
                            (fmgInfo['gpu_type-counts']?.[gpuType] || []).map((gpuCount) => {
                                return (
                                    <Select.Option
                                        key={gpuCount}
                                        value={gpuCount}
                                    >
                                        {gpuCount}
                                    </Select.Option>
                                );
                            })
                        }
                    </Select>
                 </div>
                <Table dataSource={gpuAvailability} columns={columns} />
            </div>
        </main>
    );
}

export default GPUTable