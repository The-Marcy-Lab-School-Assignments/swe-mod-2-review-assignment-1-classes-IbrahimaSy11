# Short Response

## Question 1

For each scenario, identify whether the relationship is **inheritance** or **composition**, and provide a brief explanation.

For example, a `Song` and a `MediaItem` have an inheritance relationship because "a song is a type of media item". Meanwhile a team and player have a composition relationship because "a team has many players".

1. A `Car` class and an `Engine` class, where a car contains an engine
2. A `Dog` class and an `Animal` class, where a dog is a type of animal
3. A `Classroom` class and a `Student` class, where a classroom contains multiple students
4. A `Rectangle` class and a `Shape` class, where a rectangle is a type of shape
5. A `Computer` class and a `CPU` class, where a computer contains a CPU
6. A `Manager` class and an `Employee` class, where a manager is a type of employee

### Response 1

1. **Composition** – A car has an engine. The engine is part of the car, but it is not a type of car.
2. **Inheritance** – A dog is an animal, meaning a dog is a specific type of animal.
3. **Composition** – A classroom has many students. Students can exist on their own, but a classroom is made up of students.
4. **Inheritance** – A rectangle is a type of shape. It shares general shape properties but has its own specific rules.
5. **Composition** – A computer has a CPU inside it. The CPU is a component, not a type of computer.
6. **Inheritance** – A manager is a type of employee. Managers are employees with extra responsibilities.

---

## Question 2

In Problem 1, you are asked to implement a `Song`, `Podcast`, and `Audiobook` classes that all extend the `MediaItem` base class. Each class has their own `play()` method. This demonstrates **polymorphism**.

In your own words, explain what polymorphism means and why it is useful. Use the `MediaItem` example from this assignment to support your explanation.

### Response 2

Polymorphism means that different objects can use the same method name but behave differently depending on what type of object they are. In the MediaItem example, Song, Podcast, and Audiobook all have a `play()` method, but each one returns a different message.

This is useful because it lets us treat all media items the same way in our code. We can store them in one array and call `play()` on each item without checking what type it is. The correct method runs automatically, which makes the code cleaner and easier to manage.

---

## Question 3

In JavaScript classes, properties and methods can be either **instance-level** or **static**.

a) What is the difference between an instance property and a static property?

b) Give an example of when you would want to use a static property or method instead of an instance property or method.

### Response 3

a) An instance property belongs to a specific object created from a class, so each object has its own values. A static property belongs to the class itself and is shared by all objects.

b) You would use a static property or method when the data or behavior should apply to the entire class, not just one object. For example, a static method could be used for helper logic, or a static property could track information shared across all instances.
