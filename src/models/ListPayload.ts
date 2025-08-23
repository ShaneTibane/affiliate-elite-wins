export class ListPayload {
  route: any;
  modelName: string;
  query: {};
  operation: string;
  constructor(modelName: string, route: string, query = {}) {
    this.modelName = modelName;
    this.route = route;
    this.query = query;
    this.operation = "readByQuery";
  }
}
