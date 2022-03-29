import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { QuestionListScreen } from '../components/screens/question-list';
import { InjectedQuestionAndAnswer } from '../stores';

export type FAQProps = InjectedQuestionAndAnswer;

@inject('questionAndAnswerStore')
@inject('productStore')
@observer
export class FAQContainer extends Component<FAQProps> {
  componentDidMount() {
    //this.props.questionAndAnswerStore.loadFragmentQuestions();
  }

  render(): JSX.Element {
    return (
      <QuestionListScreen pageTitle={'سوالات متداول'} questions={this.props.questionAndAnswerStore.fragment_question} />
    );
  }
}

export default FAQContainer as any;
