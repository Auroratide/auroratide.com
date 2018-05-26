import req from 'Client/api/req';
import ResponseBuilder from 'Test/utils/builders/ResponseBuilder';

class Then {
  constructor(options) {
    this.options = options;
  }

  reply = (status, data) => {
    req[this.options.method] = jest.fn(async (url) => {
      if(url === this.options.url) {
        return new ResponseBuilder()
          .withStatus(status)
          .withData(data)
          .build();
      } else {
        return null;
      }
    });
  }
}

class When {
  get = (url) => ( {
    then: new Then({ url, method: 'get' })
  } );
}

export default {
  when: new When()
};