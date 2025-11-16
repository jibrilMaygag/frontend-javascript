# ALX Frontend JavaScript - TypeScript Project

## Overview
This repository contains solutions for the **0x04-TypeScript** module of the ALX Frontend JavaScript program. The project focuses on TypeScript fundamentals including types, interfaces, classes, generics, namespaces, declaration merging, and ambient types. Each task demonstrates practical use of TypeScript features and compiling with Webpack.

---

## Table of Contents
- [Project Structure](#project-structure)  
- [Setup](#setup)  
- [Tasks](#tasks)  
- [Requirements](#requirements)  
- [Usage](#usage)  

---

## Project Structure
0x04-TypeScript/
├─ task_0/
│ ├─ js/main.ts
│ ├─ package.json
│ ├─ tsconfig.json
│ ├─ .eslintrc.js
│ └─ webpack.config.js
├─ task_1/
│ ├─ js/main.ts
│ ├─ package.json
│ ├─ tsconfig.json
│ └─ webpack.config.js
├─ task_2/
│ ├─ js/main.ts
│ ├─ package.json
│ ├─ tsconfig.json
│ └─ webpack.config.js
├─ task_3/
│ ├─ js/main.ts
│ ├─ js/interface.ts
│ ├─ js/crud.d.ts
│ ├─ js/crud.js
│ ├─ package.json
│ ├─ tsconfig.json
│ └─ webpack.config.js
├─ task_4/
│ ├─ js/main.ts
│ ├─ js/subjects/
│ │ ├─ Cpp.ts
│ │ ├─ Java.ts
│ │ ├─ React.ts
│ │ ├─ Subject.ts
│ │ └─ Teacher.ts
│ ├─ package.json
│ └─ tsconfig.json
├─ task_5/
│ ├─ js/main.ts
│ ├─ package.json
│ ├─ tsconfig.json
│ └─ webpack.config.js
└─ README.md

## Setup

1. **Clone the repository**
git clone <repository_url>
cd 0x04-TypeScript
2. **Install dependencies**

npm install


3. **Build the project**

npm run build


4. **Run the project**

For tasks with Webpack: open dist/index.html in a browser to see results.

TypeScript files are compiled with no errors when running the build.
Tasks
Task 0: Creating a Student Interface

Create a Student interface

Create two students and render them in an HTML table

Uses TypeScript and Vanilla JavaScript

Task 1: Teacher Interface and Classes

Create Teacher interface with optional and dynamic properties

Extend Teacher with Directors interface

Implement printTeacher function

Create StudentClass with methods workOnHomework and displayName

Task 2: Advanced Types

Create TeacherInterface and DirectorInterface

Implement Teacher and Director classes

Create createEmployee, isDirector, and executeWork functions

Implement string literal type Subjects and teachClass function

Task 3: Ambient Namespaces

Create RowElement and RowID types

Use ambient crud.d.ts to type a third-party crud.js library

Insert, update, and delete rows with TypeScript typing

Task 4: Namespaces & Declaration Merging

Implement namespace Subjects with Teacher interface and Subject class

Create Cpp, React, and Java classes extending Subject

Use declaration merging to add optional experience attributes

Methods getRequirements and getAvailableTeacher implemented

Task 5: Brand Convention & Nominal Typing

Implement MajorCredits and MinorCredits interfaces

Functions sumMajorCredits and sumMinorCredits with nominal typing

Requirements

All .ts files must end with a newline

Code must compile without TypeScript errors

Use TypeScript types wherever possible

README.md is mandatory for each task

Allowed editors: VS Code, Vim, Emacs

Project uses Webpack and ESLint configurations provided

Usage

Open dist/index.html to see table outputs (Task 0)

For other tasks, check console logs via Webpack or Node execution

Jest tests can be run using:

npm test


Follow TypeScript interfaces and class implementations for each task
