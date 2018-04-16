---
layout: page
title: Discrete Daily Experimental Projects
portfolio_order: false
date: 2018-04-16
permalink: /ddep/index.html
---


## What is this?

* The idea is that making any small things is better for improvement than making one big thing.
* I have been starting, getting discouraged and abandoning big things for a long time.
* Writing a log will help keep me focused, and I'll have something to show even if the actual deliverable is not great.

## Prior Work(By Others)

[100 Days of Code](http://www.100daysofcode.com/):A template for this kind of endavor that I'm not using.

[Jennifer Dewalt](https://jenniferdewalt.com/index.html): Some one who becae a web developer by doing a thing a day for 180 days.

[Quantity Always Trumps Quality](https://blog.codinghorror.com/quantity-always-trumps-quality/): A blog post advocating Quantity over Quality for learning.


## Design

1. Projects are limited in duration to 1 day. If there is work to be done after that then it becomes a new project.
3. Projects aren't to be edited after the end of the day they are started. Make a new Project with a revised goal.
4. Projects should take between 3-6 hours of effort. 
5. project deliverables live in /ddep/<serial>
6. a description file for the project is at /_ddep/<serial>.md
7. The project's result should run from opening the deliverable folder in a browser. 
2. Projects will be evaluated at the end of the day, and given one of the following statuses: 

**SUCCESS**: The project's goals were met and the deliverable does what was intended.

**FAILURE**: The project's goals were not met because.

**INCOMPLETE**: The project is scheduled to be worked on in the future. (project 0 will have a status of incomplete because it's to be used as a template.)



## Listing

{% for ddep in site.ddep %}

### [{{ ddep.serial }} : {{ ddep.name }}]( {{ site.baseurl }}{{ ddep.url }} ) 
{{ ddep.date }}
{{ ddep.status }}
{{ ddep.goal }}
[Link]( {{ ddep.serial }} )

{% endfor %}
