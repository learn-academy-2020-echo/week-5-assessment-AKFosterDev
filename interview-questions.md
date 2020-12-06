# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

Your answer: MVC stands for Model, View, Controller. The model refers to the database layer. The view refers to what the user sees. And the controller is like the switchboard that refers to the routes necessary for the CRUD of an application.

Researched answer: MVC is short for Model, View, and Controller. MVC is a popular way of organizing your code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.

2. What does it mean if an application has CRUD? What does CRUD stand for?

Your answer: In order to have a fully functioning application it must be able to accomplish four types of task. Create, Read, Update and Delete. The user must be able to create a new record, read existing records, update/edit existing records and delete an existing record. I like to think of an address book to explain this answer. As a user I can create a new contact, I can read a contact's information, I can update a contact's information, and I can also delete a contact if I would like to.

Researched answer: CRUD is an acronym for Create, Read, Update and Destroy (Delete). CRUD is also relevant at the user interface level of most applications. For example, in address book software, the basic storage unit is an individual contact entry. As a bare minimum, the software must allow the user to create or add new entries; read, retrieve, search, or view existing entries; update or edit existing entries; delete, deactivate, or remove existing entries. Without at least these four operations, the software cannot be considered complete.

3. What is a relational database? Are there other kinds of databases?

Your answer: The relational database has predefined relationships between data that is stored as key:value pairs. These are stored into tables much like a spreadsheet. The column holds the "Key" and the row holds each unique value that is represented by a unique ID. There are also non-relational databases.

Researched answer: A relational database is a type of database that stores and provides access to data points that are related to one another. Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables. In a relational database, each row in the table is a record with a unique ID called the key. The columns of the table hold attributes of the data, and each record usually has a value for each attribute, making it easy to establish the relationships among data points.
A non-relational database is a database that does not use the tabular schema of rows and columns found in most traditional database systems. Instead, non-relational databases use a storage model that is optimized for the specific requirements of the type of data being stored.

4. What are the 5 HTTP verbs? What are they important?

Your answer: GET (displays) / POST (creates) / PUT (updates all) / PATCH (updates partial) / DESTROY (deletes) - These are important because they communicate which CRUD action we want to accomplish.

Researched answer:
GET requests are the most common and widely used methods in APIs and websites. Simply put, the GET method is used to retreive data from a server at the specified resource.

POST requests are used to send data to the API server to create or udpate a resource. The data sent to the server is stored in the request body of the HTTP request.

Similar to POST, PUT requests are used to send data to the API to update or create a resource. The difference is that PUT requests are idempotent. That is, calling the same PUT request multiple times will always produce the same result. In contrast, calling a POST request repeatedly make have side effects of creating the same resource multiple times.

A PATCH request is one of the lesser-known HTTP methods, but I'm including it this high in the list since it is similar to POST and PUT. The difference with PATCH is that you only apply partial modifications to the resource.

The DELETE method is exactly as it sounds: delete the resource at the specified URL.

5. What is object-relational mapping?

Your answer: Referred to by the acronym: ORM. This creates a virtual object database that can be used within a programming language

Researched answer: Object-relational mapping in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.

6. What is a gem?

Your answer: A gem in Ruby is a software package like a node module. Each gem is a little program that completes a specific task within the application it is being used.

Researched answer: The RubyGems software allows you to easily download, install, and use ruby software packages on your system. The software package is called a “gem” which contains a packaged Ruby application or library.

Gems can be used to extend or modify functionality in Ruby applications. Commonly they’re used to distribute reusable functionality that is shared with other Rubyists for use in their applications and libraries. Some gems provide command line utilities to help automate tasks and speed up your work.

7. What are primary keys? Why are they important?

Your answer: Primary keys (PK) are unique identifiers for each record or instance within a relational database. These are usually the id but can be the two letter country codes because they are each unique. Primary keys are important because they only ever reference one piece of data. For example, you have a user named John Smith. Then you get several more users who are also John Smith. Each John Smith will have their specific PK which only ever belongs to one instance of John Smith. If John Smith with the PK of "1" were to be removed from the database his PK of "1" would be destroyed forever and no other value would be assigned to the PK of "1" in the future.

Researched answer: The PRIMARY KEY constraint uniquely identifies each record in a table. Primary keys must contain UNIQUE values, and cannot contain NULL values. A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns (fields).

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- RESTful routes
  The client/server relationship is a prerequisite of a set of principles known as REST(representational state transfer) which provides a way of mapping HTTP verbs ( get, post, put, delete) and CRUD actions (create, read, update, delete) together.
  URL HTTP Verb Action
  /photos/ GET index
  /photos/new GET new
  /photos POST create
  /photos/:id GET show
  /photos/:id/edit GET edit
  /photos/:id PATCH/PUT update
  /photos/:id DELETE destroy

- JSON
  JSON is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types. It is a very common data format, with a diverse range of applications, such as serving as a replacement for XML in AJAX systems.

- Endpoints
  An API endpoint is the point of entry in a communication channel when two systems are interacting. It refers to touch points of the communication between an API and a server. The endpoint can be viewed as the means from which the API can access the resources they need from a server to perform their task. An API endpoint is basically a fancy word for a URL of a server or service.

- Strong params
  Strong Parameters is a feature of Rails that prevents assigning request parameters to objects unless they have been explicitly permitted. It has its own DSL (Domain Specific Language, or in other words, a predefined syntax it understands), that allows you to indicate what parameters should be allowed.

- Validations
  Validations are used to ensure that only valid data is saved into your database. For example, it may be important to your application to ensure that every user provides a valid email address and mailing address. Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails makes them easy to use, provides built-in helpers for common needs, and allows you to create your own validation methods as well.
