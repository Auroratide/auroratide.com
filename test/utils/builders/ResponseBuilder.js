import zaha, { is } from 'zaha';

const Base = zaha({
  status: is.int(),
  data: is.object({})
});

export default class ResponseBuilder extends Base {
  withOk() {
    this.schema.status = is(200);
    return this;
  }
}