import React from 'react'
import { Table } from '@/components/ui/table';

const GPUTable = () => {
  return (
    <div className="overflow-x-auto">
        <Table>
            <thead>
                <tr>
                    <th>GPU</th>
                    <th>GPU Count</th>
                    <th>Region Preference</th>
                    <th>Liveness</th>
                </tr>
            </thead>
            <tbody>
                {/* Add table rows here */}
                <tr>
                    <td>Sample GPU</td>
                    <td>2</td>
                    <td>US East</td>
                    <td>Active</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default GPUTable