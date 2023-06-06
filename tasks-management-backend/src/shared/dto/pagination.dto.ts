export class PaginationDto {
  public page: number;
  public limit: number;
  public filter?: { key: string; value: string };
}
