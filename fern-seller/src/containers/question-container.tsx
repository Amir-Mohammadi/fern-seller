import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { QuestionListScreen } from '../components/screens/question-list';
import { InjectedQuestionAndAnswer } from '../stores';

export type QuestionProps = InjectedQuestionAndAnswer;

@inject('questionAndAnswerStore')
@inject('productStore')
@observer
export class QuestionListContainer extends Component<QuestionProps> {
  render() {
    return <QuestionListScreen pageTitle={'پرسش ها'} questions={this.props.questionAndAnswerStore.questions} />;
  }
}

export default QuestionListContainer as any;
