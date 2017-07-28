# Your Aesthetic

[LiveSite][Your Aesthetic]

[Your Aesthetic]: https://youraesthetic.herokuapp.com/

Your Aesthetic is inspired by Pinterest and built using Ruby on Rails and React/Redux.

This full-stack web application uses the structure:
* Rails backend
* React/Redux frontend
* Postgres

## Features

#### Masonry Layout

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


![Masonry](https://user-images.githubusercontent.com/26496447/28737534-d9eb4860-73a3-11e7-9176-bf16c29b26b7.gif)

#### Pinnings

Users are able to add pins(images) to boards. On their user profile, they are able to see each board and then click into each board to see its pins.

```html
{this.props.boards.pins.map((pin,i) => {
  return (<li key={i} className="board-pin">
    <img src={pin.image_url}></img>
    <span>{pin.name}</span>
    <button value={pin.id} onClick={this.handleClick}>Delete</button>
  </li>);})
```

![Pinning](https://user-images.githubusercontent.com/26496447/28737775-f3410dda-73a4-11e7-849a-f4e5181aed78.gif)
