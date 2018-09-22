import req from 'Client/api/req';
import ResponseBuilder from 'Test/utils/builders/ResponseBuilder';

class Then {
  constructor(options) {
    this.options = options;
  }

  reply = (status, data) => {
    jest.spyOn(req, this.options.method).mockImplementation(async url => {
      if(url === this.options.url) {
        return new ResponseBuilder()
          .withStatus(status)
          .withData(data)
          .build();
      } else {
        throw new ResponseBuilder()
          .withStatus(500)
          .withData({ error: `URL (${url}) is not known by http stubber` })
          .build();
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