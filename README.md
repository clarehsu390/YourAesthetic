# Your Aesthetic

[LiveSite][Your Aesthetic]

[Your Aesthetic]: https://youraesthetic.herokuapp.com/

Your Aesthetic is inspired by Pinterest and built using Ruby on Rails and React/Redux.

This full-stack web application uses the structure:
* Rails backend
* React/Redux frontend
* PostgreSQL Database

## Features
  * User accounts, with secure authentication both on the front-end and back-end. User is bootstrapped on the front-end.
  * Users can create pins and boards, as well as add/remove pins from boards.
  * Modals are used to render forms and detail views.
  * Discover Page features a Masonry layout.
  * Users have a profile and can view other users' profiles.

## Project Design
[dev-readme]: docs/README.md
[wireframes]: docs/wireframes
[schema]: docs/schema

[Development README][dev-readme]
[Wireframes][wireframes]
[Schema]:[schema]

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

Users are able to add pins(images) to boards. On their user profile, they are able to see each board and then click into each board to see its pins. In addition, users can remove pins from their boards. This implemented using a Pinnings table on the backend, creating the relationship between pins and boards.

```html
{this.props.boards.pins.map((pin,i) => {
  return (<li key={i} className="board-pin">
    <img src={pin.image_url}></img>
    <span>{pin.name}</span>
    <button value={pin.id} onClick={this.handleClick}>Delete</button>
  </li>);})
```

![Pinning](https://user-images.githubusercontent.com/26496447/28737775-f3410dda-73a4-11e7-849a-f4e5181aed78.gif)

#### Modals

Users can create boards, upload pins, and view pins using modals. Modals allow a user to stay on the same page. This is done using [React Modal](https://github.com/reactjs/react-modal). Users can open and close modals instantaneously, making navigation more efficient.

![Modals](https://user-images.githubusercontent.com/26496447/28738222-10de07d8-73a7-11e7-9fa2-3e206bf2e3d2.png)

#### User Profile

Users can view other users' profile and follow each other. On the backend, a self-join table is used to create the relationship between users. The associations in the User model allow the application to distinguish between the follower and followee.

```Ruby
has_many :in_follows, class_name: :Follow, foreign_key: :teacher_id
has_many :out_follows, class_name: :Follow, foreign_key: :student_id
has_many :students, through: :in_follows, source: :student
has_many :teachers, through: :out_follows, source: :teacher
```

#### Drag and Drop Upload

Users are able to upload images from their own devices onto the website. This uses [react-dropzone](https://github.com/okonet/react-dropzone). Users can either click on the dropzone or drag their images to upload to the site. The uploaded images are automatically rendered onto the home page.

```html
<Dropzone className="drop-zone"
  multiple={false}
  accept="image/*"
  onDrop={this.onImageDrop.bind(this)}>

    {this.state.image_url === '' ? null :
    <div className='new-pin'>
      <img src={this.state.image_url} />
    </div>}
</Dropzone>
```

## Future features

#### Infinite Scrolling
Using react-masonry, users will be able to continually scroll though the home page to view more content.

#### Search by Tags
Each pin will have tag/tags which will allow the application to retrieve pins which have that particular tag/tags.
