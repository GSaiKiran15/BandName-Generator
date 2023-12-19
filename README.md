# Band Name Generator Website
This project is a simple website that generates random band names every time the "Generate Name" button is pressed. The application is built using Express.js, the bandname module for generating names, and EJS for templating. Additionally, a footer is linked through the footer.ejs file.

## Installation
1) Clone this repository to your local machine.
2) Run npm install to install the necessary dependencies.

## Usage
1) Run the application using node app.js.
2) Access the website through a browser using http://localhost:3000.
3) Click on the "Generate Name" button to generate random band names.

## Dependencies
* Express.js: A minimalist web framework for Node.js.
* Bandname module: Used to generate random band names.
* EJS: Embedded JavaScript templates for rendering HTML markup.

## File Structure

- /views
  - index.ejs: Main page with the "Generate Name" button.
  - footer.ejs: Footer content linked to the main page.
- app.js: Express application setup and routes.
- package.json: Contains project metadata and dependencies.

## Known Issues
* The UI may not look aesthetically pleasing or polished.
