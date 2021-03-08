> **Note:** Since then, my philosophies on testing have changed, and I no longer subscribe to a mock-first approach.

Back in 2017, I was having a hard time figuring out how to test things in Unity, and like a complete madman decided to invent my own testing framework rather than figure out how to integrate NSubstitute or something like that. That's what NBehave is: a Unity-specific testing framework, featuring standard testing facilities like mocks and stubs as well as fake Unity components and processes.

Unity allows you to write two kinds of tests: _unit_ tests and _integration_ tests. Unit tests are meant to test a single class and a single method at a time, whereas integration tests are used to test a collection of classes working together. Unfortunately, Unity's in-built testing tools, while super cool, don't _actually_ let you write unit tests and integration tests.

Their unit tests (based on a framework called NUnit) do not necessarily isolate the one class you are trying to test. If, for example, you have small collection of scripts that interact with one another on an object, it is hard to test exactly one of those scripts without the other scripts becoming involved.

Additionally, the integration tests require creating actual scenes. Although valuable, I would argue these are more like functional tests since they actually simulate the game. Ideally, your integration tests can be written entirely with code so that they can be run quickly and automatically.

**NBehave** allows you to write actual unit tests by isolating the class you want to test and "faking" other scripts. Furthermore, you can write integration tests entirely with code, thereby allowing you to click a single button to run all tests.
