const TwitterAjax = {
  sendFollow: function (id) {
    return $.ajax ({
      method: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'JSON'
    });
  },

  deleteFollow: function (id) {
    return $.ajax({
      method: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'JSON'
    });
  }

}

export default TwitterAjax;