import TwitterAjax from './twitter_ajax';
import { debug } from 'util';

class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userId = $el.data('user-id');
    this.initialFollowState = $el.data('initial-follow-state');

    this.render();
    this.$el.on('click', this.handleClick.bind(this))
  }

  render () {
    let buttonText;

    if (this.initialFollowState === 'followed') {
      buttonText = 'Unfollow';
    } else if (this.initialFollowState === 'unfollowed') {
      buttonText = 'Follow';
    } else if (this.initialFollowState === 'following') {
      buttonText = 'Following...';
    } else {
      buttonText = 'Unfollowing...';
    }

    this.$el.empty();
    this.$el.html(buttonText);
  }

  handleClick(e) {
    
    e.preventDefault();
    
    this.$el.prop('disabled', true);

    if (this.initialFollowState === 'unfollowed') {
      this.initialFollowState = "following";
      this.render();

      TwitterAjax.sendFollow(this.userId).then(() => {
        this.initialFollowState = "followed";
        this.$el.prop('disabled', false);
        this.render();
      });
      
    } else {
      this.initialFollowState = "unfollowing";
      this.render();
      
      TwitterAjax.deleteFollow(this.userId).then(() => {
        this.initialFollowState = "unfollowed";
        this.$el.prop('disabled', false);
        this.render();
      });
    }

  }


}


export default FollowToggle;