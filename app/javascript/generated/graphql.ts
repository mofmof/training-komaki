import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
  /** Represents untyped JSON */
  JSON: any;
};

/** Autogenerated input type of CreateTask */
export type CreateTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  params: TaskInput;
};

/** Autogenerated return type of CreateTask */
export type CreateTaskPayload = {
  __typename?: "CreateTaskPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  task: Task;
};

/** Autogenerated input type of DeleteTask */
export type DeleteTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
};

/** Autogenerated return type of DeleteTask */
export type DeleteTaskPayload = {
  __typename?: "DeleteTaskPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  createTask?: Maybe<CreateTaskPayload>;
  deleteTask?: Maybe<DeleteTaskPayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
};

export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};

export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};

export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};

export type Query = {
  __typename?: "Query";
  statuses: Array<Status>;
  task: Task;
  tasks: Array<Task>;
  users: Array<User>;
};

export type QueryTaskArgs = {
  id: Scalars["ID"];
};

export type Status = {
  __typename?: "Status";
  createdAt: Scalars["ISO8601DateTime"];
  id: Scalars["ID"];
  name: Scalars["String"];
  updatedAt: Scalars["ISO8601DateTime"];
};

export type Task = {
  __typename?: "Task";
  createdAt: Scalars["ISO8601DateTime"];
  detail?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  limitOn: Scalars["ISO8601Date"];
  status?: Maybe<Status>;
  statusId?: Maybe<Scalars["ID"]>;
  title: Scalars["String"];
  updatedAt: Scalars["ISO8601DateTime"];
  userId?: Maybe<Scalars["ID"]>;
};

export type TaskInput = {
  detail?: InputMaybe<Scalars["String"]>;
  limitOn: Scalars["String"];
  statusId: Scalars["ID"];
  title: Scalars["String"];
  userId: Scalars["ID"];
};

/** Autogenerated input type of UpdateTask */
export type UpdateTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  params: TaskInput;
};

/** Autogenerated return type of UpdateTask */
export type UpdateTaskPayload = {
  __typename?: "UpdateTaskPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  task: Task;
};

export type User = {
  __typename?: "User";
  allowPasswordChange?: Maybe<Scalars["Boolean"]>;
  confirmationSentAt?: Maybe<Scalars["ISO8601DateTime"]>;
  confirmationToken?: Maybe<Scalars["String"]>;
  confirmedAt?: Maybe<Scalars["ISO8601DateTime"]>;
  createdAt: Scalars["ISO8601DateTime"];
  email?: Maybe<Scalars["String"]>;
  encryptedPassword: Scalars["String"];
  id: Scalars["ID"];
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  nickname?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  rememberCreatedAt?: Maybe<Scalars["ISO8601DateTime"]>;
  resetPasswordSentAt?: Maybe<Scalars["ISO8601DateTime"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  role: Scalars["Int"];
  tokens?: Maybe<Scalars["JSON"]>;
  uid: Scalars["String"];
  unconfirmedEmail?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["ISO8601DateTime"];
};

export type CreateTaskMutationVariables = Exact<{
  params: TaskInput;
}>;

export type CreateTaskMutation = {
  __typename?: "Mutation";
  createTask?: {
    __typename?: "CreateTaskPayload";
    task: {
      __typename?: "Task";
      id: string;
      title: string;
      detail?: string | null;
      limitOn: any;
      statusId?: string | null;
      userId?: string | null;
    };
  } | null;
};

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteTaskMutation = {
  __typename?: "Mutation";
  deleteTask?: { __typename?: "DeleteTaskPayload"; id: string } | null;
};

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars["ID"];
  params: TaskInput;
}>;

export type UpdateTaskMutation = {
  __typename?: "Mutation";
  updateTask?: {
    __typename?: "UpdateTaskPayload";
    task: {
      __typename?: "Task";
      id: string;
      title: string;
      detail?: string | null;
      limitOn: any;
      statusId?: string | null;
    };
  } | null;
};

export type FetchStatusesQueryVariables = Exact<{ [key: string]: never }>;

export type FetchStatusesQuery = {
  __typename?: "Query";
  statuses: Array<{ __typename?: "Status"; id: string; name: string }>;
};

export type FetchTaskByIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type FetchTaskByIdQuery = {
  __typename?: "Query";
  task: {
    __typename?: "Task";
    id: string;
    title: string;
    detail?: string | null;
    limitOn: any;
    statusId?: string | null;
    status?: { __typename?: "Status"; id: string; name: string } | null;
  };
};

export type FetchTasksQueryVariables = Exact<{ [key: string]: never }>;

export type FetchTasksQuery = {
  __typename?: "Query";
  tasks: Array<{
    __typename?: "Task";
    id: string;
    title: string;
    detail?: string | null;
    limitOn: any;
    status?: { __typename?: "Status"; id: string; name: string } | null;
  }>;
};

export type FetchUsersQueryVariables = Exact<{ [key: string]: never }>;

export type FetchUsersQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "User";
    id: string;
    name?: string | null;
    email?: string | null;
  }>;
};

export const CreateTaskDocument = gql`
  mutation CreateTask($params: TaskInput!) {
    createTask(input: { params: $params }) {
      task {
        id
        title
        detail
        limitOn
        statusId
        userId
      }
    }
  }
`;
export type CreateTaskMutationFn = Apollo.MutationFunction<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useCreateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTaskMutation,
    CreateTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(
    CreateTaskDocument,
    options
  );
}
export type CreateTaskMutationHookResult = ReturnType<
  typeof useCreateTaskMutation
>;
export type CreateTaskMutationResult =
  Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;
export const DeleteTaskDocument = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(input: { id: $id }) {
      id
    }
  }
`;
export type DeleteTaskMutationFn = Apollo.MutationFunction<
  DeleteTaskMutation,
  DeleteTaskMutationVariables
>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTaskMutation,
    DeleteTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(
    DeleteTaskDocument,
    options
  );
}
export type DeleteTaskMutationHookResult = ReturnType<
  typeof useDeleteTaskMutation
>;
export type DeleteTaskMutationResult =
  Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<
  DeleteTaskMutation,
  DeleteTaskMutationVariables
>;
export const UpdateTaskDocument = gql`
  mutation UpdateTask($id: ID!, $params: TaskInput!) {
    updateTask(input: { id: $id, params: $params }) {
      task {
        id
        title
        detail
        limitOn
        statusId
      }
    }
  }
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      params: // value for 'params'
 *   },
 * });
 */
export function useUpdateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTaskMutation,
    UpdateTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(
    UpdateTaskDocument,
    options
  );
}
export type UpdateTaskMutationHookResult = ReturnType<
  typeof useUpdateTaskMutation
>;
export type UpdateTaskMutationResult =
  Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;
export const FetchStatusesDocument = gql`
  query FetchStatuses {
    statuses {
      id
      name
    }
  }
`;

/**
 * __useFetchStatusesQuery__
 *
 * To run a query within a React component, call `useFetchStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchStatusesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchStatusesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchStatusesQuery,
    FetchStatusesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchStatusesQuery, FetchStatusesQueryVariables>(
    FetchStatusesDocument,
    options
  );
}
export function useFetchStatusesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchStatusesQuery,
    FetchStatusesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchStatusesQuery, FetchStatusesQueryVariables>(
    FetchStatusesDocument,
    options
  );
}
export type FetchStatusesQueryHookResult = ReturnType<
  typeof useFetchStatusesQuery
>;
export type FetchStatusesLazyQueryHookResult = ReturnType<
  typeof useFetchStatusesLazyQuery
>;
export type FetchStatusesQueryResult = Apollo.QueryResult<
  FetchStatusesQuery,
  FetchStatusesQueryVariables
>;
export const FetchTaskByIdDocument = gql`
  query FetchTaskById($id: ID!) {
    task(id: $id) {
      id
      title
      detail
      limitOn
      statusId
      status {
        id
        name
      }
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
export function useFetchTaskByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchTaskByIdQuery,
    FetchTaskByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchTaskByIdQuery, FetchTaskByIdQueryVariables>(
    FetchTaskByIdDocument,
    options
  );
}
export function useFetchTaskByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchTaskByIdQuery,
    FetchTaskByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchTaskByIdQuery, FetchTaskByIdQueryVariables>(
    FetchTaskByIdDocument,
    options
  );
}
export type FetchTaskByIdQueryHookResult = ReturnType<
  typeof useFetchTaskByIdQuery
>;
export type FetchTaskByIdLazyQueryHookResult = ReturnType<
  typeof useFetchTaskByIdLazyQuery
>;
export type FetchTaskByIdQueryResult = Apollo.QueryResult<
  FetchTaskByIdQuery,
  FetchTaskByIdQueryVariables
>;
export const FetchTasksDocument = gql`
  query FetchTasks {
    tasks {
      id
      title
      detail
      limitOn
      status {
        id
        name
      }
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
export function useFetchTasksQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchTasksQuery,
    FetchTasksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchTasksQuery, FetchTasksQueryVariables>(
    FetchTasksDocument,
    options
  );
}
export function useFetchTasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchTasksQuery,
    FetchTasksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchTasksQuery, FetchTasksQueryVariables>(
    FetchTasksDocument,
    options
  );
}
export type FetchTasksQueryHookResult = ReturnType<typeof useFetchTasksQuery>;
export type FetchTasksLazyQueryHookResult = ReturnType<
  typeof useFetchTasksLazyQuery
>;
export type FetchTasksQueryResult = Apollo.QueryResult<
  FetchTasksQuery,
  FetchTasksQueryVariables
>;
export const FetchUsersDocument = gql`
  query FetchUsers {
    users {
      id
      name
      email
    }
  }
`;

/**
 * __useFetchUsersQuery__
 *
 * To run a query within a React component, call `useFetchUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchUsersQuery,
    FetchUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchUsersQuery, FetchUsersQueryVariables>(
    FetchUsersDocument,
    options
  );
}
export function useFetchUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchUsersQuery,
    FetchUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchUsersQuery, FetchUsersQueryVariables>(
    FetchUsersDocument,
    options
  );
}
export type FetchUsersQueryHookResult = ReturnType<typeof useFetchUsersQuery>;
export type FetchUsersLazyQueryHookResult = ReturnType<
  typeof useFetchUsersLazyQuery
>;
export type FetchUsersQueryResult = Apollo.QueryResult<
  FetchUsersQuery,
  FetchUsersQueryVariables
>;
