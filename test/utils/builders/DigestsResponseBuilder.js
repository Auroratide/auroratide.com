import { is } from 'zaha';
import DigestDataBuilder from './DigestDataBuilder';
import ResponseBuilder from './ResponseBuilder';

export default class DigestsResposeBuilder extends ResponseBuilder {
  constructor() {
    super();
    this.curDigestList = [];
    this.schema.data = is.object({
      digests: is.arrayOf(new DigestDataBuilder())
    });
  }

  withDigest(digest) {
    this.curDigestList.push(digest);
    this.schema.data = is({
      digests: this.curDigestList
    });
    return this;
  }

  withoutDigests() {
    this.curDigestList = [];
    this.schema.data = is({
      digests: this.curDigestList
    });
    return this;
  }
}