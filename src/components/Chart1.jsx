import React from "react";

import Chart, {
  CommonSeriesSettings,
  Series,
  Reduction,
  ArgumentAxis,
  Label,
  Format,
  ValueAxis,
  Title,
  Legend,
  Export,
  Tooltip,
} from "devextreme-react/chart";

import { dataSource } from "../store/Dummy";

export default function Chart1 ({instrument}) {
    
      function customizeTooltip(arg) {
        return {
          text: `Open: $${arg.openValue}<br/>
    Close: $${arg.closeValue}<br/>
    High: $${arg.highValue}<br/>
    Low: $${arg.lowValue}<br/>`
        };
      }

  return (
    <Chart id="chart" title={instrument} dataSource={dataSource}>
      <CommonSeriesSettings argumentField="date" type="candlestick" />
      <Series
        name=' '
        openValueField="o"
        highValueField="h"
        lowValueField="l"
        closeValueField="c"
      >
        <Reduction color="red" />
      </Series>
      <ArgumentAxis workdaysOnly={true}>
        <Label format="shortDate" />
      </ArgumentAxis>
      <ValueAxis tickInterval={1}>
        <Title text="USD" />
        <Label>
          <Format precision={0} type="currency" />
        </Label>
      </ValueAxis>
      <Legend itemTextPosition="left" />
      <Export enabled={true} />
      <Tooltip
        enabled={true}
        location="edge"
        customizeTooltip={customizeTooltip}
      />
    </Chart>
  );
}
