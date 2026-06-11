# VidaPlena Nexus

VidaPlena Nexus is a visual database project developed for the NGO **Vida Plena** as part of an academic assignment in the course **Banco de Dados Visual e Ferramentas Integradas**.

## Project Overview

The project was designed to organize data related to:

- events
- beneficiaries
- registrations
- participation history

The solution was built using **Airtable** as the main visual database platform, combined with interfaces, forms, automations, and a public presentation page hosted on **GitHub Pages**.

## Problem

Vida Plena promotes social initiatives such as:

- digital inclusion events
- professional training activities
- health campaigns

Before this project, the organization managed data through manual spreadsheets and WhatsApp groups, which caused:

- disorganization
- duplicated records
- difficulty tracking participation history
- risk of data loss

## Proposed Solution

The proposed solution was to create a visual and accessible system capable of:

- registering beneficiaries
- creating and managing events
- linking beneficiaries to multiple events
- displaying participation history
- providing a dashboard with quick action buttons
- automating part of the workflow

## Database Structure

The project was modeled using three main tables:

### 1. Beneficiaries
Stores:
- full name
- age
- contact
- email
- region

### 2. Events
Stores:
- event name
- category
- date
- time
- location
- region
- capacity
- status

### 3. Registrations
Acts as the relational bridge between beneficiaries and events.
Stores:
- registration ID
- beneficiary
- event
- registration date
- registration status
- registration channel

## Features Implemented

- relational visual database in Airtable
- automatic registration ID generation
- filtered and grouped views
- calendar view for events
- kanban view for registration status
- Airtable interface with multiple pages
- administrative dashboard with quick access buttons
- beneficiary registration form
- event creation form
- event registration form
- functional automation inside Airtable
- public project page on GitHub Pages

## Interface Pages

The Airtable interface includes:

- Administrative Dashboard
- Events
- Beneficiaries
- Registrations
- Calendar

## Forms

The system includes three functional forms:

- Beneficiary registration form
- Event creation form
- Event registration form

## Automation

A functional automation was created and tested successfully in Airtable to automatically update the registration status according to the defined workflow.

## Access and Security

Full access to the administrative environment is intended for authorized users only.  
Since Airtable Free does not support custom native authentication with application-defined username and password, access control is handled through the platform’s own permissions and authorized viewer access. Public forms are used only for structured data entry and do not expose the full administrative base.

## Technologies Used

- Airtable
- Airtable Interfaces
- Airtable Forms
- Airtable Automations
- GitHub
- GitHub Pages
- HTML
- CSS
- JavaScript

## Project Links

### Public Project Page
https://therealteacherpaul.github.io/vidaplena-nexus/

### GitHub Repository
https://github.com/therealteacherpaul/vidaplena-nexus

### Airtable Project
https://airtable.com/appJj6TiOdEunK6Fl/pagXu60vYoFnNGccS

### PDF Report
https://therealteacherpaul.github.io/vidaplena-nexus/assets/VidaPlena_Nexus.pdf

### Presentation Video
https://youtu.be/IhVEVqzO5io

## Academic Information

- **Student:** Paulo Ricardo Takara Stefens
- **RA:** 232231
- **Course:** Graduação Tecnológica em Inteligência Artificial e Automação Digital
- **Discipline:** Banco de Dados Visual e Ferramentas Integradas

## Author

**Paulo Ricardo Takara Stefens**