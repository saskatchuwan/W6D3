import FollowToggle from './follow_toggle';

$( () => {
  const $followToggle = $(".follow-toggle");

  $followToggle.each((i, el) => {
    new FollowToggle($followToggle.eq(i));
  }) 

});