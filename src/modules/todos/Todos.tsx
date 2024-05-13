import * as React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useTodos} from '@commons/hooks';
import {COMMON_STYLES} from '@commons/styles';
import {TodosResponse} from '@commons/utils/get-todos';

const TodosComponent = (): React.JSX.Element => {
  const state = useTodos({enabled: true});

  const renderTodos = React.useCallback((todos: TodosResponse) => {
    return todos.map(todo => {
      return (
        <View
          key={todo.id}
          style={[
            COMMON_STYLES.flexDirectionRow,
            COMMON_STYLES.mt16,
            styles.line,
          ]}>
          <Text>{todo.userId}</Text>
          <Text style={[COMMON_STYLES.ml24, COMMON_STYLES.mb8]}>
            {todo.title}
          </Text>
        </View>
      );
    });
  }, []);

  const renderError = React.useCallback((error: Error) => {
    return (
      <View>
        <Text>Error Fetching Todos</Text>
        <Text>{JSON.stringify(error.message)}</Text>
      </View>
    );
  }, []);

  const renderLoader = React.useCallback(() => {
    return <ActivityIndicator animating />;
  }, []);

  const renderContentConditionally = React.useCallback(() => {
    if (state.status === 'success') {
      return renderTodos(state.data);
    } else if (state.status === 'error') {
      return renderError(state.error);
    } else {
      return renderLoader();
    }
  }, [renderError, renderLoader, renderTodos, state]);

  return (
    <ScrollView
      style={COMMON_STYLES.p24}
      contentInsetAdjustmentBehavior="automatic">
      <View style={COMMON_STYLES.mt16}>{renderContentConditionally()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#0001',
  },
});

const Todos = React.memo(TodosComponent);
export {Todos};
