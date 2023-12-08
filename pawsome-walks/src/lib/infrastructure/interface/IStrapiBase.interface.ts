export interface IStrapiBase<T> {
  readonly data: Array<{ attributes: T }>;
}
