# Your Aesthetic

[LiveSite][Your Aesthetic]

[Your Aesthetic]: https://youraesthetic.herokuapp.com/

Your Aesthetic is inspired by Pinterest and built using Ruby on Rails and React/Redux.

This full-stack web application uses the structure:
* Rails backend
* React/Redux frontend
* Postgres

##Features

####Masonry Layout

On the Discover Page, pins are organized in a Masonry-like fashion. The pins are given a minimum width. The columns are fitted according to the maximum amount of columns that can fit in the window. As a result, the window is resized, the page is responsive.

```css
.list-of-pins {
  -moz-column-width: 14em;
  -webkit-column-width: 14em;
  -moz-column-gap: 1em;
  -webkit-column-gap: 1em;
  align-items: center;
  margin: auto;
  max-width: 1200px;

}
```


![Masonry](https://i.gyazo.com/d78fc6b339426a1d39f481f65761858b.gif)
