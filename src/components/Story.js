import "../styles/story.scss";
import ProfileIcon from "./ProfileIcon";

function Story () {
  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} />
    </div>
  );
}

export default Story;