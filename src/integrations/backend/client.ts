type AsyncResult<T = unknown> = Promise<{ data: T; error: null }>;

class QueryBuilder {
  select(): this {
    return this;
  }

  eq(): this {
    return this;
  }

  order(): this {
    return this;
  }

  single(): AsyncResult<Record<string, never> | null> {
    return Promise.resolve({ data: null, error: null });
  }

  insert(): this {
    return this;
  }

  update(): this {
    return this;
  }

  delete(): this {
    return this;
  }

  then<TResult1 = { data: unknown[]; error: null }, TResult2 = never>(
    onfulfilled?: ((value: { data: unknown[]; error: null }) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null,
  ): Promise<TResult1 | TResult2> {
    return Promise.resolve({ data: [], error: null }).then(onfulfilled, onrejected);
  }
}

export const backend = {
  auth: {
    signOut: () => Promise.resolve({ error: null }),
    signInWithPassword: () => Promise.resolve({ error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    onAuthStateChange: () =>
      ({
        data: {
          subscription: {
            unsubscribe: () => {
              // no-op placeholder for local/offline mode
            },
          },
        },
      }) as const,
  },
  functions: {
    invoke: () => Promise.resolve({ data: null, error: null }),
  },
  storage: {
    from: () => ({
      upload: () => Promise.resolve({ data: null, error: null }),
      getPublicUrl: () => ({ data: { publicUrl: "" } }),
      remove: () => Promise.resolve({ data: null, error: null }),
    }),
  },
  from: () => new QueryBuilder(),
  channel: () =>
    ({
      on: () => ({
        subscribe: () => ({}),
      }),
    }) as const,
  removeChannel: () => {
    // no-op placeholder for local/offline mode
  },
};
