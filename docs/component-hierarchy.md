## Component Hierarchy

**AuthFormContainer**
 - SignupForm
 - LoginForm
**NavBarContainer** (render on every page, match "/")
   + NavBar
    * Logo
    * Discover
    * UserProfile
    * Notifications

**PinsContainer**
  + PinIndex
    * PinIndexItem
**PinDetailContainer**
  + PinDetail


- **NewPinContainer**
  + NewPin
- **NewBoardContainer**
  + NewBoard

**UserProfileContainer**
- **BoardIndexContainer**
  + BoardIndex
  + BoardIndexItem
    * PinsContainer
    * EditBoard
  + CreateBoard
- **FollowsContainer**
  + FollowerIndex
    * FollowerIndexItem
  + FollowingIndex
    * FollowingIndexItem
- **PinsContainer**

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
