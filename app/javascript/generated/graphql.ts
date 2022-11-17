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
  Upload: any;
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

/** Autogenerated input type of CreateTeam */
export type CreateTeamInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
};

/** Autogenerated return type of CreateTeam */
export type CreateTeamPayload = {
  __typename?: "CreateTeamPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  team: Team;
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

/** Autogenerated input type of ExportTask */
export type ExportTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

/** Autogenerated return type of ExportTask */
export type ExportTaskPayload = {
  __typename?: "ExportTaskPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  message: Scalars["String"];
};

/** Autogenerated input type of ImportTask */
export type ImportTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  file: Scalars["Upload"];
};

/** Autogenerated return type of ImportTask */
export type ImportTaskPayload = {
  __typename?: "ImportTaskPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  message: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createTask?: Maybe<CreateTaskPayload>;
  createTeam?: Maybe<CreateTeamPayload>;
  deleteTask?: Maybe<DeleteTaskPayload>;
  exportTask?: Maybe<ExportTaskPayload>;
  importTask?: Maybe<ImportTaskPayload>;
  updateNotificationFlg?: Maybe<UpdateNotificationFlgPayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
};

export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};

export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};

export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};

export type MutationExportTaskArgs = {
  input: ExportTaskInput;
};

export type MutationImportTaskArgs = {
  input: ImportTaskInput;
};

export type MutationUpdateNotificationFlgArgs = {
  input: UpdateNotificationFlgInput;
};

export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  statuses: Array<Status>;
  task: Task;
  tasks: TaskConnection;
  team: Team;
  teams: Array<Team>;
  users: Array<User>;
};

export type QueryTaskArgs = {
  id: Scalars["ID"];
};

export type QueryTasksArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Scalars["String"]>;
  last?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
  to?: InputMaybe<Scalars["String"]>;
};

export type QueryTeamArgs = {
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
  teamId?: Maybe<Scalars["ID"]>;
  title: Scalars["String"];
  updatedAt: Scalars["ISO8601DateTime"];
  userId?: Maybe<Scalars["ID"]>;
};

/** The connection type for Task. */
export type TaskConnection = {
  __typename?: "TaskConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TaskEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Task>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TaskEdge = {
  __typename?: "TaskEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Task>;
};

export type TaskInput = {
  detail?: InputMaybe<Scalars["String"]>;
  limitOn: Scalars["String"];
  statusId: Scalars["ID"];
  teamId: Scalars["ID"];
  title: Scalars["String"];
  userId: Scalars["ID"];
};

export type Team = {
  __typename?: "Team";
  id: Scalars["ID"];
  name: Scalars["String"];
  ownerId: Scalars["ID"];
};

/** Autogenerated input type of UpdateNotificationFlg */
export type UpdateNotificationFlgInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  notificationFlg: Scalars["String"];
};

/** Autogenerated return type of UpdateNotificationFlg */
export type UpdateNotificationFlgPayload = {
  __typename?: "UpdateNotificationFlgPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  result?: Maybe<Scalars["String"]>;
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
  notificationFlg: Scalars["Int"];
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
      teamId?: string | null;
    };
  } | null;
};

export type CreateTeamMutationVariables = Exact<{
  name: Scalars["String"];
}>;

export type CreateTeamMutation = {
  __typename?: "Mutation";
  createTeam?: {
    __typename?: "CreateTeamPayload";
    team: { __typename?: "Team"; id: string; name: string; ownerId: string };
  } | null;
};

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteTaskMutation = {
  __typename?: "Mutation";
  deleteTask?: { __typename?: "DeleteTaskPayload"; id: string } | null;
};

export type ExportTaskMutationVariables = Exact<{ [key: string]: never }>;

export type ExportTaskMutation = {
  __typename?: "Mutation";
  exportTask?: { __typename?: "ExportTaskPayload"; message: string } | null;
};

export type ImportTaskMutationVariables = Exact<{
  file: Scalars["Upload"];
}>;

export type ImportTaskMutation = {
  __typename?: "Mutation";
  importTask?: { __typename?: "ImportTaskPayload"; message: string } | null;
};

export type UpdateNotificationFlgMutationVariables = Exact<{
  notificationFlg: Scalars["String"];
}>;

export type UpdateNotificationFlgMutation = {
  __typename?: "Mutation";
  updateNotificationFlg?: {
    __typename?: "UpdateNotificationFlgPayload";
    result?: string | null;
  } | null;
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

export type FetchTasksQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  from?: InputMaybe<Scalars["String"]>;
  to?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
}>;

export type FetchTasksQuery = {
  __typename?: "Query";
  tasks: {
    __typename?: "TaskConnection";
    edges?: Array<{
      __typename?: "TaskEdge";
      node?: {
        __typename?: "Task";
        id: string;
        title: string;
        detail?: string | null;
        limitOn: any;
        status?: { __typename?: "Status"; id: string; name: string } | null;
      } | null;
    } | null> | null;
    pageInfo: {
      __typename?: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | null;
      endCursor?: string | null;
    };
  };
};

export type FetchTeamByIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type FetchTeamByIdQuery = {
  __typename?: "Query";
  team: { __typename?: "Team"; id: string; name: string };
};

export type FetchTeamsQueryVariables = Exact<{ [key: string]: never }>;

export type FetchTeamsQuery = {
  __typename?: "Query";
  teams: Array<{
    __typename?: "Team";
    id: string;
    name: string;
    ownerId: string;
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
        teamId
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
export const CreateTeamDocument = gql`
  mutation CreateTeam($name: String!) {
    createTeam(input: { name: $name }) {
      team {
        id
        name
        ownerId
      }
    }
  }
`;
export type CreateTeamMutationFn = Apollo.MutationFunction<
  CreateTeamMutation,
  CreateTeamMutationVariables
>;

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateTeamMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTeamMutation,
    CreateTeamMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(
    CreateTeamDocument,
    options
  );
}
export type CreateTeamMutationHookResult = ReturnType<
  typeof useCreateTeamMutation
>;
export type CreateTeamMutationResult =
  Apollo.MutationResult<CreateTeamMutation>;
export type CreateTeamMutationOptions = Apollo.BaseMutationOptions<
  CreateTeamMutation,
  CreateTeamMutationVariables
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
export const ExportTaskDocument = gql`
  mutation ExportTask {
    exportTask(input: {}) {
      message
    }
  }
`;
export type ExportTaskMutationFn = Apollo.MutationFunction<
  ExportTaskMutation,
  ExportTaskMutationVariables
>;

/**
 * __useExportTaskMutation__
 *
 * To run a mutation, you first call `useExportTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportTaskMutation, { data, loading, error }] = useExportTaskMutation({
 *   variables: {
 *   },
 * });
 */
export function useExportTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ExportTaskMutation,
    ExportTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ExportTaskMutation, ExportTaskMutationVariables>(
    ExportTaskDocument,
    options
  );
}
export type ExportTaskMutationHookResult = ReturnType<
  typeof useExportTaskMutation
>;
export type ExportTaskMutationResult =
  Apollo.MutationResult<ExportTaskMutation>;
export type ExportTaskMutationOptions = Apollo.BaseMutationOptions<
  ExportTaskMutation,
  ExportTaskMutationVariables
>;
export const ImportTaskDocument = gql`
  mutation ImportTask($file: Upload!) {
    importTask(input: { file: $file }) {
      message
    }
  }
`;
export type ImportTaskMutationFn = Apollo.MutationFunction<
  ImportTaskMutation,
  ImportTaskMutationVariables
>;

/**
 * __useImportTaskMutation__
 *
 * To run a mutation, you first call `useImportTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importTaskMutation, { data, loading, error }] = useImportTaskMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useImportTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ImportTaskMutation,
    ImportTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ImportTaskMutation, ImportTaskMutationVariables>(
    ImportTaskDocument,
    options
  );
}
export type ImportTaskMutationHookResult = ReturnType<
  typeof useImportTaskMutation
>;
export type ImportTaskMutationResult =
  Apollo.MutationResult<ImportTaskMutation>;
export type ImportTaskMutationOptions = Apollo.BaseMutationOptions<
  ImportTaskMutation,
  ImportTaskMutationVariables
>;
export const UpdateNotificationFlgDocument = gql`
  mutation UpdateNotificationFlg($notificationFlg: String!) {
    updateNotificationFlg(input: { notificationFlg: $notificationFlg }) {
      result
    }
  }
`;
export type UpdateNotificationFlgMutationFn = Apollo.MutationFunction<
  UpdateNotificationFlgMutation,
  UpdateNotificationFlgMutationVariables
>;

/**
 * __useUpdateNotificationFlgMutation__
 *
 * To run a mutation, you first call `useUpdateNotificationFlgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNotificationFlgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNotificationFlgMutation, { data, loading, error }] = useUpdateNotificationFlgMutation({
 *   variables: {
 *      notificationFlg: // value for 'notificationFlg'
 *   },
 * });
 */
export function useUpdateNotificationFlgMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateNotificationFlgMutation,
    UpdateNotificationFlgMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateNotificationFlgMutation,
    UpdateNotificationFlgMutationVariables
  >(UpdateNotificationFlgDocument, options);
}
export type UpdateNotificationFlgMutationHookResult = ReturnType<
  typeof useUpdateNotificationFlgMutation
>;
export type UpdateNotificationFlgMutationResult =
  Apollo.MutationResult<UpdateNotificationFlgMutation>;
export type UpdateNotificationFlgMutationOptions = Apollo.BaseMutationOptions<
  UpdateNotificationFlgMutation,
  UpdateNotificationFlgMutationVariables
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
  query FetchTasks(
    $first: Int
    $last: Int
    $before: String
    $after: String
    $from: String
    $to: String
    $title: String
  ) {
    tasks(
      first: $first
      last: $last
      before: $before
      after: $after
      from: $from
      to: $to
      title: $title
    ) {
      edges {
        node {
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
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
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
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *      from: // value for 'from'
 *      to: // value for 'to'
 *      title: // value for 'title'
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
export const FetchTeamByIdDocument = gql`
  query FetchTeamById($id: ID!) {
    team(id: $id) {
      id
      name
    }
  }
`;

/**
 * __useFetchTeamByIdQuery__
 *
 * To run a query within a React component, call `useFetchTeamByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchTeamByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchTeamByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchTeamByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchTeamByIdQuery,
    FetchTeamByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchTeamByIdQuery, FetchTeamByIdQueryVariables>(
    FetchTeamByIdDocument,
    options
  );
}
export function useFetchTeamByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchTeamByIdQuery,
    FetchTeamByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchTeamByIdQuery, FetchTeamByIdQueryVariables>(
    FetchTeamByIdDocument,
    options
  );
}
export type FetchTeamByIdQueryHookResult = ReturnType<
  typeof useFetchTeamByIdQuery
>;
export type FetchTeamByIdLazyQueryHookResult = ReturnType<
  typeof useFetchTeamByIdLazyQuery
>;
export type FetchTeamByIdQueryResult = Apollo.QueryResult<
  FetchTeamByIdQuery,
  FetchTeamByIdQueryVariables
>;
export const FetchTeamsDocument = gql`
  query FetchTeams {
    teams {
      id
      name
      ownerId
    }
  }
`;

/**
 * __useFetchTeamsQuery__
 *
 * To run a query within a React component, call `useFetchTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchTeamsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchTeamsQuery,
    FetchTeamsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchTeamsQuery, FetchTeamsQueryVariables>(
    FetchTeamsDocument,
    options
  );
}
export function useFetchTeamsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchTeamsQuery,
    FetchTeamsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchTeamsQuery, FetchTeamsQueryVariables>(
    FetchTeamsDocument,
    options
  );
}
export type FetchTeamsQueryHookResult = ReturnType<typeof useFetchTeamsQuery>;
export type FetchTeamsLazyQueryHookResult = ReturnType<
  typeof useFetchTeamsLazyQuery
>;
export type FetchTeamsQueryResult = Apollo.QueryResult<
  FetchTeamsQuery,
  FetchTeamsQueryVariables
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
