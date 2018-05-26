import zaha, { is } from 'zaha';
import ResponseBuilder from './ResponseBuilder';

export const DigestDataBuilder = zaha({
  id: is.string(),
  title: is.string(),
  by: is.string(),
  category: is.string(),
  summary: is.string(),
  icon: is.string(),
  color: is.string(),
  link: is.string(),
  created_at: is.string()
});

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