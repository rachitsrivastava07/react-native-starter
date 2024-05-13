import * as React from 'react';

import {getTodos} from '@commons/utils/get-todos';
import type {TodosResponse} from '@commons/utils/get-todos';

interface UseTodosParams {
  enabled: boolean;
}

interface CommonState {
  status: 'loading' | 'success' | 'error';
}

interface SuccessState extends CommonState {
  status: 'success';
  data: TodosResponse;
}

interface ErrorState extends CommonState {
  status: 'error';
  error: Error;
}

interface LoadingState extends CommonState {
  status: 'loading';
}

type StateType = LoadingState | SuccessState | ErrorState;

export const useTodos = ({enabled}: UseTodosParams) => {
  const [state, setState] = React.useState<StateType>({status: 'loading'});

  React.useEffect(() => {
    const manageTodos = async () => {
      try {
        const todos = await getTodos();
        setState({status: 'success', data: todos});
      } catch (e) {
        setState({status: 'error', error: e as Error});
      }
    };

    if (enabled) {
      manageTodos();
    }
  }, [enabled]);

  return {...state};
};
