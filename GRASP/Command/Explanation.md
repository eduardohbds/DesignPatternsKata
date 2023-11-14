# Command Design Pattern
The **Command pattern** is a behavioral design pattern that encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

1. Encapsulation of Requests:

The Command pattern encapsulates requests as objects, allowing us to treat requests as any other object in our program. This encapsulation provides several benefits:

a. Parameterization of Clients: Clients can be parameterized with different requests, enabling dynamic behavior changes without modifying the client code.

b. Queuing or Logging Requests: Requests can be queued or logged for later execution or analysis.

c. Undoable Operations: Commands can be stored and reversed, enabling undo functionality.

2. Example:

Imagine a remote control with buttons for various actions, such as turning on the TV, adjusting the volume, or changing the channel. Each button encapsulates a request as a command object, allowing us to:

a. Parameterize the remote with different sets of buttons (commands) for different users or purposes.

b. Queue or log button presses to track usage or analyze user behavior.

c. Implement an undo feature to revert the last action (e.g., switching back to the previous channel).


3. In object-oriented terms, the Command pattern typically involves three main types of classes:

a. Command: The Command interface defines the protocol for executing requests. Concrete command classes implement this interface and encapsulate the specific actions to be performed.

b. Invoker: The Invoker is responsible for triggering the execution of commands. It holds a reference to a command object and invokes its execute() method.

c. Receiver: The Receiver is the object that actually performs the requested action. The command object interacts with the receiver to carry out its task.