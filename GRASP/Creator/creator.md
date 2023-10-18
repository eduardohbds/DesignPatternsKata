## Creator - GRASP
The **Creator** pattern is one of the nine GRASP patterns. It states that the responsibility for creating an object should be assigned to the object that uses it the most.

This is because the object that uses the most will have the most knowledge about what the new object needs to be able to do. For example, if you have a class called Car, it would make sense for the Car class to be responsible for creating new Engine objects.

The **Creator** pattern has a number of benefits, including:

* Improved encapsulation: The **Creator** pattern helps to encapsulate the creation of objects. This means that the details of how the objects are created are hidden from other objects.
* Reduced coupling: The **Creator** pattern helps to reduce the coupling between objects. This is because the object that uses the most does not need to know how to create the object. It only needs to know how to use the object.
* Increased flexibility: The **Creator** pattern makes it easier to change the way that objects are created. This is because the creation of objects is centralized in the **Creator** class.