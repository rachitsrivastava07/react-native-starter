import {TestService} from '@commons/network-client';

export interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type TodosResponse = Array<TodoResponse>;

export const getTodos = async (): Promise<TodosResponse> => {
  const response = await TestService.get<TodosResponse>('/todos', {
    headers: {'test-header': 'test-value'},
  });
  const data = response.data;
  return data;
};
