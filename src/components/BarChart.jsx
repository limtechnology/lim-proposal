import { ResponsiveBar } from '@nivo/bar'


const BarChart = ({ data, layout="horizontal"}) => (
    <ResponsiveBar
        data={data}
        keys={[
            'amount'
        ]}
        valueFormat={(e)=>e.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        className="test"
        layout={layout}
        indexBy="sector"
        margin={{ top: 50, right: 130, bottom: 50, left: 120 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'spectral' }}
        colorBy="indexValue"
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[]}
        role="application"
        ariaLabel="LIM bar chart"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)

export default BarChart;