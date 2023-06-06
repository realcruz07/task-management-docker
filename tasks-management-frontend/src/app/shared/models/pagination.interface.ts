export interface PaginationData {
  page: number;
  limit: number;
  filter?: { key: string; value: string };
}
