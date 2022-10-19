import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
};


export type MutationCreateTaskArgs = {
  detail: Scalars['String'];
  id: Scalars['ID'];
  limit_on: Scalars['ISO8601Date'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  task: Task;
  tasks: Array<Task>;
};


export type QueryTaskArgs = {
  id: Scalars['ID'];
};

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['ISO8601DateTime'];
  detail?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  limitOn: Scalars['ISO8601Date'];
  title: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type FetchTaskByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FetchTaskByIdQuery = { __typename?: 'Query', task: { __typename?: 'Task', id: string, title: string, detail?: string | null, limitOn: any } };

export type FetchTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, title: string, detail?: string | null, limitOn: any }> };


export const FetchTaskByIdDocument = gql`
    query FetchTaskById($id: ID!) {
  task(id: $id) {
    id
    title
    detail
    limitOn
  }
}
    `;

/**
 * __useFetchTaskByIdQuery__
 *
 * To run a query within a React component, call `useFetchTaskByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchTaskByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchTaskByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchTaskByIdQuery(baseOptions: Apollo.QueryHookOptions<FetchTaskByIdQuery, FetchTaskByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchTaskByIdQuery, FetchTaskByIdQueryVariables>(FetchTaskByIdDocument, options);
      }
export function useFetchTaskByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchTaskByIdQuery, FetchTaskByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchTaskByIdQuery, FetchTaskByIdQueryVariables>(FetchTaskByIdDocument, options);
        }
export type FetchTaskByIdQueryHookResult = ReturnType<typeof useFetchTaskByIdQuery>;
export type FetchTaskByIdLazyQueryHookResult = ReturnType<typeof useFetchTaskByIdLazyQuery>;
export type FetchTaskByIdQueryResult = Apollo.QueryResult<FetchTaskByIdQuery, FetchTaskByIdQueryVariables>;
export const FetchTasksDocument = gql`
    query FetchTasks {
  tasks {
    id
    title
    detail
    limitOn
  }
}
    `;

/**
 * __useFetchTasksQuery__
 *
 * To run a query within a React component, call `useFetchTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchTasksQuery(baseOptions?: Apollo.QueryHookOptions<FetchTasksQuery, FetchTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchTasksQuery, FetchTasksQueryVariables>(FetchTasksDocument, options);
      }
export function useFetchTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchTasksQuery, FetchTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchTasksQuery, FetchTasksQueryVariables>(FetchTasksDocument, options);
        }
export type FetchTasksQueryHookResult = ReturnType<typeof useFetchTasksQuery>;
export type FetchTasksLazyQueryHookResult = ReturnType<typeof useFetchTasksLazyQuery>;
export type FetchTasksQueryResult = Apollo.QueryResult<FetchTasksQuery, FetchTasksQueryVariables>;