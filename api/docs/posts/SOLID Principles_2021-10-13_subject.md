8 min read

# SOLID Principles  

This is a recompilation of ideas extracted from the book "Clean Architecture" by Robert C Martin (2017)

# Design Principles

The SOLID principles tell us how to arrange our functions and data structures into classes, and how those classes should be interconnected

The goal of the principles is the creation of mid-level software structures that:

👉 Tolerate change
👉 Easy to understand
👉 Basis of components that can be used in many software systems


## SOLID Principles


S → Single Responsibility Principle

O → Open-Closed Principle

L → Liskov Principle

I → Interface Segregation Principle

D → Dependency Inversion Principle

---

**The SOLID principles tell us how to arrange or code and modules to make software structures tolerable to change, easy to understand, and reusable.**

---

## SRP - Single Responsibility Principle "Single Reason to Change Principle"

*A module should have one, and only one, reason to change* or *A module should be responsible to one, and only one, actor*

By module, we refer to the source file in most cases.

We have to make an effort to encapsulate primitive types into value objects, to make the classes abstracts and maintainable. This is an introduction to Domain Driven Design "DDD".

### SRP Violation

Creating a general class that contains functions that are specific for three different types of Employees we are violating SRP. We are coupling different actors.

![SRP Violation](https://user-images.githubusercontent.com/49292858/137846188-09bcee0e-c6b6-4a8c-976d-7b23c2195c6b.png)

![SRP Violation](https://user-images.githubusercontent.com/49292858/137846190-ff71fa6b-1134-4234-ab28-35982e369ce9.png)

### SRP Solution

Abstract the common data with the business rules and make a Facade using Facade Pattern

![SRP Solution](https://user-images.githubusercontent.com/49292858/137846248-155e6492-076d-4142-9a01-014764fa3bd7.png)

![SRP Solution](https://user-images.githubusercontent.com/49292858/137846259-c36f2910-29c7-490b-9ede-7b4975dfff6a.png)

## OCP - Open Closed Principle

*A software artifact should be open for extension but closed for modification.*

In other words, the behavior of a software artifact should be extendible, without having to modify that artifact. A way to achieve this is by implementing interfaces to abstract the details from the class implementation. Interfaces are the most abstract form of encapsulation, we must specify the behavior but not the implementation.

*If component A should be protected from changes in component B, then component B should depend on component A.*

![OCP](https://user-images.githubusercontent.com/49292858/137846441-b1a358b4-0df7-47c3-88b0-677e5e46f6c7.png)

In this example, we can see how using a Repository interface we are encapsulating the database implementation from the user class. The user class doesn't know which implementation is being used, so we are opening the class to any type of extension via the interface but we are not allowing any modification to achieve this.

* 👉 red: traditional dependency infection via implementation details.
* 👉 blue: highlighting the dependency inversion via abstract coupling.
* 👉 purple: dependency injection.

## LSP - Liskov Substitution Principle

Definition by Barbara Liskov:

*What is wanted here is something like the following substitution property: If for each object o1 of type S there is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when o1 is substituted for o2 then S is a subtype of T.*

The LSP can, and should, be extended to the level of architecture. A simple violation of substitutability can cause a system’s architecture to be polluted with a significant amount of extra mechanisms.

![LSP](https://user-images.githubusercontent.com/49292858/137846454-7e07f3e9-7a4b-4b50-b4ce-9de580b01ad7.png)

## ISP - Interface Segregation Principle

*The interfaces belong to the client.*

If a class that extends from an interface it's not using all the method that this one provides we are going against ISP, and we are probably making what is known as fat interfaces. An interface should only contain the declaration of the methods that the client needs to implement, no more, if it's needed the interfaces can be segregated to specific functionalities

![ISP](https://user-images.githubusercontent.com/49292858/137846460-b1e765d7-1759-48b7-87ca-7c5e482b7ce3.png)

## DIP - Dependency Inversion Pattern

The Dependency Inversion Principle (DIP) tells us that the most flexible systems are those in which source code dependencies refer only to abstractions, not to concretions.

A concrete module is any module in which the functions being called are implemented. Every change to an abstract interface corresponds to a change to its concrete implementations. Conversely, changes to concrete implementations do not always, or even usually, require changes to the interfaces that they implement. Therefore interfaces are less volatile than implementations.

Stable software architectures are those that avoid depending on volatile concretions, and that favors the use of stable abstract interfaces. This implication boils down to a set of very specific coding practices:

* 👉 Don’t refer to volatile concrete classes. Refer to abstract interfaces instead. Enforces the use of abstract factories
* 👉 Don't derive (depend) from volatile classes
* 👉 Don’t override concrete functions. To manage those dependencies, you should make the function abstract and create multiple implementations.
* 👉 Never mention the name of anything concrete and volatile.
