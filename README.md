# Portfolio Website

My personal portfolio: a single page static site built with plain HTML, CSS and JavaScript. There is no framework and no build step.

**Live site:** https://aakash192.github.io/portfolio/

## What is on the page

| Section | Content |
|---------|---------|
| Hero | Name, headline, links to LinkedIn, GitHub and email, resume download and section links |
| About | Short professional summary |
| Skills | Grouped by area: cloud platforms, infrastructure as code, containerization, data visualization, programming |
| Experience | Current and recent roles |
| Projects | Cards with a description and a link to the code, generated from data in `script.js` |
| Volunteering | IT support and volunteer roles |
| Education | Timeline of my three qualifications |

## How it works

- `index.html` holds the page structure. The project grid is an empty container.
- `script.js` keeps the projects as an array of objects. On page load it builds one card per project with `createProjectCard` and fills the grid. It also enables smooth scrolling for in page links and sets the footer year.
- `styles.css` handles layout with CSS grid (`auto-fit` columns for skills and projects). At 768px wide and below, the grids collapse to a single column for phones.

To add or change a project, edit the array at the top of `script.js`. No other file needs to change.

## Run it locally

No install is needed. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

The site is hosted with GitHub Pages.

## Project structure

```
index.html    Page structure and content
styles.css    Layout, colours and the mobile breakpoint
script.js     Project data, card rendering, smooth scroll
images/       Project cover images and favicon
Aakash_Suryavanshi_Resume.pdf   Resume linked from the header
```

To update the resume, replace `Aakash_Suryavanshi_Resume.pdf` with a new file of the same name.
