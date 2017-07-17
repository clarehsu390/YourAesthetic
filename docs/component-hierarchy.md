## Component Hierarchy

**AuthFormContainer**
 - SignupForm
 - LoginForm

**DiscoverContainer**
- **NavBar**
  + Logo
  + Discover
  + UserProfile
  + Notifications
- **PinsContainer**
  + PinDetails
- **NewPin**
  + NewPin
- **NewBoard**
  + NewBoard

**UserContainer**
- **BoardsContainer**
  + BoardIndex
  + BoardDetail
    * PinsContainer
  + EditBoard
  + CreateBoard
- **FollowsContainer**
  + Followers
  + Following
- **SavedPinsContainer**
  + PinsIndex

  ## Routes

  | Path                       | Component           |
  |----------------------------|---------------------|
  | "/signup"                  | "AuthFormContainer" |
  | "/login"                   | "AuthFormContainer" |
  | "/"                        | "DiscoverContainer" |
  | "/:username"               | "UserContainer"     |
  | "/:username/followers"     | "FollowsContainer"  |
  | "/:username/following"     | "FollowsContainer"  |
  | "/:username/pins"          | "SavedPinsContainer"|
  | "/:username/boards"        | "BoardsContainer"   |
