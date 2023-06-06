export abstract class IRemoveTasksService {
  public abstract remove(ids: number[]): Promise<number[]>;
}
