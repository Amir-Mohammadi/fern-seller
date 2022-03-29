import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { StatisticScreen } from '../components/screens/statistic';
import { InjectedStatisticStore } from '../stores/statistic-store';

export type StatisticProps = InjectedStatisticStore;

@inject('statisticStore')
@observer
export class StatisticContainer extends Component<StatisticProps> {
  render() {
    return (
      <StatisticScreen
        data={this.props.statisticStore.saleStatistics}
        range={this.props.statisticStore.range}
        onChangeRange={(r) => this.props.statisticStore.setStatisticRange(r)}
      />
    );
  }
}

export default StatisticContainer as any;
