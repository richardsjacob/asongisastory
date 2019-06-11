import React from 'react';
import SingleWord from './SingleWord.js';

function StoryDisplay(props) {
  const storyEntries = props.fullStory.map((word, i) => (
    <SingleWord key={i} word={word} />
  ));
  return <div className="story-display">{storyEntries}</div>;
}

export default StoryDisplay;
