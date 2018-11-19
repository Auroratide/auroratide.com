import req from 'Client/api/req';
import ResponseBuilder from 'Test/utils/builders/ResponseBuilder';

const memory = new (class {
  constructor() {
    this.stubs = {};
  }

  add(url, response) {
    this.stubs[url] = response;
  }

  get(url) {
    const response = this.stubs[url];
    if(!response) {
      throw new ResponseBuilder()
        .withStatus(500)
        .withData({ error: `URL (${url}) is not known by http stubber` })
        .build();
    }

    return response;
  }

  reset() {
    this.stubs = {};
  }
});

class Then {
  constructor(options) {
    this.options = options;
  }

  reply = (status, data) => {
    memory.add(this.options.url, new ResponseBuilder()
      .withStatus(status)
      .withData(data)
      .build());

    jest.spyOn(req, this.options.method).mockImplementation(async url => memory.get(url));
  }
}

class When {
  get = (url) => ( {
    then: new Then({ url, method: 'get' })
  } );
}

export default {
  when: new When(),
  reset: () => {
    memory.reset();
    jest.restoreAllMocks();
  }
};